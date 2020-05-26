window.onload = function () {
  var accountText = document.getElementById("j-account");
  var tokenText = document.getElementById("j-secret");
  var loginBtn = document.getElementById("j-loginBtn");

  loginBtn.onclick = function () {
      var accid = accountText.value;
      var token = MD5(tokenText.value);
      // var token = tokenText.value;


      if (accid === '' || token === ''){
          alert("用户名或密码不能为空！");
      } else {
          setCookie("accid",accid);
          setCookie("token",token);
          window.location.href = './main.html';
      }
  }
};
