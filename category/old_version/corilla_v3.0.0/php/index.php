<?php
require('../lib/print.php');
require_once('../lib/print.php'); //require_once는 중복으로 실행되는걸 막는다
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
    <?php if(isset($_GET['id'])){ ?> <!-- 조건문으로 index에선 안보이게 한다,isset:변수가 설정되었는지 확인할수 있다. -->
        <a href="update.php?id=<?=$_GET['id']?>">Update</a> <!-- < ?=$_GET['id']?> = < ?php =$_GET['id'];?> 애코를 쓸땐 php를 '='로 줄일수잇다-->
        <!-- 
        <a href="delete-process.php?id=<?=$_GET['id']?>">Delete</a>  // 링크방식의 삭제 버튼은 id가나타나면 링크를 복사하여 삭제가 가능함으로 위험하다.
        <form action="delete-process.php" method="POST">
            <input type="hidden" name="id" value="<?=$_GET['id']?>">
            <input type="submit" value="Delete">
        </form>
    -->
    <?php }?>
    <?php if(false){ ?>
        <h3>사용자 파일 저장하기</h3>
        <form action="create-process.php" method="POST"> <!--form내용을 폼으로 감싼다,action="form.php" form.php파일을 연다, method="POST 전송방식:GET일반,POST알수없는 방식으로 조용히 서버로 데이터 전송 -->
            <p><input type="text" name="title" placeholder="Title"></p>   <!--type="text"텍스트 입력창 , name="title"전송하려는 이름, placeholder="Title"타이틀 설명-->
            <p><textarea name="description"placeholder="Description"></textarea></p><!--textarea 많은 텍스트를 적을수잇다, name="description" textarea에 네임을 준다-->
            <p><input type="submit"></p><!-- type="submit" 제출하다 -->
        </form>

        <h3>Update</h3>
        <form action="update_process.php"method="post">
            <input type="hidden"name="old_title"value="<?=$_GET['id']?>">   <!-- 사용자에겐 노출하지 않으면서 원하는 액션이 가르키는 애플리케이션으로 어떠한 데이터를 전송할때 사용  -->
            <p>
            <input type="text"name="title"placeholder="Title"value="<?php print_title();?>">
            </p>
            <p>
            <textarea name="description"placeholder="Description"><?php print_description();?></textarea>
            </p>
            <p>
            <input type="submit">
            </p>
        </form>
        
        <?php }?> <!-- php조건문중에서 중괄호 속에 다른 연산자가 들어갈땐 위와같이 사용가능하다 -->
    </div>
    <h2>
        <h3>비교문 활용  if(isset($_GET['id'])) </h3>
    <?php
    print_title();
    ?>
    </h2>
    <h3>파일Get - echo file_get_contents("data/".$_GET['id']);</h3>
    <?php
    print_description()
    ?>
    
    </div>
    <div>
    <h1>Cross Site Scripting 보안</h1>
    <ul>
        <li>htmlspecialchars:데이터 상 script코드가 정상적으로 작동 할수 없게 엔티티로 변환 합니다  </li>
        <li>strip_tags()는 말 그대로 태그를 제거(허가된 태크는 제외)하고 텍스트만 반환합니다.</li>
        <li>basename:부모 자식 태그를 이용한 해킹 방지. process쪽도 같이 설정할필요가잇다</li>
    </ul>   
    <h1>function</h1>
    <?php
    $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nostrum maxime fugiat temporibus accusantium dolores dolorum id,
    nihil soluta provident et dolorem autem necessitatibus similique
    sequi unde voluptatibus enim incidunt amet."
    ?>
        <?php
        echo ($str);
        ?>
    <h2>문자 길이 strlen()</h2>
    <?php
    echo strlen($str);
    ?>
    </div>
    <div>
        <h2>nl2br 줄 바꾸기 </h2>
        <h3>nl2br($)</h3>
        <?php
        echo nl2br($str);
        ?>
    </div>
</body>
</html>
