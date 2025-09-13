function game2_choose_test(choose){     //決定選擇對應接續的結果與選擇
    if(text_count == 1){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 2){
        switch(choose){
            case 1://(1)
                text_count = 6
                choose_count = 5
                break
            case 2://(2)
                text_count = 13
                choose_count = 10
                break
            case 3://(2)
                text_count = 13
                choose_count = 10
                break
            case 4://(2)
                text_count = 13
                choose_count = 10
                break
        }
    }
    else if(text_count == 3){
        switch(choose){
            case 1://(1)
                text_count = 6
                choose_count = 5
                break
            case 2://(4)
                text_count = 28
                choose_count = 20
                break
            case 3://(4)
                text_count = 28
                choose_count = 20
                break
        }
    }
    else if(text_count == 4){
        switch(choose){
            case 1://(1)
                text_count = 6
                choose_count = 5
                break
            case 2://(2)
                text_count = 13
                choose_count = 10
                break
            case 3://(2)
                text_count = 13
                choose_count = 10
                break
        }
    }
    else if(text_count == 5){
        switch(choose){
            case 1://(1)
                text_count = 6
                choose_count = 5
                break
            case 2://(3)
                text_count = 21
                choose_count = 15
                break
            case 3://(4)
                text_count = 28
                choose_count = 20
                break
        }
    }
    //(1)
    else if(text_count == 8){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 9){
        switch(choose){
            case 1://(3)
                text_count = 21
                choose_count = 15
                break
            case 2://(3)
                text_count = 21
                choose_count = 15
                break
            case 3://(6)
                text_count = 38
                choose_count = 26
                break
        }
    }
    else if(text_count == 10){
        //(5)
        text_count = 36
        choose_count = 25
    }
    else if(text_count == 11){
        switch(choose){
            case 1://(3)
                text_count = 21
                choose_count = 15
                break
            case 2://(3)
                text_count = 21
                choose_count = 15
                break
            case 3://(6)
                text_count = 38
                choose_count = 26
                break
        }
    }
    else if(text_count == 12){
        switch(choose){
            case 1://(3)
                text_count = 21
                choose_count = 15
                break
            case 2://(3)
                text_count = 21
                choose_count = 15
                break
            case 3://(5)
                text_count = 36
                choose_count = 25
                break
            case 4://(9)
                text_count = 55
                choose_count = 30
                break
        }
    }
    //(2)
    else if(text_count == 16){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 17){
        switch(choose){
            case 1://END4
                text_count = 71
                break
            case 2://END4
                text_count = 71
                break
            case 3://END8
                text_count = 81
                break
            case 4://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 18){
        switch(choose){
            case 1://END8
                text_count = 81
                break
            case 2://(9)
                text_count = 55
                choose_count = 30
                break
            case 3://END8
                text_count = 81
                break
            case 4://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 19){
        switch(choose){
            case 1://END4
                text_count = 71
                break
            case 2://END4
                text_count = 71
                break
            case 3://END7
                text_count = 79
                break
            case 4://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 20){
        switch(choose){
            case 1://END4
                text_count = 71
                break
            case 2://END4
                text_count = 71
                break
            case 3://END8
                text_count = 81
                break
            case 4://END1
                text_count = 63
                break
        }
    }
    //(3)
    else if(text_count == 23){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 24 || text_count == 25 || text_count == 26 || text_count == 27){//END2
        text_count = 65
    }
    //(4)
    else if(text_count == 31){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 32 || text_count == 33){
        switch(choose){
            case 1://END1
                text_count = 63
                break
            case 2://END3
                text_count = 68
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 34){
        switch(choose){
            case 1://END1
                text_count = 63
                break
            case 2://END6
                text_count = 75
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 35){
        switch(choose){
            case 1://END4
                text_count = 71
                break
            case 2://END5
                text_count = 73
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    //(5)
    else if(text_count == 37){//END9
        text_count = 83
    }
    //(6)
    else if(text_count == 42){
        text_count = text_count + 1
        choose_count = choose_count + 1
    }
    else if(text_count == 43){
        switch(choose){
            case 1://(7)
                text_count = 44
                choose_count = 28
                break
            case 2://(8)
                text_count = 48
                choose_count = 29
                break
        }
    }
    //(7)
    else if(text_count == 47){
        switch(choose){
            case 1://END3
                text_count = 68
                break
            case 2://END5
                text_count = 73
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    //(8)
    else if(text_count == 54){
        switch(choose){
            case 1://END3
                text_count = 68
                break
            case 2://END5
                text_count = 73
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    //(9)
    else if(text_count == 58){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 59){
        switch(choose){
            case 1://END1
                text_count = 63
                break
            case 2://END3
                text_count = 68
                break
            case 3://END8
                text_count = 81
                break
        }
    }
    else if(text_count == 60){
        switch(choose){
            case 1://END1
                text_count = 63
                break
            case 2://END8
                text_count = 81
                break
            case 3://END1
                text_count = 63
                break
        }
    }
    else if(text_count == 61 || text_count == 62){//END10
        text_count = 86
    }

    //判斷性別
    if (gender == 0){
        ch02_M()
    }else{
        ch02_F()
    }


    // ch02()      //5/25，start(0)修改成ch02()
}