# PRD — Halaman Produk TIWARA
## *Single-Product Detail Page: Bubuk Bawang Tiwai*

> **Versi:** 2.0  
> **Tanggal:** 3 April 2026  
> **Komponen:** `src/components/ProductGallery.jsx`  
> **Route:** `/products`  
> **Bahasa Dokumen:** Bahasa Indonesia  

---

## 1. Ringkasan Eksekutif

Halaman Produk berfungsi sebagai **Product Detail Page (PDP)** yang secara eksklusif menampilkan satu produk unggulan: **Bubuk Bawang Tiwai**. Halaman ini bukan katalog multi-produk, melainkan landing page konversi tunggal yang dirancang untuk membangun pemahaman produk, kepercayaan, dan mendorong aksi pembelian secara langsung.

**Perbedaan dengan halaman Home:**  
Halaman Home berperan sebagai *brand storytelling* (narasi merek), sedangkan halaman Produk berperan sebagai *product conversion page* (halaman konversi produk) dengan fokus pada detail, spesifikasi, dan CTA beli.

---

## 2. Tujuan Halaman

| # | Tujuan | Metrik Keberhasilan |
|---|--------|---------------------|
| 1 | Menyajikan informasi produk secara lengkap dan jelas | Pengguna memahami produk dalam ≤15 detik setelah membuka halaman |
| 2 | Membangun kepercayaan melalui bukti kualitas | Rasio scroll-through ≥70% (pengguna membaca sampai bagian trust) |
| 3 | Mendorong konversi ke marketplace/WhatsApp | Click-through rate pada CTA ≥5% |
| 4 | Memperkuat positioning premium TIWARA | Bounce rate ≤40% |

---

## 3. Target Pengguna

- **Calon Pembeli Aktif:** Sudah tertarik dan ingin mengetahui detail sebelum membeli.
- **Pengunjung dari QR Code/Traceability:** Ingin melihat produk setelah memverifikasi batch.
- **Evaluator/Juri Kompetisi:** Membutuhkan tampilan profesional yang menunjukkan kualitas produk.
- **Referral dari Media Sosial:** Diarahkan langsung ke halaman produk melalui link kampanye.

---

## 4. Definisi Produk

| Atribut | Nilai |
|---------|-------|
| **Nama Produk** | Bubuk Bawang Tiwai |
| **Kategori** | Herbal Fungsional / Bumbu Kesehatan |
| **Format** | Bubuk halus |
| **Isi Bersih (Netto)** | 100 gram |
| **Harga** | Rp 85.000 |
| **Asal Bahan** | Kalimantan Timur, Indonesia |
| **Karakter** | Aromatik, mudah dicampur |
| **Metode Ekstraksi** | Maserasi I (M1) — Cold-processed 48 jam |
| **Sertifikasi** | Certificate of Analysis (CoA), uji lab antioksidan & flavonoid |
| **Keunggulan Utama** | Bubuk murni tanpa bahan pengisi, pewarna buatan, atau pengawet kimia |

---

## 5. Struktur Halaman (Section Breakdown)

Halaman terdiri dari **7 section utama** yang disusun dalam alur naratif konversi:

### Section 1 — Product Hero (Above the Fold)
**Tujuan:** Memberikan *first impression* yang kuat dan menyajikan informasi pembelian di area yang langsung terlihat.

| Elemen | Deskripsi |
|--------|-----------|
| Gambar Utama | Gambar besar produk (pouch kemasan), bisa diganti melalui thumbnail gallery |
| Badge | Label "Bubuk Unggulan" dan "Fokus Tunggal" |
| Tag Info | Chip: "Bubuk Premium", "Asal Kalimantan Timur", "Siap untuk rutinitas harian" |
| Judul Produk (H1) | "Bubuk Bawang Tiwai untuk rutinitas harian yang lebih ringkas dan terasa premium." |
| Deskripsi Singkat | Penjelasan 1-2 kalimat tentang fokus halaman |
| Harga | **Rp 85.000** — ditampilkan besar dan tebal |
| Spesifikasi Ringkas | Netto: 100 g, Format: Bubuk |
| Product Facts | 4 poin keunggulan produk dengan ikon centang |
| CTA Primer | "Beli di Shopee" — warna hijau (secondary), link ke Shopee |
| CTA Sekunder | "Konsultasi via WhatsApp" — outline, link ke WhatsApp Business |
| Thumbnail Gallery | 4 gambar interaktif (Kemasan, Bahan Baku, Mitra Petani, Penggunaan) |

