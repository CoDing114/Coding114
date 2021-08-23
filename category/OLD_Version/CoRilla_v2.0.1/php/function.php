<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function</title>
</head>
<body>
    <h1>Function</h1>
    <h2>Basic</h2>
    <?php
    function title(){
        
        $list = scandir('./data');
        $i = 0;
        while($i < count($list)){
            if($list[$i] != '.'){
              if($list[$i] != '..'){
              echo "<li><a href=\"index.php?id=$list[$i]\">$list[$i]</a></li>\n"; // 역슬래시 \n 을 사용 하면 html이 아닌 일반적인 텍스트 문서에서 줄바꿈을 의미 한다
            }
          }
          $i = $i + 1;
        }
        
    }
    title();

    ?>

    <h2>parameter &amp; argument</h2>
    <pre>
    &lt?php 
    function sum($left,$right){
        print($left+$right); 
        print("&ltbr>"); 
    }
    sum(2,4);   // left=2 , right=4 입력값에 따라 동작이 달라질수잇다.
    sum(4,6);   // left는 파라미터 , right는 아규먼트 라 부른다
    ?>
    </pre>
    <?php 
    function sum($left,$right){
        print($left+$right); 
        print("<br>"); 
    }
    sum(2,4);   // left=2 , right=4 입력값에 따라 동작이 달라질수잇다.
    sum(4,6);   // left는 파라미터 , right는 아규먼트 라 부른다
    ?>

<h2>Return:결과 값을 돌려준다, 즉 계산식의 값을 저장할수잇다</h2>
<?php 
function sum2($left,$right){
return $left+$right;
}
 print(sum2(2,6));
 file_put_contents('./data/result.txt', sum2(1,2));

 ?>
          


</body>
</html>