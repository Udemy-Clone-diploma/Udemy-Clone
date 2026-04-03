// import { request } from "@/shared/api/base";
// import {
//     LoginPayload,
//     LoginResponse,
//     RegisterPayload,
//     RegisterResponse,
// } from "../model/types";

// export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
//     return request<RegisterResponse>("/auth/register/", {
//         method: "POST",
//         body: JSON.stringify(payload),
//     });
// }

// export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
//     return request<LoginResponse>("/auth/login/", {
//         method: "POST",
//         body: JSON.stringify(payload),
//     });
// }

import {
    LoginPayload,
    LoginResponse,
    RegisterPayload,
    RegisterResponse,
} from "../model/types";

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
    console.log("REGISTER:", payload);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        id: 1,
        username: payload.username,
        email: payload.email,
    };
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
    console.log("LOGIN:", payload);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        access: "fake_access_token",
        refresh: "fake_refresh_token",
    };
}