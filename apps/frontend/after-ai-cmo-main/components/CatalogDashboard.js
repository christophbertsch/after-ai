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
    <div className="flex min-h-screen font-sans bg-white text-[#1C160C]">
      <aside className="w-64 bg-white border-r border-[#E9DFCE] p-6 flex flex-col justify-between">
        <div>
          <div className="mb-6 text-xl font-bold">AFTER AI</div>
          <nav className="space-y-2">
            <div className="bg-[#F4EFE6] rounded-full px-3 py-2 text-sm font-medium flex items-center gap-2">
              <span className="text-[#1C160C]">Catalogs</span>
            </div>
            <div className="px-3 py-2 text-sm text-gray-600">Reports</div>
            <div className="px-3 py-2 text-sm text-gray-600">Backups</div>
            <hr className="my-4 border-[#E9DFCE]" />
            <div className="px-3 py-2 text-sm text-gray-600">Access Management</div>
            <div className="px-3 py-2 text-sm text-gray-600">Billing</div>
            <div className="px-3 py-2 text-sm text-gray-600">Settings</div>
          </nav>
        </div>
        <button className="mt-6 bg-[#019863] text-white rounded-full py-2 font-semibold text-sm">Get Support</button>
      </aside>

      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-black tracking-tight">CATALOGS</h1>
          <button className="flex items-center bg-[#019863] text-white rounded-full px-4 py-2 text-sm font-bold">
            New Catalog
          </button>
        </header>

        <div className="bg-white border border-[#E9DFCE] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white text-[#1C160C]">
                <th className="text-left px-4 py-3 w-[400px] font-medium">CATALOG</th>
                <th className="text-left px-4 py-3 w-[400px] font-medium">DETAILS</th>
                <th className="text-left px-4 py-3 w-[400px] font-medium">DETAILS</th>
                <th className="text-left px-4 py-3 w-60 font-medium">STATUS</th>
                <th className="text-left px-4 py-3 w-60 text-[#A18249] font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {catalogs.map((cat, idx) => (
                <tr key={idx} className="border-t border-[#E9DFCE]">
                  <td className="px-4 py-4 w-[400px] text-sm text-[#1C160C]">
                    {cat.name}
                  </td>
                  <td className="px-4 py-4 w-[400px] text-sm text-[#A18249]">
                    1 CATALOG<br />PRODUCTS: {cat.products}<br />FORMAT: {cat.format}<br />LANGUAGE: {cat.language}
                  </td>
                  <td className="px-4 py-4 w-[400px] text-sm text-[#A18249]">
                    {cat.region}
                  </td>
                  <td className="px-4 py-4 w-60">
                    <div className="text-sm bg-[#F4EFE6] rounded-full px-3 py-1 w-max">
                      {cat.status}<br />{cat.upgrade && 'UPGRADE AVAILABLE'}
                    </div>
                  </td>
                  <td className="px-4 py-4 w-60 text-sm font-bold text-[#A18249]">
                    {cat.actions.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
