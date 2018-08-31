<?php

// 店舗情報取得
require './shop_info.php'; 
foreach($shop_list as $shop_name => $value){
    // html取得
    $file = file_get_contents('http://0.0.0.0:8080/katsumap/katsumain/katumeshi/shops/page.php?name=' . $shop_name);
    // ファイルのパスを変数に格納
    $path = "shops/$shop_name.html";
    // fopenでファイルを開く（'w'は上書きモードで開く）
    $fp = fopen($path, 'w');
     
    // fwriteで文字列を書き込む
    fwrite($fp, $file);
     
    // ファイルを閉じる
    fclose($fp);    
}

