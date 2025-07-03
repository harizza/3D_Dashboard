import { useMemo } from "react";
import useChillerData from "../hooks/useChillerData";
import { chillerCalc } from "../hooks/chillerCalc";

const HMIChiller = ({ onClose }) => {
  const { frequency } = useChillerData();
  const frequencySafe = frequency ?? 0;
  const hasil = useMemo(() => chillerCalc(frequencySafe), [frequencySafe]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 py-6"
      onClick={handleOverlayClick}
    >
      {/* Lapisan 1: Frame luar HMI */}
      <div className="relative bg-[#EFECEC] rounded-2xl shadow-2xl w-full max-w-4xl aspect-[16/9] flex items-center justify-center border-1 border-gray-700">
        
        {/* Lapisan 2: Panel tengah (abu gelap), tinggi 75%, full width */}
        <div className="bg-gray-700 w-full h-[75%] flex items-center justify-center mx-90 shadow-inner">

          {/* Lapisan 3: Konten utama (putih, bergaya industrial) */}
          <div className="w-[90%] h-full bg-white shadow-lg overflow-auto border border-gray-300 p-4 font-mono text-xs md:text-sm space-y-4">

            {/* Header */}
            <div className="flex justify-between items-center mb-2 border-b border-gray-400 pb-2">
              <h2 className="text-lg font-bold tracking-wide text-gray-800">HMI Panel – Chiller</h2>
              <button
                onClick={onClose}
                className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                ✕
              </button>
            </div>

            {/* Grid Panel Data */}
            <div className="grid grid-cols-2 gap-3 bg-green-50 p-3 rounded-md border border-green-200 shadow-inner">
              <div><span className="font-semibold">Frequency:</span> {frequency !== null ? frequency.toFixed(2) + " Hz" : "Waiting..."}</div>
              <div><span className="font-semibold">Flow:</span> {hasil.Q.toFixed(2)} m³/h</div>
              <div><span className="font-semibold">Velocity:</span> {hasil.velocity.toFixed(3)} m/s</div>
              <div><span className="font-semibold">COP:</span> {hasil.cop_operasional.toFixed(2)}</div>
              <div><span className="font-semibold">Energy:</span> {hasil.energi_bulan.toFixed(1)} kWh</div>
              <div><span className="font-semibold">Cost:</span> Rp {hasil.biaya_bulan.toLocaleString()}</div>
              <div><span className="font-semibold">Energy Saving:</span> {hasil.saving_energi_pct.toFixed(2)}%</div>
              <div><span className="font-semibold">Cost Saving:</span> Rp {hasil.saving_biaya_rp.toLocaleString()}</div>
              <div className="col-span-2">
                <span className="font-semibold">Flow Status:</span>{" "}
                <span className={hasil.flow_valid ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                  {hasil.flow_valid ? "✅ Valid" : "❌ Tidak Cukup"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HMIChiller;
