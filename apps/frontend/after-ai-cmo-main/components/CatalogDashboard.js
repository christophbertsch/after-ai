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
    <div className="flex min-h-screen bg-[#FFFFFF] font-sans" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-80 border-r border-[#F4EFE6] px-6 py-5 flex flex-col justify-between bg-white">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div className="rounded-full size-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.usegalileo.ai/sdxl10/bbf0be7f-7fae-4c81-ae6f-c79a164c0253.png)' }}></div>
            <div>
              <h1 className="text-base font-medium text-[#1C160C] leading-normal">AFTER AI</h1>
              <p className="text-sm text-[#A18249]">Dashboard</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1C160C]" fill="currentColor" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a16,16,0,0,0-21.53,0L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96V160a16,16,0,0,1,32,0v64h48a16,16,0,0,0,16-16V115.55a16,16,0,0,0-5.17-11.78ZM208,208H160V160a32,32,0,0,0-64,0v48H48V115.55l80-75.43,80,75.43Z" />
              </svg>
              <span className="text-sm font-medium text-[#1C160C]">Get Started</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1C160C]" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,72H131.31L104,44.69A16,16,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Z" />
              </svg>
              <span className="text-sm font-medium text-[#1C160C]">Catalogs</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#1C160C]">Reports</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#1C160C]">Backups</div>
            <hr className="my-2 border-[#E9DFCE]" />
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#1C160C]">Access Management</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#1C160C]">Billing</div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-[#1C160C]">Settings</div>
          </nav>
        </div>
        <button className="bg-[#019863] text-white text-sm font-bold px-4 py-2 rounded-full">Get Support</button>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between px-10 py-3 border-b border-[#F4EFE6]">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1C160C]" viewBox="0 0 48 48" fill="none">
              <path d="M8.578 8.578c-3.05 3.05-5.127 6.936-5.969 11.167-.842 4.23-.41 8.615 1.24 12.6 1.65 3.985 4.445 7.392 8.032 9.788 3.586 2.396 7.803 3.675 12.116 3.675s8.53-1.28 12.116-3.676c3.587-2.396 6.382-5.802 8.032-9.788 1.65-3.985 2.082-8.37 1.24-12.6-.842-4.23-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z" fill="currentColor"/>
            </svg>
            <h2 className="text-lg font-bold tracking-tight text-[#1C160C]">AFTER AI</h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#019863] text-white h-10 px-4 rounded-full text-sm font-bold">c@camm.org - Base Account</button>
            <button className="bg-[#F4EFE6] text-[#1C160C] h-10 px-3 rounded-full text-sm font-bold flex items-center">▼</button>
          </div>
        </header>

        <main className="flex-1 px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-4xl font-black tracking-tight text-[#1C160C]">CATALOGS</h3>
            <button className="bg-[#019863] text-white h-10 px-4 rounded-full text-sm font-bold">New Catalog</button>
          </div>

          <div className="rounded-xl border border-[#E9DFCE] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[#1C160C]">
                  <th className="px-4 py-3 w-[400px]">CATALOG</th>
                  <th className="px-4 py-3 w-[400px]">DETAILS</th>
                  <th className="px-4 py-3 w-[400px]">DETAILS</th>
                  <th className="px-4 py-3 w-60">STATUS</th>
                  <th className="px-4 py-3 w-60 text-[#A18249]">ACTIONS</th>
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
                    <td className="px-4 py-2 text-sm font-bold tracking-wide text-[#A18249]">
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
