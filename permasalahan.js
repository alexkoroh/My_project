function beratBadanPria (tinggi){
    let ideal = (tinggi - 100) - (tinggi -100) * 0.1   
     return `Pria =  ${ideal} Kg`;    

}

//! Fungsi menghitung berat badan ideal wanita
function beratBadanWanita(tinggi){
    let ideal = (tinggi - 100) - (tinggi -100) * 0.15
    return `Wanita = ${ideal} Kg`;    
}



//!Fungsi pemilihan.....
function pemilihan(jenis,tinggi){
    var pilih ;
    if(jenis == 1){
        pilih = beratBadanPria(tinggi)
        return pilih;
    }else if(jenis == 2){
        var pilih2;
        pilih2 = beratBadanWanita(tinggi)
            return pilih2;
        
    }else if(jenis == 3){
        return(`Eror...Lu Lgbt Anjir`);
    }
    else{
        return `Erorr`;
    }
}


module.exports = {beratBadanPria, beratBadanWanita, pemilihan}


//! Buat ini dua file di dalam datu folder...truss nnti non jalankankan yang app.js.....OK



