export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface RegisterResponse {
    id: number;
    username: string;
    email: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    access: string;
    refresh: string;
}

export type FormErrors = Partial<Record<keyof RegisterFormData, string>> & {
    email?: string;
    password?: string;
    username?: string;
    confirmPassword?: string;
};