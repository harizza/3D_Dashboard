import useChillerData from "../hooks/useChillerData";

const HMISensor = ({ onClose }) => {
  const { flowRate, velocity, consumption } = useChillerData();

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
      <div className="relative bg-[#EFECEC] rounded-2xl shadow-2xl w-full max-w-4xl aspect-[16/9] flex items-center justify-center border border-gray-700">

        {/* Lapisan 2: Panel tengah (abu gelap), tinggi 75%, full width */}
        <div className="bg-gray-700 w-full h-[75%] flex items-center justify-center shadow-inner">

          {/* Lapisan 3: Konten utama (putih) */}
          <div className="w-[90%] h-full bg-white shadow-lg overflow-auto border border-gray-300 p-4 font-mono text-xs md:text-sm space-y-4">

            {/* Header */}
            <div className="flex justify-between items-center mb-2 border-b border-gray-400 pb-2">
              <h2 className="text-lg font-bold tracking-wide text-gray-800">HMI Panel – Sensor Monitoring</h2>
              <button
                onClick={onClose}
                className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-xs"
              >
                ✕
              </button>
            </div>

            {/* Grid Panel Data */}
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default HMISensor;
