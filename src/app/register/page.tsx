'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { EyeIcon } from '@/src/components/ui/EyeIcon';

export default function RegisterPage() {
    const router = useRouter();

    const { register, isLoading, error, clearError } = useAuthStore();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        prefix_name: 'นาย',
        first_name: '',
        last_name: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [localError, setLocalError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) {
            clearError();
        }
        if (localError) {
            setLocalError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLocalError('');

        if (formData.password !== formData.confirmPassword) {
            setLocalError('Passwords do not match');
            return;
        }

        try {
            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                prefix_name: formData.prefix_name,
                first_name: formData.first_name,
                last_name: formData.last_name
            });
            setIsSuccess(true);

            setTimeout(() => {
                router.push('/login');
            }, 3000);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className='flex h-screen w-full overflow-hidden bg-white'>
            <div className='hidden lg:flex lg:w-[35%] flex-col justify-between bg-slate-900 p-8 text-white relative'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900 to-slate-900'></div>

                <div className='relative z-10 flex items-center gap-3'>
                    <div className='bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10'>
                        <Image
                            src='/ssk-logo.png'
                            alt='SSK Logo'
                            width={40}
                            height={40}
                            className='brightness-0 invert drop-shadow-md'
                            priority
                        />
                    </div>
                    <div>
                        <h1 className='text-lg font-medium tracking-wide'>โรงเรียนสตรีสิริเกศ</h1>
                        <p className='text-[10px] font-light uppercase tracking-[0.2em] text-slate-400'>
                            Budget Management
                        </p>
                    </div>
                </div>

                <div className='relative z-10 pb-10'>
                    <h2 className='text-3xl font-light leading-tight mb-4'>
                        Manage your <br />
                        <span className='font-medium text-white'>{`Organization's Budget`}</span>
                        <br />
                        efficiently.
                    </h2>
                    <p className='text-slate-400 font-light leading-relaxed text-sm'>
                        ระบบบริหารจัดการงบประมาณที่ออกแบบมาเพื่อความถูกต้อง รวดเร็ว
                        และตรวจสอบได้ในทุกขั้นตอน
                    </p>
                </div>

                <div className='relative z-10 text-xs text-slate-500 font-light'>
                    © 2026 Satree Siriket School. All rights reserved.
                </div>
            </div>

            <div className='flex w-full lg:w-[65%] items-center justify-center bg-white px-8 py-4'>
                <div className='w-full max-w-2xl h-full flex flex-col justify-center'>
                    <div className='mb-6 flex lg:hidden items-center justify-center gap-3'>
                        <Image
                            src='/ssk-logo.png'
                            alt='SSK Logo'
                            width={40}
                            height={40}
                            className='object-contain'
                        />
                        <div>
                            <h1 className='text-lg font-medium tracking-wide text-slate-800'>
                                โรงเรียนสตรีสิริเกศ
                            </h1>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <h2 className='text-2xl font-semibold text-slate-800'>Create an account</h2>
                        <p className='text-sm font-light text-slate-500'>
                            Enter your details below to create your account
                        </p>
                    </div>

                    {(error || localError) && (
                        <div className='mb-4 rounded-lg bg-red-50 border border-red-100 p-2 text-center text-sm text-red-600'>
                            {error || localError}
                        </div>
                    )}

                    {isSuccess && (
                        <div className='mb-4 rounded-lg bg-emerald-50 border border-emerald-100 p-2 text-center text-sm text-emerald-600 flex items-center justify-center gap-2'>
                            Registration successful! Redirecting...
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label className='mb-1 block text-xs font-medium text-slate-700'>
                                Username
                            </label>
                            <Input
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                placeholder='Username'
                                required
                            />
                        </div>

                        <div className='flex gap-3'>
                            <div className='w-[18%]'>
                                <label className='mb-1 block text-xs font-medium text-slate-700'>
                                    Prefix
                                </label>
                                <select
                                    name='prefix_name'
                                    value={formData.prefix_name}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800 appearance-none cursor-pointer'
                                >
                                    <option value='นาย'>นาย</option>
                                    <option value='นาง'>นาง</option>
                                    <option value='นางสาว'>นางสาว</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className='mb-1 block text-xs font-medium text-slate-700'>
                                    First Name
                                </label>
                                <Input
                                    name='first_name'
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    placeholder='first name'
                                    required
                                />
                            </div>
                            <div className='flex-1'>
                                <label className='mb-1 block text-xs font-medium text-slate-700'>
                                    Last Name
                                </label>
                                <Input
                                    name='last_name'
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder='last name'
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className='mb-1 block text-xs font-medium text-slate-700'>
                                Email Address
                            </label>
                            <Input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='your@email.com'
                                required
                            />
                        </div>

                        <div className='relative'>
                            <label className='mb-1 block text-xs font-medium text-slate-700'>
                                Password
                            </label>
                            <div className='relative'>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='••••••••'
                                    required
                                    minLength={6}
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600 focus:outline-none'
                                >
                                    <EyeIcon show={!showPassword} />
                                </button>
                            </div>
                        </div>

                        <div className='relative'>
                            <label className='mb-1 block text-xs font-medium text-slate-700'>
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <Input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='••••••••'
                                    required
                                    minLength={6}
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-600 focus:outline-none'
                                >
                                    <EyeIcon show={!showConfirmPassword} />
                                </button>
                            </div>
                        </div>

                        <div className='pt-2'>
                            <Button
                                type='submit'
                                disabled={isLoading || isSuccess}
                                className='w-full py-2.5'
                            >
                                {isLoading ? 'Creating Account...' : 'Sign up'}
                            </Button>
                        </div>
                    </form>

                    <div className='mt-6 text-center text-xs font-light text-slate-500'>
                        Already have an account?{' '}
                        <Link href='/login' className='font-medium text-slate-800 hover:underline'>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
