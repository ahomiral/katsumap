	var shopinfo = [
		{ pos: [34.768810, 134.842289], name: "いろはーず", id: 'iroha', html: '<td class="name"><a href=https://59612b63555940f6856a83996f0f594e.vfs.cloud9.ap-southeast-1.amazonaws.com/katsumap/katsumain/katumeshi/page.php?name=irohazu" target="_blank">いろはーず<a></td><td class="price">650</td><td class="price1">1300</td><td class="time">11:00~15:00<br>17:30~21:00</td>' }, { pos: [34.738959, 134.823688], name: "本家かつめし亭", id: 'honke', html: '<td class="name"><a href="http://katumesitei.com/" target="_blank">本家かつめし亭</a></td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:00~21:00</td>' }, { pos: [34.748093, 134.835403], name: "ラッキー食堂", id: 'luck', html: '<td class="name"><a href="http://www.katsumeshi.com/cat2/320/" target="_blank">ラッキー食堂</a></td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:30~15:00<br>17:00~21:00</td>' }, { pos: [34.767290, 134.835423], name: "丸万 本店", id: 'maruman', html: '<td class="name"><a href="https://tabelog.com/hyogo/A2804/A280402/28007746/dtlrvwlst/B146105903/" target="_blank">丸万 本店</a></td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~19:00</td>' }, { pos: [34.767472, 134.837501], name: "エデン", id: 'eden', html: '<td class="name"><a href="http://www.katsumeshi.com/cat2/330/" target="_blank">エデン</a></td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~19:00</td>' }, { pos: [34.762732, 134.874965], name: "Coffee House Rocky", id: 'Coffee', html: '<td class="name"><a href="https://tabelog.com/hyogo/A2804/A280402/28005418/" target="_blank">Coffee House Rocky</a></td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:30~15:00<br>17:00~21:00</td>' }, { pos: [34.764898, 134.834558], name: "ロビンフッド", id: 'robin', html: '<td class="name"><a href="https://tabelog.com/hyogo/A2804/A280402/28014651/" target="_blank">ロビンフッド</a></td><td class="price">500</td><td class="price1">999</td> 	<td class="time">9:00～20:00(L.O19:00)<br> [月] 11:30～15:00</td>' }, { pos: [34.766878, 134.788209], name: "一平", id: 'ippei', html: '<td class="name"><a href="https://tabelog.com/hyogo/A2804/A280402/28005857/" target="_blank">一平</a></td><td class="price">500</td><td class="price1">999</td><td class="time">10:00～21:00</td>' }, { pos: [34.763624, 134.829791], name: "一勝", id: 'ikkatsu', html: '<td class="name">一勝</td><td class="price">500</td><td class="price1">999</td><td class="time">11:00~20:00</td>' }, { pos: [34.755395, 134.841353], name: "喫茶ビタースィート", id: 'sweet', html: '<td class="name">喫茶ビタースィート</td><td class="price">500</td><td class="price1">999</td><td class="time">08:00~19:30</td>' }, { pos: [34.765952, 134.827886], name: "味季節料理りんどう", id: 'rindo', html: '<td class="name">味季節料理りんどう</td><td class="price">900</td><td class="price1">7200</td><td class="time">11:30～14:30（LO 14:00）<br>17:30～21:30（LO 21:00）</td>' }, { pos: [34.806133, 134.887055], name: "法楽屋", id: 'hogaku', html: '<td class="name">法楽屋</td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:00～13:30(L.O13:00)</td>' }

	];


	var showInTable = [];
	for (var i = 0; i < shopinfo.length; i++) {
		showInTable[i] = true;
	}


	window.onload = function() {
		var ymap = new Y.Map("map");
		ymap.drawMap(new Y.LatLng(34.757912, 134.839218), 15, Y.LayerSetId.NORMAL);
		var control = new Y.LayerSetControl();
		ymap.addControl(control);
		var zoom = new Y.SliderZoomControlHorizontal;
		ymap.addControl(zoom);

		for (var i = 0; i < shopinfo.length; i++) {
			var marker = new Y.Marker(new Y.LatLng(shopinfo[i].pos[0], shopinfo[i].pos[1]));
			ymap.addFeature(marker);
			var showTooltip = (function(x) {
				return function() {
					var ll = this.getLatLng();
					var name = new Y.Label(ll, shopinfo[x].name);
					ymap.addFeature(name);

					var fin = function() {
						ymap.removeFeature(name);
					}
					this.bind('mouseout', fin);
				};
			})(i);
			var toggleTable = (function(x) {
				return function() {
					if (showInTable[x]) {
						var iroha = document.getElementById(shopinfo[x].id);
						iroha.innerHTML = shopinfo[x].html;
						showInTable[x] = false;
					}
					else {
						var iroha = document.getElementById(shopinfo[x].id);
						iroha.innerHTML = ' ';
						showInTable[x] = true;
					}
				};
			})(i);
			marker.bind('click', toggleTable);
			marker.bind('mouseover', showTooltip);
		}

	}


	function i18n() {
		switch (document.selbox.language.selectedIndex) {
			case 0:
				var name = document.getElementById('name');
				name.innerHTML = '店名';
				var min = document.getElementById('min');
				min.innerHTML = '最低額';
				var max = document.getElementById('max');
				max.innerHTML = '最高額';
				var time = document.getElementById('time');
				time.innerHTML = '営業時間';
				break;
			case 1:
				var name = document.getElementById('name');
				name.innerHTML = 'Restaurant Name';
				var min = document.getElementById('min');
				min.innerHTML = 'Min Price';
				var max = document.getElementById('max');
				max.innerHTML = 'Max Price';
				var time = document.getElementById('time');
				time.innerHTML = 'Business Hours';
				break;
			case 2:
				var name = document.getElementById('name');
				name.innerHTML = '商店名称';
				var min = document.getElementById('min');
				min.innerHTML = '最低金额';
				var max = document.getElementById('max');
				max.innerHTML = '最高金额';
				var time = document.getElementById('time');
				time.innerHTML = '营业时间';
				break;
		}
	}
	