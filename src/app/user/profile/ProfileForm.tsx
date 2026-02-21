'use client';

import React from 'react';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import type { ProfileFormData } from '@/src/types/auth.types';

interface ProfileFormProps {
    formData: ProfileFormData;
    isLoading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSave: (e: React.FormEvent) => void;
}

export default function ProfileForm({
    formData,
    isLoading,
    handleChange,
    handleSave
}: ProfileFormProps) {
    return (
        <form onSubmit={handleSave} className='p-8 space-y-6'>
            <h3 className='text-base font-medium text-slate-800 mb-4 border-b border-slate-100 pb-2'>
                ข้อมูลส่วนตัว
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>
                        Username
                    </label>
                    <Input
                        name='username'
                        value={formData.username}
                        disabled
                        className='bg-slate-50 text-slate-500 cursor-not-allowed border-slate-200'
                    />
                </div>
                <div>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>
                        Email Address
                    </label>
                    <Input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 md:col-span-3'>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>
                        คำนำหน้า
                    </label>
                    <select
                        name='prefix_name'
                        value={formData.prefix_name}
                        onChange={handleChange}
                        className='w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800 appearance-none cursor-pointer'
                    >
                        <option value='นาย'>นาย</option>
                        <option value='นาง'>นาง</option>
                        <option value='นางสาว'>นางสาว</option>
                    </select>
                </div>
                <div className='col-span-12 md:col-span-4'>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>ชื่อ</label>
                    <Input
                        name='first_name'
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='col-span-12 md:col-span-5'>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>นามสกุล</label>
                    <Input
                        name='last_name'
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <label className='mb-2 block text-xs font-medium text-slate-700'>
                        เบอร์โทรศัพท์
                    </label>
                    <Input
                        type='tel'
                        name='phone_number'
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='pt-6 border-t border-slate-100 flex justify-end gap-3'>
                <Button
                    type='button'
                    variant='outline'
                    onClick={() => window.history.back()}
                    className='w-auto px-6 bg-white'
                >
                    ยกเลิก
                </Button>
                <Button type='submit' disabled={isLoading} className='w-auto px-8'>
                    {isLoading ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
                </Button>
            </div>
        </form>
    );
}
