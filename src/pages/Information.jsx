import React from 'react';
import { FaSnowflake, FaWind, FaWater, FaThermometerHalf, FaMicrochip } from 'react-icons/fa';

const Card = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="flex items-center space-x-3 mb-4 text-blue-600">
      <Icon className="text-2xl" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
  </div>
)
const Information = () => {
return (
    <section className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Informasi Sistem HVAC Kalbe Nutritionals</h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Sistem ini dirancang untuk memantau dan mengontrol unit HVAC seperti Chiller, AHU, Cooling Tower, serta sensor suhu, kelembaban, tekanan, dan aliran secara real-time di Kalbe Nutritionals.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Card icon={FaSnowflake} title="AICOOL 300 TR Chiller">
            <ul className="list-disc ml-5 space-y-1">
              <li>300 TR kapasitas pendinginan</li>
              <li>Oil-free magnetic bearing, kompresor Turbocor</li>
              <li>Efisiensi tinggi (COP &gt; 6.0)</li>
              <li>Pendingin air (water-cooled), minim perawatan</li>
              <li>Desain ramah lingkungan dan senyap</li>
            </ul>
          </Card>

          <Card icon={FaWind} title="DAIKIN AHU (Air Handling Unit)">
            <ul className="list-disc ml-5 space-y-1">
              <li>Merk: Daikin, fan variable speed</li>
              <li>Filter udara: Pre-filter + HEPA (opsional)</li>
              <li>Kontrol suhu dan kelembaban otomatis</li>
              <li>Terhubung ke sensor suhu dan RH</li>
              <li>Digunakan dalam ruang produksi/laboratorium</li>
            </ul>
          </Card>

          <Card icon={FaWater} title="Cooling Tower">
            <ul className="list-disc ml-5 space-y-1">
              <li>Jenis open-type induced draft</li>
              <li>Terintegrasi dengan sistem chiller 300 TR</li>
              <li>Kipas axial low noise</li>
              <li>Material tahan korosi, efisiensi evaporatif tinggi</li>
              <li>Digunakan untuk membuang panas ke atmosfer</li>
            </ul>
          </Card>

          <Card icon={FaMicrochip} title="Sensor & Instrumentasi">
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Flow sensor:</strong> Mengukur laju air (ultrasonic/electromagnetic)</li>
              <li><strong>Temperature sensor:</strong> NTC/PT1000 untuk air dan udara</li>
              <li><strong>Humidity sensor:</strong> RH digital seperti SHT31/DHT22</li>
              <li><strong>Pressure sensor:</strong> Tipe analog (4–20mA) atau digital Modbus</li>
              <li>Semua sensor dikalibrasi untuk data akurat dan stabil</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-sm text-center text-gray-600 max-w-3xl mx-auto border-t pt-6">
          <p>
            Sistem ini berfungsi sebagai solusi monitoring dan pengendalian cerdas untuk optimasi energi, kenyamanan termal, serta mendukung keberlanjutan operasional di fasilitas industri berskala besar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information