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
    phone_number: string;
    avatar: string | null;
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

export interface User {
    id: number | string;
    username: string;
    email: string;
    prefix_name?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    [key: string]: any;
}

export interface ApiResponse<T = any> {
    success?: boolean;
    message?:
    | string
    | {
        token?: string;
        userData?: User;
        [key: string]: any;
    };
    data?: T;
    accessToken?: string;
    refreshToken?: string;
    access_token?: string;
    refresh_token?: string;
    token?: string;
    user?: User;
    [key: string]: any;
}
