
import { useState } from 'react';

export default function CatalogDashboard() {
  const [catalogs] = useState([
    {
      name: 'Distributor ONE',
      products: 1023,
      format: 'BMECAT 1.2',
      language: 'DE',
      region: 'europe-west3',
      status: 'HEALTHY',
      upgrade: true,
      actions: ['Details', 'Dashboard', 'Logs', 'Scale']
    }
  ]);

  return (
    <div className="flex min-h-screen text-[#1C160C]" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-80 flex flex-col justify-between px-6 py-5 border-r border-[#F4EFE6] bg-[#FFFFFF]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-center bg-cover" style={{ backgroundImage: 'url(https://cdn.usegalileo.ai/sdxl10/bbf0be7f-7fae-4c81-ae6f-c79a164c0253.png)' }}></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium leading-normal">AFTER AI</h1>
              <p className="text-sm font-normal leading-normal text-[#A18249]">Dashboard</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 text-sm font-medium">
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Get Started</div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6] text-[#1C160C]">Catalogs</div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Reports</div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Backups</div>
            <hr className="border-[#E9DFCE] my-2" />
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Access Management</div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Billing</div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Settings</div>
          </nav>
        </div>
        <button className="h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold leading-normal tracking-[0.015em]">
          Get Support
        </button>
      </aside>

      {/* Top Bar */}
      <div className="flex flex-col flex-1 bg-[#FFFFFF]">
        <header className="flex items-center justify-between border-b border-[#F4EFE6] px-10 py-3 whitespace-nowrap">
          <div className="flex items-center gap-4 text-[#1C160C]">
            <div className="w-5 h-5">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.578 8.578c-3.05 3.05-5.127 6.936-5.969 11.167-.842 4.23-.41 8.615 1.24 12.6 1.65 3.985 4.445 7.392 8.032 9.788 3.586 2.396 7.803 3.675 12.116 3.675s8.53-1.28 12.116-3.676c3.587-2.396 6.382-5.802 8.032-9.788 1.65-3.985 2.082-8.37 1.24-12.6-.842-4.23-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AFTER AI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9" />
            <div className="flex gap-2">
              <button className="h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">c@camm.org - Base Account</span>
              </button>
              <button className="h-10 px-2.5 bg-[#F4EFE6] text-[#1C160C] rounded-full text-sm font-bold leading-normal tracking-[0.015em] min-w-0 flex items-center justify-center">
                ▼
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
