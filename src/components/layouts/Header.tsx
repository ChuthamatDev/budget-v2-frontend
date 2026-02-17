export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        {/* ปุ่มเบอร์เกอร์สำหรับมือถือ (Mobile Menu) */}
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 hidden md:block">
          Budget System <span className="text-blue-600">V2</span>
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* ไอคอนแจ้งเตือน */}
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        {/* โปรไฟล์ User */}
        <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          P
        </div>
      </div>
    </header>
  );
}
