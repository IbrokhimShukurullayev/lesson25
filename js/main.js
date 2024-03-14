let isLogin = localStorage.getItem("token");
function checkIsLogin() {
  if (!isLogin) {
    window.location.replace("/pages/login.html");
  }
}

checkIsLogin();
