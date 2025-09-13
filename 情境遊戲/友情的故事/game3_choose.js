function game3_choose_test(choose){     //決定選擇對應接續的結果與選擇
    if(text_count == 15){//選找誰
        switch(choose){
            case 1:
                text_count = 16
                break
            case 2:
                text_count = 76
                break
        }
    }
    ch03()
}