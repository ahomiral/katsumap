<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
	<link rel="stylesheet" href="katsumain.css">
	<script type="text/javascript" src="katsumain.js"></script>
</head>
<body>
<header>
    <div class="main_img"></div>
</header>

<div align="right">
<form name="selbox">
<select name="language" size="1" class="langage" onchange="english()">
	<option value="日本語">日本語</option>
	<option value="ENGLISH">ENGLISH</option>
	<option value="汉语">汉语</option>
</select>
</form>
</div>

<div id="map" style="width:100%; height:700px"></div>

<script type="text/javascript" charset="utf-8" src="https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPW9SMm9WeXB4dDEzNiZzPWNvbnN1bWVyc2VjcmV0Jng9YzY-" ></script>

<div style="padding: 10px; margin-bottom: 10px; border: 1px;">

</div>
 
 
<div id="res">
<table align="center">
<thead>
  <tr>
    <th class="sort" data-sort="name" id="name" click="sort()">店名</th>
    <th class="sort" data-sort="price" id="min">最低額</th>
    <th class="sort" data-sort="price1" id="max">最高額</th>
    <th class="sort" data-sort="time" id="time">営業時間</th>
  </tr>
  </thead>  
  <tbody class="list">
  <tr id="iroha">
  <td class="name">いろはーず</td><td class="price">650</td><td class="price1">1300</td><td class="time">11:00~15:00<br>17:30~21:00</td>
  </tr>
  <tr id="honke">
  <td class="name">本家かつめし亭</td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:00~21:00</td>
  </tr>
  <tr id="luck">
  <td class="name">ラッキー食堂</td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:30~15:00<br>17:00~21:00</td>
  </tr>
  <tr id="maruman">
  <td class="name">丸万 本店</td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~19:00</td>
  </tr>
  <tr id="eden">
  '<td class="name">エデン</td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~19:00</td>
  </tr>
  <tr id="Coffee">
  <td class="name">Coffee House Rocky</td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:30~15:00<br>17:00~21:00</td>
  </tr>
  <tr id="robin">
  <td class="name">ロビンフッド</td><td class="price">500</td><td class="price1">999</td>   <td class="time">9:00～20:00(L.O19:00)<br> [月] 11:30～15:00</td>
  </tr>
   <tr id="ippei">
   <td class="name">一平</td><td class="price">500</td><td class="price1">999</td><td class="time">10:00～21:00</td>
  </tr>
  <tr id="ikkatsu">
  <td class="name">一勝</td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~20:00</td>
  </tr>
  <tr id="sweet">
  <td class="name">喫茶ビタースィート</td><td class="price">500</td><td class="price1">999</td><td class="time">08:00~19:30</td>
  </tr>
  <tr id="rindo">
  <td class="name">味季節料理りんどう</td><td class="price">900</td><td class="price1">7200</td><td class="time">11:30～14:30（LO 14:00）<br>17:30～21:30（LO 21:00）</td>
  </tr>
  <tr id="hogaku">
  <td class="name">法楽屋</td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:00～13:30(L.O13:00)</td>
  </tr>
  </tbody>
</table>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script>
  var options = {
    valueNames: ['name', 'price', 'price1', 'time']
  };
  var userList = new List("res", options);
  userList.sort( 'name', {order : 'asc' });
  var iroha = document.getElementById('iroha');
  iroha.innerHTML = '';
  var honke = document.getElementById('honke');
  honke.innerHTML = '';
  var luck = document.getElementById('luck');
  luck.innerHTML = '';
  var maruman = document.getElementById('maruman');
  maruman.innerHTML = '';
  var eden = document.getElementById('eden');
  eden.innerHTML = '';
  var coffee = document.getElementById('Coffee');
  coffee.innerHTML = '';
  var robin = document.getElementById('robin');
  robin.innerHTML = '';
  var ippei = document.getElementById('ippei');
  ippei.innerHTML = '';
  var ikkatsu = document.getElementById('ikkatsu');
  ikkatsu.innerHTML = '';
  var sweet = document.getElementById('sweet');
  sweet.innerHTML = '';
  var rindo = document.getElementById('rindo');
  rindo.innerHTML = '';
  var hogaku = document.getElementById('hogaku');
  hogaku.innerHTML = '';
</script>


<div align="center">
<h1>かつめしとは?</h1>
<img src="http://katumesitei.com/wp-content/uploads/2018/04/image_001.png">
<p>
ここ加古川のソウルフード、加古川市以外で提供している店舗は非常に少なく、<b class="main">加古川に訪れたときには、是非食べてほしい一品!</b><br>
約70年の歴史を持つかつめしは、<b class="main">「箸で気軽に食べることができる洋食」</b>をコンセプトに誕生しました。
ご飯とカツとデミグラスソースの取り合わせは最高よ！</p>
</div>

</body>
</html>