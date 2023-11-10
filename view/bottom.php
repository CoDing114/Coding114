<?php
require_once('./view/top.php');
?>
<?php
require_once('./lib/m_print.php');
?>
<?php
function print_bottom_list(){ 
?>
<input type="button" class="button_night" value="Night" onclick=" 
nightDayHandler(this); /* 야간모드 펑션불러오기 (this)는 현재 조건을 가르킨다 */">  
<?php
}
?>