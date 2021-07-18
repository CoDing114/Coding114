<?php
$servername = "localhost";
$username = "root";
$password = "901207";
$dbname = 'opentutorials';

$conn = mysqli_connect($servername,$username,$password,$dbname);

$sql ="INSERT INTO topic(title,description,created)
    VALUES('{$_POST['title']}','{$_POST['description']}',NOW())";
$result = mysqli_query($conn,$sql);
if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의바랍니다.';
    echo(mysqli_error($conn));
}   else{
    echo'성공했습니다. <a href="index.php">돌아가기</a>';
}
?>