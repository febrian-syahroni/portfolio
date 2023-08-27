import React from 'react'; // Import React untuk komponen React
import { useState } from 'react'; // Import useState untuk mengelola state komponen

export default function ContactForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqGFxJ0D9CJT0Sc2v1udvYJ2PTsv1PFGxLJ7AuQO3gtjibNpv8i_wk6_ZNA60pTPdo/exec'; // Ganti dengan URL skrip yang benar
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then(response => {
        if (response.ok) {
          console.log('Form berhasil dikirim ke Google Sheet');
        } else {
          console.error('Terjadi kesalahan saat mengirim formulir');
        }
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close border text-white" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label className="text-base font-bold text-dark" htmlFor="nama">Nama</label>
            <input
              name="nama"
              type="text"
              value={formData.nama}
              onChange={handleChange}
              className="p-3 w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label className="text-base font-bold text-dark" htmlFor="nama">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label className="text-base font-bold text-dark" htmlFor="message">Pesan</label>
            <textarea name="pesan" type="text" className="p-3 h-32 w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          {/* Bagian lain dari formulir (email, pesan) serupa */}
          <div className="w-full px-4">
            <button type="submit" className="text-base font-semibold bg-kedua py-3 px-8 rounded-full text-white w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
            <button className="d-none text-base font-semibold bg-emerald-400 py-3 px-8 rounded-full text-white w-full" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Loading...</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
