import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
          <Button className="bg-[#019863] text-white">c@camm.org - Base Account</Button>
          <Button className="bg-[#F4EFE6] text-[#1C160C]">▼</Button>
        </div>
      </header>
    </div>
  );
}
