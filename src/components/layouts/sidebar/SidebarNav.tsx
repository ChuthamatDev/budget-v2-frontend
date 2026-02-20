'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from './SidebarConfig';

export default function SidebarNav() {
    const pathname = usePathname();

    return (
        <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200">
            <p className='mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400/80'>
                Menu
            </p>

            <div className='space-y-1'>
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 
                ${isActive
                                    ? 'bg-slate-50 text-slate-900 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <span
                                className={`transition-colors duration-200 ${isActive ? 'text-slate-800' : 'text-slate-400 group-hover:text-slate-600'}`}
                            >
                                {item.icon}
                            </span>
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
