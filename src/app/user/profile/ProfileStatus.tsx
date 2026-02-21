'use client';

import type { Position, User } from '@/src/types/auth.types';

interface ProfileStatusProps {
    user: User | null;
}

export default function ProfileStatus({ user }: ProfileStatusProps) {
    const positions: Position[] = user?.positions ?? [];

    return (
        <div className='space-y-6'>
            {/* Status Card */}
            <div className='bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6'>
                <h3 className='text-sm font-medium text-slate-800 mb-4 flex items-center justify-between'>
                    สถานะบัญชี
                    {user?.status_account ? (
                        <span className='inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20'>
                            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>
                            Active
                        </span>
                    ) : (
                        <span className='inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20'>
                            Inactive
                        </span>
                    )}
                </h3>
                <div className='space-y-3 text-sm'>
                    <div className='flex justify-between border-b border-slate-50 pb-2'>
                        <span className='text-slate-500 font-light'>ยืนยันอีเมล</span>
                        <span className='font-medium text-slate-700'>
                            {user?.verified ? 'ยืนยันแล้ว' : 'ยังไม่ยืนยัน'}
                        </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-50 pb-2'>
                        <span className='text-slate-500 font-light'>เข้าสู่ระบบล่าสุด</span>
                        <span className='font-medium text-slate-700'>
                            {user?.last_assess
                                ? new Date(user.last_assess).toLocaleDateString('th-TH')
                                : '-'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Roles & Positions Card */}
            <div className='bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6'>
                <h3 className='text-sm font-medium text-slate-800 mb-4'>
                    ตำแหน่งและสิทธิ์การใช้งาน
                </h3>
                <div className='space-y-4'>
                    {positions.length > 0 ? (
                        positions.map((pos) => (
                            <div
                                key={pos.position_id}
                                className='p-4 rounded-xl bg-slate-50 border border-slate-100'
                            >
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <h4 className='font-medium text-sm text-slate-800'>
                                            {pos.role?.name || 'ไม่ระบุตำแหน่ง'}
                                        </h4>
                                        <p className='text-xs text-slate-500 mt-1'>
                                            {pos.group?.name ||
                                                pos.role?.description ||
                                                'ไม่ระบุกลุ่มงาน'}
                                        </p>
                                    </div>
                                    <span className='inline-flex items-center rounded-md bg-slate-200/50 px-2 py-1 text-[10px] font-medium text-slate-600'>
                                        {pos.role?.permissions?.length || 0} สิทธิ์
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-sm text-slate-500 font-light text-center py-4'>
                            ยังไม่มีตำแหน่งที่ระบุ
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
