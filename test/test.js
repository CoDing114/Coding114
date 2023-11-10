window.onload = function(){
    //声明变量
    var sex,selDegree,infor;
    var hobbies = new Array(); //用于存储选择的爱好
    var langs = new Array(); //用于存储选择的语言
    var fr = document.form1;//获取表单对象
    fr.username.focus();//使用表单元素的focus()方法使用户名在页面加载完后获得焦点
    var oBtn = document.getElementById('regBtn');
    oBtn.onclick = function(){
      //判断是否选择了性别，以及获取所选择的值
      if(fr.gender[0].checked == true){
          sex = "女";
      }else if(fr.gender[1].checked == true){
          sex = "男";
      }
      //将选择的语言存储在langs数组中
      for(var i = 0; i < 4; i++){
        if(fr.lang[i].checked == true)
            langs.push(fr.lang[i].value);
      }
      //将选择的爱好存储到hobbies数组中
      for(i = 0; i < 6; i++){
        if(fr.hobby.options[i].selected == true)
           hobbies.push(fr.hobby.options[i].value);
      }
      var index = fr.degree.selectedIndex;//获取被选中项的索引
      selDegree = fr.degree.options[index].value;//将选择的学历存储在selDegree变量中
      infor = fr.info.value;
      var msg = "您注册的个人信息如下：\n用户名："+fr.username.value+"\n密码："
        +fr.psw1.value+"\n性别："+sex+"\n掌握的语言有："+langs.join("、")+"\n爱好有："+
      hobbies.join("、")+"\n最高学历是："+selDegree+"\n个人情况："+infor;
      alert(msg);
    };
};