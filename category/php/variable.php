<!DOCTYPE html>
<html>
<body>
<h1>Variable</h1>
입력 값 와 입력 값을 구분할때 쓰는 부호 &앰퍼샌드 또는 앤드 라 한다
variable.php?name=앵글&sky=산책
안녕하세요. 앵글님, 오늘의 벙은 산책입니다.
안녕하세요. <?php echo $_GET['name'];?>님,
오늘의 벙은 <?php echo $_GET['sky'];?>입니다.
</body>
</html>