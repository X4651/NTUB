function game1_choose_test(choose){     //決定選擇對應接續的結果與選擇
    if(text_count == 8){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 9){
        switch(choose){
            case 1://(1)
                text_count = 13
                choose_count = 5
                break
            case 2://(2)
                text_count = 21
                choose_count = 10
                break
            case 3://(3)
                text_count = 27
                choose_count = 14
                break
            case 4://(2)
                text_count = 21
                choose_count = 10
                break
        }
    }
    else if(text_count == 10){
        switch(choose){
            case 1://(2)
                text_count = 21
                choose_count = 10
                break
            case 2://(4)
                text_count = 33
                choose_count = 19
                break
            case 3://(2)
                text_count = 21
                choose_count = 10
                break
            case 4://(5)
                text_count = 39
                choose_count = 24
                break
        }
    }
    else if(text_count == 11){
        switch(choose){
            case 1://(1)
                text_count = 13
                choose_count = 5
                break
            case 2://(6)
                text_count = 43
                choose_count = 27
                break
            case 3://(5)
                text_count = 39
                choose_count = 24
                break
            case 4://(4)
                text_count = 33
                choose_count = 19
                break
        }
    }
    else if(text_count == 12){
        switch(choose){
            case 1://(1)
                text_count = 13
                choose_count = 5
                break
            case 2://(6)
                text_count = 43
                choose_count = 27
                break
            case 3://(4)
                text_count = 33
                choose_count = 19
                break
            case 4://(4)
                text_count = 33
                choose_count = 19
                break
        }
    }
    else if(text_count == 16){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 17){
        switch(choose){
            case 1://(6)
                text_count = 43
                choose_count = 27
                break
            case 2://(4)
                text_count = 33
                choose_count = 19
                break
            case 3://(2)
                text_count = 21
                choose_count = 10
                break
        }
    }
    else if(text_count == 18){
        switch(choose){
            case 1://(6)
                text_count = 43
                choose_count = 27
                break
            case 2://(4)
                text_count = 33
                choose_count = 19
                break
            case 3://(5)
                text_count = 39
                choose_count = 24
                break
        }
    }
    else if(text_count == 19){
        switch(choose){
            case 1://(3)
                text_count = 27
                choose_count = 14
                break
            case 2://(6)
                text_count = 43
                choose_count = 27
                break
            case 3://(4)
                text_count = 33
                choose_count = 19
                break
        }
    }
    else if(text_count == 20){
        switch(choose){
            case 1://(3)
                text_count = 27
                choose_count = 14
                break
            case 2://(6)
                text_count = 43
                choose_count = 27
                break
            case 3://(2)
                text_count = 21
                choose_count = 10
                break
        }
    }
    //(2)
    else if(text_count == 23){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 24){
        switch(choose){
            case 1://END4
                text_count = 62
                break
            case 2://END1
                text_count = 47
                break
            case 3://END2
                text_count = 51
                break
            case 4://END3
                text_count = 58
                break
        }
    }
    else if(text_count == 25){
        switch(choose){
            case 1://END5
                text_count = 65
                break
            case 2://END6
                text_count = 72
                break
            case 3://END1
                text_count = 47
                break
            case 4://END3
                text_count = 58
                break
        }
    }
    else if(text_count == 26){
        switch(choose){
            case 1://END7
                text_count = 74
                break
            case 2://END7
                text_count = 74
                break
            case 3://END8
                text_count = 77
                break
            case 4://END8
                text_count = 77
                break
        }
    }
    //(3)
    else if(text_count == 28){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 29){
        switch(choose){
            case 1://END1
                text_count = 47
                break
            case 2://END5
                text_count = 65
                break
            case 3://END2
                text_count = 51
                break
        }
    }
    else if(text_count == 30){
        switch(choose){
            case 1://END6
                text_count = 72
                break
            case 2://END5
                text_count = 65
                break
            case 3://END8
                text_count = 77
                break
        }
    }
    else if(text_count == 31){
        switch(choose){
            case 1://END1
                text_count = 47
                break
            case 2://END2
                text_count = 51
                break
            case 3://END4
                text_count = 62
                break
        }
    }
    else if(text_count == 32){
        switch(choose){
            case 1://END5
                text_count = 65
                break
            case 2://END2
                text_count = 51
                break
            case 3://END8
                text_count = 77
                break
        }
    }
    //(4)
    else if(text_count == 34){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 35){
        switch(choose){
            case 1://END5
                text_count = 65
                break
            case 2://END2
                text_count = 51
                break
            case 3://END4
                text_count = 62
                break
            case 4://END8
                text_count = 77
                break
        }
    }
    else if(text_count == 36){
        switch(choose){
            case 1://END2
                text_count = 51
                break
            case 2://END8
                text_count = 77
                break
            case 3://END1
                text_count = 47
                break
        }
    }
    else if(text_count == 37){
        switch(choose){
            case 1://END9
                text_count = 89
                break
            case 2://END2
                text_count = 51
                break
            case 3://END4
                text_count = 62
                break
        }
    }
    else if(text_count == 38){
        switch(choose){
            case 1://END8
                text_count = 77
                break
            case 2://END2
                text_count = 51
                break
            case 3://END10
                text_count = 91
                break
            case 4://END1
                text_count = 47
                break
        }
    }
    //(5)
    else if(text_count == 40){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 41){
        switch(choose){
            case 1://END5
                text_count = 65
                break
            case 2://END2
                text_count = 51
                break
            case 3://END4
                text_count = 62
                break
            case 4://END8
                text_count = 77
                break
        }
    }
    else if(text_count == 42){
        switch(choose){
            case 1://END2
                text_count = 51
                break
            case 2://END8
                text_count = 77
                break
            case 3://END8
                text_count = 77
                break
        }
    }
    //(6)
    else if(text_count == 44){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 45){
        switch(choose){
            case 1://END9
                text_count = 89
                break
            case 2://END4
                text_count = 62
                break
            case 3://END8
                text_count = 77
                break
        }
    }
    else if(text_count == 46){
        switch(choose){
            case 1://END2
                text_count = 51
                break
            case 2://END8
                text_count = 77
                break
            case 3://END8
                text_count = 77
                break
        }
    }
    // ch01()      //5/25，start(0)修改成ch01()
    //判斷性別
    if (gender == 0){
        ch01_M()
    }else{
        ch01_F()
    }
}