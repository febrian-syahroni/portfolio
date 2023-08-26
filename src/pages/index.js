import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Febrian Syahroni</title>
      </Head>
      {/* Hero Section Start */}
      <section id="home" className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua, Perkenalkan saya <span className="block font-bold text-orange-500 text-4xl lg:text-5xl">Febrian Syahroni</span>
              </h1>
              <h2 className="font-medium text-dark mb-4">
                <span className="text-secondary lg:text-2xl">Fullstack Web Developer</span>
              </h2>
              <p className="font-medium text-dark mb-10 leading-relaxed">
                Pada bagian front-end, saya menggunakan React.js untuk membangun antarmuka pengguna yang responsif dan ramah pengguna. Saya merancang berbagai komponen UI yang memungkinkan pengguna untuk dengan mudah menjelajahi kelas-kelas, melacak kemajuan mereka, dan berinteraksi dengan instruktur dan sesama peserta.
                <br />
                <br />
                Di sisi back-end, saya memanfaatkan Node.js dan Express untuk membangun server yang mampu mengelola registrasi pengguna, autentikasi, serta pengelolaan konten kelas. Saya juga mengintegrasikan basis data MongoDB untuk menyimpan informasi pengguna, konten kursus, dan data kemajuan.
              </p>
              <Link href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Kami</Link>
            </div>
            <div className="w-full self-end px-1 lg:w-1/2">
              <div className="relative lg:right-0">
                <Image src="/assets/foto-formal.png" width={400} height={400} alt="foto hero" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-3xl text-dark mb-5 max-w-md lg:text-4xl">Yuk, bangun website idamanmu bersama saya!</h2>
              <p className="font-medium text-base text-dark max-w-xl lg:text-lg">
                Portofolio ini mencerminkan kompetensi saya sebagai Fullstack Web Developer dalam merancang, mengembangkan, dan mendeploy solusi web end-to-end yang kompleks dan bermanfaat bagi pengguna.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:pt-10">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">Mari Berteman</h3>
              <p className="font-medium text-base text-dark">
                Tantangan yang dihadapi meliputi pengembangan sistem penjadwalan kelas yang fleksibel, integrasi pembayaran online yang aman, dan pembuatan algoritma pelacakan kemajuan pembelajaran yang akurat. Saya berhasil mengatasi tantangan ini dengan merancang dan mengimplementasikan solusi yang efisien dan efektif.
              </p>
              <br />

              {/* Icons Sosmed */}
              <div className="flex items-center">

                {/* Email */}
                <Link href="#" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-dark text-dark hover:bg-primary hover:text-white">
                  <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                </Link>

                {/* Whatsapp */}
                <Link href="#" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-dark text-dark hover:bg-primary hover:text-white">
                  <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </Link>

                {/* Linkedin */}
                <Link href="#" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-dark text-dark hover:bg-primary hover:text-white">
                  <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
              <p className="font-medium text-md text-dark">
                Saya senang dengan tantangan baru dan kesempatan untuk terus belajar. Jika Anda mencari pengembang web yang dapat memberikan solusi komprehensif dari depan hingga belakang, saya siap berkolaborasi dengan Anda.
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img className="w-full" src="/assets/mentoring.jpg" alt="CV" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Contoh Portfolio
              </h3>
              <p className="font-medium text-base text-dark">
                Mengembangkan platform manajemen konten responsif dengan menggunakan React sebagai frontend dan Node.js sebagai backend. Proyek ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus konten dengan antarmuka yang intuitif.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img className="w-full" src="/assets/mentoring.jpg" alt="CV" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Contoh Portfolio
              </h3>
              <p className="font-medium text-base text-dark">
                Mengembangkan platform manajemen konten responsif dengan menggunakan React sebagai frontend dan Node.js sebagai backend. Proyek ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus konten dengan antarmuka yang intuitif.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img className="w-full" src="/assets/mentoring.jpg" alt="CV" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Contoh Portfolio
              </h3>
              <p className="font-medium text-base text-dark">
                Mengembangkan platform manajemen konten responsif dengan menggunakan React sebagai frontend dan Node.js sebagai backend. Proyek ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus konten dengan antarmuka yang intuitif.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img className="w-full" src="/assets/mentoring.jpg" alt="CV" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Contoh Portfolio
              </h3>
              <p className="font-medium text-base text-dark">
                Mengembangkan platform manajemen konten responsif dengan menggunakan React sebagai frontend dan Node.js sebagai backend. Proyek ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus konten dengan antarmuka yang intuitif.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img className="w-full" src="/assets/mentoring.jpg" alt="CV" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Contoh Portfolio
              </h3>
              <p className="font-medium text-base text-dark">
                Mengembangkan platform manajemen konten responsif dengan menggunakan React sebagai frontend dan Node.js sebagai backend. Proyek ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus konten dengan antarmuka yang intuitif.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Kontak Section Start */}
      <section className="pt-36 pb-32">
        <div className="container"></div>
      </section>
      {/* Kontak Section End */}
    </>
  )
}