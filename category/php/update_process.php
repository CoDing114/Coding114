<?php   //지정 폴더에 데이터 저장
rename('data/'.$_POST['old_title'],'data/'.$_POST['title']);
file_put_contents('data/'.$_POST['title'],$_POST['description']);   //지정 폴더로 파일 저장
header('location:/php_file/index.php?id='.$_POST['title']); //지정 주소로 이동  
?>