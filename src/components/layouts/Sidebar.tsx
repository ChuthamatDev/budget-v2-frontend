import SidebarHeader from './sidebar/SidebarHeader';
import SidebarNav from './sidebar/SidebarNav';
import SidebarUser from './sidebar/SidebarUser';

export default function Sidebar() {
    return (
        <aside className='hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex'>
            <SidebarHeader />
            <SidebarNav />
            <SidebarUser />
        </aside>
    );
}
