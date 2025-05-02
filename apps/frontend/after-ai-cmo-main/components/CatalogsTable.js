export default function CatalogsTable() {
  const catalogs = [
    {
      name: 'Distributor ONE',
      products: 1023,
      format: 'BMECAT 1.2',
      language: 'DE',
      region: 'europe-west3',
      status: 'HEALTHY',
      upgrade: true,
      actions: ['Details', 'Dashboard', 'Logs', 'Scale'],
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-[#E9DFCE] bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[#1C160C] bg-[#FFFFFF]">
            <th className="px-4 py-3 text-left w-[400px] font-medium">CATALOG</th>
            <th className="px-4 py-3 text-left w-[400px] font-medium">DETAILS</th>
            <th className="px-4 py-3 text-left w-[400px] font-medium">DETAILS</th>
            <th className="px-4 py-3 text-left w-60 font-medium">STATUS</th>
            <th className="px-4 py-3 text-left w-60 font-medium text-[#A18249]">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {catalogs.map((cat, idx) => (
            <tr key={idx} className="border-t border-[#E9DFCE]">
              <td className="px-4 py-2 text-[#1C160C]">{cat.name}</td>
              <td className="px-4 py-2 text-[#A18249]">
                1 CATALOG<br />
                PRODUCTS: {cat.products}<br />
                FORMAT: {cat.format}<br />
                LANGUAGE: {cat.language}
              </td>
              <td className="px-4 py-2 text-[#A18249]">{cat.region}</td>
              <td className="px-4 py-2">
                <div className="inline-block bg-[#F4EFE6] px-3 py-1 rounded-full text-[#1C160C] text-sm font-medium leading-normal">
                  {cat.status}
                  {cat.upgrade && <><br />UPGRADE AVAILABLE</>}
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
  );
}
