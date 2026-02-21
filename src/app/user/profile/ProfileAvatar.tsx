'use client';

import { Button } from '@/src/components/ui/Button';
import type { User } from '@/src/types/auth.types';

interface ProfileAvatarProps {
    user: User | null;
}

export default function ProfileAvatar({ user }: ProfileAvatarProps) {
    const userInitial = user?.first_name ? user.first_name.charAt(0).toUpperCase() : 'U';

    return (
        <div className='p-8 border-b border-slate-100 flex items-center gap-6 bg-slate-50/30'>
            <div className='relative shrink-0'>
                {user?.avatar ? (
                    `<img
                        src={user.avatar}
                        alt='Profile'
                        className='h-24 w-24 rounded-full object-cover shadow-sm ring-4 ring-white'
                    />`
                ) : (
                    <div className='h-24 w-24 rounded-full bg-slate-900 shadow-sm ring-4 ring-white flex items-center justify-center text-white text-3xl font-medium'>
                        {userInitial}
                    </div>
                )}
                <button className='absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors'>
                    <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                        />
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                    </svg>
                </button>
            </div>
            <div>
                <h3 className='text-lg font-medium text-slate-800'>รูปโปรไฟล์</h3>
                <p className='text-sm font-light text-slate-500 mt-1'>
                    รองรับไฟล์ PNG, JPG ขนาดไม่เกิน 5MB
                </p>
                <div className='mt-3 flex gap-3'>
                    <Button
                        type='button'
                        variant='outline'
                        className='py-2 px-4 text-xs h-auto bg-white'
                    >
                        อัปโหลดรูปใหม่
                    </Button>
                </div>
            </div>
        </div>
    );
}
