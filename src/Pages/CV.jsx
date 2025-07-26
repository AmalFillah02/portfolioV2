// Pages/CV.jsx
import React from "react";
import Navbar from "../components/Navbar2";
import AnimatedBackground from "../components/Background";
import { Download, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const CV = () => {
  const navigate = useNavigate(); // ← inisialisasi navigate

  return (
    <>
      <Navbar />
      <AnimatedBackground />

      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Curriculum Vitae
        </h1>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-4xl w-full">
          <img
            src="/CVku.png"
            alt="CV Ahsanul Amal Fillah"
            className="w-full h-auto rounded-lg border border-gray-300"
          />
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="/CVku.png"
            download
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

          <button
            onClick={() => {
              if (window.history.length > 2) {
                navigate(-1);
              } else {
                navigate("/"); // Ganti sesuai rute utama, misalnya ke halaman profilmu
              }
            }}
            className="w-full sm:w-auto px-6 py-3 border border-purple-500 text-purple-500 rounded-lg shadow-md hover:bg-purple-100 hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </div>
    </>
  );
};

export default CV;
