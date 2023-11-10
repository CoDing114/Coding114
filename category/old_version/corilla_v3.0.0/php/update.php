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

        <h3>Update</h3>
        <form action="update_process.php"method="post"><!--form내용을 폼으로 감싼다,action="form.php" form.php파일을 연다, method="POST 전송방식:GET일반,POST알수없는 방식으로 조용히 서버로 데이터 전송 -->
            <input type="hidden"name="old_title"value="<?=$_GET['id']?>">   <!-- 사용자에겐 노출하지 않으면서 원하는 액션이 가르키는 애플리케이션으로 어떠한 데이터를 전송할때 사용  -->
            <p>
            <input type="text"name="title"placeholder="Title"value="<?php print_title();?>"><!--type="text"텍스트 입력창 , name="title"전송하려는 이름, placeholder="Title"타이틀 설명-->
            </p>
            <p>
            <textarea name="description"placeholder="Description"><?php print_description();?></textarea> <!--textarea 많은 텍스트를 적을수잇다, name="description" textarea에 네임을 준다-->
            </p>
            <p>
            <input type="submit"><!-- type="submit" 제출하다 -->
            </p>
        </form>

        <form action="delete-process.php" method="POST">
            <input type="hidden" name="id" value="<?=$_GET['id']?>">
            <input type="submit" value="Delete">
        </form>
    </div>
    