import Header from '@/src/components/layouts/Header';
import Sidebar from '@/src/components/layouts/Sidebar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col bg-gray-50 font-sans text-gray-900 overflow-hidden'>
            <Header />
            <div className='flex flex-1 overflow-hidden relative'>
                <Sidebar />
                <main className='flex-1 overflow-y-auto p-4 md:p-6 md:pt-8 bg-slate-50/50 scroll-smooth'>
                    <div className='mx-auto max-w-7xl'>{children}</div>
                </main>
            </div>
        </div>
    );
}
