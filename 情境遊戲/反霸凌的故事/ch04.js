function ch04(){
    //宣告
    var create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件
    var text_number = 0   //用於create_text()記錄用
    const text = document.createElement('div')      //文字敘述區
    text.classList.add('txt')

    const next_text = document.createElement('img')     //文字敘述下一段提示的圖片
    next_text.classList.add('next_text_img')
    next_text.setAttribute('src', '圖庫/next-text.png')

    var myAuto4 = document.getElementById('myaudio4');//音樂4
    myAuto4.volume = 0.5; //讓音樂4音量降低(0~1.0)
    myAuto4.play();//播放音樂4

    choose_Gender_man_img.removeEventListener('click', ch04)    //移除click事件，避免重複
    choose_Gender_girl_img.removeEventListener('click', ch04)

    clear()   //重製畫面

    if(text_count >=  0 && text_count <= 3){
        create_text()
        switch(text_count){     //動畫
            case 0:                
                ch04_dd_img.style.opacity = 1
                ch04_hairball_img.style.opacity = 1
                ch04_jacket_img.style.opacity = 1
                ch04_pants_img.style.opacity = 1
                ch04_music_img.style.opacity = 1
                ch04_dessert_img.style.opacity = 1                
                break
            case 1:
                ch04_dd_img.style.opacity = 1
                break
            case 2:
                ch04_idol_img.style.opacity = 1
                break
            case 3:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到右邊
                ch04_dd_img.classList.add("ch04_dd3");
                ch04_dd_img.style.opacity = 1
                ch04_female_classmate_img.style.opacity = 1
                ch04_female_classmate2_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                ch04_txt1_img.style.opacity = 1
                break
        }
        create_text_click()
    }
    else if(text_count >= 4 && text_count <= 9){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 4:
                ch04_ddsad_img.style.opacity = 1
                break
            case 5:
                ch04_ddsad_img.style.opacity = 1
                break
            case 6:
                ch04_ddangry_img.style.opacity = 1
                break
            case 7:
                ch04_dd_img.classList.remove("ch04_dd3");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 8:
                ch04_ddshy_img.style.opacity = 1
                break
            case 9:
                ch04_ddangry_img.style.opacity = 1
                break
        }
    }
    else if(text_count >=  10 && text_count <= 13){
        create_text()
        switch(text_count){     //動畫
            case 10:
                create_text_click()
                ch04_bell_img.style.opacity = 1                
                break
            case 11:
                ch04_door_img.style.opacity = 1
                ch04_door_frame_img.style.opacity = 1
                ch04_teacher_img.classList.remove("ch04_teacher");    //移動老師
                ch04_teacher_img.classList.add("ch04_teacher2");
                ch04_teacher_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    ch04_door_img.style.opacity = 0
                    ch04_door_frame_img.style.opacity = 0
                    ch04_teacher_img.style.opacity = 0
                    ch04_applaud_img.style.opacity = 1
                }, "2000");
                break
            case 12:
                create_text_click()
                ch04_dd_img.classList.remove("ch04_dd3");    //把弟弟移回中間
                ch04_dd_img.classList.remove("ch04_dd2");    //把弟弟移回中間
                ch04_dd_img.classList.add("ch04_dd");
                ch04_dd_img.style.opacity = 1
                break
            case 13:
                create_text_click()
                background_animation()
                bg.setAttribute('src', '圖庫/廁所前.png')
                background_animation_clear()
                ch04_ddsad_img.classList.remove("ch04_ddsad");    //把弟弟難過表情移到中間
                ch04_ddsad_img.classList.add("ch04_ddsad2");                
                ch04_male_classmate_img.classList.remove("ch04_male_classmate");
                ch04_male_classmate_img.classList.add("ch04_male_classmateA2");
                ch04_male_classmate2_img.classList.remove("ch04_male_classmate2");
                ch04_male_classmate2_img.classList.add("ch04_male_classmateB2");
                ch04_ddsad_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1               
                break
        }
    }
    //(1)
    else if(text_count >=  14 && text_count <= 16){
        create_text()
        switch(text_count){     //動畫
            case 14:
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_ddsad_img.classList.remove("ch04_ddsad2");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad3");
                ch04_door_img.style.opacity = 1
                ch04_door_frame_img.style.opacity = 1
                ch04_ddsad_img.style.opacity = 1
                setTimeout(() => {
                    ch04_door_img.style.opacity = 0
                    ch04_door_frame_img.style.opacity = 0
                    ch04_ddsad_img.style.opacity = 0
                    ch04_listen_to_music_img.style.opacity = 1
                    create_text_click()
                }, "3000");
                break
            case 15:
                create_text_click()
                ch04_listen_to_music_img.style.opacity = 1
                break
            case 16:
                create_text_click()
                ch04_listen_to_music_img.style.opacity = 1
                break
        }
    }
    else if(text_count >= 17 && text_count <= 21){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 17:
                ch04_ddsad_img.classList.remove("ch04_ddsad3");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad");
                ch04_ddsad_img.style.opacity = 1
                ch04_dd_img.classList.remove("ch04_dd3");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                break
            case 18:
                ch04_dd_img.style.opacity = 1
                break
            case 19:
                ch04_dd_img.style.opacity = 1
                break
            case 20:
                ch04_dd_img.style.opacity = 1
                break
            case 21:
                ch04_ddsad_img.style.opacity = 1
                break
        }
    }
    else if(text_count >=  22 && text_count <= 29){
        create_text()
        switch(text_count){     //動畫
            case 22:
                ch04_fb_img.style.opacity = 1
                break
            case 23:
                ch04_fb_img.style.opacity = 1
                break
            case 24:
                ch04_fb_img.style.opacity = 1
                break
            case 25:
                ch04_fb_img.style.opacity = 1
                break
            case 26:
                ch04_fb_img.style.opacity = 1
                break
            case 27:
                ch04_fb_img.style.opacity = 1
                break
            case 28:
                ch04_news_img.style.opacity = 1
                break
            case 29:
                // text_count = ch04_text_count - 1
                break
        }
        create_text_click()
    }
    //(2)
    else if(text_count >=  30 && text_count <= 31){
        create_text()
        switch(text_count){     //動畫
            case 30:
                background_animation()
                bg.setAttribute('src', '圖庫/粉紫（溝通）.png')
                background_animation_clear()
                ch04_tears1_img.classList.remove("ch04_tears1");
                ch04_tears1_img.classList.add("ch04_tears12");
                ch04_tears2_img.classList.remove("ch04_tears2");
                ch04_tears2_img.classList.add("ch04_tears22");
                ch04_ddsad_img.classList.remove("ch04_ddsad");    //把弟弟難過表情移到中間
                ch04_ddsad_img.classList.add("ch04_ddsad2");
                ch04_ddsad_img.style.opacity = 1
                ch04_tears1_img.style.opacity = 1
                ch04_tears2_img.style.opacity = 1
                break
            case 31:
                ch04_tears1_img.classList.remove("ch04_tears12");
                ch04_tears1_img.classList.add("ch04_tears1");
                ch04_tears2_img.classList.remove("ch04_tears22");
                ch04_tears2_img.classList.add("ch04_tears2");
                ch04_female_classmate_img.classList.remove("ch04_female_classmate");
                ch04_female_classmate_img.classList.add("ch04_female_classmateA2");
                ch04_female_classmate2_img.classList.remove("ch04_female_classmate2");
                ch04_female_classmate2_img.classList.add("ch04_female_classmateB2");
                ch04_ddsad_img.style.opacity = 1
                ch04_female_classmate_img.style.opacity = 1
                ch04_female_classmate2_img.style.opacity = 1
                break
        }
        create_text_click()
    }
    else if(text_count >= 32 && text_count <= 36){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 32:
                ch04_ddsad_img.classList.remove("ch04_ddsad2");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad");
                ch04_ddsad_img.style.opacity = 1
                break
            case 33:
                ch04_ddhappy_img.style.opacity = 1
                break
            case 34:
                ch04_ddsad_img.style.opacity = 1
                break
            case 35:
                ch04_ddangry_img.style.opacity = 1
                break
            case 36:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
        }
    }
    //(3)
    else if(text_count >=  37 && text_count <= 38){
        create_text()
        switch(text_count){     //動畫
            case 37:
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_ddsad_img.classList.remove("ch04_ddsad");    //把弟弟難過表情移到中間
                ch04_ddsad_img.classList.add("ch04_ddsad2");
                ch04_ddsad_img.style.opacity = 1
                break
            case 38:
                ch04_ddsad_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 0.5
                break
        }
        create_text_click()
    }
    else if(text_count >= 39 && text_count <= 42){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 39:
                ch04_ddsad_img.classList.remove("ch04_ddsad2");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad");
                ch04_ddsad_img.style.opacity = 1
                break
            case 40:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 41:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 42:
                ch04_ddshy_img.style.opacity = 1
                break
        }
    }
    //(4)
    else if(text_count >=  43 && text_count <= 45){
        create_text()
        switch(text_count){     //動畫
            case 43:
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_ddsad_img.classList.remove("ch04_ddsad");    //把弟弟難過表情移到中間
                ch04_ddsad_img.classList.add("ch04_ddsad2");
                ch04_ddsad_img.style.opacity = 1
                ch04_hairball_img.style.opacity = 1
                ch04_jacket_img.style.opacity = 1
                ch04_pants_img.style.opacity = 1
                ch04_music_img.style.opacity = 1
                ch04_dessert_img.style.opacity = 1
                break
            case 44:
                ch04_ddsad_img.style.opacity = 1
                ch04_hairball_img.style.opacity = 1
                ch04_jacket_img.style.opacity = 1
                ch04_pants_img.style.opacity = 1
                ch04_music_img.style.opacity = 1
                ch04_dessert_img.style.opacity = 1
                break
            case 45:
                ch04_dd_img.classList.remove("ch04_dd3");    //把弟弟移回中間
                ch04_dd_img.classList.remove("ch04_dd2");    //把弟弟移回中間
                ch04_dd_img.style.opacity = 1
                ch04_hairball_img.style.opacity = 1
                ch04_jacket_img.style.opacity = 1
                ch04_pants_img.style.opacity = 1
                ch04_music_img.style.opacity = 1
                ch04_dessert_img.style.opacity = 1
                break
        }
        create_text_click()
    }
    else if(text_count >= 46 && text_count <= 49){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 46:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 47:
                ch04_dd_img.style.opacity = 1
                break
            case 48:
                ch04_dd_img.style.opacity = 1
                break
            case 49:
                ch04_dd_img.style.opacity = 1
                break
        }
    }
    //(5)
    else if(text_count >=  50 && text_count <= 51){
        create_text()
        switch(text_count){     //動畫
            case 50:
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_teacher_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    ch04_teacher_img.style.opacity = 0
                    ch04_male_classmateSOR_img.style.opacity = 1
                }, "2000");
                break
            case 51:                
                ch04_applaud_img.style.opacity = 1
                create_text_click()
                break
        }
    }
    else if(text_count >= 52 && text_count <= 55){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 52:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 53:
                ch04_dd_img.style.opacity = 1
                break
            case 54:
                ch04_dd_img.style.opacity = 1
                break
            case 55:
                ch04_ddshy_img.style.opacity = 1
                break
        }
    }
    //(6)
    else if(text_count >=  56 && text_count <= 61){
        create_text()
        switch(text_count){     //動畫
            case 56:
                background_animation()
                bg.setAttribute('src', '圖庫/籃球場.png')
                background_animation_clear()
                ch04_ddsad_img.classList.remove("ch04_ddsad3");    //把弟弟難過表情移到中間
                ch04_ddsad_img.classList.add("ch04_ddsad2");
                ch04_ddsad_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                break
            case 57:
                ch04_dd_img.classList.remove("ch04_dd3");    //把弟弟移回中間
                ch04_dd_img.classList.remove("ch04_dd2");    //把弟弟移回中間
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 0.5
                break
            case 58:
                ch04_dd_img.style.opacity = 0.5
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 0.5
                break
            case 59:
                ch04_dd_img.style.opacity = 0.5
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 1
                break
            case 60:
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 0.5
                break
            case 61:
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 0.5
                break
        }
        create_text_click()
    }
    else if(text_count >= 62  && text_count <= 66){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 62:
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到左下
                ch04_dd_img.classList.add("ch04_dd2");
                ch04_dd_img.style.opacity = 1
                break
            case 63:
                ch04_ddsad_img.classList.remove("ch04_ddsad2");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad");
                ch04_ddsad_img.style.opacity = 1
                break
            case 64:
                ch04_ddsad_img.classList.remove("ch04_ddsad2");    //把弟弟難過表情移到左下
                ch04_ddsad_img.classList.add("ch04_ddsad");
                ch04_ddsad_img.style.opacity = 1
                break
            case 65:
                ch04_dd_img.style.opacity = 1
                break
            case 66:
                ch04_dd_img.style.opacity = 1
                break
        }
    }
    //END
    else if(text_count >=  67 && text_count <= 111){
        create_text()
        switch(text_count){     //動畫
            case 67://結局一
                background_animation()
                bg.setAttribute('src', '圖庫/暗藍背景(溝通).png')
                background_animation_clear()
                create_text_click()
                ch04_male_classmateSOR_img.classList.remove("ch04_male_classmateSOR");
                ch04_male_classmateSOR_img.classList.add("ch04_male_classmateSOR2");
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                break
            case 68:
                create_text_click()
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                break
            case 69:
                create_text_click()
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                break
            case 70:
                create_text_click()
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                break
            case 71:
                create_text_click()
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                break
            case 72:
                create_text_click()
                ch04_ddprotect_img.style.opacity = 1
                ch04_furyo_shounen_img.style.opacity = 1
                ch04_male_classmateSOR_img.style.opacity = 1
                page = 999
                break
            case 73://結局二
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_txt2_img.style.opacity = 1//弟弟吸氣
                setTimeout(() => {
                    ch04_txt2_img.style.opacity = 0
                    ch04_txt3_img.style.opacity = 1//弟弟吐氣
                    create_text_click()
                }, "1500");
                break
            case 74:
                create_text_click()
                ch04_end2_img.style.opacity = 1
                break
            case 75:
                create_text_click()
                ch04_end2_img.style.opacity = 1
                page = 999
                break
            case 76://結局三                
                create_text_click()
                ch04_end3_img.style.opacity = 1
                break
            case 77:
                create_text_click()
                ch04_end3_img.style.opacity = 1
                break
            case 78:
                create_text_click()
                ch04_end3_img.style.opacity = 1
                break
            case 79:
                create_text_click()
                ch04_end3_img.style.opacity = 1
                break
            case 80:
                create_text_click()
                ch04_end3_img.style.opacity = 1
                break
            case 81:
                create_text_click()
                ch04_end3_img.style.opacity = 1
                page = 999
                break
            case 82://結局四
                background_animation()
                bg.setAttribute('src', '圖庫/黃色（溝通）.png')
                background_animation_clear()
                ch04_end4_img.style.opacity = 1
                create_text_click()
                break
            case 83:
                ch04_end4_img.style.opacity = 1
                ch04_basketball_img.style.opacity = 1
                ch04_game_img.style.opacity = 1
                create_text_click()
                break
            case 84:
                ch04_end4_img.style.opacity = 1
                ch04_basketball_img.style.opacity = 1
                ch04_game_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 85://結局五
                create_text_click()
                ch04_end5_img.style.opacity = 1
                break
            case 86:
                ch04_end5_img.style.opacity = 1
                create_text_click()
                break
            case 87:
                ch04_end5_img.style.opacity = 1
                create_text_click()
                break
            case 88:
                ch04_end5_img.style.opacity = 1
                create_text_click()
                break
            case 89:
                ch04_end5_img.style.opacity = 1
                create_text_click()
                break
            case 90:
                ch04_end5_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 91://結局六
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 92:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 93:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 94:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 95:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 96:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 97:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 98:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 99:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 100:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 101:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 102:
                ch04_listen_to_music_img.style.opacity = 1
                create_text_click()
                break
            case 103:
                ch04_news_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 104://結局七
                create_text_click()
                ch04_male_classmate_img.classList.remove("ch04_male_classmateA2");
                ch04_male_classmate_img.classList.add("ch04_male_classmate");
                ch04_male_classmate2_img.classList.remove("ch04_male_classmateB2");
                ch04_male_classmate2_img.classList.add("ch04_male_classmate2");
                ch04_dd_img.classList.remove("ch04_dd");    //把弟弟移到右邊
                ch04_dd_img.classList.remove("ch04_dd2");
                ch04_dd_img.classList.add("ch04_dd3");
                ch04_male_classmate_img.style.opacity = 0.5
                ch04_male_classmate2_img.style.opacity = 0.5
                ch04_dd_img.style.opacity = 1
                break
            case 105:
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                ch04_dd_img.style.opacity = 1
                ch04_txt4_img.style.opacity = 1
                ch04_txt5_img.style.opacity = 1
                create_text_click()
                break
            case 106:
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                ch04_dd_img.style.opacity = 1
                ch04_txt4_img.style.opacity = 1
                ch04_txt6_img.style.opacity = 1
                ch04_txt7_img.style.opacity = 1
                create_text_click()
                break
            case 107:
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                ch04_dd_img.style.opacity = 1
                ch04_txt4_img.style.opacity = 1
                ch04_txt6_img.style.opacity = 1
                ch04_txt7_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 108://結局八
                create_text_click()
                ch04_dd_img.classList.remove("ch04_dd2");    //把弟弟移到中間
                ch04_dd_img.classList.remove("ch04_dd3");
                ch04_dd_img.classList.add("ch04_dd");
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                break
            case 109:
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                create_text_click()
                break
            case 110:
                ch04_dd_img.style.opacity = 1
                ch04_male_classmate_img.style.opacity = 1
                ch04_male_classmate2_img.style.opacity = 1
                create_text_click()
                break
            case 111:
                create_text_click()
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch04_news_img.style.opacity = 1
                page = 999
                break
        }
    }else{
        music_end()     //背景音量遞減
        text.innerText = "章節結束，再按一次返回首頁"
        text.addEventListener('click', () => window.location.reload())//重整頁面
    }
    //顯示相關介面
    storyText.appendChild(text)   //顯示文字敘述
    
    function create_text(){
        typing_music_start()        //打字音效開始
        text.addEventListener('click', create_text_end)      //設定click事件
        setTimeout(() => {
            if(text_number <= game4_text[text_count].length + 1){
                text.innerText = game4_text[text_count].slice(0,text_number)      //讀取字串中的字
                text_number++
                create_text()       //再次呼叫，以形成迴圈來逐一顯示
            }else if(text_number > game4_text[text_count].length + 1){      //字串顯示完成，設定click
                typing_music_end()      //打字音效結束
                create_text_click()
            }
        }, "80");
    }

    function create_text_end(){
        text_number = game4_text[text_count].length + 2     //讓create_text()的迴圈結束到else if來去執行create_text_click()
        text.innerText = game4_text[text_count]      //顯示完整敘述
        text.removeEventListener('click', create_text_end)      //移除click事件
    }

    function create_text_click(){
        create_text_clickNumber++       //總共會被呼叫兩次，1.動畫結束 2.文字顯示結束，所以>>>(= 2)來去執行下面的if
        if (create_text_clickNumber == 2){
            if(text_count != 13 && text_count != 29){
                text.addEventListener('click', ch04)      //設定click事件
                next_text_img.appendChild(next_text)
                text_count++
            }else{       //因第13、29句是當前段落選擇完後還有當前段的劇情，所以會用ch04_text_count來暫且紀錄選擇後會跳轉至哪裡，而到13、29句結束時將暫且紀錄的ch04_text_count套用至text_count來繼續劇情
                text.addEventListener('click', ch04)      //設定click事件
                next_text_img.appendChild(next_text)
                text_count = ch04_text_count
            }
        }
        if (page == 999){       //章節結束
            text_count = 999
        }
    }

    function create_Button_innerText(){     //建立按鈕與事件 設定文字敘述
        let i = 1   //用於判斷有無按鈕要載入
        create_btn()
        function create_btn(){    //建立按鈕
            let j //用於設定click事件連結去哪個章節
            j = i
            if (i <= game4_choose[choose_count].length){
                const chaper_button = document.createElement('button')      //情緒選擇按鈕
                chaper_button.innerText = game4_choose[choose_count][j-1]
                chaper_button.classList.add('btn-animation')
                chaper_button.addEventListener('click',  () => game4_choose_test(j))
                chooseButton.appendChild(chaper_button)   //顯示情緒選擇按鈕
                i++
                setTimeout(() => {    //延遲作為依序的載入動畫
                  create_btn()
                }, "80");
                setTimeout(() => {   //載入動畫換成沒動畫的避免:hover(懸停)會再重複觸發載入動畫
                  chaper_button.classList.remove('btn-animation')
                  chaper_button.classList.add('btn')
                }, "500");
            }
        }
        
        text.innerText = game4_text[text_count]
    }

    function background_animation(){        //淡出
        bg.classList.remove('backgroundA')
        bg.classList.add('backgroundB')
    }
    
    function background_animation_clear(){
        setTimeout(() => {
            bg.classList.remove('backgroundB')
            bg.classList.add('backgroundA')
        }, "2000");
    }
    
    function music_end(){
        setTimeout(() => {  //背景音量遞減
            if(myAuto4.volume > 0.3){
                myAuto4.volume = myAuto4.volume - 0.1 //讓音樂1音量降低(0~1.0)
                music_end()
            }
        }, "1000")
    }
}