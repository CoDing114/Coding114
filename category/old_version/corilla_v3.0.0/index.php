<?php
require_once('./view/top.php');
?>
<?php
require_once('./view/bottom.php');
?>
<?php
require_once('./lib/m_print.php'); //require_once는 중복으로 실행되는걸 막는다
?>
<?php 
print_head_top()
?>
<body>
<?php 
print_bottom_list()
?>

<h1 class="h1_title"><a href="index.php">WEB</a></h1>
<div id="grid">
  <ol>
    <?php
    m_print_list()
    ?>
  </ol>
  <div id="article">
    <div id="growth_diary">  
  <?php
m_print_title()
?>
  <?php
  m_print_description()
?>


      <h2>Welcome To Growth Diary</h2>
      <h3>코린이의 성장 일기</h3>
      <img src="IMG/original_1.png" width="30%">
      <pre>  
안녕하세요. 
다들 코딩에 관심 있으신가요?
코딩해보셨나요?
코딩.. 잘 하시나요?... 부럽...
제1 목표는 WEB 뿌시기입니다.
-저만의 포트폴리오가 담긴 웹페이지 구축!!!
제2 목표는 파이썬 뿌시기입니다.
-파이썬으로 시작하는 데이터 분석~
제대로 배운 게 없어서 
기초를 쌓아보고자 합니다.
원래 기초공사가 중요하다고들 하잖아요?!
정말 갈길이 멀죠?ㅎㅎ
      </pre>
      <h3>지켜봐주세요!</h3>

      <h3>앞으로 열심히 해보도록 하겠습니다!</h3>
      <img src="IMG/pasted image 0.png" width="20%">
    </div>
    <div> <!-- 댓글 및 실시간 대화 -->
      <p><!-- 라이브리 시티 설치 코드 댓글 기능 활용 -->
        <div id="lv-container" data-id="city" data-uid="MTAyMC81MTczMy8yODIxNA==">
          <script type="text/javascript">
            (function(d, s) {
                var j, e = d.getElementsByTagName(s)[0];
          
                if (typeof LivereTower === 'function') { return; }
          
                j = d.createElement(s);
                j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                j.async = true;
          
                e.parentNode.insertBefore(j, e);
            })(document, 'script');
          </script>
          <noscript>라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
          </div>
        </p> <!-- 라이브리 시티 설치 코드 끝 -->
      <P>
        <!--Start of Tawk.to Script 실시간 대화-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5f843adb4704467e89f6af36/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        <!--End of Tawk.to Script-->
      </P>
    </div>
  </div>
</div>

</body>
</html>
