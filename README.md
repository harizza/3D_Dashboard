# 🏭 3D Dashboard Monitoring – Kalbe Nutritionals

Aplikasi visualisasi 3D interaktif berbasis web untuk monitoring sistem HVAC, sensor lingkungan, dan pipa dalam skala industri. Dibangun menggunakan React + Vite + Three.js (React Three Fiber).

---

## 📦 Teknologi yang Digunakan

- React + Vite
- Three.js via React Three Fiber
- Tailwind CSS
- @react-three/drei (OrbitControls, Html, Text)
- MQTT
- Hosting via `serve`

---

## 🚀 Cara Menjalankan dari Awal (Fresh Setup)

### 1. 📥 Clone Repositori

```bash
git clone https://github.com/harizza/3D_Dashboard.git
cd 3D_Dashboard
````

### 2. 🧰 Install Node Modules

Pastikan Node.js dan npm sudah terinstall (minimal Node.js versi 16):

```bash
npm install
```

### 3. 🧪 Jalankan untuk Development

```bash
npm run dev
```

> Buka di browser: `http://localhost:5173`

---

## 🔧 Build dan Hosting Statis

### 1. 🔨 Build Project

```bash
npm run build
```

Akan menghasilkan folder `dist/`.

### 2. 🌐 Hosting dengan `serve`

Install dulu jika belum:

```bash
npm install -g serve
```

Jalankan server:

```bash
serve -s dist
```

> Buka di browser: `http://localhost:3000` (atau sesuai yang ditampilkan)

---

## 📁 Struktur Folder

```
3D_Dashboard/
├── public/                # File publik (ikon, favicon, dll)
├── src/                   # Source code utama
│   ├── assets/            # File GLB & gambar
│   │   ├── 3d/            # Model 3D (GLB)
│   │   │   ├── ChilllerFull.glb
│   │   │   └── FullAllSystem.glb
│   │   └── images/        # Logo & gambar UI
│   │       └── logo.png
│   ├── components/        # Komponen UI (HMI, Navbar, Tooltip, Loader)
│   │   ├── HMIChiller.jsx
│   │   ├── HMISensor.jsx
│   │   ├── Navbar.jsx
│   │   ├── ToolTip.jsx
│   │   └── Loader.jsx
│   ├── hooks/             # Custom hooks
│   │   ├── chillerCalc.js
│   │   ├── useChillerData.js
│   │   └── useLineSensorData.js
│   ├── models/            # Komponen model 3D
│   │   └── Chiller.jsx
│   ├── pages/             # Halaman utama aplikasi
│   │   ├── Home.jsx       # ⬅ Entry point tampilan 3D
│   │   ├── About.jsx
│   │   ├── AllData.jsx
│   │   ├── Information.jsx
│   │   └── index.js
│   ├── App.jsx            # Root komponen React
│   ├── main.jsx           # Entrypoint Vite
│   └── index.css          # Styling (Tailwind + custom)
├── dist/                  # ⬅ Hasil build (setelah `npm run build`)
├── node_modules/
├── flows.json             # Data tambahan (sensor, flow, dsb)
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── .gitignore
```

---

## 🛠 Tips Development

* Untuk mengubah posisi kamera default, ubah di `Home.jsx` bagian:

  ```js
  cameraRef.current.position.set(...)
  controlsRef.current.target.set(...)
  ```

* Untuk mengganti model 3D → ubah di `src/assets/3d/` lalu edit `Chiller.jsx`.

* Tooltip, rotasi kamera, dan interaktivitas bisa diedit di `Home.jsx` dan `Chiller.jsx`.

---

## 🌐 Deployment

Jika ingin hosting online, upload folder `dist/` ke:

* Netlify
* Vercel
* Firebase Hosting
* GitHub Pages (gunakan plugin vite-gh-pages)

---

## 👨‍💻 Author

**Harizza Haryantoro**
Mahasiswa Elektronika dan Instrumentasi
Universitas Gadjah Mada 
