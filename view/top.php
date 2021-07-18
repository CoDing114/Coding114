<?php
function print_head_top(){ ?>
<!DOCTYPE html>
<html>
<head>
  <title> Welcome to Growth Diary </title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./work_file/style.css"> <!-- 스타일 태그를 링크하여 사용하여 중복삭제 -->
    <!-- Global site tag (gtag.js) - Google Analytics [구글 분석기] -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180336562-1"></script>
    <!-- jquery/3.5.1 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-180336562-1');
    </script>
    <script src="work_file/colors.js"> // 야간모드 </script>
</head>
<?php }?>