var http = require('http')
var qs = require('querystring')
var ideal = require('./permasalahan')





//! Bagian pembuatan server
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    if(request.url =='/'){
        switch (request.method){
            case'GET' :
            response.end(
                '<h2>Demo Penanganan Form</h2>' +
                '<form action ="/" method="post">'+
                'Nama:<br>'+
                '<input name ="nama" type ="text"><br><br>'+
                'Alamat:<br>'+
                '<input name ="Alamat" type ="text"><br><br>'+
                'Tempat lahir:<br>'+
                '<input name ="Tempat lahir" type ="text"><br><br>'+
                'Tanggal lahir:<br>'+
                '<input name ="Tanggal lahir" type ="text"><br><br>'+
                'Telp:<br>'+
                '<input name ="Telp" type ="number"><br><br>'+
                'Email:<br>'+
                '<input name ="email" type ="email"><br><br>'+
                'Tinggi:<br>'+
                '<input name ="Tinggi" type ="number"><br><br>'+
                '<input name="btnKirim" type="submit" value="Kirim">'+
                '</form>'


            );
            break;
            case'POST':
            var body='';
            request.on('data',function(data){body += data})
            request.on('end',function(){
                var form = qs.parse(body);
                response.end(
                    'Data yang dikirim:<br><br>'+
                    'Nama         :'+form['nama']+'<br><br>'+
                    'Alamat       :'+form['Alamat']+'<br><br>'+
                    'Tempat lahir :'+form['Tempat lahir']+'<br><br>'+
                    'Tanggal lahir:'+form['Tanggal lahir']+'<br><br>'+
                    'Telp         :'+form['Telp']+'<br><br>'+
                    'Email        :'+form['email']+'<br><br>'+
                    'Tinggi       :'+form['Tinggi']+'<br><br>'+
                    'Berat Ideal Pria   :'+ ideal.beratBadanPria(eval(form['Tinggi'])) +'<br><br>'+
                    'Berat Ideal Wanita :'+ ideal.beratBadanWanita(eval(form['Tinggi']))
                )
            })
            break;
            default:
                response.end('Method pengiriman tidak dikenal')
        }
    }
})
server.listen(3000);

