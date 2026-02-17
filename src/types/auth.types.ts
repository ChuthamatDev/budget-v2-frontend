export interface LoginPayload {
    usernameOrEmail: string;
    password: string;
    rememberMe?: boolean;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    prefix_name: string;
    first_name: string;
    last_name: string;
}

export interface AdminLoginPayload {
    username: string;
    password: string;
}

export interface SelectPositionPayload {
    position_change_id: number;
}

export interface RefreshTokenPayload {
    refresh_token: string;
}

export interface ApiResponse<T = any> {
    success?: boolean;
    message?: string;
    data?: T;
    accessToken?: string;
    refreshToken?: string;
}