<?php 
    //1.Sesssion
    session_start(); //Bắt đầu session
    $_SESSION['NAME'] = "user";

    echo "Session Name: " . $_SESSION['NAME'];

    // 2. Cookie
    $cookieName = "user";
    $cookieValue = "NgocThang";

    setcookie($cookieName, $cookieValue, time() + 86408, "/");
    if(isset($_COOKIE[$cookieName])) {
        echo "cookie đã tồn tại";
    } else {
        echo "cookie đã được thiết lập";
    }

?>