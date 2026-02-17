const BASE_URL = "https://ssk.ubonmicrotech.com/api/v1";

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers || {});
    if (!headers.has("Content-Type")) {
        headers.append("Content-Type", "application/json");
    }

    const config: RequestInit = {
        ...options,
        headers,
        redirect: "follow",
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong with the API");
    }

    return data;
};