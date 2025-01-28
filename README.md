# Movie App

Aplikasi ini digunakan untuk menampilkan daftar film mulai dari upcoming hingga top rated. Pengguna dapat melihat informasi detail mengenai film, termasuk casting, rating, crew, dan sinopsis film. Aplikasi ini menggunakan API dari [Hemoviedb.org](https://www.themoviedb.org/) untuk mendapatkan data film.

## Teknologi yang Digunakan

- **Next.js** (TypeScript)
- **TailwindCSS**
- **HeroUI**
- **React Query** (TanStack)
- **Axios**

## Fitur

- Menampilkan daftar film upcoming, popular, dan top rated.
- Menampilkan informasi detail tentang film, termasuk casting, rating, crew, dan sinopsis.
- Menggunakan React Query untuk pengambilan data yang efisien.

## Instalasi dan Menjalankan Aplikasi Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di lingkungan lokal:

### 1. Clone Repository

```bash
git clone https://github.com/username/movie-app.git
cd movie-app
```

### 2. Instalasi Dependensi

Pastikan kamu memiliki Node.js dan npm yang terinstall di sistem. Kemudian jalankan perintah berikut untuk menginstal dependensi aplikasi:

```bash
npm install
```

### 3. Konfigurasi API Key

Untuk mengakses data dari API Hemoviedb.org, kamu perlu mendaftar dan mendapatkan API key. Setelah mendapatkan API key, buat file .env.local di root project dan tambahkan key berikut:

```bash
ACCESS_TOKEN=your_api_key_here
```

### 4. Menjalankan Aplikasi

Setelah menginstal dependensi dan menambahkan API key, kamu bisa menjalankan aplikasi secara lokal dengan perintah berikut:

```bash
npm run dev
```

Akses aplikasi di browser melalui http://localhost:3000.

### Demo

Untuk mencoba aplikasi ini secara langsung, kamu bisa mengunjungi link demo berikut:

[Movie List - Vercel](https://movie-list-six-coral.vercel.app/) 

