function ch03(){
    //宣告
    var create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件
    var text_number = 0   //用於create_text()記錄用
    const text = document.createElement('div')      //文字敘述區
    text.classList.add('txt')

    const next_text = document.createElement('img')     //文字敘述下一段提示的圖片
    next_text.classList.add('next_text_img')
    next_text.setAttribute('src', '圖庫/next-text.png')
    
    var myAuto3 = document.getElementById('myaudio3')//音樂3
    myAuto3.volume = 0.5 //讓音樂3音量降低(0~1.0)
    myAuto3.play()//播放音樂3
    
    choose_Gender_man_img.removeEventListener('click', ch03)    //移除click事件，避免重複
    choose_Gender_girl_img.removeEventListener('click', ch03)

    clear()   //重製畫面

    if(text_count == 15){       //選擇追誰
        choose_count = 1
        create_Button_innerText()
    }else if(text_count == 13 || text_count == 34 || text_count == 47 || text_count == 75 || text_count == 90 || text_count == 114 || text_count == 132){
        switch(text_count){     //動畫
            case 13:
                choose_count = 0
                break
            case 34:
                choose_count = 2
                break
            case 47:
                choose_count = 3
                break
            case 75:
                choose_count = 4
                setTimeout(() => {      //延遲設定結束，避免無法顯示文字之BUG
                    text_count = 999
                }, "100");
                break
            case 90:
                choose_count = 5
                break
            case 114:
                choose_count = 6
                break
            case 132:
                choose_count = 7
                setTimeout(() => {      //延遲設定結束，避免無法顯示文字之BUG
                    text_count = 999
                }, "100");
                break
        }
        create_checkButton_innerText()
    }else if((text_count != 13 || text_count != 15 || text_count != 34 || text_count != 47 || text_count != 75 || text_count != 90 || text_count != 114 || text_count != 132) && (text_count <= 132)){
        switch(text_count){     //動畫
            case 0:
                create_text()
                create_text_click()                
                ch03_dd_img.style.opacity = 1
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 1
                ch03_name1_img.style.opacity = 1
                ch03_name2_img.style.opacity = 1
                ch03_name3_img.style.opacity = 1
                break
            case 1:
                create_text()
                create_text_click()                
                ch03_bell_img.style.opacity = 1
                break
            case 2:
                create_text()
                bg.setAttribute('src', '圖庫/走廊.png')
                ch03_dd_img.classList.remove("ch03_dd");    //弟弟跑進教室
                ch03_dd_img.classList.add("ch03_dd2");
                ch03_dd_img.style.opacity = 1
                setTimeout(() => {
                    bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                    ch03_friend2angry_img.classList.remove("ch03_friend2angry");    //被推
                    ch03_friend2angry_img.classList.add("ch03_friend2angry2");
                    ch03_dd_img.style.opacity = 0
                    ch03_friend1angry_img.style.opacity = 1
                    ch03_friend2angry_img.style.opacity = 1
                    ch03_window_img.style.opacity = 1
                    setTimeout(() => {
                        bg.setAttribute('src', '圖庫/教室.png')
                        ch03_friend1angry_img.classList.remove("ch03_friend1angry");    //取消朋友黑影
                        ch03_friend1angry_img.classList.add("ch03_friend1angry2");
                        ch03_friend2angry_img.classList.remove("ch03_friend2angry2");    //取消朋友黑影
                        ch03_friend2angry_img.classList.add("ch03_friend2angry3");
                        ch03_window_img.style.opacity = 0
                        ch03_ddprotect_img.style.opacity = 1
                        create_text_click()
                    }, "2000");
                }, "2000");
                break
            case 3:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 1
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2angry_img.style.opacity = 0.7
                break
            case 4:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 0.7
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2angry_img.style.opacity = 1
                break
            case 5:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 0.7
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2angry_img.style.opacity = 0.7
                break
            case 6:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 1
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2angry_img.style.opacity = 0.7
                break
            case 7:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 0.7
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2angry_img.style.opacity = 0.7
                break
            case 8:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 1
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2angry_img.style.opacity = 0.7
                break
            case 9:
                create_text()
                create_text_click()
                ch03_ddprotect_img.style.opacity = 0.7
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2angry_img.style.opacity = 1
                break
            case 10:
                create_text()
                ch03_teacherangry_img.classList.remove("ch03_teacherangry");    //移動老師
                ch03_teacherangry_img.classList.add("ch03_teacherangry2");
                ch03_female_classmate_img.classList.remove("ch03_female_classmate");
                ch03_female_classmate_img.classList.add("ch03_female_classmateA2");
                ch03_door_img.style.opacity = 1
                ch03_door_frame_img.style.opacity = 1
                ch03_teacherangry_img.style.opacity = 1
                ch03_female_classmate_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                }, "2000");
                break
            case 11:
                create_text()
                create_text_click()
                ch03_teacherangry_img.classList.remove("ch03_teacherangry2");    //移動老師
                ch03_teacherangry_img.classList.add("ch03_teacherangry3");
                ch03_teacherangry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 1
                break
            case 12:
                create_text()
                create_text_click()
                ch03_teacherangry_img.style.opacity = 0.5
                ch03_ddscared_img.style.opacity = 1
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 0.5
                break
            case 14:
                create_text()
                create_text_click()
                bg.setAttribute('src', '圖庫/走廊.png')
                ch03_teacherangry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 1
                break
            case 16:
                create_text()
                ch03_friend1angry_img.classList.remove("ch03_friend1angry2");    //朋友a跑
                ch03_friend1angry_img.classList.add("ch03_friend1angry3");
                ch03_friend1angry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1                
                setTimeout(() => {
                    ch03_ddscared_img.classList.remove("ch03_ddscared");    //弟弟追
                    ch03_ddscared_img.classList.add("ch03_ddscared2");                    
                    setTimeout(() => {
                        ch03_ddscared_img.style.opacity = 0
                        ch03_friend1angry_img.style.opacity = 0
                        ch03_friend1angry_img.classList.remove("ch03_friend1angry3");    //朋友a跑
                        ch03_friend1angry_img.classList.add("ch03_friend1angry2");
                        ch03_ddscared_img.classList.remove("ch03_ddscared2");    //弟弟追
                        ch03_ddscared_img.classList.add("ch03_ddscared");  
                        create_text_click()
                    }, "2500");
                }, "500");
                break
            case 17:                
                bodybackground.classList.add("bg_flicker2"); //轉場效果
                bg.setAttribute('src', '圖庫/公園(溝通).png')
                ch03_friend1angry_img.classList.remove("ch03_friend1angry2");    //朋友a跑
                ch03_friend1angry_img.classList.add("ch03_friend1angry4");
                ch03_ddscared_img.classList.remove("ch03_ddscared");    //弟弟追
                ch03_ddscared_img.classList.add("ch03_ddscared3"); 
                ch03_friend1angry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1                
                setTimeout(() => {
                    bodybackground.classList.remove("bg_flicker2");//移除轉場效果
                    create_text()
                    setTimeout(() => {
                        create_text_click()
                    }, "1000");
                }, "1000");
                break
            case 18:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 19:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 20:
                bg.setAttribute('src', '圖庫/走廊.png')
                bodybackground.classList.add("bg_flicker1"); //轉場效果
                ch03_friend1_img.classList.remove("ch03_friend1");
                ch03_friend1_img.classList.add("ch03_friend1b"); 
                ch03_friend2_img.classList.remove("ch03_friend2");
                ch03_friend2_img.classList.add("ch03_friend2b"); 
                setTimeout(() => {
                    create_text()
                    create_text_click()
                    ch03_friend1_img.style.opacity = 1
                    ch03_friend2_img.style.opacity = 1
                }, "800");
                break
            case 21:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 22:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 23:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 24:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 25:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 26:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 27:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 28:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 29:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 30:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 31:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 32:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 33:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                bodybackground.classList.remove("bg_flicker1");//移除轉場效果
                break
            case 35:                
                bodybackground.classList.add("bg_flicker1"); //轉場效果
                bg.setAttribute('src', '圖庫/公園(溝通).png')
                setTimeout(() => {
                    create_text()
                    create_text_click()
                    ch03_ddscared_img.classList.remove("ch03_ddscared3");
                    ch03_ddscared_img.classList.add("ch03_ddscared4"); 
                    ch03_friend1angry_img.style.opacity = 1
                    ch03_ddscared_img.style.opacity = 1
                }, "800");
                break
            case 36:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 37:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 38:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 39:
                create_text()
                create_text_click()
                ch03_dd_img.classList.remove("ch03_dd2");
                ch03_dd_img.classList.add("ch03_dd3"); 
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 40:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 41:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 42:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 43:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 44:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 45:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 46:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                bodybackground.classList.remove("bg_flicker1");//移除轉場效果
                break
            case 48:                
                bodybackground.classList.add("bg_flicker2"); //轉場效果
                bg.setAttribute('src', '圖庫/走廊.png')
                setTimeout(() => {
                    create_text()
                    create_text_click()
                    bodybackground.classList.remove("bg_flicker2");//移除轉場效果                    
                    ch03_friend1scared_img.classList.remove("ch03_friend1scared");
                    ch03_friend1scared_img.classList.add("ch03_friend1scared2"); 
                    ch03_friend2scared_img.classList.remove("ch03_friend2scared");
                    ch03_friend2scared_img.classList.add("ch03_friend2scared2"); 
                    ch03_dd_img.classList.remove("ch03_dd3");
                    ch03_dd_img.classList.add("ch03_dd"); 
                    ch03_friend1scared_img.style.opacity = 1
                    ch03_friend2scared_img.style.opacity = 1
                    ch03_dd_img.style.opacity = 1
                }, "1000");
                break
            case 49:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 50:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 51:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 1
                break
            case 52:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 53:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 54:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 55:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 56:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 57:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 58:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 59:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 60:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 61:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.5
                ch03_friend2scared_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 1
                break
            case 62:
                create_text()
                create_text_click()
                ch03_friend1_img.classList.remove("ch03_friend1b");
                ch03_friend1_img.classList.add("ch03_friend1c"); 
                ch03_friend2_img.classList.remove("ch03_friend2b");
                ch03_friend2_img.classList.add("ch03_friend2c"); 
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 63:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 64:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 65:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 66:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 67:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 68:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 69:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 70:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.5
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 1
                break
            case 71:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 0.5
                break
            case 72:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity =0.5
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.5
                break
            case 73:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.5
                ch03_dd_img.style.opacity = 1
                break
            case 74:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 1
                break
            case 76:
                create_text()
                ch03_friend2scared_img.classList.remove("ch03_friend2scared");    //朋友b跑
                ch03_friend2scared_img.classList.add("ch03_friend2scared3");
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1                
                setTimeout(() => {
                    ch03_ddscared_img.classList.remove("ch03_ddscared");    //弟弟追
                    ch03_ddscared_img.classList.add("ch03_ddscared2");                    
                    setTimeout(() => {
                        ch03_ddscared_img.style.opacity = 0
                        ch03_friend2scared_img.style.opacity = 0
                        ch03_friend2scared_img.classList.remove("ch03_friend2scared3");    //朋友b跑
                        ch03_friend2scared_img.classList.add("ch03_friend2scared");
                        ch03_ddscared_img.classList.remove("ch03_ddscared2");    //弟弟追
                        ch03_ddscared_img.classList.add("ch03_ddscared");  
                        create_text_click()
                    }, "2500");
                }, "500");
                break
            case 77:
                create_text()
                ch03_friend2scared_img.classList.remove("ch03_friend2scared");    //朋友b跑
                ch03_friend2scared_img.classList.add("ch03_friend2scared4");
                ch03_ddscared_img.classList.remove("ch03_ddscared");    //弟弟追
                ch03_ddscared_img.classList.add("ch03_ddscared3"); 
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1                
                setTimeout(() => {
                    create_text_click()
                }, "1000");              
                break
            case 78:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 79:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 80:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 81:
                create_text()
                ch03_ddscared_img.classList.remove("ch03_ddscared3");
                ch03_ddscared_img.classList.add("ch03_ddscared5"); 
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                }, "1000"); 
                break
            case 82:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 83:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 84:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 85:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 86:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 87:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 88:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddscared_img.style.opacity = 1
                break
            case 89:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_ddscared_img.style.opacity = 0.7
                break
            case 91:
                bodybackground.classList.add("bg_flicker1"); //轉場效果
                setTimeout(() => {
                    create_text()
                    create_text_click()
                }, "800");
                break
            case 92:
                create_text()
                create_text_click()
                ch03_friend1_img.classList.remove("ch03_friend1");
                ch03_friend1_img.classList.add("ch03_friend1b");
                ch03_friend2_img.classList.remove("ch03_friend2");
                ch03_friend2_img.classList.add("ch03_friend2b");
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 93:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 94:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 95:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2_img.style.opacity = 1
                break
            case 96:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 0.7
                break
            case 97:
                create_text()
                create_text_click()
                ch03_friend2scared_img.classList.remove("ch03_friend2scared4");
                ch03_friend2scared_img.classList.add("ch03_friend2scared5");
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                break
            case 98:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                break
            case 99:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                break
            case 100:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                break
            case 101:
                create_text()
                create_text_click()
                ch03_friend1_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                break
            case 102:
                create_text()
                ch03_friend1_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                setTimeout(() => {
                    ch03_friend1_img.classList.remove("ch03_friend1");
                    ch03_friend1_img.classList.add("ch03_friend1d");
                    setTimeout(() => {
                        create_text_click()
                    }, "3000");
                }, "2000");
                break
            case 103:
                create_text()
                ch03_friend2scared_img.classList.remove("ch03_friend2scared5");
                ch03_friend2scared_img.classList.add("ch03_friend2scared6");
                ch03_friend2scared_img.style.opacity = 1
                setTimeout(() => {
                    create_text_click()
                    bodybackground.classList.remove("bg_flicker1");//移除轉場效果
                }, "1000");
                break
            case 104:
                bodybackground.classList.add("bg_flicker1"); //轉場效果
                setTimeout(() => {
                    create_text()
                    create_text_click()
                }, "800");
                break
            case 105:
                create_text()
                create_text_click()
                ch03_friend2scared_img.classList.remove("ch03_friend2scared6");
                ch03_friend2scared_img.classList.add("ch03_friend2scared5");
                ch03_dd_img.classList.remove("ch03_dd2");
                ch03_dd_img.classList.add("ch03_dd");
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 106:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 107:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 108:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 109:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 110:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 111:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 112:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 113:
                create_text()
                create_text_click()
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                bodybackground.classList.remove("bg_flicker1");//移除轉場效果
                break
            case 115:                
                bodybackground.classList.add("bg_flicker2"); //轉場效果
                bg.setAttribute('src', '圖庫/教室.png')
                setTimeout(() => {
                    bodybackground.classList.remove("bg_flicker2");//移除轉場效果
                    create_text()
                    create_text_click()
                }, "1000");
                break
            case 116:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 117:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7
                break
            case 118:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddangry_img.style.opacity = 1
                break
            case 119:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7
                break
            case 120:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 121:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7
                break
            case 122:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 123:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 124:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 125:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7
                break
            case 126:
                create_text()
                create_text_click()
                ch03_friend1angry_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_ddangry_img.style.opacity = 1
                break
            case 127:
                create_text()
                create_text_click()
                ch03_friend1scared_img.classList.remove("ch03_friend1scared");
                ch03_friend1scared_img.classList.add("ch03_friend1scared3");
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7               
                break
            case 128:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 1
                ch03_dd_img.style.opacity = 0.7
                break
            case 129:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 1
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 0.7
                break
            case 130:
                create_text()
                create_text_click()
                ch03_friend1scared_img.style.opacity = 0.7
                ch03_friend2scared_img.style.opacity = 0.7
                ch03_dd_img.style.opacity = 1
                break
            case 131:
                create_text()
                create_text_click()
                ch03_friend1_img.classList.remove("ch03_friend1d");
                ch03_friend1_img.classList.add("ch03_friend1c");
                ch03_friend1_img.style.opacity = 1
                ch03_friend2_img.style.opacity = 1
                ch03_dd_img.style.opacity = 1
                break
        }
    }else{
        music_end()     //背景音量遞減
        text.innerText = "章節結束，再按一次返回首頁"
        text.addEventListener('click', () => window.location.reload())//重整頁面
        Mood_end()
    }
    //顯示相關介面
    storyText.appendChild(text)   //顯示文字敘述
    
    function create_text(){
        typing_music_start()        //打字音效開始
        text.addEventListener('click', create_text_end)      //設定click事件
        setTimeout(() => {
            if(text_number <= game3_text[text_count].length + 1){
                text.innerText = game3_text[text_count].slice(0,text_number)      //讀取字串中的字
                text_number++
                create_text()       //再次呼叫，以形成迴圈來逐一顯示
            }else if(text_number > game3_text[text_count].length + 1){      //字串顯示完成，設定click
                typing_music_end()      //打字音效結束
                create_text_click()
            }
        }, "80");
    }

    function create_text_end(){
        text_number = game3_text[text_count].length + 2     //讓create_text()的迴圈結束到else if來去執行create_text_click()
        text.innerText = game3_text[text_count]      //顯示完整敘述
        text.removeEventListener('click', create_text_end)      //移除click事件
    }

    function create_text_click(){
        create_text_clickNumber++       //總共會被呼叫兩次，1.動畫結束 2.文字顯示結束，所以>>>(= 2)來去執行下面的if
        if (create_text_clickNumber == 2){
            text.addEventListener('click', ch03)      //設定click事件
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
            if (i <= game3_choose[choose_count].length){
                const chaper_button = document.createElement('button')      //情緒選擇按鈕
                chaper_button.innerText = game3_choose[choose_count][j-1]
                chaper_button.classList.add('btn-animation')
                chaper_button.addEventListener('click',  () => game3_choose_test(j))
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
        
        text.innerText = game3_text[text_count]
    }

    function create_checkButton_innerText(){     //建立按鈕與事件 設定文字敘述
        let i = 0   //用於判斷有無按鈕要載入
        create_btn()
        function create_btn(){    //建立按鈕
            let j //用於設定click事件連結去哪個章節
            j = i
            if (i < game3_choose[choose_count].length){
                const box = document.createElement('input')
                box.setAttribute('type', 'checkbox')
                box.name = game3_choose[choose_count][j]
                box.value = game3_choose[choose_count][j]
                box.id = game3_choose[choose_count][j]
            
                const lab = document.createElement('label')
                lab.htmlFor = game3_choose[choose_count][j]
                lab.appendChild(document.createTextNode(game3_choose[choose_count][j]))
            
                chooseButton.appendChild(box)
                chooseButton.appendChild(lab)
                    
                i++
                setTimeout(() => {    //延遲作為依序的載入動畫
                  create_btn()
                }, "80");
                setTimeout(() => {    //延遲作為依序的載入動畫
                    text.addEventListener('click', Mood_add)      //設定click事件
                }, "500");
            }
        }
        
        text.innerText = game3_text[text_count]
        next_text_img.appendChild(next_text)
        text_count++
    }

    
    function Mood_add(){    //紀錄所選情緒
        const boxs = document.querySelectorAll('input[type = checkbox]:checked')

        if (boxs.length <= 0){
            alert('至少選擇一個情緒')
        }else{
            var breaked = false
            for (let i = 0; i < boxs.length; i++){
                breaked = false
                for (let j = 0; j < Record_Mood.mood.length; j++){
                    if (boxs[i].value == Record_Mood.mood[j]){      //有記錄過則+1次數
                        let x = Record_Mood.mood_sum[j]
                        Record_Mood.mood_sum[j] = x + 1
                        breaked = true
                    }
                }
                if (breaked == false) {     //沒有紀錄則新增
                    Record_Mood.mood.push(boxs[i].value)
                    Record_Mood.mood_sum.push(1)
                }
            }
            ch03()
        }
    }
    
    function Mood_end(){        //故事結束顯示圓餅圖
        //清除預設的第一筆資料
        Record_Mood.mood.splice(0, 1)
        Record_Mood.mood_sum.splice(0, 1)

        chart_canvas.style.maxWidth = "60vw"

        new Chart("myChart", {
            type: "pie",        //圓餅圖
            data: {
                labels: Record_Mood.mood,
                datasets: [{
                    backgroundColor: Chart_Colors,
                    borderWidth: 0,     //無框線
                    borderColor: '#FFFFFF',     //框線顏色
                    borderAlign: 'inner',       //框線獨立顯示，不被重疊
                    hoverBorderWidth: 5,        //被觸碰時，顯示框線
                    data: Record_Mood.mood_sum
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "情緒總覽"
                }
            }
        })
    }
    
    function music_end(){
        setTimeout(() => {  //背景音量遞減
            if(myAuto3.volume > 0.2){
                myAuto3.volume = myAuto3.volume - 0.1 //讓音樂1音量降低(0~1.0)
                music_end()
            }
        }, "1000")
    }
}