import {getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
    import {initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
const firebaseConfig = {
  apiKey: "AIzaSyCc1wHk5iGp2sjK730kCcPVo07WWjmfDSQ",
  authDomain: "insan-cermarlang.firebaseapp.com",
  projectId: "insan-cermarlang",
  storageBucket: "insan-cermarlang.appspot.com",
  messagingSenderId: "1069260701472",
  appId: "1:1069260701472:web:61ce42d34ba2eb27fba145",
  measurementId: "G-DNS9DFZZZN"
};

// inisialisasi firebase 
const aplikasi = initializeApp
(firebaseConfig)
const basisdata = getFirestore(aplikasi)