**Interaksi:** Klik thumbnail → gambar utama berubah sesuai pilihan (menggunakan React local state `activeImageId`).

---

### Section 2 — Ringkasan Produk & Cara Penggunaan
**Tujuan:** Memperdalam pemahaman produk melalui spesifikasi terstruktur dan panduan penggunaan praktis.

| Elemen | Deskripsi |
|--------|-----------|
| Headline | "Satu halaman, satu cerita, satu fokus pembelian." |
| Quick Specs Grid | 4 kartu: Isi Bersih, Format, Asal, Karakter |
| Kenapa Format Bubuk | Penjelasan naratif keunggulan format bubuk (kartu gelap/forest) |
| Arah Komunikasi | Pesan merek: praktis, premium, terpercaya (kartu terang) |
| Cara Menggunakan | 3 langkah bernomor: campurkan, gunakan, simpan |

---

### Section 3 — Manfaat Utama (Key Benefits)
**Tujuan:** Menyampaikan value proposition produk dalam format visual yang cepat dipahami.

| Elemen | Deskripsi |
|--------|-----------|
| Background | Warna gelap (forest) untuk kontras visual |
| Headline | "Dibangun untuk terasa fokus, rapi, dan meyakinkan." |
| Benefit Cards (3x) | Masing-masing berisi ikon, judul, dan deskripsi singkat |
| Card 1 | ☕ Praktis untuk rutinitas harian |
| Card 2 | 🌿 Terasa natural dan bersih |
| Card 3 | 🏅 Dikemas untuk tampil unggul |

---

### Section 4 — Jaminan & Kepercayaan (Trust & Assurance)
**Tujuan:** Membangun rasa percaya melalui data, statistik, dan narasi kredibilitas.

| Elemen | Deskripsi |
|--------|-----------|
| Headline | "Bukan sekadar tampilan tunggal, tetapi fokus yang terasa lebih terpercaya." |
| Statistik | 3 kartu angka: 150+ Keluarga Mitra, 1 Produk Fokus, 100 g Netto |
| Trust Points (3x) | Kartu: Kualitas Terkurasi, Narasi Ilmiah Ringan, Dekat dengan Asal-usulnya |

---

### Section 5 — Closing CTA (Aksi Penutup)
**Tujuan:** Mengulangi ajakan bertindak di akhir halaman untuk pengguna yang sudah membaca semua informasi.

| Elemen | Deskripsi |
|--------|-----------|
| Background | Gradient primary → forest → primary |
| Headline | Pesan persuasif terakhir |
| CTA Primer | "Beli di Shopee" |
| CTA Sekunder | "Konsultasi via WhatsApp" |

---

### Section 6 — Footer
**Tujuan:** Navigasi sekunder dan identitas merek.

| Elemen | Deskripsi |
|--------|-----------|
| Logo & Tagline | TIWARA + deskripsi singkat |
| Navigasi | Link: Produk, Traceability, Home |

---

## 6. Arsitektur Data

Semua data produk bersifat **statis** dan disimpan langsung di dalam komponen `ProductGallery.jsx` sebagai konstanta JavaScript:

```
galleryItems[]     → 4 item gambar galeri (id, label, title, description, src, alt)
productFacts[]     → 4 string keunggulan produk
quickSpecs[]       → 4 objek { label, value } spesifikasi
benefitCards[]     → 3 objek { icon, title, text }
trustPoints[]      → 3 objek { icon, title, text }
usageIdeas[]       → 3 string panduan penggunaan
```

**State Management:**  
- `activeImageId` — React `useState` untuk mengontrol gambar galeri yang aktif

---

## 7. Panduan Visual & Desain

### Palet Warna
| Token | Penggunaan |
|-------|-----------|
| `primary` (Merah Marun) | Harga, badge, CTA sekunder, aksen |
| `secondary` (Hijau) | CTA primer "Beli di Shopee" |
| `forest` (Hijau Tua) | Headline, background section gelap |
| `cream` | Teks pada background gelap |
| `white / slate` | Background utama, teks body |

### Tipografi
- **Heading:** Font black (900), tracking tight, ukuran responsif (4xl → 6xl)
- **Body:** Font regular/medium, slate-600, leading relaxed
- **Label:** Font black, uppercase, tracking widest, ukuran 10-11px

