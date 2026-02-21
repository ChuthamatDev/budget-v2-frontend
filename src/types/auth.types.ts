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

export interface Permission {
    permission_id: number;
    name: string;
    level: string;
    type: string;
    description: string;
}

export interface Role {
    role_id: number;
    name: string;
    description: string;
    permissions: Permission[];
}

export interface Group {
    group_id: number;
    name: string;
    description: string | null;
}

export interface Position {
    position_id: number;
    role: Role;
    group: Group | null;
    subgroup: unknown | null;
}

export interface User {
    user_id?: number;
    id?: number | string;
    username: string;
    email: string;
    prefix_name?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    avatar?: string | null;
    status_account?: boolean;
    verified?: boolean;
    last_assess?: string;
    positions?: Position[];
    [key: string]: unknown;
}

export interface ProfileFormData {
    username: string;
    email: string;
    prefix_name: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}

export interface ApiResponse<T = unknown> {
    success?: boolean;
    message?:
        | string
        | {
              token?: string;
              userData?: User;
              [key: string]: unknown;
          };
    data?: T;
    accessToken?: string;
    refreshToken?: string;
    access_token?: string;
    refresh_token?: string;
    token?: string;
    user?: User;
    [key: string]: unknown;
}
