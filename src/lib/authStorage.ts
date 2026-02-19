const AUTH_STORAGE_KEY = "auth-storage";

interface PersistedAuthState {
    state?: {
        accessToken?: string | null;
    };
}

export function getAccessTokenFromStorage(): string | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const persisted = localStorage.getItem(AUTH_STORAGE_KEY);
        if (!persisted) {
            return null;
        }

        const parsed = JSON.parse(persisted) as PersistedAuthState;
        return parsed?.state?.accessToken ?? null;
    } catch (error) {
        console.error("Error parsing auth storage:", error);
        return null;
    }
}

