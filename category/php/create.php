<?php
require('../lib/print.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
    <?php
    print_title();
    ?>
    </title>
</head>
<body>
    <div>
        <h1><a href="index.php">WEB</h1>
        <ol>
            <?php
             print_list();
             ?>
        </ol>
    <div>사용자 버튼:
        <a href="create.php">Create</a>
        <?php if(isset($_GET['id'])){ ?>
        <a href="update.php?id=<?=$_GET['id']?>">Update</a> <!-- < ?=$_GET['id']?> = < ?php =$_GET['id'];?> 애코를 쓸땐 php를 '='로 줄일수잇다-->
        <?php }?>
    </div>
    <div><h3>사용자 파일 저장하기</h3>
        <form action="create-process.php" method="POST"> <!--form내용을 폼으로 감싼다,action="form.php" form.php파일을 연다, method="POST 전송방식:GET일반,POST알수없는 방식으로 조용히 서버로 데이터 전송 -->
            <p><input type="text" name="title" placeholder="Title"></p>   <!--type="text"텍스트 입력창 , name="title"전송하려는 이름, placeholder="Title"타이틀 설명-->
            <p><textarea name="description"placeholder="Description"></textarea></p><!--textarea 많은 텍스트를 적을수잇다, name="description" textarea에 네임을 준다-->
            <p><input type="submit"></p><!-- type="submit" 제출하다 -->
        </form>
    </div>
    
</body>
</html>
