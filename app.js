// require('dotenv').config();

const express = require('express');
const app = express();
const User = require('./Routes/User');
const siswa = require('./Routes/siswa');
const guru = require('./Routes/guru');
const olahraga = require('./Routes/Olahraga');
const karyawan = require('./Routes/karyawan');
const pelajar = require('./Routes/pelajar');
const pelajaran = require('./Routes/pelajaran');
const sekolah = require('./Routes/sekolah');
const Kepalasekolah = require('./Routes/Kepala sekolah');
// const nilai = require('./Routes/ nilai');


//app.use(express.json());

app.use(User,siswa,guru,olahraga,karyawan,pelajar,pelajaran,sekolah,Kepalasekolah);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})