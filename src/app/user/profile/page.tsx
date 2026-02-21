'use client';

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/src/store/useAuthStore';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';
import ProfileStatus from './ProfileStatus';
import { User } from '@/src/types/auth.types';

type ProfileFormData = {
    username: string;
    email: string;
    prefix_name: string;
    first_name: string;
    last_name: string;
    phone_number: string;
};

const DEFAULT_PREFIX_NAME = 'นาย';

const buildFormData = (user: User | null): ProfileFormData => ({
    username: user?.username || '',
    email: user?.email || '',
    prefix_name: user?.prefix_name || DEFAULT_PREFIX_NAME,
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    phone_number: user?.phone_number || ''
});

export default function ProfilePage() {
    const { user, fetchProfile } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    const userKey = user?.id ? `user:${user.id}` : 'anonymous';
    const [formDataByUser, setFormDataByUser] = useState<Record<string, ProfileFormData>>({});
    const formData = formDataByUser[userKey] ?? buildFormData(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const fieldName = e.target.name as keyof ProfileFormData;
        const fieldValue = e.target.value;

        setFormDataByUser((prev) => ({
            ...prev,
            [userKey]: {
                ...(prev[userKey] ?? buildFormData(user)),
                [fieldName]: fieldValue
            }
        }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: เรียก API อัปเดตข้อมูลตรงนี้
        setTimeout(() => {
            alert('อัปเดตข้อมูลส่วนตัวสำเร็จ!');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className='max-w-5xl mx-auto pb-12'>
            {/* Header */}
            <div className='mb-8'>
                <h1 className='text-2xl font-semibold text-slate-800 tracking-tight'>
                    ตั้งค่าโปรไฟล์
                </h1>
                <p className='text-sm font-light text-slate-500 mt-1'>
                    จัดการข้อมูลส่วนตัวและตรวจสอบสิทธิ์การใช้งานระบบของคุณ
                </p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                {/* คอลัมน์ซ้าย (Avatar + Form) */}
                <div className='xl:col-span-2 space-y-8'>
                    <div className='bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden'>
                        <ProfileAvatar user={user} />
                        <ProfileForm
                            formData={formData}
                            isLoading={isLoading}
                            handleChange={handleChange}
                            handleSave={handleSave}
                        />
                    </div>
                </div>

                {/* คอลัมน์ขวา (Status + Roles) */}
                <ProfileStatus user={user} />
            </div>
        </div>
    );
}
