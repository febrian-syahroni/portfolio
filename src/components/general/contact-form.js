import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqGFxJ0D9CJT0Sc2v1udvYJ2PTsv1PFGxLJ7AuQO3gtjibNpv8i_wk6_ZNA60pTPdo/exec';

  const btnKirimRef = useRef(null);
  const btnLoadingRef = useRef(null);

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    btnLoadingRef.current.classList.toggle("d-none");
    btnKirimRef.current.classList.toggle("d-none");
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then(response => {
        if (response.ok) {
          btnLoadingRef.current.classList.toggle("d-none");
          btnKirimRef.current.classList.toggle("d-none");
          setShowAlert(true);
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

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
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
            <label className="text-base font-bold text-dark" htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label className="text-base font-bold text-dark" htmlFor="pesan">Pesan</label>
            <textarea
              name="pesan"
              type="text"
              value={formData.pesan}
              onChange={handleChange}
              className="p-3 h-32 w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          {/* Anda dapat menambahkan bagian lain dari formulir (seperti email dan pesan) di sini */}
        </div>
        <div className="w-full px-4">
          <button type="submit" className="btn-kirim text-base font-semibold bg-kedua py-3 px-8 rounded-full text-white w-full hover:opacity-80 hover:shadow-lg transition duration-500">
            Kirim
          </button>
          <button className="d-none btn-loading text-base font-semibold bg-emerald-400 py-3 px-8 rounded-full text-white w-full" type="button" disabled>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
          </button>
        </div>
      </form>

      <div className={`my-alert alert alert-success alert-dismissible fade show ${showAlert ? '' : 'd-none'}`} role="alert">
        <strong>Terima kasih!</strong> Pesan anda sudah terkirim.
        <button className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
      </div>
    </>
  );
}
