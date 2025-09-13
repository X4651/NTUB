function ch02_M(){
    clear()   //重製畫面
    gender = 0      //0為男角
    //宣告
    var create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件
    var text_number = 0   //用於create_text()記錄用
    const text = document.createElement('div')      //文字敘述區
    text.classList.add('txt')

    const next_text = document.createElement('img')     //文字敘述下一段提示的圖片
    next_text.classList.add('next_text_img')
    next_text.setAttribute('src', '圖庫/next-text.png')

    var myAuto2 = document.getElementById('myaudio2');//音樂2
    myAuto2.play();//播放音樂2

    choose_Gender_man_img.removeEventListener('click', ch02_M)    //移除click事件，避免重複
    choose_Gender_girl_img.removeEventListener('click', ch02_F)

    if(text_count ==  0){        
        bg.setAttribute('src', '圖庫/客廳(溝通).png')
        background_animation()
        setTimeout(() => {
            ch02_fire_img.classList.remove("ch02_fire");    //把火焰的CSS替換成有動作的
            ch02_fire_img.classList.add("ch02_fire_shake");
            ch02_dadangry_img.style.opacity = 1 
            ch02_momangry_img.style.opacity = 1
            ch02_fire_img.style.opacity = 1     //顯示火焰
            ch02_fire2_img.style.opacity = 1    //顯示火焰
            create_text()
        }, "500");
        setTimeout(() => {
            ch02_dadangry_img.style.opacity = 0.5
            ch02_momangry_img.style.opacity = 0.5
            ch02_fire_img.style.opacity = 0.5    //火焰半透明
            ch02_fire2_img.style.opacity = 0.5   //火焰半透明
            ch02_ddsad_img.style.opacity = 1      //顯示弟弟傷心臉
            create_text_click()
        }, "3000");
        background_animation_clear()
    }
    else if(text_count >= 1 && text_count <= 5){
        create_Button_innerText()
        ch02_ddsad_img.style.opacity = 1    //顯示弟弟傷心臉
        switch(text_count){     //動畫
            case 1:
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
        }
    }
    //(1)
    else if(text_count >=  6 && text_count <= 7){
        create_text()
        switch(text_count){     //動畫
            case 6:
                ch02_ddcry_img.classList.remove("ch02_maymaycry");    //把弟弟的CSS替換成有動作的
                ch02_ddcry_img.classList.add("ch02_maymaycry_walk");
                ch02_ddcry_img.style.opacity = 1                      //顯示弟弟哭臉
                ch02_door1_img.style.opacity = 1                           //顯示門
                ch02_door_frame_img.style.opacity = 1
                setTimeout(() => {
                    ch02_ddcry_img.style.opacity = 0
                    ch02_door1_img.style.opacity = 0
                    ch02_door_frame_img.style.opacity = 0
                    ch02_toy_m_img.style.opacity = 1
                    background_animation()
                    bg.setAttribute('src', '圖庫/紫色背景.png')
                    background_animation_clear()
                    create_text_click()   
                }, "2000");
                break
            case 7:
                ch02_toy_m_img.style.opacity = 1
                create_text_click()
                break
        }
    }
    else if(text_count >= 8 && text_count <= 12){
        create_Button_innerText()
        bg.setAttribute('src', '圖庫/主角房間(溝通).png')
        ch02_ddsad_img.style.opacity = 1 //顯示弟弟哭臉
        switch(text_count){     //動畫
            case 8:
            case 9:
                break
            case 10:
                break
            case 11:
                break
            case 12:
                break
        }
    }
    //(2)
    else if(text_count >=  13 && text_count <= 15){
        create_text()
        create_text_click()
        switch(text_count){     //動畫
            case 13:        
                ch02_ddcry_img.classList.remove("ch02_maymaycry");    //把弟弟移到指定位置
                ch02_ddcry_img.classList.add("ch02_maymaycry2");
                ch02_dad_img.classList.remove("ch02_dad");    //把爸爸移到指定位置
                ch02_dad_img.classList.add("ch02_dad2");
                ch02_mom_img.classList.remove("ch02_mom");    //把媽媽移到指定位置
                ch02_mom_img.classList.add("ch02_mom2");
                ch02_ddcry_img.style.opacity = 1 //顯示弟弟哭臉
                ch02_dad_img.style.opacity = 1//顯示爸爸
                ch02_mom_img.style.opacity = 1//顯示媽媽
                break
            case 14:
                ch02_ddcry_img.style.opacity = 0.5//弟弟半透明
                ch02_dad_img.style.opacity = 0.5//爸爸半透明
                ch02_mom_img.style.opacity = 1//顯示媽媽
                break
            case 15:
                ch02_ddcry_img.style.opacity = 0.5//弟弟半透明
                ch02_dad_img.style.opacity = 1//顯示爸爸
                ch02_mom_img.style.opacity = 0.5//媽媽半透明
                break
        }
    }
    else if(text_count >= 16 && text_count <= 20){
        create_Button_innerText()
        ch02_ddsad_img.style.opacity = 1 //顯示弟弟哭臉
        switch(text_count){     //動畫
            case 16:
                break
            case 17:
                break
            case 18:
                break
            case 19:
                break
            case 20:
                break
        }
    }
    //(3)
    else if(text_count >= 21 && text_count <= 22){
        create_text()
        background_animation()
        bg.setAttribute('src', '圖庫/暖橘背景(溝通).png')
        switch(text_count){     //動畫
            case 21:  
                ch02_txt1_M_img.style.opacity = 1//弟弟吸氣
                setTimeout(() => {
                    ch02_txt1_M_img.style.opacity = 0
                    ch02_txt2_M_img.style.opacity = 1//弟弟吐氣
                    create_text_click()
                }, "1500");
                break
            case 22://弟弟跟朋友
                background_animation_clear()
                ch02_txt2_img.style.opacity = 0
                ch02_ddsad_img.style.opacity = 0
                ch02_friend_M_img.style.opacity = 1
                ch02_dd_img.style.opacity = 1
                create_text_click()
                break
        }
    }
    else if(text_count >= 23 && text_count <= 27){
        create_Button_innerText()
        ch02_ddsad_img.style.opacity = 1 //顯示弟弟哭臉
        switch(text_count){     //動畫
            case 23:
                break
            case 24:                
                break
            case 25:
                break
            case 26:
                break
            case 27:
                break
        }
    }
    //(4)
    else if(text_count >= 28 && text_count <= 30){
        create_text()
        create_text_click()
        switch(text_count){     //動畫
            case 28:
                ch02_dad_img.classList.remove("ch02_dad");    //把爸爸移到指定位置
                ch02_dad_img.classList.add("ch02_dad3");
                ch02_mom_img.classList.remove("ch02_mom");    //把媽媽移到指定位置
                ch02_mom_img.classList.add("ch02_mom3");
                ch02_dad_img.style.opacity = 1
                ch02_mom_img.style.opacity = 1
                break
            case 29:
                ch02_dad_img.style.opacity = 0.5
                ch02_momsurprise_img.style.opacity = 1
                break
            case 30:
                ch02_dad_img.style.opacity = 1
                ch02_momsad_img.style.opacity = 1
                ch02_dd_img.classList.remove("ch02_maymay");
                ch02_dd_img.classList.add("ch02_maymay2");
                ch02_dd_img.style.opacity = 1
                break
        }
    }
    else if(text_count >= 31 && text_count <= 35){
        create_Button_innerText()
        ch02_ddsad_img.style.opacity = 1 //顯示弟弟哭臉
        switch(text_count){     //動畫
            case 31:
                break
            case 32:
                break
            case 33:
                break
            case 34:
                break
            case 35:
                break
        }
    }
    //(5)
    else if(text_count == 36){
        create_text()
        create_text_click()
        background_animation()
        bg.setAttribute('src', '圖庫/暖橘背景(溝通).png')
        background_animation_clear()
        //動畫
        ch02_ddhappy_img.style.opacity = 1
        ch02_Note1_img.style.opacity = 1
        ch02_Note2_img.style.opacity = 1
        ch02_Note3_img.style.opacity = 1
        ch02_Note4_img.style.opacity = 1
        ch02_Note5_img.style.opacity = 1
        ch02_Note6_img.style.opacity = 1
    }
    else if(text_count == 37){
        create_Button_innerText()
        //動畫
        ch02_ddsad_img.classList.remove("ch02_maymaysad2");
        ch02_ddsad_img.classList.add("ch02_maymaysad");
        ch02_ddsad_img.style.opacity = 1  //顯示弟弟哭臉
        ch02_Note1_img.style.opacity = 1
        ch02_Note2_img.style.opacity = 1
        ch02_Note3_img.style.opacity = 1
        ch02_Note4_img.style.opacity = 1
        ch02_Note5_img.style.opacity = 1
        ch02_Note6_img.style.opacity = 1
    }
    //(6)
    else if(text_count >= 38  && text_count <= 41){
        create_text()
        background_animation()
        bg.setAttribute('src', '圖庫/暗藍背景(溝通).png')
        switch(text_count){     //動畫
            case 38:
                ch02_ddsad_img.classList.remove("ch02_maymaysad");
                ch02_ddsad_img.classList.add("ch02_maymaysad2");
                ch02_ddsad_img.style.opacity = 1
                ch02_txt4_img.style.opacity = 1
                create_text_click()
                break
            case 39:
                ch02_ddcry_img.classList.remove("ch02_maymaycry_walk");
                ch02_ddcry_img.classList.add("ch02_maymaycry5");
                ch02_ddsad_img.style.opacity = 0
                ch02_ddcry_img.style.opacity = 1
                ch02_txt4_img.style.opacity = 0
                ch02_txt5_img.style.opacity = 1
                create_text_click()
                background_animation_clear()
                break
            case 40:
                background_animation()
                bg.setAttribute('src', '圖庫/主角房間(溝通).png')
                background_animation_clear()
                ch02_ddsad_img.classList.remove("ch02_maymaysad2");
                ch02_ddsad_img.classList.add("ch02_maymaysad3");
                ch02_ddcry_img.style.opacity = 0
                ch02_ddsad_img.style.opacity = 1
                ch02_txt5_img.style.opacity = 0
                setTimeout(() => {
                    ch02_txt6_img.style.opacity = 1
                    ch02_ddsad_img.style.opacity = 0
                    ch02_ddstopcrying_img.style.opacity = 1
                    create_text_click()
                }, "1500");//原本1500先改0 方便測試後面畫面
                break
            case 41:
                ch02_ddsad_img.style.opacity = 0
                ch02_door2_img.style.opacity = 1
                ch02_txt6_img.style.opacity = 0
                ch02_txt7_img.style.opacity = 1
                create_text_click()
                background_animation_clear()
                break
        }
    }
    else if(text_count >= 42  && text_count <= 43){
        create_Button_innerText()
        switch(text_count){     //動畫
            case 42:
                ch02_ddsad_img.classList.remove("ch02_maymaysad3");
                ch02_ddsad_img.classList.add("ch02_maymaysad");
                ch02_ddsad_img.style.opacity = 1
                break
            case 43:
                ch02_ddsad_img.style.opacity = 1
                break
        }
    }
    //(7)
    else if(text_count >= 44  && text_count <= 46){
        create_text()
        create_text_click()
        background_animation()
        bg.setAttribute('src', '圖庫/主角房間(溝通).png')
        switch(text_count){     //動畫
            case 44:
                ch02_mom_standing_by_the_door_img.style.opacity = 1
                ch02_dadholdhands_M_img.style.opacity = 1
                break
            case 45:
                ch02_dadholdhands_M_img.style.opacity = 0
                ch02_mom_standing_by_the_door_img.style.opacity = 0
                ch02_dadhug_M_img.style.opacity = 1
                break
            case 46:
                ch02_dadhug_M_img.style.opacity = 1
                background_animation_clear()
                break
        }
    }
    else if(text_count == 47){
        create_Button_innerText()
        ch02_ddstopcrying_img.classList.remove("ch02_maymaystopcrying");
        ch02_ddstopcrying_img.classList.add("ch02_maymaystopcrying2");
        ch02_ddstopcrying_img.style.opacity = 1
    }
    //(8)
    else if(text_count >= 48  && text_count <= 53){
        create_text()
        create_text_click()
        switch(text_count){     //動畫
            case 48:
                ch02_dad_open_the_door_img.style.opacity = 1
                break
            case 49:
                ch02_ddsad_img.classList.remove("ch02_maymaysad");
                ch02_ddsad_img.classList.add("ch02_maymaysad2");
                ch02_ddsad_img.style.opacity = 1
                break
            case 50:
                ch02_ddstopcrying_img.classList.remove("ch02_maymaystopcrying");
                ch02_ddstopcrying_img.classList.add("ch02_maymaystopcrying3");
                ch02_ddstopcrying_img.style.opacity = 1
                bodybackground.classList.add("bg_flicker"); //讓背景閃爍
                break
            case 51:
                ch02_dadsorry_img.style.opacity = 1
                background_animation()
                bg.setAttribute('src', '圖庫/主角房間(溝通).png')
                background_animation_clear()
                break
            case 52:
                ch02_ddstopcrying_img.style.opacity = 1
                background_animation()
                bg.setAttribute('src', '圖庫/暗藍背景(溝通).png')
                background_animation_clear()
                break
            case 53:
                ch02_dadsorry_img.style.opacity = 1
                background_animation()
                bg.setAttribute('src', '圖庫/主角房間(溝通).png')
                background_animation_clear()
                break
        }
    }
    else if(text_count == 54){
        create_Button_innerText()
        ch02_ddsad_img.classList.remove("ch02_maymaysad2");
        ch02_ddsad_img.classList.add("ch02_maymaysad");
        ch02_ddsad_img.style.opacity = 1
        //動畫        
    }
    //(9)
    else if(text_count >= 55 && text_count <= 57){
        create_text()        
        switch(text_count){     //動畫
            case 55:
                background_animation()
                bg.setAttribute('src', '圖庫/客廳(溝通).png')
                background_animation_clear()
                ch02_momsurprise_img.style.opacity = 1
                ch02_dadsurprise_img.style.opacity = 1
                create_text_click()
                break
            case 56:                
                ch02_momsad_img.classList.remove("ch02_momsad");   //媽媽轉身
                ch02_momsad_img.classList.add("ch02_momsad2");
                ch02_momsad_img.style.opacity = 1
                ch02_dadsurprise_img.style.opacity = 1
                setTimeout(() => {
                    ch02_momsad3_img.classList.remove("ch02_momsad3");//媽媽抖動
                    ch02_momsad3_img.classList.add("ch02_momsad4");
                    ch02_momsad_img.style.opacity = 0
                    ch02_momsad3_img.style.opacity = 1
                    create_text_click()
                }, "1000");
                break
            case 57:
                ch02_ddsad_img.classList.remove("ch02_maymaysad");
                ch02_ddsad_img.classList.add("ch02_maymaysad2");
                ch02_dadsurprise_img.style.opacity = 1
                ch02_ddsad_img.style.opacity = 1
                setTimeout(() => {
                    ch02_ddsad_img.style.opacity = 0
                    ch02_dadsurprise_img.style.opacity = 0                  
                    ch02_dadhug_M_img.style.opacity = 1
                    create_text_click()
                }, "2000");
                break
        }
    }
    else if(text_count >= 58 && text_count <= 62){
        create_Button_innerText()
        ch02_ddsad_img.classList.remove("ch02_maymaysad2");
        ch02_ddsad_img.classList.add("ch02_maymaysad");
        ch02_ddsad_img.style.opacity = 1 //顯示弟弟哭臉
        switch(text_count){     //動畫
            case 58:
                break
            case 59:
                break
            case 60:
                break
            case 61:
                break
            case 62:
                break
        }
    }
    //END
    else if(text_count >=  63 && text_count <= 90){
        create_text()
        create_text_click()
        switch(text_count){     //動畫
            case 63:        //END1
                ch02_end1_M_img.style.opacity = 1
                break
            case 64:
                ch02_end1_M_img.style.opacity = 1
                page = 999
                break
            case 65:        //END2
                background_animation()
                bg.setAttribute('src', '圖庫/客廳(溝通).png')
                background_animation_clear()
                ch02_end2_M_img.style.opacity = 1
                break
            case 66:
                ch02_end2_M_img.style.opacity = 1
                break
            case 67:
                ch02_end2_M_img.style.opacity = 1
                page = 999
                break
            case 68:        //END3
                background_animation()
                bg.setAttribute('src', '圖庫/黃色（溝通）.png')
                background_animation_clear()
                ch02_end3_1_M_img.style.opacity = 1
                break
            case 69:
                ch02_end3_1_M_img.style.opacity = 1
                break
            case 70:
                ch02_end3_2_M_img.style.opacity = 1
                page = 999
                break
            case 71:        //END4
                background_animation()
                bg.setAttribute('src', '圖庫/藍色（溝通）.png')
                background_animation_clear()
                ch02_end4_img.style.opacity = 1
                break
            case 72:
                ch02_end4_2_M_img.style.opacity = 1
                page = 999
                break
            case 73:        //END5
                background_animation()
                bg.setAttribute('src', '圖庫/暖橘背景(溝通).png')
                background_animation_clear()
                ch02_end4_img.style.opacity = 1
                ch02_end5_1_img.style.opacity = 1
                ch02_end5_2_img.style.opacity = 1
                break
            case 74:
                ch02_end4_2_M_img.style.opacity = 1
                page = 999
                break
            case 75:        //END6
                background_animation()
                bg.setAttribute('src', '圖庫/粉紫（溝通）.png')
                background_animation_clear()
                ch02_dad_img.classList.remove("ch02_dad3");
                ch02_dad_img.classList.add("ch02_dad6");
                ch02_mom_standing_by_the_door_img.classList.remove("ch02_mom_standing_by_the_door");
                ch02_mom_standing_by_the_door_img.classList.add("ch02_mom_standing_by_the_door2");
                ch02_mom_standing_by_the_door_img.style.opacity = 1
                ch02_dad_img.style.opacity = 1
                break
            case 76:
                ch02_momsad_img.classList.remove("ch02_momsad");
                ch02_momsad_img.classList.add("ch02_momsad5");
                ch02_momsad_img.style.opacity = 1
                break
            case 77:
                ch02_dadsorry_img.style.opacity = 1
                break
            case 78:
                ch02_end3_2_M_img.style.opacity = 1
                page = 999
                break
            case 79:        //END7
                background_animation()
                bg.setAttribute('src', '圖庫/黃色（溝通）.png')
                background_animation_clear()
                ch02_dad_img.classList.remove("ch02_dad2");
                ch02_dad_img.classList.add("ch02_dad7");
                ch02_end7_M_img.style.opacity = 1
                ch02_end7_1_img.style.opacity = 1
                ch02_end7_2_img.style.opacity = 1
                ch02_end7_3_img.style.opacity = 1
                ch02_end7_4_img.style.opacity = 1
                ch02_end7_5_img.style.opacity = 1
                ch02_end7_6_img.style.opacity = 1
                ch02_dad_img.style.opacity = 1
                break
            case 80:
                ch02_end7_M_img.style.opacity = 1
                ch02_end7_1_img.style.opacity = 1
                ch02_end7_2_img.style.opacity = 1
                ch02_end7_3_img.style.opacity = 1
                ch02_end7_4_img.style.opacity = 1
                ch02_end7_5_img.style.opacity = 1
                ch02_end7_6_img.style.opacity = 1
                ch02_dad_img.style.opacity = 1
                page = 999
                break
            case 81:        //END8
                background_animation()
                bg.setAttribute('src', '圖庫/綠色（溝通）.png')
                background_animation_clear()
                ch02_end2_M_img.style.opacity = 1
                break
            case 82:
                ch02_end2_M_img.style.opacity = 1
                page = 999
                break
            case 83:        //END9
                background_animation()
                bg.setAttribute('src', '圖庫/暖橘背景(溝通).png')
                background_animation_clear()
                ch02_end9_M_img.style.opacity = 1
                break
            case 84:
                ch02_end9_M_img.style.opacity = 1
                break
            case 85:
                ch02_end9_M_img.style.opacity = 1
                page = 999
                break
            case 86:        //END10
                background_animation()
                bg.setAttribute('src', '圖庫/綠色（溝通）.png')
                background_animation_clear()
                ch02_end10_M_img.style.opacity = 1
                break
            case 87:
                ch02_end10_M_img.style.opacity = 1
                break
            case 88:
                ch02_end10_M_img.style.opacity = 1
                break
            case 89:
                ch02_end10_M_img.style.opacity = 1
                break
            case 90:
                ch02_end4_2_M_img.style.opacity = 1
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
            if(text_number <= game2_text[text_count].length + 1){
                text.innerText = game2_text[text_count].slice(0,text_number)      //讀取字串中的字
                text_number++
                create_text()       //再次呼叫，以形成迴圈來逐一顯示
            }else if(text_number > game2_text[text_count].length + 1){      //字串顯示完成，設定click
                typing_music_end()      //打字音效結束
                create_text_click()
            }
        }, "80");
    }

    function create_text_end(){
        text_number = game2_text[text_count].length + 2     //讓create_text()的迴圈結束到else if來去執行create_text_click()
        text.innerText = game2_text[text_count]      //顯示完整敘述
        text.removeEventListener('click', create_text_end)      //移除click事件
    }

    function create_text_click(){
        create_text_clickNumber++       //總共會被呼叫兩次，1.動畫結束 2.文字顯示結束，所以>>>(= 2)來去執行下面的if
        if (create_text_clickNumber == 2){
            text.addEventListener('click', ch02_M)      //設定click事件
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
            if (i <= game2_choose[choose_count].length){
                const chaper_button = document.createElement('button')      //情緒選擇按鈕
                chaper_button.innerText = game2_choose[choose_count][j-1]
                chaper_button.classList.add('btn-animation')
                chaper_button.addEventListener('click',  () => game2_choose_test(j))
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
        
        text.innerText = game2_text[text_count]
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
            if(myAuto2.volume > 0.3){
                myAuto2.volume = myAuto2.volume - 0.1 //讓音樂1音量降低(0~1.0)
                music_end()
            }
        }, "1000")
    }
}