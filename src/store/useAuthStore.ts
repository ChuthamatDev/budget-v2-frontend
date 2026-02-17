import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '@/src/services/auth.service';
import { LoginPayload, RegisterPayload } from '@/src/types/auth.types';

interface AuthState {
    user: any | null;
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;

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
            isLoading: false,
            error: null,

            login: async (payload) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.login(payload);
                    set({
                        user: response.data,
                        accessToken: response.accessToken,
                        isLoading: false
                    });
                } catch (error: any) {
                    set({ error: error.message, isLoading: false });
                    throw error;
                }
            },

            register: async (payload) => {
                set({ isLoading: true, error: null });
                try {
                    await authService.register(payload);
                    set({ isLoading: false });
                } catch (error: any) {
                    set({ error: error.message, isLoading: false });
                    throw error;
                }
            },

            logout: () => {
                set({ user: null, accessToken: null, error: null });
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken
            }),
        }
    )
);