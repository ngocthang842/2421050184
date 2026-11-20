<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //code php viết ở đây
        
        //echo để in ra màn hình
        echo "Hello World! <br>";
        
        //Biến $
        $hoTen = "Ngoc Thang";
        $tuoi = 20;

        //Nối chuỗi dùng dấu '.'
        echo $hoTen . " " . $tuoi . " tuổi";

        $soThuNhat = 10;
        $soThuHai = 5;

        // + - * / %
        $ketQua = $soThuNhat + $soThuHai;
        echo $ketQua;

        //+= -= /= *= %=
        $soThuNhat+=$soThuHai;
        echo $soThuNhat;

        //if else
        $diem = 5;
        if($diem < 4){
            echo " F";
        } 
        elseif($diem >= 4 && $diem <5){
            echo "D";
        }
        elseif($diem >= 5 && $diem <7){
            echo "C";
        }
        elseif($diem >= 7 && $diem <8){
            echo "B";
        }
        else {
            echo "A";
        }
        echo "<br>";
        // switch case
        $color = "green";
        switch($color){
            case "red";
                echo "<br>";
                echo "IS RED";
                break;
            case "blue";
                echo "<br>";
                echo "IS BLUE";
                break;
            default:
                echo "<br>";
                echo "NO COLOR";
                break;
        }

        // for
        for ($i = 0; $i < 100 ; $i++) {
            echo $i . "<br>";
        }
        
    ?>
</body>
</html>