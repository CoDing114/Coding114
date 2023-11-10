<?php
unlink('data/'.$_POST['id']);
header('location:/php_file/index.php');
?>