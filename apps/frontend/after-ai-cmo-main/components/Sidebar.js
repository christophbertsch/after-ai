export default function Sidebar() {
  return (
    <aside className="w-80 px-6 py-5 border-r border-[#F4EFE6] bg-[#FFFFFF] flex flex-col justify-between">
      <div>
        {/* Avatar + App name */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="rounded-full size-10 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/bbf0be7f-7fae-4c81-ae6f-c79a164c0253.png")',
            }}
          />
          <div>
            <h1 className="text-base font-medium leading-normal text-[#1C160C]">AFTER AI</h1>
            <p className="text-sm font-normal text-[#A18249] leading-normal">Dashboard</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 text-sm font-medium">
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Get Started</div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6] text-[#1C160C]">Catalogs</div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Reports</div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Backups</div>
          <hr className="border-[#E9DFCE] my-4" />
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Access Management</div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Billing</div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#1C160C]">Settings</div>
        </nav>
      </div>

      {/* Support button */}
      <button className="h-10 px-4 mt-6 bg-[#019863] text-white rounded-full text-sm font-bold">
        Get Support
      </button>
    </aside>
  );
}
