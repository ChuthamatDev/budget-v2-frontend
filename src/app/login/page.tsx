'use client';

import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { EyeIcon } from '@/src/components/ui/EyeIcon';

export default function LoginPage() {
    const router = useRouter();

    const { login, isLoading, error, clearError } = useAuthStore();

    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
        rememberMe: false
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearError();
        try {
            await login({
                usernameOrEmail: formData.usernameOrEmail,
                password: formData.password,
                rememberMe: formData.rememberMe
            });

            router.push('/user');
            router.refresh();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className='flex min-h-screen items-center justify-center bg-[#F8FAFC] px-2 py-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100'>
            <div className='w-full max-w-[450px] rounded-[20px] bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50'>
                <div className='mb-10 flex flex-col items-center justify-center text-center'>
                    <Image
                        src='/ssk-logo.png'
                        alt='SSK Logo'
                        width={64}
                        height={64}
                        className='mb-4 object-contain drop-shadow-sm'
                        priority
                    />
                    <h1 className='text-2xl font-medium text-slate-800 tracking-wide'>
                        โรงเรียนสตรีสิริเกศ
                    </h1>
                    <p className='mt-1 text-xs font-light uppercase tracking-[0.2em] text-slate-400'>
                        Budget Management
                    </p>
                </div>

                {error && (
                    <div className='mb-6 rounded-lg bg-red-50 border border-red-100 p-3 text-center text-sm text-red-600 transition-all'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <label className='mb-2 block text-sm font-light text-slate-600'>
                            Email Address
                        </label>
                        <Input
                            type='text'
                            name='usernameOrEmail'
                            value={formData.usernameOrEmail}
                            onChange={handleChange}
                            placeholder='Enter your username or email'
                            required
                        />
                    </div>

                    <div>
                        <div className='flex items-center justify-between mb-2'>
                            <label className='block text-sm font-light text-slate-600'>
                                Password
                            </label>
                        </div>

                        <div className='relative'>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='••••••••'
                                required
                                className='pr-10'
                            />

                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer'
                            >
                                <EyeIcon show={!showPassword} />
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='remember'
                                name='rememberMe'
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className='h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-800'
                            />
                            <label
                                htmlFor='remember'
                                className='ml-3 block text-sm font-light text-slate-500'
                            >
                                Remember me
                            </label>
                        </div>

                        <Link
                            href='#'
                            className='text-sm font-medium text-slate-500 hover:text-slate-800 hover:underline'
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type='submit'
                        disabled={isLoading}
                        className='mt-6 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium tracking-wide text-white shadow-md shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-not-allowed'
                    >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </Button>
                </form>
                <div className='relative mt-8'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-slate-100'></div>
                    </div>
                    <div className='relative flex justify-center text-xs uppercase tracking-widest'>
                        <span className='bg-white px-4 text-slate-400'>or</span>
                    </div>
                </div>

                <div className='mt-6'>
                    <button className='flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900'>
                        <svg className='h-5 w-5' viewBox='0 0 24 24'>
                            <path
                                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                                fill='#4285F4'
                            />
                            <path
                                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                                fill='#34A853'
                            />
                            <path
                                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                                fill='#FBBC05'
                            />
                            <path
                                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                                fill='#EA4335'
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                <div className='mt-8 text-center text-sm font-light text-slate-500'>
                    {`Don't have an account?`}{' '}
                    <Link href='/register' className='font-medium text-slate-800 hover:underline'>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
