<?php
$servername = "localhost";
$username = "root";
$password = "901207";
$dbname = 'opentutorials';

$conn = mysqli_connect($servername,$username,$password,$dbname);
// Single row
$sql ="SELECT * FROM topic WHERE id = 10"; 
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result);
echo '<h2>'.$row['title'].'</h2>';
echo $row['description']; 
// LIMIT를 설정하여 불러오려는 데이터 수량을 선정 할수잇다
//WHERE id = 10 ;id가 10인 행 데이터 가져온다
//컬럼의 이름을 통해서 가져오는것을 연관배열이라한다. 인덱스를 통해가져오는것을 배열이라 한다

// 모든 토픽가져올때
$sql ="SELECT * FROM topic "; 
$result = mysqli_query($conn,$sql);

while($row =mysqli_fetch_array($result)){
    echo '<h2>'.$row['title'].'</h2>';
    echo $row['description'];     
}

?>