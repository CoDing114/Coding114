<?php
$servername = "localhost";
$username = "root";
$password = "901207";
$dbname = 'opentutorials';
$conn = mysqli_connect($servername,$username,$password,$dbname);

$sql ="SELECT * FROM topic "; 
$result = mysqli_query($conn,$sql);

while($row =mysqli_fetch_array($result)){
    $list = $list."<li><a href=\"index.php?id={$row['id']}\">{$row['title']}</a></li>";   
}

$article = array('title'=>'Welcome','description'=>'hello,web');
if(isset($_GET['id'])){
    $sql ="SELECT * FROM topic WHERE id = {$_GET['id']}"; 
    $result = mysqli_query($conn,$sql);
    $row =mysqli_fetch_array($result);
    $article['title'] = $row['title'];
    $article['description'] = $row['description'];
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB</title>
</head>
<body>
    <h1><a href="index.php">WEB</a></h1>
<ol>
    <?=
    $list
    ?>
</ol>
<a href="create.php">create</a>
<h2><?=$article['title']?></h2>
<?=$article['description']?>
</body>
</html>