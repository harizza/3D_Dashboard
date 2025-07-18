import { useState } from "react";
import useChillerData from "../hooks/useChillerData";

const HMISensor = ({ onClose }) => {
  const { flowRate, velocity, consumption } = useChillerData();
  const [activeTab, setActiveTab] = useState("data");

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 py-6"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-[#EFECEC] rounded-2xl shadow-2xl w-[58%] max-w-4xl aspect-[16/9] flex items-center justify-center border border-gray-700">
        <div className="bg-gray-700 w-full h-[75%] flex flex-col shadow-inner">

          {/* Header Tab */}
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex space-x-4">
              <button
                className={`text-sm font-semibold px-3 py-1 rounded-t ${
                  activeTab === "data"
                    ? "bg-white text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
                onClick={() => setActiveTab("data")}
              >
                📊 Pembacaan Sensor
              </button>
              <button
                className={`text-sm font-semibold px-3 py-1 rounded-t ${
                  activeTab === "info"
                    ? "bg-white text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
                onClick={() => setActiveTab("info")}
              >
                ℹ️ Informasi Sensor
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-xs"
            >
              ✕
            </button>
          </div>

          {/* Konten Utama */}
          <div className="flex-1 bg-white shadow-lg overflow-auto border border-gray-300 p-4 font-mono text-xs md:text-sm space-y-4 mx-4 mb-4 rounded-b-xl">

            {activeTab === "data" && (
              <>
                <h2 className="text-lg font-bold tracking-wide text-gray-800 mb-2">
                  Data Real-time dari Sensor
                </h2>
                <div className="grid grid-cols-2 gap-3 bg-green-50 p-3 rounded-md border border-green-200 shadow-inner">
                  <div>
                    <span className="font-semibold">Flow Rate:</span>{" "}
                    {flowRate !== null ? `${flowRate.toFixed(2)} m³/h` : "Waiting..."}
                  </div>
                  <div>
                    <span className="font-semibold">Velocity:</span>{" "}
                    {velocity !== null ? `${velocity.toFixed(3)} m/s` : "Waiting..."}
                  </div>
                  <div>
                    <span className="font-semibold">Consumption:</span>{" "}
                    {consumption !== null ? `${consumption.toFixed(2)} m³` : "Waiting..."}
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 text-xs italic">
                      *Data diambil langsung dari sensor melalui MQTT
                    </span>
                  </div>
                </div>
              </>
            )}

            {activeTab === "info" && (
              <>
                <h2 className="text-lg font-bold tracking-wide text-gray-800 mb-2">
                  Informasi Sensor: SUTO S461
                </h2>
                <div className="grid grid-cols-2 gap-3 bg-green-50 p-3 rounded-md border border-green-200 shadow-inner">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Tipe:</strong> SUTO S461 Ultrasonic Flow Meter for Liquids</li>
                  <li><strong>Rentang Pengukuran:</strong> 0.03 ... 12 m/s</li>
                  <li><strong>Teknologi:</strong> Ultrasonic clamp-on</li>
                  <li><strong>Output:</strong> 4 ... 20 mA / Modbus RTU </li>
                  <li><strong>Akurasi:</strong> ±1.5% of reading ±0.5% FS</li>
                  <li><strong>Temperatur Operasional:</strong> -20°C hingga +60°C</li>
                  <li><strong>Proteksi:</strong> IP65 (housing)</li>
                  <li><strong>Power Supply:</strong> 24 VDC</li>
                </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HMISensor;
