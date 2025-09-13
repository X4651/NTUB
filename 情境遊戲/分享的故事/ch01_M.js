function ch01_M(){
    gender = 0      //0為男角
    //宣告
    var create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件
    var text_number = 0   //用於create_text()記錄用
    const text = document.createElement('div')      //文字敘述區
    text.classList.add('txt')

    const next_text = document.createElement('img')     //文字敘述下一段提示的圖片
    next_text.classList.add('next_text_img')
    next_text.setAttribute('src', '圖庫/next-text.png')

    var myAuto = document.getElementById('myaudio');//音樂1
    myAuto.volume = 0.5; //讓音樂1音量降低(0~1.0)
    myAuto.play();//播放音樂1
    
    choose_Gender_man_img.removeEventListener('click', ch01_M)    //移除click事件，避免重複
    choose_Gender_girl_img.removeEventListener('click', ch01_F)

    clear()   //重製畫面

    if(text_count >=  0 && text_count <= 7){
        background_animation()
        bg.setAttribute('src', '圖庫/藍色（溝通）.png')
        create_text()
        switch(text_count){     //動畫
            case 0:                
                create_text_click()                
                ch01_mom_img.style.opacity = 1
                ch01_fridge_img.style.opacity = 1
                break
            case 1:
                ch01_gg_go_home_img.classList.remove("ch01_gg_go_home");    //讓哥哥套用回家動畫
                ch01_gg_go_home_img.classList.add("ch01_gg_go_home2");
                ch01_fridge_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 1
                ch01_door3_img.style.opacity = 1
                ch01_door_frame_img.style.opacity = 1
                ch01_gg_go_home_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    ch01_door3_img.style.opacity = 1
                    ch01_door_frame_img.style.opacity = 1                    
                }, "1500");//1500
                break
            case 2:                
                ch01_mom_go_out_img.classList.remove("ch01_mom_go_out");    //讓媽媽套用出門動畫
                ch01_mom_go_out_img.classList.add("ch01_mom_go_out2");
                ch01_fridge_img.style.opacity = 1
                ch01_mom_go_out_img.style.opacity = 1
                ch01_door3_img.style.opacity = 1
                ch01_door_frame_img.style.opacity = 1
                ch01_gg_go_home_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    ch01_mom_go_out_img.style.opacity = 0
                    ch01_door3_img.style.opacity = 1
                    ch01_door_frame_img.style.opacity = 1                    
                }, "2000");//2000
                break
            case 3:
                ch01_fridge_img.style.opacity = 1
                ch01_gghappy_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    ch01_fridge_img.style.opacity = 0
                    ch01_gghappy_img.style.opacity = 0                   
                    ch01_gg_cake_img.style.opacity = 1                   
                }, "2000");//2000
                break
            case 4:
                background_animation()
                bg.setAttribute('src', '圖庫/籃球場.png')
                background_animation_clear()
                create_text_click()
                ch01_dd_img.style.opacity = 1
                break
            case 5:
                create_text_click()
                ch01_mom_img.style.opacity = 1
                ch01_fridge_img.style.opacity = 1
                ch01_ddhappy_img.style.opacity = 1
                break
            case 6:
                create_text_click()
                ch01_ddscared_img.style.opacity = 1
                break
            case 7:
                create_text_click()
                ch01_fridge2_img.style.opacity = 1
                break
        }
    }
    else if(text_count >= 8 && text_count <= 12){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 8:
                ch01_ddscared_img.classList.remove("ch01_maymayscared");    //讓弟弟驚訝表情移到左下
                ch01_ddscared_img.classList.add("ch01_maymayscared2");
                ch01_ddscared_img.style.opacity = 1
                break
            case 9:
                ch01_ddangry_img.style.opacity = 1
                break
            case 10:
                ch01_ddcry_img.style.opacity = 1
                break
            case 11:
                ch01_ddstopcry_img.style.opacity = 1
                break
            case 12:
                ch01_ddscared_img.style.opacity = 1
                break
        }
    }
    //(1)
    else if(text_count >=  13 && text_count <= 15){
        create_text()
        switch(text_count){     //動畫
            case 13:
                break
            case 14:
                ch01_ddangry_img.classList.remove("ch01_maymayangry");    //讓弟弟生氣表情移到左邊
                ch01_ddangry_img.classList.add("ch01_maymayangry2");
                ch01_ddangry_img.style.opacity = 1
                ch01_gg_img.style.opacity = 1
                break
            case 15:
                ch01_ddangry_img.style.opacity = 1
                ch01_ggangry_img.style.opacity = 1
                break
        }
        create_text_click()
    }
    else if(text_count >= 16 && text_count <= 20){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 16:
                ch01_ddangry_img.classList.remove("ch01_maymayangry2");    //讓弟弟生氣表情移回左下
                ch01_ddangry_img.classList.add("ch01_maymayangry");
                ch01_ddangry_img.style.opacity = 1
                break
            case 17:
                ch01_ddscared_img.style.opacity = 1
                break
            case 18:
                ch01_ddstopcry_img.style.opacity = 1
                break
            case 19:
                ch01_ddcry_img.style.opacity = 1
                break
            case 20:
                ch01_ddangry_img.style.opacity = 1
                break
        }
    }
    //(2)
    else if(text_count >=  21 && text_count <= 22){
        create_text()
        switch(text_count){     //動畫
            case 21:
                ch01_ddcry_img.classList.remove("ch01_maymaycry");    //讓弟弟大哭表情移到中間
                ch01_ddcry_img.classList.add("ch01_maymaycry2");
                ch01_ddcry_img.style.opacity = 1
                break
            case 22:
                ch01_ddcry_img.style.opacity = 1
                ch01_mom_img.style.opacity = 1
                break
        }
        create_text_click()
    }
    else if(text_count >= 23 && text_count <= 26){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 23:
                ch01_ddcry_img.classList.remove("ch01_maymaycry2");    //讓弟弟大哭表情回到左下
                ch01_ddcry_img.classList.add("ch01_maymaycry");
                ch01_ddcry_img.style.opacity = 1
                break
            case 24:
                ch01_ddsad_img.style.opacity = 1
                break
            case 25:
                ch01_ddangry_img.style.opacity = 1
                break
            case 26:
                ch01_dd_img.classList.remove("ch01_maymay");    //讓弟弟回到左下
                ch01_dd_img.classList.add("ch01_maymay2");
                ch01_dd_img.style.opacity = 1
                break
        }
    }
    //(3)
    else if(text_count == 27){
        create_text()
        //動畫
        background_animation()
        bg.setAttribute('src', '圖庫/主角房間(溝通).png')
        background_animation_clear()
        ch01_ddangry_img.classList.remove("ch01_maymayangry");    //讓弟弟生氣表情移到右邊
        ch01_ddangry_img.classList.add("ch01_maymayangry3");
        ch01_ddangry_img.style.opacity = 1
        ch01_door_img.style.opacity = 1
        setTimeout(() => {
            create_text_click()
            bodybackground.classList.add("door_bg_flicker"); //讓背景閃爍
            ch01_door_img.style.opacity = 0
            ch01_door2_img.style.opacity = 1
            ch01_txt3_img.style.opacity = 1
        }, "1500");
    }
    else if(text_count >= 28 && text_count <= 32){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 28:
                ch01_ddangry_img.classList.remove("ch01_maymayangry3");    //讓弟弟生氣表情移回左下
                ch01_ddangry_img.classList.add("ch01_maymayangry");
                ch01_ddangry_img.style.opacity = 1
                break
            case 29:
                ch01_ddangry_img.style.opacity = 1
                break
            case 30:
                ch01_ddstopcry_img.style.opacity = 1
                break
            case 31:
                ch01_ddsad_img.style.opacity = 1
                break
            case 32:
                ch01_ddsad_img.style.opacity = 1
                break
        }
    }
    //(4)
    else if(text_count == 33){
        create_text()
        ch01_ddsad_img.classList.remove("ch01_maymaysad");    //讓弟弟走回房間
        ch01_ddsad_img.classList.add("ch01_maymaysad_walk");
        ch01_door_img.classList.remove("ch01_door");    //小門
        ch01_door_img.classList.add("ch01_door_walk");
        ch01_ddsad_img.style.opacity = 1
        ch01_door3_img.style.opacity = 1
        ch01_door_frame_img.style.opacity = 1
        setTimeout(() => {
            create_text_click()
            ch01_ddsad_img.style.opacity = 0
            ch01_door3_img.style.opacity = 0
            ch01_door_frame_img.style.opacity = 0
            background_animation()
            bg.setAttribute('src', '圖庫/主角房間(溝通).png')
            background_animation_clear()
            ch01_ddread_img.style.opacity = 1
        }, "2000");
        //動畫
    }
    else if(text_count >= 34 && text_count <= 38){
        create_Button_innerText()
        ch01_ddhappy_img.classList.remove("ch01_maymayhappy");    //讓弟弟開心表情移到左下
        ch01_ddhappy_img.classList.add("ch01_maymayhappy2");
        ch01_ddsad_img.classList.remove("ch01_maymaysad_walk");    //讓弟弟回左下
        ch01_ddsad_img.classList.add("ch01_maymaysad");
        switch(text_count){     //動畫
            case 34:
                ch01_ddsad_img.style.opacity = 1
                break
            case 35:
                ch01_ddhappy_img.style.opacity = 1
                break
            case 36:
                ch01_ddhappy_img.style.opacity = 1
                break
            case 37:
                ch01_ddhappy_img.style.opacity = 1
                break
            case 38:
                ch01_ddsad_img.style.opacity = 1
                break
        }
    }
    //(5)
    else if(text_count == 39){
        create_text()
        //動畫
        ch01_ddcry_img.classList.remove("ch01_maymaycry");    //讓弟弟大哭表情移到中間
        ch01_ddcry_img.classList.add("ch01_maymaycry2");
        ch01_dad_img.classList.remove("ch01_dad");    //讓爸爸移動
        ch01_dad_img.classList.add("ch01_dad2");
        ch01_ddcry_img.style.opacity = 1
        ch01_dad_img.style.opacity = 1
        setTimeout(() => {
            create_text_click()
        }, "1000");
    }
    else if(text_count >= 40 && text_count <= 42){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 40:
                ch01_ddcry_img.classList.remove("ch01_maymaycry2");    //讓弟弟大哭表情移回左下
                ch01_ddcry_img.classList.add("ch01_maymaycry");
                ch01_ddcry_img.style.opacity = 1
                break
            case 41:
                ch01_ddsad_img.style.opacity = 1
                break
            case 42:
                ch01_ddhappy_img.classList.remove("ch01_maymayhappy");    //讓弟弟開心表情移到左下
                ch01_ddhappy_img.classList.add("ch01_maymayhappy2");
                ch01_ddhappy_img.style.opacity = 1
                break
        }
    }
    //(6)
    else if(text_count == 43){
        create_text()
        create_text_click()
        //動畫
        ch01_dd_img.classList.remove("ch01_maymay");    //讓弟弟移到左中
        ch01_dd_img.classList.add("ch01_maymay3");
        ch01_dd_img.style.opacity = 1
        ch01_friendA_img.style.opacity = 1
    }
    else if(text_count >= 44  && text_count <= 46){
        create_Button_innerText()
        ch01_ddhappy_img.classList.remove("ch01_maymayhappy");    //讓弟弟開心表情移到左下
        ch01_ddhappy_img.classList.add("ch01_maymayhappy2");
        switch(text_count){     //動畫
            case 44:
                ch01_dd_img.classList.remove("ch01_maymay3");    //讓弟弟移回左下
                ch01_dd_img.classList.add("ch01_maymay2");
                ch01_dd_img.style.opacity = 1
                break
            case 45:
                ch01_ddhappy_img.style.opacity = 1
                break
            case 46:
                ch01_ddhappy_img.style.opacity = 1
                break
        }
    }
    //END
    else if(text_count >=  47 && text_count <= 91){
        create_text()
        switch(text_count){     //動畫
            case 47://結局一
                background_animation()
                bg.setAttribute('src', '圖庫/主角房間(溝通).png')
                background_animation_clear()
                ch01_ddsad_img.classList.remove("ch01_maymaysad");    //讓弟弟跑到中間
                ch01_ddsad_img.classList.add("ch01_maymaysad2");
                ch01_ddsad_img.style.opacity = 1
                create_text_click()
                break
            case 48:
                ch01_dd_img.style.opacity = 1
                create_text_click()
                break
            case 49:
                ch01_dd_img.style.opacity = 1
                create_text_click()
                break
            case 50:
                ch01_dd_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 51://結局二
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                ch01_dd_img.classList.remove("ch01_maymay3");    //讓弟弟移回左下
                ch01_dd_img.classList.add("ch01_maymay2");
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.classList.remove("ch01_friendA");
                ch01_friendA_img.classList.add("ch01_friendA2");
                ch01_friendA_img.style.opacity = 1
                ch01_friendB_img.style.opacity = 1
                ch01_friendC_img.style.opacity = 1
                create_text_click()
                break
            case 52:
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.style.opacity = 1
                ch01_friendB_img.style.opacity = 1
                ch01_friendC_img.style.opacity = 1
                create_text_click()
                break
            case 53:
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.style.opacity = 1
                ch01_friendB_img.style.opacity = 1
                ch01_friendC_img.style.opacity = 1
                create_text_click()
                break
            case 54:
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.style.opacity = 1
                ch01_friendB_img.style.opacity = 0.5
                ch01_friendC_img.style.opacity = 0.5
                create_text_click()
                break
            case 55:
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.style.opacity = 0.5
                ch01_friendB_img.style.opacity = 1
                ch01_friendC_img.style.opacity = 0.5
                create_text_click()
                break
            case 56:
                ch01_dd_img.style.opacity = 1
                ch01_friendA_img.style.opacity = 0.5
                ch01_friendB_img.style.opacity = 0.5
                ch01_friendC_img.style.opacity = 1
                create_text_click()
                break
            case 57:
                ch01_end2_M_img.style.opacity = 1
                create_text_click()
                page = 999
                break
            case 58://結局三
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_dd_img.classList.remove("ch01_maymay");
                ch01_dd_img.classList.add("ch01_maymay3");
                ch01_gg_img.style.opacity = 1
                ch01_dd_img.style.opacity = 1
                break
            case 59:
                create_text_click()
                ch01_gg_img.style.opacity = 0.5
                ch01_dd_img.style.opacity = 1
                break
            case 60:
                create_text_click()
                ch01_gghappy_img.style.opacity = 1
                ch01_dd_img.style.opacity = 0.5
                break
            case 61:
                create_text_click()
                ch01_ddhappy_img.classList.remove("ch01_maymayhappy");
                ch01_ddhappy_img.classList.add("ch01_maymayhappy3");
                ch01_gghappy_img.style.opacity = 0.5
                ch01_ddhappy_img.style.opacity = 1
                page = 999
                break
            case 62://結局四
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                ch01_txt1_M_img.style.opacity = 1//弟弟吸氣
                setTimeout(() => {
                    ch01_txt1_M_img.style.opacity = 0
                    ch01_txt2_M_img.style.opacity = 1//弟弟吐氣
                    create_text_click()
                }, "1500");
                break
            case 63:
                create_text_click()
                ch01_txt2_M_img.style.opacity = 1
                break
            case 64:
                create_text_click()
                ch01_gg_hug_M_img.style.opacity = 1
                page = 999
                break
            case 65://結局五
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_txt4_img.style.opacity = 1
                break
            case 66:
                background_animation()
                bg.setAttribute('src', '圖庫/賣場.png')
                background_animation_clear()
                create_text_click()
                ch01_dd_img.style.opacity = 1
                ch01_mom_img.style.opacity = 1
                break
            case 67:
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_cake1_img.style.opacity = 1
                ch01_cake2_img.style.opacity = 1
                ch01_cake3_img.style.opacity = 1
                break
            case 68:
                background_animation()
                bg.setAttribute('src', '圖庫/賣場.png')
                background_animation_clear()
                create_text_click()
                ch01_dd_img.style.opacity = 1
                ch01_mom_img.style.opacity = 1
                break
            case 69:
                create_text_click()
                ch01_dd_img.style.opacity = 1
                ch01_mom_img.style.opacity = 0.5
                break
            case 70:
                create_text_click()
                ch01_dd_img.style.opacity = 0.5
                ch01_mom_img.style.opacity = 1
                break
            case 71:
                create_text_click()
                ch01_ddhappy_img.classList.remove("ch01_maymayhappy");
                ch01_ddhappy_img.classList.add("ch01_maymayhappy4");
                ch01_ddhappy_img.style.opacity = 1
                ch01_mom_img.style.opacity = 0.5
                page = 999
                break
            case 72://結局六
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_ddsad_img.classList.remove("ch01_maymaysad");
                ch01_ddsad_img.classList.add("ch01_maymaysad3");
                ch01_ddsad_img.style.opacity = 1
                break
            case 73:
                create_text_click()
                ch01_ddsad_img.style.opacity = 1
                page = 999
                break
            case 74://結局七
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_ddhappy_img.style.opacity = 1
                ch01_mom_img.style.opacity = 1
                break
            case 75:
                create_text_click()
                ch01_ddhappy_img.style.opacity = 1
                ch01_mom_img.style.opacity = 1
                break
            case 76:
                create_text_click()
                ch01_ddhappy_img.style.opacity = 0.5
                ch01_mom_img.style.opacity = 1
                page = 999
                break
            case 77://結局八
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                break
            case 78:
                create_text_click()
                ch01_dd_img.classList.remove("ch01_maymay2");
                ch01_dd_img.classList.add("ch01_maymay3");
                ch01_gg_img.classList.remove("ch01_gg");
                ch01_gg_img.classList.add("ch01_gg2");
                ch01_mom_img.style.opacity = 1
                ch01_gg_img.style.opacity = 0.5
                ch01_dd_img.style.opacity = 0.5
                break
            case 79:
                create_text_click()
                ch01_mom_img.style.opacity = 0.5
                ch01_gg_img.style.opacity = 0.5
                ch01_dd_img.style.opacity = 1
                break
            case 80:
                create_text_click()
                ch01_mom_img.style.opacity = 0.5
                ch01_gg_img.style.opacity = 0.5
                ch01_dd_img.style.opacity = 1
                break
            case 81:
                create_text_click()
                ch01_mom_img.style.opacity = 1
                ch01_gg_img.style.opacity = 0.5
                ch01_dd_img.style.opacity = 0.5
                break
            case 82:
                create_text_click()
                break
            case 83:
                create_text_click()
                ch01_pork_img.style.opacity = 1
                break
            case 84:
                create_text_click()
                ch01_pork_img.classList.remove("ch01_pork");
                ch01_pork_img.classList.add("ch01_pork2");
                ch01_mom2_img.classList.remove("ch01_mom2");
                ch01_mom2_img.classList.add("ch01_mom3");
                ch01_dad_img.classList.remove("ch01_dad2");
                ch01_dad_img.classList.add("ch01_dad3");
                ch01_dd_img.classList.remove("ch01_maymay3");
                ch01_dd_img.classList.add("ch01_maymay4");
                ch01_gg_img.classList.remove("ch01_gg2");
                ch01_gg_img.classList.add("ch01_gg3");
                ch01_dd_img.style.opacity = 1
                ch01_table_img.style.opacity = 1
                ch01_pork_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 1
                ch01_dad_img.style.opacity = 1
                ch01_gg_img.style.opacity = 1                
                break
            case 85:
                create_text_click()
                ch01_dd_img.style.opacity = 1
                ch01_table_img.style.opacity = 1
                ch01_pork_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 0.5
                ch01_dad_img.style.opacity = 0.5
                ch01_gg_img.style.opacity = 0.5 
                break
            case 86:
                create_text_click()
                ch01_dd_img.style.opacity = 0.5
                ch01_table_img.style.opacity = 1
                ch01_pork_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 1
                ch01_dad_img.style.opacity = 0.5
                ch01_gg_img.style.opacity = 0.5
                break
            case 87:
                create_text_click()
                ch01_dd_img.style.opacity = 0.5
                ch01_table_img.style.opacity = 1
                ch01_pork_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 0.5
                ch01_dad_img.style.opacity = 1
                ch01_gg_img.style.opacity = 0.5
                break
            case 88:
                create_text_click()
                ch01_dd_img.style.opacity = 0.5
                ch01_table_img.style.opacity = 1
                ch01_pork_img.style.opacity = 1
                ch01_mom2_img.style.opacity = 1
                ch01_dad_img.style.opacity = 0.5
                ch01_gg_img.style.opacity = 0.5
                page = 999
                break
            case 89://結局九
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_dd_img.classList.remove("ch01_maymay");
                ch01_dd_img.classList.add("ch01_maymay3");
                ch01_dd_img.style.opacity = 1
                ch01_gghappy_img.style.opacity = 0.5
                break
            case 90:
                create_text_click()
                ch01_dd_img.style.opacity = 0.5
                ch01_gghappy_img.style.opacity = 1
                page = 999
                break
            case 91://結局十
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                create_text_click()
                ch01_end10_M_img.style.opacity = 1
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
            if(text_number <= game1_text_M[text_count].length + 1){
                text.innerText = game1_text_M[text_count].slice(0,text_number)      //讀取字串中的字
                text_number++
                create_text()       //再次呼叫，以形成迴圈來逐一顯示
            }else if(text_number > game1_text_M[text_count].length + 1){      //字串顯示完成，設定click
                typing_music_end()      //打字音效結束
                create_text_click()
            }
        }, "80");
    }

    function create_text_end(){
        text_number = game1_text_M[text_count].length + 2     //讓create_text()的迴圈結束到else if來去執行create_text_click()
        text.innerText = game1_text_M[text_count]      //顯示完整敘述
        text.removeEventListener('click', create_text_end)      //移除click事件
    }

    function create_text_click(){
        create_text_clickNumber++       //總共會被呼叫兩次，1.動畫結束 2.文字顯示結束，所以>>>(= 2)來去執行下面的if
        if (create_text_clickNumber == 2){
            text.addEventListener('click', ch01_M)      //設定click事件
            next_text_img.appendChild(next_text)
            text_count++
        }
        if (page == 999){
            text_count = 999
        }
    }
    function create_Button_innerText(){     //建立按鈕與事件 設定文字敘述
        let i = 1   //用於判斷有無按鈕要載入
        create_btn()
        function create_btn(){    //建立按鈕
            let j //用於設定click事件連結去哪個章節
            j = i
            if (i <= game1_choose[choose_count].length){
                const chaper_button = document.createElement('button')      //情緒選擇按鈕
                chaper_button.innerText = game1_choose[choose_count][j-1]
                chaper_button.classList.add('btn-animation')
                chaper_button.addEventListener('click',  () => game1_choose_test(j))
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
        
        text.innerText = game1_text_M[text_count]
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
            if(myAuto.volume > 0.2){
                myAuto.volume = myAuto.volume - 0.1 //讓音樂1音量降低(0~1.0)
                music_end()
            }
        }, "1000")
    }
}