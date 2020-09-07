<?php
$start_time = microtime();
$out = "";
$flag = 0;

$x =  $_GET['x'];
$y =  $_GET['y'];
$r =  $_GET['r'];
$answer = '';

  /*  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo $_GET['x'];
        echo $_GET['y'];
        echo $_GET['r'];

    }
  */

if(((($x*$x + $y*$y) <= $r*$r && $x <=0 && $y >= 0)||
        ($y+$x<=$r/2 && $x>=0 && $y>=0)||
        ($x<=0 && $y<=0 && $x>=(-1)*$r/2 && $y>=(-1)*$r))){
    $out = "Входит";
    }else{
        $out = "Не входит";
    }



        $answer = $flag;
        $answer .= ";";
        $answer .= $x;
        $answer .= ";";
        $answer .= $y;
        $answer .= ";";
        $answer .= $r;
        $answer .= ";";
        $answer .= $out;
        $answer .= ";";
        $answer .= date("Y-m-d H:i:s");
        $answer .= ";";
        $answer .= microtime()-$start_time;
        $answer .= "/";
        echo $answer;


    ?>
