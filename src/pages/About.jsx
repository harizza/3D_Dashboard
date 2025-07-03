import { useMemo, useState } from "react";
import useChillerData from "../hooks/useChillerData";
import { chillerCalc } from "../hooks/chillerCalc";
import HmiChiller from "../components/HMIChiller";
import HmiSensor from "../components/HMISensor"; // import yang baru

function About() {
  const { flowRate, velocity, consumption, frequency } = useChillerData();
  const [showChillerModal, setShowChillerModal] = useState(false);
  const [showSensorModal, setShowSensorModal] = useState(false);

  const frequencySafe = frequency ?? 0;
  const hasil = useMemo(() => chillerCalc(frequencySafe), [frequencySafe]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Realtime Chiller Monitoring
        </h1>

        <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
          <div className="bg-blue-50 p-4 rounded shadow-sm">
            <h2 className="font-semibold text-blue-600 mb-2">Realtime Sensor</h2>
            <ul className="space-y-1">
              <li><span className="font-medium">Flow Rate:</span> {flowRate ?? "Waiting..."} m³/h</li>
              <li><span className="font-medium">Velocity:</span> {velocity ?? "Waiting..."} m/s</li>
              <li><span className="font-medium">Consumption:</span> {consumption ?? "Waiting..."} m³</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded shadow-sm">
            <h2 className="font-semibold text-green-600 mb-2">Calculated Performance</h2>
            <ul className="space-y-1">
              <li><span className="font-medium">Frequency:</span> {frequency !== null ? frequency.toFixed(2) + " Hz" : "Waiting..."}</li>
              <li><span className="font-medium">Flow:</span> {hasil.Q.toFixed(2)} m³/h</li>
              <li><span className="font-medium">Velocity:</span> {hasil.velocity.toFixed(3)} m/s</li>
              <li><span className="font-medium">COP:</span> {hasil.cop_operasional.toFixed(2)}</li>
              <li><span className="font-medium">Energy (Monthly):</span> {hasil.energi_bulan.toFixed(1)} kWh</li>
              <li><span className="font-medium">Cost (Monthly):</span> Rp {hasil.biaya_bulan.toLocaleString()}</li>
              <li><span className="font-medium">Energy Saving:</span> {hasil.saving_energi_pct.toFixed(2)}%</li>
              <li><span className="font-medium">Cost Saving:</span> Rp {hasil.saving_biaya_rp.toLocaleString()}</li>
              <li>
                <span className="font-medium">Flow Status:</span>{" "}
                <span className={hasil.flow_valid ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                  {hasil.flow_valid ? "✅ Valid" : "❌ Tidak Cukup"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tombol-tombol HMI */}
        <div className="mt-6 text-center flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setShowChillerModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow"
          >
            Tampilkan HMI Panel – Chiller
          </button>
          <button
            onClick={() => setShowSensorModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow"
          >
            Tampilkan HMI Panel – Sensor
          </button>
        </div>
      </div>

      {/* Modal Chiller */}
      {showChillerModal && <HmiChiller onClose={() => setShowChillerModal(false)} />}
      {/* Modal Sensor */}
      {showSensorModal && <HmiSensor onClose={() => setShowSensorModal(false)} />}
    </div>
  );
}

export default About;
