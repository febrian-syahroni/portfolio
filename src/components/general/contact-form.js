import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqGFxJ0D9CJT0Sc2v1udvYJ2PTsv1PFGxLJ7AuQO3gtjibNpv8i_wk6_ZNA60pTPdo/exec';

  const btnKirimRef = useRef(null);
  const btnLoadingRef = useRef(null);
  const myAlertRef = useRef(null);

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    btnLoadingRef.current.classList.toggle("d-none");
    btnKirimRef.current.classList.toggle("d-none");
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then(response => {
        if (response.ok) {
          btnLoadingRef.current.classList.toggle("d-none");
          btnKirimRef.current.classList.toggle("d-none");
          myAlertRef.current.classList.remove("d-none");
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
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <div className="w-full lg:w-2/3 lg:mx-auto">      
          <div className="w-full px-4 mb-8">
            <div className="d-none my-alert alert alert-success alert-dismissible fade show" role="alert">
              <strong>Terima kasih!</strong> Pesan anda sudah terkirim.
              <button className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>              
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
            <button type="submit" className="btn-kirim text-base font-semibold bg-kedua py-3 px-8 rounded-full text-white w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
            <button className="d-none btn-loading text-base font-semibold bg-emerald-400 py-3 px-8 rounded-full text-white w-full" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Loading...</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
