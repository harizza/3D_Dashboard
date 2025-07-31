import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 border-b pb-2">
          Tentang Sistem Monitoring 3D
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Sistem ini dirancang untuk membantu Kalbe Nutritionals dalam memantau performa mesin <span className="font-semibold text-blue-600">chiller</span> dan <span className="font-semibold text-blue-600">sensor flow</span> secara real-time menggunakan visualisasi 3D interaktif. 
        </p>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Dengan pendekatan berbasis 3D, pengguna dapat berinteraksi langsung dengan representasi virtual sistem di lapangan, mempercepat pemahaman terhadap kondisi operasional tanpa harus menafsirkan data teknis secara manual.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">✨ Fitur Unggulan</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Visualisasi 3D interaktif dari mesin chiller dan sensor</li>
          <li>Kontrol kamera fleksibel & preset posisi cepat</li>
          <li>Panel HMI khusus untuk tiap perangkat</li>
          <li>Integrasi sensor real-time</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">🔧 Teknologi yang Digunakan</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li><strong>React</strong> + <strong>Vite</strong> untuk antarmuka pengguna yang responsif</li>
          <li><strong>@react-three/fiber</strong> untuk rendering 3D berbasis Three.js</li>
          <li><strong>Drei</strong> untuk kontrol kamera, pencahayaan, dan interaksi</li>
          <li><strong>Tailwind CSS</strong> untuk desain antarmuka yang bersih dan cepat</li>
        </ul>

        <p className="text-gray-600 text-sm mt-10">
          Sistem ini dikembangkan sebagai bagian dari inisiatif modernisasi proses industri Kalbe Nutritionals dalam menjaga kualitas dan efisiensi operasional.
        </p>

        {/* Tambahan kredit */}
        <p className="text-xs text-gray-500 mt-4">
            Dibuat oleh <span className="font-medium text-blue-600">Harizza Haryantoro</span>, mahasiswa Universitas Gadjah Mada – PT Sanghiang Perkasa.
        </p>
      </div>
    </section>
  );
};

export default About;