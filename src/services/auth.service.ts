
import { apiClient } from "@/src/lib/apiClient";
import {
    LoginPayload,
    RegisterPayload,
    AdminLoginPayload,
    SelectPositionPayload,
    RefreshTokenPayload,
    ApiResponse
} from "@/src/types/auth.types";

export const authService = {
    login: (payload: LoginPayload) => {
        return apiClient<ApiResponse>("/auth/login", {
            method: "POST",
            body: payload,
        });
    },

    register: (payload: RegisterPayload) => {
        return apiClient<ApiResponse>("/auth/register", {
            method: "POST",
            body: payload,
        });
    },

    adminLogin: (payload: AdminLoginPayload) => {
        return apiClient<ApiResponse>("/auth/admin/login", {
            method: "POST",
            body: payload,
        });
    },

    getMyAccount: () => {
        return apiClient<ApiResponse>("/auth/my-account", {
            method: "GET",
            requireAuth: true,
        });
    },

    selectPosition: (userId: string | number, payload: SelectPositionPayload) => {
        return apiClient<ApiResponse>(`/auth/select-position/${userId}`, {
            method: "PUT",
            body: payload,
            requireAuth: true,
        });
    },

    refreshToken: (payload: RefreshTokenPayload) => {
        return apiClient<ApiResponse>("/auth/refresh-token", {
            method: "POST",
            body: payload,
        });
    }
};