<?php   //사이트에 데이터를 나타낸다
echo "<p>TITEL : ".$_POST['title']."</P>"; // '.'점을 찍어 앞뒤를 연결해준다
echo "<p>TITEL : ".$_POST['description']."</P>"; //$_POST은 데이터 받는 방식이다. Get,POST등
?>
<?php   //지정 폴더에 데이터 저장
file_put_contents('data/'.$_POST['title'],$_POST['description']);
header('location:/php_file/index.php='.$_POST['title'])
?>