<?php
$servername = "localhost";
$username = "root";
$password = "901207";
$dbname = 'myDB';

////MySQLi 를 이용해서 MySQL 에 Database 를 생성(Create)
//// Create connection 데이터 베이스 생성
//$conn = new mysqli($servername, $username, $password);
//// Check connection
//if ($conn->connect_error) {
//  die("Connection failed: " . $conn->connect_error);
//}
//
//// Create database
//$sql = "CREATE DATABASE myDB";
//if ($conn->query($sql) === TRUE) {
//  echo "Database created successfully";
//} else {
//  echo "Error creating database: " . $conn->error;
//}
//
//$conn->close();
//CREATE DATABASE 문은 MySQL 에서 데이터베이스를 생성할 때 사용한다.
//
//명령을 실행하기 위해서는 query() 함수에 CREATE DATABASE 문을 추가해야한다.
//
//위의 예제는 myDB 라는 이름의 데이터베이스를 생성한다.


////MySQLi 를 이용해서 데이터베이스에 Table 을 생성(Create)
//// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);
//// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
//
//// sql to create table
//$sql = "CREATE TABLE MyGuests (
//id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//firstname VARCHAR(30) NOT NULL,
//lastname VARCHAR(30) NOT NULL,
//email VARCHAR(50),
//reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//)";
//
//if ($conn->query($sql) === TRUE) {
//    echo "Table MyGuests created successfully";
//} else {
//    echo "Error creating table: " . $conn->error;
//}
//
//$conn->close();
////CREATE TABLE 문은 MySQL 에서 테이블을 생성할 떄 사용한다.
////
////명령을 실행하기 위해서는 query() 함수에 CREATE TABLE 문을 추가해야한다.
////
////위의 예제는 MyGuests 라는 이름의 테이블을 생성하고,
////테이블에 id, firstname, lastname, email, reg_date 라는 5개의 column 들을 추가했다.
//

////MySQLi 를 이용해서 Data 를 삽입(Insert)
//// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);
//// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
//
//$sql = "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('John', 'Doe', 'john@example.com')";
//
//if ($conn->query($sql) === TRUE) {
//    echo "New record created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . $conn->error;
//}
//
//$conn->close();
//
////INSERT INTO 문은 MySQL 에서 테이블에 새로운 레코드를 삽입할 때 사용한다.
////
////명령을 실행하기 위해서는 query() 함수에 INSERT INTO 문을 추가해야한다.
////
////위의 예제는 MyGuests 라는 이름의 테이블에
////firstname, lastname, email 이라는 column 에 각각 John, Doe, john@example.com 이라는 값을 추가한다.
////
////* 데이터가 위치하는 열의 이름을 지정하지 않고 그 값만 지정할 수도 있다.
////
////한번에 여러개의 값을 삽입할 수도 있는데, 이때는 세미콜론으로 각 SQL 구문을 구분해주어야 한다.
//
////$sql = "INSERT INTO MyGuests (firstname, lastname, email)
////VALUES ('John', 'Doe', 'john@example.com');";
////$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
////VALUES ('Mary', 'Moe', 'mary@example.com');";
////$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
////VALUES ('Julie', 'Dooley', 'julie@example.com')";
////
////if ($conn->multi_query($sql) === TRUE) {
////    echo "New records created successfully";
////} else {
////    echo "Error: " . $sql . "<br>" . $conn->error;
////}

//MySQLi 를 이용해서 Data 를 선택(Select)
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();

//SELECT 문은 MySQL 에서 데이터를 선택할 때 사용한다.
//명령을 실행하기 위해서는 query() 함수에 SELECT 문을 추가해야한다.FROM 은 어떤 테이블에서 select  할것인지를 명시한다.
//위의 예제는 MyGuests 라는 이름의 테이블에서id, firstname, lastname 이라는 column 들의 데이터를 선택한다.
//선택한 데이터의 num_rows 가 0 이상일때, fetch_assoc() 함수를 이용하여, 필드 이름으로 된 배열을 저장한다.Fetch 함수 
//위의 예제의 실행결과는 다음과 같다.
//id: 1 - Name: John Doe
//id: 2 - Name: Mary Moe
//id: 3 - Name: Julie Dooley
?>