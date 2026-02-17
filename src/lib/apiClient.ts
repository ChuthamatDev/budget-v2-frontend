const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://ssk.ubonmicrotech.com/api/v1";

const getAccessToken = () => {
    try {
        if (typeof window !== "undefined") {
            return localStorage.getItem("accessToken");
        }
    } catch (error) {
        console.error("Error accessing localStorage:", error);
    }
    return null;
};

interface FetchOptions extends Omit<RequestInit, "body"> {
    body?: unknown;
    requireAuth?: boolean;
}

export async function apiClient<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const { body, requireAuth = false, headers: customHeaders, ...customOptions } = options;

    const headers = new Headers(customHeaders as HeadersInit);
    if (!headers.has("Content-Type") && !(body instanceof FormData)) {
        headers.append("Content-Type", "application/json");
    }

    if (requireAuth) {
        const token = getAccessToken();
        if (token) {
            headers.append("Authorization", `Bearer ${token}`);
        }
    }

    const config: RequestInit = {
        ...customOptions,
        headers,
        redirect: "follow",
    };

    if (body) {
        config.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.message || `API Error: ${response.status}`);
        }

        return data as T;
    } catch (error: any) {
        console.error(`[apiClient Error] ${endpoint}:`, error);

        if (typeof window !== "undefined") {
            alert(error.message || "An unexpected error occurred. Please try again.");
        }

        throw error;
    }
}