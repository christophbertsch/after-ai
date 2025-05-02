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
    <div className="flex min-h-screen bg-white text-[#1C160C]" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-80 px-6 py-5 border-r border-[#F4EFE6] flex flex-col justify-between bg-white">
        <div>
          <div className="flex gap-3 items-center mb-6">
            <div className="rounded-full size-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.usegalileo.ai/sdxl10/bbf0be7f-7fae-4c81-ae6f-c79a164c0253.png)' }}></div>
            <div>
              <h1 className="text-base font-medium">AFTER AI</h1>
              <p className="text-sm text-[#A18249]">Dashboard</p>
            </div>
          </div>
          <nav className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Get Started</div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6] text-sm font-medium text-[#1C160C]">Catalogs</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Reports</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Backups</div>
            <hr className="border-[#E9DFCE] my-4" />
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Access Management</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Billing</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#1C160C]">Settings</div>
          </nav>
        </div>
        <button className="mt-6 h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold">Get Support</button>
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between px-10 py-3 border-b border-[#F4EFE6]">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path d="M8.578 8.578c-3.05 3.05-5.127 6.936-5.969 11.167-.842 4.23-.41 8.615 1.24 12.6 1.65 3.985 4.445 7.392 8.032 9.788 3.586 2.396 7.803 3.675 12.116 3.675s8.53-1.28 12.116-3.676c3.587-2.396 6.382-5.802 8.032-9.788 1.65-3.985 2.082-8.37 1.24-12.6-.842-4.23-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z" fill="currentColor"/>
            </svg>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AFTER AI</h2>
          </div>
          <div className="flex gap-2">
            <button className="h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold">c@camm.org - Base Account</button>
            <button className="h-10 px-3 bg-[#F4EFE6] text-[#1C160C] rounded-full text-sm font-bold">▼</button>
          </div>
        </header>

        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-black tracking-[-0.033em] min-w-72">CATALOGS</h1>
            <button className="h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold">New Catalog</button>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#E9DFCE] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[#1C160C]">
                  <th className="px-4 py-3 text-left w-[400px] font-medium">CATALOG</th>
                  <th className="px-4 py-3 text-left w-[400px] font-medium">DETAILS</th>
                  <th className="px-4 py-3 text-left w-[400px] font-medium">DETAILS</th>
                  <th className="px-4 py-3 text-left w-60 font-medium">STATUS</th>
                  <th className="px-4 py-3 text-left w-60 text-[#A18249] font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {catalogs.map((cat, idx) => (
                  <tr key={idx} className="border-t border-[#E9DFCE]">
                    <td className="px-4 py-2 text-[#1C160C]">{cat.name}</td>
                    <td className="px-4 py-2 text-[#A18249]">
                      1 CATALOG<br/>PRODUCTS: {cat.products}<br/>FORMAT: {cat.format}<br/>LANGUAGE: {cat.language}
                    </td>
                    <td className="px-4 py-2 text-[#A18249]">{cat.region}</td>
                    <td className="px-4 py-2">
                      <div className="text-sm font-medium text-[#1C160C]">
                        {cat.status}<br/>{cat.upgrade && 'UPGRADE AVAILABLE'}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm font-bold text-[#A18249] tracking-[0.015em]">
                      {cat.actions.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