### Komponen Visual
- **Border radius:** `2rem` (kartu besar), `1.5rem` (kartu medium), `2xl` (tombol)
- **Shadow:** Multi-layer shadow dengan warna brand (`shadow-primary/10`)
- **Hover:** `hover:-translate-y-1` atau `hover:-translate-y-2` dengan `transition-all`
- **Background efek:** Blur gradient (`blur-3xl`), mesh pattern, radial gradients

### Responsivitas
| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 768px) | Single column, gambar di atas, info di bawah |
| Tablet (768px - 1024px) | Grid 2 kolom untuk spesifikasi |
| Desktop (> 1024px) | 2 kolom utama: galeri (kiri) + info produk (kanan) |

---

## 8. Alur Pengguna (User Flow)

```
┌─────────────────────────┐
│  Pengguna Membuka       │
│  /products              │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Melihat Hero:          │
│  Gambar + Harga + CTA   │
│  (Above the Fold)       │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Klik Thumbnail?        │──── Ya ──→ Gambar utama berubah
│  (Opsional)             │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Scroll: Ringkasan      │
│  Spesifikasi & Cara     │
│  Penggunaan             │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Scroll: Manfaat Utama  │
│  3 Benefit Cards        │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Scroll: Trust Section  │
│  Statistik + Jaminan    │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│  Closing CTA            │──── Klik ──→ Shopee / WhatsApp
│  Beli / Konsultasi      │
└─────────────────────────┘
```

---

## 9. Batasan (Scope)

### ✅ Dalam Cakupan
- Halaman statis single-product tanpa backend
- Galeri gambar interaktif dengan local state
- CTA mengarah ke Shopee dan WhatsApp (external link)
- Responsif untuk mobile, tablet, dan desktop
- Konsisten dengan design system TIWARA

### ❌ Di Luar Cakupan
- Keranjang belanja (cart) aktif
- Alur checkout di dalam situs
- Integrasi API / backend
- Varian produk atau SKU berbeda
- Sistem ulasan/review pengguna
- Fungsi pencarian produk

---

## 10. Koneksi dengan Halaman Lain

| Halaman | Hubungan |
|---------|----------|
| **Home** (`/`) | Tombol "Jelajahi Produk" di hero Home mengarah ke `/products` |
| **Traceability** (`/traceability`) | Link "Cek Bukti Ilmiah" memungkinkan pengguna memverifikasi batch produk |
| **Navbar** | Link navigasi "PRODUK" mengarah ke halaman ini |

---

## 11. Kriteria Penerimaan (Acceptance Criteria)

- [ ] Halaman hanya menampilkan **satu produk** (Bubuk Bawang Tiwai)
- [ ] **Tidak ada** elemen grid multi-produk atau filter kategori
- [ ] Nama produk, harga (Rp 85.000), dan CTA terlihat di **above the fold** (desktop)
- [ ] Galeri gambar berfungsi: klik thumbnail mengubah gambar utama
- [ ] Semua 7 section tersusun sesuai urutan yang didefinisikan
- [ ] Tombol CTA primer mengarah ke **Shopee**
- [ ] Tombol CTA sekunder mengarah ke **WhatsApp Business**
- [ ] Layout responsif: mobile single-column, desktop two-column
- [ ] Konsisten dengan palet warna dan design system TIWARA
- [ ] Tidak ada duplikasi konten dengan halaman Home

---

## 12. Catatan Pengembangan

### Status Implementasi Saat Ini

| Section | Status | Catatan |
|---------|--------|---------|
| Product Hero | ✅ Selesai | Galeri interaktif + harga + CTA sudah aktif |
| Ringkasan Produk | ✅ Selesai | Quick specs + cara penggunaan |
| Manfaat Utama | ✅ Selesai | 3 benefit cards di background forest |
| Trust & Assurance | ✅ Selesai | Statistik + 3 trust points |
| Closing CTA | ✅ Selesai | Gradient banner + 2 tombol |
| Footer | ✅ Selesai | Logo + navigasi minimal |

### Rekomendasi Peningkatan (Opsional untuk Iterasi Berikutnya)
1. **Tambahkan harga coret** (harga sebelum diskon) untuk meningkatkan urgensi
2. **Tambahkan badge sertifikasi** (P-IRT, Halal, BPOM) jika sudah tersedia
3. **Integrasikan link Traceability** langsung dari halaman produk
4. **Tambahkan section FAQ** untuk menjawab pertanyaan umum
5. **Optimasi gambar:** Gunakan format WebP dan lazy loading untuk performa
