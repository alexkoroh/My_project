function beratBadanPria (tinggi){
    let ideal = (tinggi - 100) - (tinggi -100) * 0.1
return `${ideal} Kg`;    
}

//! Fungsi menghitung berat badan ideal wanita
function beratBadanWanita(tinggi){
    let ideal = (tinggi - 100) - (tinggi -100) * 0.15
    return `${ideal} Kg`;    
}

module.exports = {beratBadanPria, beratBadanWanita}


//! Buat ini dua file di dalam datu folder...truss nnti non jalankankan yang app.js.....OK   :)  :) :)





