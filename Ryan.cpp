#include <iostream>
#include <string>
#include <stdio.h>
#include <cstdio>

using namespace std;

int main(){

    

    string statusSekolah ;
    string statusPekerjaan ;
    int umur , pendapatanPerbulan, jumlahTanggungan, biayaHidup;
    char nama[50];


    cout << "Masukan Umur anda : ";
    cin >> umur;

    if(umur >= 18){
        cout <<"Masukan Status Pekerjaan Anda : ";
        cin >> statusPekerjaan;

        if(statusPekerjaan == "sudah_bekerja"){

            cout <<"Masukan pendapatan perbulan : ";
            cin >> pendapatanPerbulan;
            cout <<"Masukan Jumlah Tanggungan : ";
            cin >> jumlahTanggungan;

            
            biayaHidup = pendapatanPerbulan / jumlahTanggungan;

            if(biayaHidup < 50000){
                cout << "Anda tergolong Penduduk Kurang Mampu";
            }else{
                cout << "anda tergolong penduduk Mampu / Tingkat Menengah Keatas";
            }
        }else{
                cout << "Anda tergolong Penduduk Kurang Mampu";
            
        }

    }else{
        cout << "Masukan status sekolah anda : ";
        cin >> statusSekolah;
        if(statusSekolah == "masih_sekolah"){
                cout << "anda tergolong penduduk Mampu / Tingkat Menengah Keatas";
        }else{
            cout <<"Anda tergolong Penduduk Kurang Mampu";

        }
    }
   

}