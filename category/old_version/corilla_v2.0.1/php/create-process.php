<?php   //지정 폴더에 데이터 저장
file_put_contents('data/'.$_POST['title'],$_POST['description']);
header('location:/php_file/index.php?id='.$_POST['title'])
?>