import Sidebar from './Sidebar';
import TopBar from './TopBar';
import CatalogsTable from './CatalogsTable';

export default function CatalogDashboard() {
  return (
    <div className="flex min-h-screen text-[#1C160C] bg-[#FFFFFF]" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-black tracking-[-0.033em] min-w-72">CATALOGS</h1>
            <button className="h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold">New Catalog</button>
          </div>
          <CatalogsTable />
        </main>
      </div>
    </div>
  );
}
