"use client";

import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";

export default function ProfilePage() {
    const { user, fetchProfile } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        prefix_name: "นาย",
        first_name: "",
        last_name: "",
        phone_number: "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || "",
                email: user.email || "",
                prefix_name: user.prefix_name || "นาย",
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                phone_number: user.phone_number || "",
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: เชื่อมต่อ API เพื่ออัปเดตข้อมูล (เช่น PUT /api/v1/auth/update-profile)
        setTimeout(() => {
            alert("อัปเดตข้อมูลส่วนตัวสำเร็จ!");
            setIsLoading(false);
        }, 1000);
    };

    const userInitial = user?.first_name ? user.first_name.charAt(0).toUpperCase() : "U";

    return (
        <div className="max-w-5xl mx-auto pb-12">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">ตั้งค่าโปรไฟล์</h1>
                <p className="text-sm font-light text-slate-500 mt-1">
                    จัดการข้อมูลส่วนตัวและตรวจสอบสิทธิ์การใช้งานระบบของคุณ
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                <div className="xl:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">

                        <div className="p-8 border-b border-slate-100 flex items-center gap-6 bg-slate-50/30">
                            <div className="relative shrink-0">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="Profile" className="h-24 w-24 rounded-full object-cover shadow-sm ring-4 ring-white" />
                                ) : (
                                    <div className="h-24 w-24 rounded-full bg-slate-900 shadow-sm ring-4 ring-white flex items-center justify-center text-white text-3xl font-medium">
                                        {userInitial}
                                    </div>
                                )}
                                <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-slate-800">รูปโปรไฟล์</h3>
                                <p className="text-sm font-light text-slate-500 mt-1">รองรับไฟล์ PNG, JPG ขนาดไม่เกิน 5MB</p>
                                <div className="mt-3 flex gap-3">
                                    <Button type="button" variant="outline" className="py-2 px-4 text-xs h-auto bg-white">อัปโหลดรูปใหม่</Button>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            <h3 className="text-base font-medium text-slate-800 mb-4 border-b border-slate-100 pb-2">ข้อมูลส่วนตัว</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 block text-xs font-medium text-slate-700">Username</label>
                                    <Input name="username" value={formData.username} disabled className="bg-slate-50 text-slate-500 cursor-not-allowed border-slate-200" />
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-medium text-slate-700">Email Address</label>
                                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 md:col-span-3">
                                    <label className="mb-2 block text-xs font-medium text-slate-700">คำนำหน้า</label>
                                    <select
                                        name="prefix_name"
                                        value={formData.prefix_name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-800 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800 appearance-none cursor-pointer"
                                    >
                                        <option value="นาย">นาย</option>
                                        <option value="นาง">นาง</option>
                                        <option value="นางสาว">นางสาว</option>
                                    </select>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <label className="mb-2 block text-xs font-medium text-slate-700">ชื่อ</label>
                                    <Input name="first_name" value={formData.first_name} onChange={handleChange} required />
                                </div>
                                <div className="col-span-12 md:col-span-5">
                                    <label className="mb-2 block text-xs font-medium text-slate-700">นามสกุล</label>
                                    <Input name="last_name" value={formData.last_name} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 block text-xs font-medium text-slate-700">เบอร์โทรศัพท์</label>
                                    <Input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                                <Button type="button" variant="outline" onClick={() => window.history.back()} className="w-auto px-6 bg-white">
                                    ยกเลิก
                                </Button>
                                <Button type="submit" disabled={isLoading} className="w-auto px-8">
                                    {isLoading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
                        <h3 className="text-sm font-medium text-slate-800 mb-4 flex items-center justify-between">
                            สถานะบัญชี
                            {user?.status_account ? (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                    Inactive
                                </span>
                            )}
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-slate-500 font-light">ยืนยันอีเมล</span>
                                <span className="font-medium text-slate-700">{user?.verified ? "ยืนยันแล้ว" : "ยังไม่ยืนยัน"}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-slate-500 font-light">เข้าสู่ระบบล่าสุด</span>
                                <span className="font-medium text-slate-700">
                                    {user?.last_assess ? new Date(user.last_assess).toLocaleDateString('th-TH') : "-"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
                        <h3 className="text-sm font-medium text-slate-800 mb-4">ตำแหน่งและสิทธิ์การใช้งาน</h3>
                        <div className="space-y-4">
                            {user?.positions && user.positions.length > 0 ? (
                                user.positions.map((pos: any) => (
                                    <div key={pos.position_id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-medium text-sm text-slate-800">{pos.role?.name || "ไม่ระบุตำแหน่ง"}</h4>
                                                <p className="text-xs text-slate-500 mt-1">{pos.group?.name || pos.role?.description || "ไม่ระบุกลุ่มงาน"}</p>
                                            </div>

                                            <span className="inline-flex items-center rounded-md bg-slate-200/50 px-2 py-1 text-[10px] font-medium text-slate-600">
                                                {pos.role?.permissions?.length || 0} สิทธิ์
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-slate-500 font-light text-center py-4">ยังไม่มีตำแหน่งที่ระบุ</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}