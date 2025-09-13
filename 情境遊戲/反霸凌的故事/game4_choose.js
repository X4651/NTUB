function game4_choose_test(choose){     //決定選擇對應接續的結果與選擇
    if(text_count == 4){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 5){
        text_count = 10
        switch(choose){
            case 1://(1)
                ch04_text_count = 14
                choose_count = 6
                break
            case 2://(2)
                ch04_text_count = 30
                choose_count = 11
                break
            case 3://(1)
                ch04_text_count = 14
                choose_count = 6
                break
            case 4://(3)
                ch04_text_count = 37
                choose_count = 16
                break
        }
    }
    else if(text_count == 6){
        text_count = 10
        switch(choose){
            case 1://(3)
                ch04_text_count = 37
                choose_count = 16
                break
            case 2://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 3://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 4://(5)
                ch04_text_count = 50
                choose_count = 26
                break
        }
    }
    else if(text_count == 7){
        text_count = 10
        switch(choose){
            case 1://(4)
                ch04_text_count = 43
                choose_count = 21
                break
            case 2://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 3://(1)
                ch04_text_count = 14
                choose_count = 6
                break
        }
    }
    else if(text_count == 8){
        text_count = 10
        switch(choose){
            case 1://(2)
                ch04_text_count = 30
                choose_count = 11
                break
            case 2://(6)
                ch04_text_count = 56
                choose_count = 30
                break
            case 3://(6)
                ch04_text_count = 56
                choose_count = 30
                break
            case 4://(6)
                ch04_text_count = 56
                choose_count = 30
                break
        }
    }
    else if(text_count == 9){
        text_count = 10
        switch(choose){
            case 1://(4)
                ch04_text_count = 43
                choose_count = 21
                break
            case 2://(3)
                ch04_text_count = 37
                choose_count = 16
                break
            case 3://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 4://(6)
                ch04_text_count = 56
                choose_count = 30
                break
        }
    }
    //(1)
    else if(text_count == 17){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 18){
        text_count = 22
        switch(choose){
            case 1://(3)
                ch04_text_count = 37
                choose_count = 16
                break
            case 2://(4)
                ch04_text_count = 43
                choose_count = 21
                break
            case 3://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 4://(6)
                ch04_text_count = 56
                choose_count = 30
                break
        }
    }
    else if(text_count == 19){
        text_count = 22
        switch(choose){
            case 1://(3)
                ch04_text_count = 37
                choose_count = 16
                break
            case 2://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 3://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 4://(6)
                ch04_text_count = 56
                choose_count = 30
                break
        }
    }
    else if(text_count == 20){
        text_count = 22
        switch(choose){
            case 1://(4)
                ch04_text_count = 43
                choose_count = 21
                break
            case 2://(5)
                ch04_text_count = 50
                choose_count = 26
                break
            case 3://(4)(7/20修改)
                ch04_text_count = 43
                choose_count = 21
                break
        }
    }
    else if(text_count == 21){
        text_count = 22
        switch(choose){
            case 1://(5)(7/20修改)
                ch04_text_count = 50
                choose_count = 26
                break
            case 2://(2)
                ch04_text_count = 30
                choose_count = 11
                break
            case 3://(2)
                ch04_text_count = 30
                choose_count = 11
                break
            case 4://(3)(7/20修改)
                ch04_text_count = 37
                choose_count = 16
                break
        }
    }
    //(2)
    else if(text_count == 32){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 33){
        switch(choose){
            case 1://END1
                text_count = 67
                break
            case 2://END2
                text_count = 73
                break
            case 3://END3
                text_count = 76
                break
            case 4://END4
                text_count = 82
                break
        }
    }
    else if(text_count == 34){
        switch(choose){
            case 1://END5
                text_count = 85
                break
            case 2://END3
                text_count = 76
                break
            case 3://END6
                text_count = 91
                break
            case 4://END5
                text_count = 85
                break
        }
    }
    else if(text_count == 35){
        switch(choose){
            case 1://END5
                text_count = 85
                break
            case 2://END6
                text_count = 91
                break
            case 3://END7
                text_count = 104
                break
        }
    }
    else if(text_count == 36){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END7
                text_count = 104
                break
            case 3://END1
                text_count = 67
                break
            case 4://END1
                text_count = 67
                break
        }
    }
    //(3)
    else if(text_count == 39){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 40){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END1
                text_count = 67
                break
            case 3://END3
                text_count = 76
                break
            case 4://END4
                text_count = 82
                break
        }
    }
    else if(text_count == 41){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
            case 3://END7
                text_count = 104
                break
            case 4://END7
                text_count = 104
                break
        }
    }
    else if(text_count == 42){
        switch(choose){
            case 1://END5
                text_count = 85
                break
            case 2://END6
                text_count = 91
                break
            case 3://END7
                text_count = 104
                break
            case 4://END5
                text_count = 85
                break
        }
    }
    //(4)
    else if(text_count == 46){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 47){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
        }
    }
    else if(text_count == 48){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
            case 3://END5(7/20修改)
                text_count = 85
                break
            case 4://END7
                text_count = 104
                break
        }
    }
    else if(text_count == 49){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
            case 3://END3
                text_count = 76
                break
        }
    }
    //(5)
    else if(text_count == 52){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 53){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
            case 3://END1
                text_count = 67
                break
        }
    }
    else if(text_count == 54){
        switch(choose){
            case 1://END7
                text_count = 104
                break
            case 2://END3
                text_count = 76
                break
            case 3://END1
                text_count = 67
                break
            case 4://END3
                text_count = 76
                break
        }
    }
    else if(text_count == 55){
        switch(choose){
            case 1://END3
                text_count = 76
                break
            case 2://END3
                text_count = 76
                break
            case 3://END7
                text_count = 104
                break
            case 4://END5
                text_count = 85
                break
        }
    }
    //(6)
    else if(text_count == 62){
        text_count = text_count + choose
        choose_count = choose_count + choose
    }
    else if(text_count == 63){
        switch(choose){
            case 1://END3
                text_count = 76
                break
            case 2://END3
                text_count = 76
                break
            case 3://END5
                text_count = 85
                break
        }
    }
    else if(text_count == 64){
        switch(choose){
            case 1://END8
                text_count = 108
                break
            case 2://END3
                text_count = 76
                break
            case 3://END3
                text_count = 76
                break
        }
    }
    else if(text_count == 65){
        switch(choose){
            case 1://END3
                text_count = 76
                break
            case 2://END3
                text_count = 76
                break
            case 3://END4
                text_count = 82
                break
            case 4://END4
                text_count = 82
                break
        }
    }
    else if(text_count == 66){
        switch(choose){
            case 1://END4
                text_count = 82
                break
            case 2://END3
                text_count = 76
                break
            case 3://END3
                text_count = 76
                break
            case 4://END4
                text_count = 82
                break
        }
    }
    ch04()
}