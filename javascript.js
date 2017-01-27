$("#test").click(function(e){
  e.preventDefault();
  console.log("fuck this shit");
});
$("#moreOne").click(function(e){
  writeOne();
});
$("#moreTwo").click(function(e){
  writeTwo();
});
$("#moreThree").click(function(e){
  writeThree();
});
$("#moreFour").click(function(e){
  writeFour();
});
function writeOne(){
  $("#one .panel").html(
    '<ul class="list-group"><li class="list-group-item">Ekran Boyutu (Inch)	18,5</li><li class="list-group-item">Önerilen Çözünürlük	1366 X 768</li><li class="list-group-item">Tepki Süresi (ms.)	5</li><li class="list-group-item">Kontrast Oranı	2000:1</li><li class="list-group-item">Bağlantı Şekli	ANALOG (VGA),D-SUB</li><li class="list-group-item">Duvara Asılabilme ( VESA )100X100 MM</li><li class="list-group-item">Renk	PARLAK SIYAH</li><li class="list-group-item">Nokta Aralığı (mm)	0,3</li><li class="list-group-item">Maximum Çözünürlük	1366X768</li></ul>');
}
function writeTwo(){
  $("#two .paneltwo").html(
    '<ul class=list-group><li class=list-group-item>Ekran Boyutu (Inch)	19,5<li class=list-group-item>Önerilen Çözünürlük	1600 x 900<li class=list-group-item>Tepki Süresi (ms.)	5<li class=list-group-item>Kontrast Oranı 5.000.000:1<li class=list-group-item>Bağlantı Şekli	ANALOG (VGA),D-SUB<li class=list-group-item>Duvara Asılabilme ( VESA )100X100 MM<li class=list-group-item>Renk	PARLAK SIYAH<li class=list-group-item>Ekran Renk Sayısı	16.7 Milyon<li class=list-group-item>Ağırlık	2,1 kg</ul>'
  );
}
function writeThree(){
  $("#three .panel").html(
'<ul class=list-group><li class=list-group-item>Ekran Boyutu (Inch)	21,5<li class=list-group-item>Önerilen Çözünürlük	Full HD (1920 x 1080)<li class=list-group-item>Tepki Süresi (ms.)	5<li class=list-group-item>Kontrast Oranı 700:1 MNT<li class=list-group-item>Bağlantı Şekli	Analog + HDMI<li class=list-group-item>Duvara Asılabilme ( VESA )100X100 MM<li class=list-group-item>Görüş Açısı (Yatay/Dikey)	90/65<li class=list-group-item>Boyutlar	503,37x47,98x311,1 mm</ul>'
);
}
function writeFour(){
  $("#four .panelfour").html('<ul class=list-group><li class=list-group-item>Ekran Boyutu (Inch)	21,5<li class=list-group-item>Önerilen Çözünürlük	Full HD (1920 x 1080)<li class=list-group-item>Tepki Süresi (ms.)	4<li class=list-group-item>Kontrast Oranı 50.000.000:1<li class=list-group-item>Bağlantı Şekli	Analog + HDMI<li class=list-group-item>Duvara Asılabilme ( VESA )100X100 MM<li class=list-group-item>Görüş Açısı (Yatay/Dikey)	<u>178/178</u><li class=list-group-item>Boyutlar	500x382x150 mm</ul>');
}
