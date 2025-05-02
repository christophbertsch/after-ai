export default function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-[#F4EFE6] px-10 py-3 whitespace-nowrap bg-white">
      <div className="flex items-center gap-4 text-[#1C160C]">
        <div className="w-5 h-5">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M8.578 8.578c-3.05 3.05-5.127 6.936-5.969 11.167-.842 4.23-.41 8.615 1.24 12.6 1.65 3.985 4.445 7.392 8.032 9.788 3.586 2.396 7.803 3.675 12.116 3.675s8.53-1.28 12.116-3.676c3.587-2.396 6.382-5.802 8.032-9.788 1.65-3.985 2.082-8.37 1.24-12.6-.842-4.23-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AFTER AI</h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9" />
        <div className="flex gap-2">
          <button className="flex items-center justify-center h-10 px-4 bg-[#019863] text-white rounded-full text-sm font-bold tracking-[0.015em] overflow-hidden min-w-[84px] max-w-[480px]">
            <span className="truncate">c@camm.org - Base Account</span>
          </button>
          <button className="flex items-center justify-center h-10 px-2.5 bg-[#F4EFE6] text-[#1C160C] rounded-full text-sm font-bold tracking-[0.015em] min-w-0">
            ▼
          </button>
        </div>
      </div>
    </header>
  );
}
