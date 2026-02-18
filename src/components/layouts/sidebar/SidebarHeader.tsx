import Image from 'next/image';

export default function SidebarHeader() {
    return (
        <div className='flex h-20 items-center gap-3 border-b border-slate-100 px-6'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 shadow-sm shadow-slate-200'>
                <Image
                    src='/ssk-logo.png'
                    alt='SSK Logo'
                    width={28}
                    height={28}
                    className='brightness-0 invert object-contain'
                />
            </div>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold tracking-tight text-slate-800'>
                    โรงเรียนสตรีสิริเกศ
                </span>
                <span className='text-[10px] uppercase tracking-wider text-slate-400'>
                    Budget System
                </span>
            </div>
        </div>
    );
}
