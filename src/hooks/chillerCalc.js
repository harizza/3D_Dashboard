// src/utils/chillerCalc.js

const Q_max = 113 * 2; // 226 m3/h (2 pompa)
const f_max = 50;
const P_chiller = 351.7;
const P_pompa_ref = 20.3;
const COP = 6.0;
const jam_operasi = 24.0;
const tarif_listrik = 1440.0;
const Q_min = 181;
const diameter_pipa = 0.219;

// perhitungan baseline di 50 Hz (maksimal)
const P_pompa_base = P_pompa_ref * (f_max / 41) ** 3;
const P_total_base = P_chiller + P_pompa_base;
const energi_base = P_total_base * jam_operasi;
const energi_base_bulan = energi_base * 30;
const biaya_base_bulan = energi_base_bulan * tarif_listrik;

export function chillerCalc(f) {
  // pakai affinity law
  const Q = Q_max * (f / f_max); // m3/h
  const A = Math.PI * diameter_pipa ** 2 / 4;
  const Q_m3s = Q / 3600;
  const velocity = Q_m3s / A;

  const P_pompa = P_pompa_ref * (f / 41) ** 3; // masih pakai ref 41 Hz
  const P_total = P_chiller + P_pompa;
  const cooling = COP * P_chiller;
  const energi = P_total * jam_operasi;
  const energi_bulan = energi * 30;
  const biaya_bulan = energi_bulan * tarif_listrik;
  const cop_operasional = cooling / P_total;
  const flow_valid = Q >= Q_min;
  const saving_energi_pct = 100 * (energi_base_bulan - energi_bulan) / energi_base_bulan;
  const saving_biaya_rp = biaya_base_bulan - biaya_bulan;

  return {
    Q,
    velocity,
    P_pompa,
    P_total,
    energi,
    energi_bulan,
    biaya_bulan,
    cop_operasional,
    flow_valid,
    saving_energi_pct,
    saving_biaya_rp,
  };
}