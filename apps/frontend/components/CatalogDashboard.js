import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CatalogDashboard() {
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchCatalogs() {
      try {
        const response = await fetch("http://localhost:8000/get-catalogs");
        const data = await response.json();
        setCatalogs(data);
      } catch (err) {
        console.error("Failed to load catalogs", err);
      }
    }
    fetchCatalogs();
  }, []);

  const handleNewCatalog = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("catalog", file);
    setLoading(true);
    setShowModal(true);
    setUploadProgress(0);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => (prev < 95 ? prev + 5 : prev));
    }, 200);

    try {
      const response = await fetch("http://localhost:8000/upload-catalog", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      toast.success("Catalog uploaded successfully");

      const scoreRes = await fetch(
        "http://localhost:8000/analyze-catalog?name=" + encodeURIComponent(data.name)
      );
      const score = await scoreRes.json();

      const newCatalog = {
        name: data.name || file.name,
        details: {
          count: data.count || 1,
          products: data.products || 1000,
          format: data.format || "UNKNOWN",
          language: data.language || "EN",
        },
        region: data.region || "auto",
        status: "ANALYZED",
        upgrade: false,
        scorecard: score,
        actions: ["Details", "Logs", "Export"],
      };

      setCatalogs((prev) => [...prev, newCatalog]);
    } catch (error) {
      clearInterval(progressInterval);
      console.error("Upload failed:", error);
      toast.error("Failed to upload catalog");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setShowModal(false);
        setUploadProgress(0);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 w-96 text-center shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Uploading...</h2>
            <p className="text-sm text-gray-500 mb-4">Processing catalog file</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{uploadProgress}%</p>
          </div>
        </div>
      )}

      <header className="flex items-center justify-between border-b border-[#F4EFE6] px-10 py-3">
        <div className="flex items-center gap-4 text-[#1C160C]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.578 8.578c-3.05 3.05-5.127 6.936-5.969 11.167-.842 4.23-.41 8.615 1.24 12.6 1.65 3.985 4.445 7.392 8.032 9.788 3.586 2.396 7.803 3.675 12.116 3.675s8.53-1.28 12.116-3.676c3.587-2.396 6.382-5.802 8.032-9.788 1.65-3.985 2.082-8.37 1.24-12.6-.842-4.23-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">AFTER AI</h2>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#019863] text-white px-4 py-2 rounded-full text-sm font-semibold">
            c@camm.org - Base Account
          </button>
          <button className="bg-[#F4EFE6] text-[#1C160C] px-4 py-2 rounded-full text-sm font-semibold">
            ▼
          </button>
        </div>
      </header>

      <main className="px-6 py-5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-[#1C160C] tracking-tight">CATALOGS</h1>
          <div>
            <input
              id="upload"
              type="file"
              accept=".xml,.csv,.json"
              onChange={handleNewCatalog}
              className="hidden"
            />
            <label htmlFor="upload">
              <button className="bg-[#019863] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                {loading && <span className="animate-spin">⏳</span>} New Catalog
              </button>
            </label>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E9DFCE]">
          <table className="w-full">
            <thead>
              <tr className="bg-white text-left text-sm font-medium text-[#1C160C]">
                <th className="px-4 py-3 w-[400px]">CATALOG</th>
                <th className="px-4 py-3 w-[400px]">DETAILS</th>
                <th className="px-4 py-3 w-[400px]">REGION</th>
                <th className="px-4 py-3 w-60">STATUS</th>
                <th className="px-4 py-3 w-60 text-[#A18249]">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {catalogs.map((cat, i) => (
                <tr key={i} className="border-t border-[#E9DFCE] text-sm text-[#1C160C]">
                  <td className="px-4 py-2">{cat.name}</td>
                  <td className="px-4 py-2 text-[#A18249]">
                    {cat.details.count} CATALOG<br />
                    PRODUCTS: {cat.details.products}<br />
                    FORMAT: {cat.details.format}<br />
                    LANGUAGE: {cat.details.language}
                  </td>
                  <td className="px-4 py-2 text-[#A18249]">{cat.region}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col items-start">
                      <span>{cat.status}</span>
                      {cat.scorecard && (
                        <span className="text-xs text-green-600">
                          GTINs: {cat.scorecard.gtin}% | Attr: {cat.scorecard.attributes}%
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 font-bold tracking-wide text-[#A18249]">
                    {cat.actions.join(", ")}
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
