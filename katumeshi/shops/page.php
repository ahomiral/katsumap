<?php  require '../shop_info.php'; 

// 店舗がなければ404ページ表示
if($is_exist == false) {
	 require './404.php'; 
} 
?>
<!DOCTYPE html>
<html>
	<head>
		<title>
			<?php echo $shop_info['title']; ?>
		</title>
		<link rel="stylesheet" type="text/css" href="../katumeshi.css">
		<link rel="stylesheet" href="../litycst.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="../lity.min.js"></script>
		<script src="//j.wovn.io/1" data-wovnio="key=nSTurK" async></script>
	</head>
	<body>
		<header>
			<p class="header-p">
				<span class="store-name">
					<?php echo $shop_info['title']; ?>
				</span>
			</p>
			<ul class="header-menus">
				<?php if( !is_null($shop_info['header_href'])) : ?>
					<?php foreach($shop_info['header_href'] as $title => $value): ?>
			        	<a class="header-menu" href="<?php echo $value ?>" target="_blank"><li class="header-menu"><?php echo $title ?></li></a>
			    	<?php endforeach; ?>
			    <?php endif; ?>
			</ul>
		</header>
		<main>
			<p class="main-text"><?php echo $shop_info['description']; ?></p>
			<div class="images">
			    <?php foreach($shop_info['img'] as $img): ?>
			        <a class="bigimg" href="<?php echo $img ?>" data-lity="data-lity"><img class="img" src="<?php echo $img ?>" height="226" width="320"></a>
			    <?php endforeach; ?>
			</div>
			<div id="overview">
				<table>
					<?php if( !is_null($shop_info['business_hour'])) : ?>
					<tr>
						<th class="store-th">営業時間</th>
						<td class="store-td">
							<table class="overview-right-intable">
								<?php foreach($shop_info['business_hour'] as $day => $hour): ?>
									<tr class="overview-right-intr">
										<td class="overview-right-intd"><?php echo $day ?></td>
										<td class="overview-right-intd"><?php echo $hour ?></td>
									</tr>
								<?php endforeach; ?>	
				    		</table>
			    		</td>
					</tr>
					<?php endif; ?>
					
					<?php if( !is_null($shop_info['business_hour'])) : ?>
					<tr>
						<th class="store-th">定休日</th>
						<td class="store-td"><?php echo $shop_info['holiday'];?></td>
					</tr>
					<?php endif; ?>
					
					<?php if( !is_null($shop_info['price'])) : ?>
					<tr>
						<th class="store-th">価格</th>
						<td class="store-td">
							<?php foreach($shop_info['price'] as $price): ?>
			        			<?php echo $price ?>
			        			<br/>
			    			<?php endforeach; ?>
						</td>
					</tr>
					<?php endif; ?>
					
					<?php if( !is_null($shop_info['access'])) : ?>
					<tr>
						<th class="store-th">アクセス</th>
						<td class="store-td">
							<?php foreach((array)$shop_info['access'] as $access): ?>
			        			<?php echo $access ?>
			        			<br/>
			    			<?php endforeach; ?>
						</td>
					</tr>
					<?php endif; ?>
					
					<?php if( !is_null($shop_info['parking'])) : ?>
					<tr>
						<th class="store-th">駐車場</th>
						<td class="store-td"><?php echo $shop_info['parking']; ?></td>
					</tr>
					<?php endif; ?>
				</table>
			</div>
		</main>
	</body>
</html>