var http = require('http')
var qs = require('querystring')
var ideal = require('./permasalahan')



//! Bagian pembuatan server....
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    
    if(request.url =='/'){
        switch (request.method){
            case'GET' :
            response.end(
               ' <body text=#0D1318 bgcolor=#008080>' +
                '<h2>Mengetahui berat badan ideal, jika di ketahui tinggi (Pria/Wanita/Lgbt)</h2>' +
                '<form action ="/" method="post">'+

                'Pria / Wanita :<br>'+
                '<select name = "Jenis">'+
                '<option value ="1">Pria</option>'+
                '<option value ="2">Wanita</option>'+
                '<option value ="3">Lgbt</option>'+
                '</select><br><br>'+

                'Nama:<br>'+
                '<input name ="nama" type ="text"><br><br>'+

                'Alamat:<br>'+
                '<input name ="Alamat" type ="text"><br><br>'+

                'Tempat lahir:<br>'+
                '<input name ="Tempat lahir" type ="text"><br><br>'+

                'Tanggal lahir:<br>'+
                '<input name ="Tanggal lahir" type ="date"><br><br>'+

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
                    '<h2 style="background-color:Chartreuse;">Hasil Rekam Data</h2>' +
                   ' <table border="1">' +
                  
      ` <tr>` +
       ` <td>Nama :</td>`+
       ` <td>` +form["nama"] +`</td>`+
        
      `</tr>`+
      `<tr>` +
       ` <td>Alamat :</td>`+
       ` <td>` +form["Alamat"] +`</td>`+
        
     `</tr>`+
     ` <tr>` +
       ` <td>Tempat Lahir :</td>`+
       ` <td>` +form["Tempat lahir"] +`</td>`+
        
     `</tr>`+
     ` <tr>` +
       ` <td>Tanggal Lahir :</td>`+
       ` <td>` +form["Tanggal lahir"] +`</td>`+
        
    `</tr>`+
    ` <tr>` +
       ` <td>Telp :</td>`+
       ` <td>` +form["Telp"] +`</td>`+
        
     `</tr>`+
     ` <tr>` +
       ` <td>Email :</td>`+
       ` <td>` +form["email"] +`</td>`+
        
    `</tr>`+
    
    ` <tr>` +
       ` <td>Tinggi :</td>`+
       ` <td>` +form["Tinggi"] + `</td>`+
        
   
     '</tr>' +
    
        
    
    `</table>` + '<br><br>' +
                        'Berat badan Ideal  ' + ideal.pemilihan(eval(form['Jenis']),eval(form['Tinggi']),eval(form['Nama']))
                    
                )
            })
            break;
            default:
                response.end('Method pengiriman tidak dikenal')
        }
    
}
})

server.listen(3000);
console.log('Sedang berjalan di port 3000');

