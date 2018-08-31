	var shopinfo = [{
			pos: [34.768810, 134.842289],
			name: "いろはーず",
			id: 'irohazu',
			priceMin: 650,
			priceMax: 1300,
			businessHour: '11:00~15:00<br>17:30~21:00',
		},
		{
			pos: [34.738959, 134.823688],
			name: "本家かつめし亭",
			id: 'honkekatumeshi',
			priceMin: 1000,
			priceMax: 1999,
			businessHour: '11: 00~21: 00',
			html: '<td class="name"><a href="http://katumesitei.com/" target="_blank">本家かつめし亭</a></td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:00~21:00</td>'
		},
		{
			pos: [34.748093, 134.835403],
			name: "ラッキー食堂",
			id: 'ruckyshokudo',
			priceMin: 1000,
			priceMax: 1999,
			businessHour: '11: 30~15: 00 <br> 17: 00~21: 00',
			html: '<td class="name"><a href="http://www.katsumeshi.com/cat2/320/" target="_blank">ラッキー食堂</a></td><td class="price">1000</td><td class="price1">1999</td><td class="time">11:30~15:00<br>17:00~21:00</td>'
		},
		{
			pos: [34.767290, 134.835423],
			name: "丸万 本店",
			id: 'maruman',
			priceMin: 500,
			priceMax: 999,
			businessHour: '11:00~19:00',
		},
		{
			pos: [34.767472, 134.837501],
			name: "エデン",
			id: 'eden',
			priceMin: 500,
			priceMax: 999,
			businessHour: '11:00~19:00',
		},
		{
			pos: [34.762732, 134.874965],
			name: "Coffee House Rocky",
			id: 'rocky',
			priceMin: 1000,
			priceMax: 1999,
			businessHour: '11:30~15:00<br>17:00~21:00',
		},
		{
			pos: [34.764898, 134.834558],
			name: "ロビンフッド",
			id: 'robinhood',
			priceMin: 500,
			priceMax: 999,
			businessHour: '9:00～20:00(L.O19:00)<br> [月] 11:30～15:00',
		},
		{
			pos: [34.766878, 134.788209],
			name: "一平",
			id: 'ippei',
			priceMin: 500,
			priceMax: 999,
			businessHour: '10: 00～ 21: 00',
		},
		{
			pos: [34.763624, 134.829791],
			name: "一勝",
			id: 'itikatu',
			priceMin: 500,
			priceMax: 999,
			businessHour: '11: 00~20: 00',
		},
		{
			pos: [34.755395, 134.841353],
			name: "喫茶ビタースィート",
			id: 'sweet',
			priceMin: 500,
			priceMax: 999,
			businessHour: '08:00~19:30',
		},
		{
			pos: [34.765952, 134.827886],
			name: "味季節料理りんどう",
			id: 'rindou',
			priceMin: 900,
			priceMax: 7200,
			businessHour: '11:30～14:30（LO 14:00）<br>17:30～21:30（LO 21:00）',
		},
		{
			pos: [34.806133, 134.887055],
			name: "法楽屋",
			id: 'hogaku',
			priceMin: 1000,
			priceMax: 1999,
			businessHour: '11:00～13:30(L.O13:00)',
		}

	];

	var showInTable = [];
	for (var i = 0; i < shopinfo.length; i++) {
		showInTable[i] = true;
	}


	window.onload = function() {
		function createTableHTML(shopInfo) {
			var shopId = shopInfo.id ? shopInfo.id : ''
			var shopName = shopInfo.name ? shopInfo.name : ''
			var priceMin = shopInfo.priceMin ? shopInfo.priceMin : ''
			var priceMax = shopInfo.priceMax ? shopInfo.priceMax : ''
			var businessHour = shopInfo.businessHour ? shopInfo.businessHour : ''
			var html = ''
			html += '<td class="name">'
			html += '<a href="https://youthful-cray-7fab53.netlify.com/katumeshi/shops/' + shopId + '.html" target="_blank">' + shopName + '<a>'
			html += '</td><td class="price">' + priceMin + '</td><td class="price1">' + priceMax + '</td><td class="time">' + businessHour + '</td>'
			return html
		}

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
						iroha.innerHTML = createTableHTML(shopinfo[x]);
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
	