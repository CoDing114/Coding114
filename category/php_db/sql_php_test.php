<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>MySql-PHP 연결 테스트</title>
</head>
<body>
 <h3>MySql 연결 테스트1</h3>
<?php
echo "MySql 연결 테스트<br>";
 
$db = mysqli_connect("localhost", "root", "901207", "opentutorials");
 
if($db){
    echo "connect : 성공<br>";
}
else{
    echo "disconnect : 실패<br>";
}
 
$result = mysqli_query($db, 'SELECT VERSION() as VERSION');
$data = mysqli_fetch_assoc($result);
echo $data['VERSION'];
?>
<h3>MySql 연결 테스트2</h3>
<?php
$db_con = mysqli_connect("localhost", "root", "터미널에서 MySQL 들어갈 때 치는 비밀번호");
if ($db_con){
  echo "DB 연결 성공<p>";
} else {
  echo "DB 연결 실패<p>";
}
  
$db_sec = mysqli_select_db($db_con, "연결을 확인하고 싶은 데이터베이스명");
if ($db_sec) {
  echo "DB select OK <p>";
} else {
  echo "DB select NO <p>";
}

?>
 
</body>
</html>
