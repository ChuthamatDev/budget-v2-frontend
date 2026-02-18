'use client';

export default function Header() {
    return (
        <header className='sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white/80 px-6 backdrop-blur-md border-b border-slate-200/50'>
            <div>
                <h1 className='text-md font-semibold text-slate-800 tracking-tight'>Dashboard</h1>
            </div>

            <div className='flex items-center gap-4'>
                <button className='relative rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors'>
                    <span className='absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white'></span>
                    <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1.5}
                            d='M15 17h5l-1.405-1.405A2.032 2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                        />
                    </svg>
                </button>

                <button className='lg:hidden rounded-md p-2 text-slate-500 hover:bg-slate-100'>
                    <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
