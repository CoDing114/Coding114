// 'use strict';
// 야간모드 버튼 관련
var Links={ // Link 컬러 설정
    setColor:function (color) {
    // var alist = document.querySelectorAll('a'); // 다큐먼트에서 모든 <a> 엘리먼트의 NodeList 를 얻는다
    //   var i = 0; // i 를 설정값 0으로 한다
    //   while(i < alist.length){ // i 보다 a리스트의 값이 클때 아래 명령실행
    //     alist[i].style.color = color; //alist[i]번째 스타일컬러를 지정컬러로 변경
    //     i = i+1; //한바퀴돌때마다 [1]에 1씩추가
    // }    
    $('a').css('color',color); //jQuery 를 이용하여 위에잇는 반복문 줄이기 가능
}
} 
  var Body={ // Body 펑션만들기(메소드) [폰트 및 배경 컬러 설정]
    setColor:function(color){ // Body라는 메소드안에 setColer라는 프로퍼티 만들기
     // document.querySelector('body').style.color = color; //'body' 폰트 컬러 설정
      $('body').css('color',color);
    },// 객체 사이는 [,]표로 구분한다.
    setbackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color; //'body' 배경 컬러 설정
      $('body').css('backgroundColor',color);
    }, 
    setbackgroundImage:function(color){
      // document.querySelector('body').style.backgroundImage='none';
      $('body').css('backgroundImage',color);
    }
  }
  var Nav={ // Body 펑션만들기(메소드) [폰트 및 배경 컬러 설정]
    setColor:function(color){ // Body라는 메소드안에 setColer라는 프로퍼티 만들기
     // document.querySelector('body').style.color = color; //'body' 폰트 컬러 설정
      $('nav').css('color',color);
    },// 객체 사이는 [,]표로 구분한다.
    setbackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color; //'body' 배경 컬러 설정
      $('nav').css('backgroundColor',color);
    }
  }
  var Atag={ // Body 펑션만들기(메소드) [폰트 및 배경 컬러 설정]
    setColor:function(color){ // Body라는 메소드안에 setColer라는 프로퍼티 만들기
     // document.querySelector('body').style.color = color; //'body' 폰트 컬러 설정
      $('a').css('color',color);
    },// 객체 사이는 [,]표로 구분한다.
    setbackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color; //'body' 배경 컬러 설정
      $('a').css('backgroundColor',color);
    }
  }
  var Bquote={ // Body 펑션만들기(메소드) [폰트 및 배경 컬러 설정]
    setColor:function(color){ // Body라는 메소드안에 setColer라는 프로퍼티 만들기
     // document.querySelector('body').style.color = color; //'body' 폰트 컬러 설정
      $('blockquote').css('color',color);
    },// 객체 사이는 [,]표로 구분한다.
    setbackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color; //'body' 배경 컬러 설정
      $('blockquote').css('backgroundColor',color);
    }
  }
  
function nightDayHandler(self) { // 야간모드 동작
    var target = document.querySelector('body') //target 이라는 프로퍼티에 "body'Element를 반환한다
    if(self.value === 'Night'){ // "self"의 값(value)이 "Night"일때 아래 명령실행
    Body.setbackgroundColor('#1e1f21'); //'Body' 배경 컬러를 "블랙"으로 설정
    Body.setbackgroundImage('none');  //'Body' 배경 이미지 삭제
    Body.setColor('white'); //'Body' 폰트 컬러를 "화이트"으로 설정
    Nav.setbackgroundColor('#292a2d')
    Nav.setColor('rgba(255, 255, 255, 0.55)');
    Atag.setbackgroundColor('#292a2d')
    Bquote.setbackgroundColor('#263343')
    Bquote.setColor('#c4611a');
    self.value = 'Day'; //self"의 값(value)을 "Day"로 바꾼다

    Links.setColor('#c4611a'); //'Links.setColor' 폰트 컬러를 "파우더블루"로 설정
  } else { //if문 조건이 "참"이 아닌 "거짓"인 경우 아래 명령어 실행
    Body.setbackgroundColor('rgb(241 241 241)');
    Body.setbackgroundImage('none');
    Body.setColor('black');
    Nav.setbackgroundColor('#292a2d')
    Nav.setColor('#c4611a');
    Atag.setbackgroundColor('#292a2d')
    Atag.setColor('#c4611a');
    Bquote.setbackgroundColor('#cbcbcb')
    Bquote.setColor('black');
    self.value = 'Night';
    
    Links.setColor('#c4611a')
}

  }