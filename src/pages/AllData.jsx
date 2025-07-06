import { useMemo, useState } from "react";
import useChillerData from "../hooks/useChillerData";
import { chillerCalc } from "../hooks/chillerCalc";
import HmiChiller from "../components/HMIChiller";
import HmiSensor from "../components/HMISensor";
import useLineSensorData from "../hooks/useLineSensorData";

const floors = [1, 3, 6];
const lines = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function AllData() {
  const { flowRate, velocity, consumption, frequency } = useChillerData();
  const { suhu, rh, pressure } = useLineSensorData();

  const [showChillerModal, setShowChillerModal] = useState(false);
  const [showSensorModal, setShowSensorModal] = useState(false);

  const frequencySafe = frequency ?? 0;
  const hasil = useMemo(() => chillerCalc(frequencySafe), [frequencySafe]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          💧 Realtime Chiller & Sensor Monitoring
        </h1>

        {/* Data Chiller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Realtime */}
          <div className="bg-blue-100 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-blue-700 mb-3">Realtime Sensor</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><span className="font-semibold">Flow Rate:</span> {flowRate ?? "Loading..."} m³/h</li>
              <li><span className="font-semibold">Velocity:</span> {velocity ?? "Loading..."} m/s</li>
              <li><span className="font-semibold">Consumption:</span> {consumption ?? "Loading..."} m³</li>
            </ul>
          </div>

          {/* Perhitungan */}
          <div className="bg-green-100 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-green-700 mb-3">Performance Calculation</h2>
            <ul className="space-y-2 text-sm text-green-900">
              <li><span className="font-semibold">Frequency:</span> {frequency !== null ? frequency.toFixed(2) + " Hz" : "Loading..."}</li>
              <li><span className="font-semibold">Flow:</span> {hasil.Q.toFixed(2)} m³/h</li>
              <li><span className="font-semibold">Velocity:</span> {hasil.velocity.toFixed(3)} m/s</li>
              <li><span className="font-semibold">COP:</span> {hasil.cop_operasional.toFixed(2)}</li>
              <li><span className="font-semibold">Energy (Monthly):</span> {hasil.energi_bulan.toFixed(1)} kWh</li>
              <li><span className="font-semibold">Cost (Monthly):</span> Rp {hasil.biaya_bulan.toLocaleString()}</li>
              <li><span className="font-semibold">Energy Saving:</span> {hasil.saving_energi_pct.toFixed(2)}%</li>
              <li><span className="font-semibold">Cost Saving:</span> Rp {hasil.saving_biaya_rp.toLocaleString()}</li>
              <li>
                <span className="font-semibold">Flow Status:</span>{" "}
                <span className={hasil.flow_valid ? "text-green-700 font-bold" : "text-red-600 font-bold"}>
                  {hasil.flow_valid ? "✅ Valid" : "❌ Tidak Cukup"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tombol Panel */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            onClick={() => setShowChillerModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            📟 Panel HMI – Chiller
          </button>
          <button
            onClick={() => setShowSensorModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            🌡️ Panel HMI – Sensor
          </button>
        </div>

        {/* Sensor Perlantai */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            🌇 Sensor Suhu, RH, dan Tekanan per Lantai
          </h2>

          {floors.map((floor) => (
            <div key={floor} className="mb-10">
              <h3 className="text-xl font-bold text-gray-700 mb-3">
                🏢 Lantai {floor}
              </h3>

              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full table-auto text-sm text-gray-800">
                  <thead className="bg-blue-100 sticky top-0">
                    <tr>
                      <th className="px-3 py-2 text-left border border-gray-300">Parameter</th>
                      {lines.map((line) => (
                        <th key={line} className="px-3 py-2 border border-gray-300 text-center">
                          Line {line}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Suhu */}
                    <tr className="bg-white hover:bg-blue-50 transition">
                      <td className="px-3 py-2 font-medium border border-gray-200">🌡️ Suhu (°C)</td>
                      {lines.map((line) => (
                        <td key={line} className="px-3 py-2 border border-gray-200 text-center">
                          {suhu[`SL${floor}${line}`] !== undefined
                            ? <span className="inline-block bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-xs font-semibold">
                                {suhu[`SL${floor}${line}`].toFixed(1)}
                              </span>
                            : "–"}
                        </td>
                      ))}
                    </tr>

                    {/* RH */}
                    <tr className="bg-gray-50 hover:bg-green-50 transition">
                      <td className="px-3 py-2 font-medium border border-gray-200">💧 RH (%)</td>
                      {lines.map((line) => (
                        <td key={line} className="px-3 py-2 border border-gray-200 text-center">
                          {rh[`RHL${floor}${line}`] !== undefined
                            ? <span className="inline-block bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">
                                {rh[`RHL${floor}${line}`].toFixed(1)}
                              </span>
                            : "–"}
                        </td>
                      ))}
                    </tr>

                    {/* Pressure hanya di lantai 1 */}
                    {floor === 1 && (
                      <tr className="bg-white hover:bg-yellow-50 transition">
                        <td className="px-3 py-2 font-medium border border-gray-200">🧭 Tekanan (Pa)</td>
                        {lines.map((line) => (
                          <td key={line} className="px-3 py-2 border border-gray-200 text-center">
                            {pressure[`PAL1${line}`] !== undefined
                              ? <span className="inline-block bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded text-xs font-semibold">
                                  {pressure[`PAL1${line}`].toFixed(1)}
                                </span>
                              : "–"}
                          </td>
                        ))}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showChillerModal && <HmiChiller onClose={() => setShowChillerModal(false)} />}
      {showSensorModal && <HmiSensor onClose={() => setShowSensorModal(false)} />}
    </div>
  );
}

export default AllData;
