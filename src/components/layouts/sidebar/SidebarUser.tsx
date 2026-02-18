export default function SidebarUser() {
    return (
        <div className='shrink-0 border-t border-slate-100 p-4 bg-white'>
            <button className='flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-slate-50 transition-colors'>
                <div className='h-9 w-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 ring-1 ring-white shadow-sm flex items-center justify-center text-slate-500 text-xs font-bold'>
                    U
                </div>
                <div className='flex flex-1 flex-col overflow-hidden'>
                    <span className='truncate text-sm font-medium text-slate-700'>
                        Ubonmicrotech
                    </span>
                    <span className='truncate text-xs text-slate-400'>User / Teacher</span>
                </div>
                <svg
                    className='w-4 h-4 text-slate-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                    />
                </svg>
            </button>
        </div>
    );
}
