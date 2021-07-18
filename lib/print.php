<?php
function print_list(){
    $list = scandir('./data');
    $i = 0;
    while($i < count($list)){
      $title = htmlspecialchars($list[$i]);
        if($list[$i] != '.'){
          if($list[$i] != '..'){
          echo "<li><a href=\"index.php?id=$title\">$title</a></li>\n"; // 역슬래시 \n 을 사용 하면 html이 아닌 일반적인 텍스트 문서에서 줄바꿈을 의미 한다
        }
      }
      $i = $i + 1;
    }
}
?>
<?php
function print_title(){
    if(isset($_GET['id'])){
        echo htmlspecialchars($_GET['id']);
        }else{
        echo "Welcome";
        }
}
?>

<?php
function print_description(){
    if(isset($_GET['id'])){
        echo htmlspecialchars(file_get_contents("data/".$_GET['id']));
    } else{
        echo "PHP if문 활용법";
    }
}
?>