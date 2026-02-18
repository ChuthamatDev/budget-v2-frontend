import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className='hidden h-[calc(100vh-4rem)] w-64 flex-col border-r border-gray-200 bg-white md:flex'>
            <nav className='flex-1 space-y-1 p-4'>
                {/* เมนู Dashboard */}
                <Link
                    href='/user/dashboard'
                    className='flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-700 transition-colors'
                >
                    <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                        />
                    </svg>
                    <span className='font-medium'>ภาพรวมงบประมาณ</span>
                </Link>

                {/* เมนูเบิกจ่าย */}
                <Link
                    href='/user/transactions'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors'
                >
                    <svg
                        className='h-5 w-5 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span className='font-medium'>รายการเบิก-จ่าย</span>
                </Link>
            </nav>
        </aside>
    );
}
