"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/src/store/useAuthStore";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { accessToken, hasHydrated } = useAuthStore();

    const isProtectedRoute = pathname.startsWith("/user");
    const isAuthRoute = pathname === "/login" || pathname === "/register";

    useEffect(() => {
        if (!hasHydrated) {
            return;
        }

        if (!accessToken) {
            if (isProtectedRoute) {
                router.replace("/login");
            }
        } else {
            if (isAuthRoute) {
                router.replace("/user/dashboard");
            }
        }
    }, [accessToken, hasHydrated, isAuthRoute, isProtectedRoute, router]);

    if (!hasHydrated && (isProtectedRoute || isAuthRoute)) {
        return null;
    }

    if (!accessToken && isProtectedRoute) {
        return null;
    }

    if (accessToken && isAuthRoute) {
        return null;
    }

    return <>{children}</>;
}
