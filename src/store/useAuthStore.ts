import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '@/src/services/auth.service';
import { LoginPayload, RegisterPayload, User } from '@/src/types/auth.types';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    hasHydrated: boolean;
    isLoading: boolean;
    error: string | null;
    setHasHydrated: (value: boolean) => void;
    login: (payload: LoginPayload) => Promise<void>;
    register: (payload: RegisterPayload) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            hasHydrated: false,
            isLoading: false,
            error: null,
            setHasHydrated: (value) => set({ hasHydrated: value }),

            login: async (payload) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.login(payload);

                    // Extract token - prioritizing the known correct path
                    const messageObj =
                        typeof response.message === 'object' ? response.message : null;
                    const token =
                        messageObj?.token ||
                        response.accessToken ||
                        response.data?.accessToken ||
                        response.access_token ||
                        response.token;

                    if (!token) {
                        const errorMsg = 'No access token found in response';
                        console.error(errorMsg, response);
                        set({
                            error: errorMsg,
                            isLoading: false
                        });
                        return;
                    }

                    // Extract user data - prioritizing the known correct path
                    const userData = messageObj?.userData || response.data || response.user;

                    set({
                        user: userData,
                        accessToken: token,
                        isLoading: false
                    });
                } catch (error: unknown) {
                    const errorMessage = error instanceof Error ? error.message : 'Login failed';
                    set({ error: errorMessage, isLoading: false });
                    throw error;
                }
            },

            register: async (payload) => {
                set({ isLoading: true, error: null });
                try {
                    await authService.register(payload);
                    set({ isLoading: false });
                } catch (error: unknown) {
                    const errorMessage = error instanceof Error ? error.message : 'Register failed';
                    set({ error: errorMessage, isLoading: false });
                    throw error;
                }
            },

            logout: () => {
                set({ user: null, accessToken: null, error: null });
            },

            clearError: () => set({ error: null })
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            }
        }
    )
);
