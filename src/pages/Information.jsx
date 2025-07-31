import React from 'react';
import { FaSnowflake, FaWind, FaWater, FaThermometerHalf, FaMicrochip } from 'react-icons/fa';

const Card = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="flex items-center space-x-3 mb-4 text-blue-600">
      <Icon className="text-2xl" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="text-gray-700 text-sm leading-relaxed space-y-1">{children}</div>
  </div>
);

const Information = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Informasi Sistem HVAC Kalbe Nutritionals
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Sistem ini mencakup unit utama HVAC seperti Chiller, AHU, Cooling Tower, serta sensor suhu, kelembaban, tekanan, dan aliran. Semua dikendalikan dan dimonitor secara real-time.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <Card icon={FaSnowflake} title="AICOOL 300 TR Chiller">
            <ul className="list-disc ml-5">
              <li>Kapasitas: 300 TR, oil-free magnetic bearing</li>
              <li>Kompresor: Turbocor, efisiensi tinggi (COP &gt; 6.0)</li>
              <li>Tipe: Water-cooled, minim perawatan</li>
              <li>Operasi hening, ramah lingkungan</li>
            </ul>
          </Card>

          <Card icon={FaWind} title="Robatherm AHU – RM dan RL Series">
            <ul className="list-disc ml-5">
              <li>Rentang aliran udara: hingga 320.000 m³/h</li>
              <li>Insulasi casing T2 (1,0 W/m²K), leakage &lt; 0,1%</li>
              <li>Reheat & DX capacity hingga 60,5 kW</li>
              <li>Peredaman suara RM unggul di low freq, RL di high freq</li>
              <li>Modular: DX, heat recovery, rotor, plate, IE2/IE3 motor</li>
            </ul>
          </Card>

          <Card icon={FaWater} title="Cooling Tower – King Sun KFT-250C2 RT">
            <ul className="list-disc ml-5">
              <li>Daya pendingin: 1.950.000 kcal/h</li>
              <li>Flow: ±390 m³/h, ukuran: 3.35 × 3.93 × 0.635 m</li>
              <li>Motor: 2 × 7.5 hp axial fan low-noise</li>
              <li>Struktur FRP anti korosi + silent mat</li>
              <li>Carry-over ≤ 0,002 %, efisiensi +20%</li>
            </ul>
          </Card>

          <Card icon={FaMicrochip} title="Flow Sensor – SUTO S461">
            <ul className="list-disc ml-5">
              <li>Clamp-on ultrasonic, akurasi ±1%</li>
              <li>Rentang: 0–12 m/s, suhu –40…+130 °C</li>
              <li>Output: Modbus RTU, 4–20 mA, TCP</li>
              <li>Respon cepat (T₉₀ = 0,1 s), IP65/IP68</li>
              <li>Kompatibel dengan pipa DN40–DN1200</li>
            </ul>
          </Card>

          <Card icon={FaThermometerHalf} title="Sensor Suhu & RH – Autonics THD-DD2-T">
            <ul className="list-disc ml-5">
              <li>Rentang suhu: –19.9…+60 °C (±1 °C)</li>
              <li>RH: 0…99,9 %RH (±2%)</li>
              <li>Output: RS485 Modbus RTU</li>
              <li>Duct-mount, pole 200 mm, LED display</li>
              <li>Casing IP65, anti getaran & noise pulse</li>
            </ul>
          </Card>

          <Card icon={FaMicrochip} title="Pressure Sensor – Huba Control 694">
            <ul className="list-disc ml-5">
              <li>Rentang: ±50 Pa hingga 0–5000 Pa</li>
              <li>Akurasi tinggi: ±1% fs (≥1 mbar), ±2% fs (&lt;1 mbar)</li>
              <li>Output: 0–10 V, 4–20 mA (2/3-wire)</li>
              <li>Response time: &lt;10 ms, IP54/IP65</li>
              <li>Housing polycarbonate, cocok HVAC & ruang bersih</li>
            </ul>
          </Card>

        </div>

        <div className="mt-12 text-sm text-center text-gray-600 max-w-3xl mx-auto border-t pt-6">
          <p>
            Sistem HVAC ini dirancang untuk memastikan efisiensi energi, kestabilan lingkungan produksi, serta memenuhi standar kenyamanan termal dan higienitas di lingkungan industri Kalbe Nutritionals.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Dibuat oleh <span className="font-medium text-blue-600">Harizza Haryantoro</span>, mahasiswa Universitas Gadjah Mada – PT Sanghiang Perkasa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
