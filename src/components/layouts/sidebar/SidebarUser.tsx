'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/store/useAuthStore';
import Link from 'next/link';

export default function SidebarUser() {
    const router = useRouter();

    const { user, fetchProfile, logout } = useAuthStore();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    const userInitial = user?.username ? user.username.charAt(0).toUpperCase() : 'U';

    const displayUsername = user?.username || 'Loading...';

    const displayFullName = user ? `${user.first_name} ${user.last_name}` : '';

    const hasAvatar = user?.avatar;

    return (
        <div className='relative shrink-0 border-t border-slate-100 p-4 bg-white'>
            {showProfileMenu && (
                <div className='absolute bottom-[80px] left-4 right-4 rounded-xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/50 transition-all z-50'>
                    <button
                        onClick={handleLogout}
                        className='flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50'
                    >
                        <svg
                            className='h-4 w-4'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                            />
                        </svg>
                        Sign out
                    </button>
                </div>
            )}

            <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors ${showProfileMenu ? 'bg-slate-50 ring-1 ring-slate-200' : 'hover:bg-slate-50'}`}
            >
                {hasAvatar ? (
                    `<img
                        src={user.avatar}
                        alt="Profile"
                        className="h-9 w-9 rounded-full object-cover shadow-sm ring-1 ring-slate-200"
                    />`
                ) : (
                    <div className='h-9 w-9 rounded-full bg-slate-900 shadow-sm flex items-center justify-center text-white text-xs font-medium'>
                        {userInitial}
                    </div>
                )}

                <div className='flex flex-1 flex-col overflow-hidden'>
                    <span className='truncate text-sm font-medium text-slate-700'>
                        {displayUsername}
                    </span>
                    {displayFullName && (
                        <span className='truncate text-[10px] text-slate-400 font-light tracking-wide'>
                            {displayFullName}
                        </span>
                    )}
                </div>

                <svg
                    className={`w-5 h-5 transition-transform text-slate-400 ${showProfileMenu ? 'rotate-90 text-slate-600' : ''}`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                    />
                </svg>
            </button>

            {showProfileMenu && (
                <div className='absolute bottom-[80px] left-4 right-4 rounded-xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/50 transition-all z-50'>
                    <Link
                        href='/user/profile'
                        onClick={() => setShowProfileMenu(false)}
                        className='flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50'
                    >
                        <svg
                            className='h-4 w-4 text-slate-400'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                        </svg>
                        Profile Settings
                    </Link>

                    <div className='my-1 border-t border-slate-100'></div>

                    <button
                        onClick={handleLogout}
                        className='flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50'
                    >
                        <svg
                            className='h-4 w-4'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                            />
                        </svg>
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}
