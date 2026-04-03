"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            router.replace("/register");
        }
    }, [router]);

    return (
        <main className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
        </main>
    );
}