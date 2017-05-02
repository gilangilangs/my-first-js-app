//menyimpan kunci jawaban, dari 3 soal yang akan dijadian sebuah object
var kunci1 =  {
	jawaban1 : 'Ir. Sukarno',
	jawaban2 : 'Ga tau',
	jawaban3 : 'Nyerah',  
	jawaban4: 'Pas'
};

var kunci2 =  {
	jawaban1 : '2',
	jawaban2 : '3',
	jawaban3 : '4',  
	jawaban4 : '5'
};
var kunci3 = {
	jawaban1 : 'Agustus',
	jawaban2 : '17an',
	jawaban3 : '1945',  
	jawaban4: '17 Agustus 1945'
};

//kunci jawaban dijadi sebuah array
var kunciarr = [kunci1, kunci2, kunci3];

//menyimpan sebuah object yang akan menampilkan soal, dan menyimpan inputan dari pengguna
function soal() {
	this.soal1 = function () {
		alert('Presiden pertama di Indonesia?');
        key = prompt('a. '+ kunciarr[i].jawaban1 + '/ b. '+kunciarr[i].jawaban2+'/ c. '+kunciarr[i].jawaban3+'/ d. '+kunciarr[i].jawaban4);
		
  }
  this.soal2 = function() {
		alert('1+1 = ?');
        key = prompt('a. '+ kunciarr[i].jawaban1 + '/ b. '+kunciarr[i].jawaban2+'/ c. '+kunciarr[i].jawaban3+'/ d. '+kunciarr[i].jawaban4);
		
  }
  this.soal3 = function() {
		alert('Kapan Indonesia merdeka?');
        key = prompt('a. '+ kunciarr[i].jawaban1 + '/ b. '+kunciarr[i].jawaban2+'/ c. '+kunciarr[i].jawaban3+'/ d. '+kunciarr[i].jawaban4);
		
  }
}

var score = 0;
var no1 = new soal();
var no2 = new soal();
var no3 = new soal();

//perulangan untuk memanggil object
for ( var i = 0; i <= kunciarr.length; ) {
	no1.soal1();
	if ( key === 'a') {
		alert('anda benar');
		score = score + 10;
        i++;
	} else {
        alert('anda salah');
       }
	
if ( i === 1 ) {
	alert("score semetara anda = "+score);
	var lanjut = prompt('anda ingin lanjut? y/n');
	if ( lanjut === 'y' ) {
		no2.soal2();
		if ( key === 'a') {
          alert('anda benar');      
          score = score + 10;
          alert('score sementara anda = '+score);
          i++;
		} else {
            alert('anda salah');		
           }
	} 
} 
if ( i === 2 ) {
	var lanjut = prompt('anda ingin lanjut? y/n');
	if ( lanjut === 'y' ) {
		no2.soal3();
		if ( key === 'd') {
          alert('anda benar');      
          score = score + 10;
          alert('score sementara anda = '+score);
          i++;
		} else {
            alert('anda salah');		
           }
	} 
}   
alert('game selesai');  
i = kunciarr.length;	
}







  


