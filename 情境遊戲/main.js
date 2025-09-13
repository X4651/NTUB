//音效
const click_audio = new Audio()     //按鈕
click_audio.src = "music/bottom.wav"
click_audio.volume = 0.5
const text_click_audio = new Audio()      //故事敘述區打字音效
text_click_audio.src = "music/text.wav"

function home(){
  clear()   //重製畫面  
  home_img_L_1.style.opacity = 1
  home_img_R_1.style.opacity = 1
  // 背景
  bg.setAttribute('src', '圖庫/背景.gif')
  let i = 0   //用於判斷有無按鈕要載入
  create_homebtn()
  function create_homebtn(){    //建立按鈕
    let j //用於設定click事件連結去哪個章節
    j = i
    if (i < home_text.length){
      const button = document.createElement('button')
      button.innerText = home_text[i]
      button.classList.add('homebtn-animation')   //載入動畫
      button.addEventListener('click', () => choose_chaper(j))    //設定click事件至遊戲說明與章節選擇頁面
      chooseButton.appendChild(button)   //顯示
      i++
      setTimeout(() => {    //延遲作為依序的載入動畫
        create_homebtn()
      }, "80");
      setTimeout(() => {   //載入動畫換成沒動畫的避免:hover(懸停)會再重複觸發載入動畫
        button.classList.remove('homebtn-animation')
        button.classList.add('homebtn')
      }, "500");
    }else{
      Game_Expected_Result()    //讀取完按鈕在讀取預期效果
    }
  }

  const game_expected_result = document.createElement('button')
  function Game_Expected_Result(){    //預期效果
    game_expected_result.removeEventListener('click', Game_Expected_Result)
    game_expected_result.innerText = '預期效果(點擊展開)'
    game_expected_result.classList.add('Game_expected_result')
    game_expected_result.addEventListener('click', 
      function(){
        game_expected_result.addEventListener('click', Game_Expected_Result)
        game_expected_result.innerText = '預期效果：\n此遊戲以簡單的選擇方式與精心繪製的插圖，透過玩遊戲的方式讓玩家了解分享、溝通、友情、反霸凌的重要性。'
      }
    )    //設定click事件至遊戲說明與章節選擇頁面
    chooseButton.appendChild(game_expected_result)   //顯示
  }

  //音樂來源按鈕
  const music_button = document.createElement('button')
  music_button.innerText = '\u266A音樂來源'
  music_button.classList.add('music_button')
  music_button.addEventListener('click', () => choose_chaper(2))    //設定click事件至遊戲說明與章節選擇頁面
  chooseButton.appendChild(music_button)   //顯示
}


function choose_chaper(x){   //選擇章節
  clear()   //重製畫面
  //各章節在選擇性別時按回首頁，並移除角色之click事件
  choose_Gender_man_img.removeEventListener('click', ch01_M)
  choose_Gender_girl_img.removeEventListener('click', ch01_F)
  choose_Gender_man_img.removeEventListener('click', ch02_M)
  choose_Gender_girl_img.removeEventListener('click', ch02_F)
  choose_Gender_man_img.removeEventListener('click', ch03)
  choose_Gender_girl_img.removeEventListener('click', ch03)
  choose_Gender_man_img.removeEventListener('click', ch04)
  choose_Gender_girl_img.removeEventListener('click', ch04)
  // 背景
  bg.setAttribute('src', '圖庫/暗藍背景(溝通).png')
  //重製計數
  text_count = 0
  choose_count = 0
  text_number = 0   //用於create_text()記錄用
  create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件
  ch04_text_count = 0

  if (x == 1){    //遊戲說明頁面
    game_rule()
  }else if(x == 0){   //章節選擇頁面
    let i = 0   //用於判斷有無按鈕要載入
    create_btn()
    function create_btn(){    //建立按鈕
      let j //用於設定click事件連結去哪個章節
      j = i
      const chaper_button = document.createElement('button')
      if (i < choose_chaper_Buttons.length){
        chaper_button.innerText = choose_chaper_Buttons[i]
        chaper_button.classList.add('chaper-btn-animation')   //載入動畫
        chaper_button.addEventListener('click', () => game_tips(j))
        chooseButton.appendChild(chaper_button)   //顯示
        i++
        setTimeout(() => {    //延遲作為依序的載入動畫
          create_btn()
        }, "80");
        setTimeout(() => {   //載入動畫換成沒動畫的避免:hover(懸停)會再重複觸發載入動畫
          chaper_button.classList.remove('chaper-btn-animation')
          chaper_button.classList.add('chaper-btn')
        }, "400");
      }
    }
  }else if(x == 2){ //Music
    for (let i = 0; i <= 1; i++){
      const chaper_button = document.createElement('button')
      if(i == 0){
        const music_text = document.createElement('div')
        music_text.innerText = 
`   分享的故事:
   Guitar Gentle by PeriTune | https://peritune.com/
   Music promoted by https://www.chosic.com/free-music/all/
   Creative Commons CC BY 4.0
   https://creativecommons.org/licenses/by/4.0/
        
   溝通的故事:
   Sunset Landscape by Keys of Moon | https://soundcloud.com/keysofmoon
   Music promoted by https://www.chosic.com/free-music/all/
   Creative Commons CC BY 4.0
   https://creativecommons.org/licenses/by/4.0/

   友情的故事:
   Calm and Peaceful by LesFM | https://lesfm.net/relaxing-background-music/
   Music promoted by https://www.chosic.com/free-music/all/
   Creative Commons CC BY 3.0
   https://creativecommons.org/licenses/by/3.0/

   反霸凌的故事:
   Spring Flowers by Keys of Moon | https://soundcloud.com/keysofmoon
   Music promoted by https://www.chosic.com/free-music/all/
   Creative Commons CC BY 4.0
   https://creativecommons.org/licenses/by/4.0/

   遊戲說明:
   Forest Walk by Alexander Nakarada | https://www.serpentsoundstudios.com
   Music promoted by https://www.chosic.com/free-music/all/
   Attribution 4.0 International (CC BY 4.0)
   https://creativecommons.org/licenses/by/4.0/

   Keyboard Typing by Sound Effects
   Music: https://www.chosic.com/free-music/all/`
        music_text.classList.add('music-text')
        tips_text.appendChild(music_text)
      }else{
        chaper_button.innerText = '回首頁'
        chaper_button.classList.add('music-backhome-btn')
        chaper_button.addEventListener('click', home)
        chooseButton.appendChild(chaper_button)   //顯示
      }
    }
  }
}

function game_tips(ch){   //遊戲提示
  clear()   //重製畫面

  const game_tips = document.createElement('div')
  game_tips.classList.add('game_tips')

  const game_tips_button = document.createElement('button')
  game_tips_button.innerText = "確定"
  game_tips_button.classList.add('game_tips_btn')
  game_tips_button.addEventListener('click', () => start(ch))
  if(ch <= 1){
    game_tips.innerText = "★接下來請選擇角色\n\n(小提示:可以點擊文字框\n跳過文字動畫哦~)"
    tips_text.appendChild(game_tips)
    chooseButton.appendChild(game_tips_button)
  }else if(ch >= 2 && ch <= 3){
    game_tips.innerText = "\n(小提示:可以點擊文字框\n跳過文字動畫哦~)"
    tips_text.appendChild(game_tips)
    chooseButton.appendChild(game_tips_button)
  }else{
    home()
  }
}

function start(chaper){   //遊戲開始
  const button = document.createElement('button')
  button.innerText = "上一頁"
  button.classList.add('choose_Gender_btn')
  button.addEventListener('click', () => choose_chaper(0))    //設定click事件至章節選擇頁面

  clear()    //重製畫面

  switch(chaper){
    case 0:   //第一章
      //選擇性別畫面
      choose_Gender_man_img.style.opacity = 1   //不透明(顯示)(5/25新增)
      choose_Gender_man_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')   //設定圖片(5/25新增)
      choose_Gender_man_img.addEventListener('click', ch01_M)   //設定點選後開始第一章故事(5/25新增)
      choose_Gender_girl_img.style.opacity = 1    //(5/25新增)
      choose_Gender_girl_img.setAttribute("src", '圖庫/主角一般(溝通).png')    //(5/25新增)
      choose_Gender_girl_img.addEventListener('click', ch01_F)    //(5/25新增)
      gender_img.style.opacity = 1
      gender_img.setAttribute("src", '圖庫/gender.png')
      male_img.style.opacity = 1
      male_img.setAttribute("src", '圖庫/male.png')
      female_img.style.opacity = 1
      female_img.setAttribute("src", '圖庫/female.png')
      ch01_mom_img.setAttribute("src", '圖庫/媽媽一般(溝通).png')
      ch01_mom2_img.setAttribute("src", '圖庫/媽媽一般反轉(溝通).png')
      ch01_mom_go_out_img.setAttribute("src", '圖庫/媽媽一般反轉(溝通).png')
      ch01_dad_img.setAttribute("src", '圖庫/爸爸一般(溝通).png')
      ch01_gg_img.setAttribute("src", '圖庫/哥哥一般.png')
      ch01_gg_cake_img.setAttribute("src", '圖庫/哥哥吃蛋糕.png')
      ch01_gghappy_img.setAttribute("src", '圖庫/哥哥微笑.png')
      ch01_ggangry_img.setAttribute("src", '圖庫/哥哥生氣.png')
      ch01_gg_go_home_img.setAttribute("src", '圖庫/哥哥一般.png')
      ch01_gg_hug_img.setAttribute("src", '圖庫/哥哥抱(女版主角).png')
      ch01_gg_hug_M_img.setAttribute("src", '圖庫/哥哥抱(男版主角).png')
      ch01_maymay_img.setAttribute("src", '圖庫/主角一般(溝通).png')
      ch01_maymayscared_img.setAttribute("src", '圖庫/主角害怕(溝通).png')
      ch01_maymayangry_img.setAttribute("src", '圖庫/主角生氣(溝通).png')
      ch01_maymaycry_img.setAttribute("src", '圖庫/主角大哭(溝通).png')
      ch01_maymaystopcry_img.setAttribute("src", '圖庫/主角停止哭泣(溝通).png')
      ch01_maymaysad_img.setAttribute("src", '圖庫/主角小哭(溝通).png')
      ch01_maymayhappy_img.setAttribute("src", '圖庫/主角開心(溝通).png')
      ch01_maymayread_img.setAttribute("src", '圖庫/看書(女版主角).png')
      ch01_dd_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')
      ch01_ddscared_img.setAttribute("src", '圖庫/男版主角害怕(溝通).png')
      ch01_ddangry_img.setAttribute("src", '圖庫/男版主角生氣(溝通).png')
      ch01_ddcry_img.setAttribute("src", '圖庫/男版主角大哭(溝通).png')
      ch01_ddstopcry_img.setAttribute("src", '圖庫/男版主角停止哭泣(溝通).png')
      ch01_ddsad_img.setAttribute("src", '圖庫/男版主角小哭(溝通).png')
      ch01_ddhappy_img.setAttribute("src", '圖庫/男版主角開心(溝通).png')
      ch01_ddread_img.setAttribute("src", '圖庫/看書(男版主角).png')
      ch01_cake1_img.setAttribute("src", '圖庫/蛋糕.png')
      ch01_cake2_img.setAttribute("src", '圖庫/蛋糕2.png')
      ch01_cake3_img.setAttribute("src", '圖庫/甜點.png')
      ch01_shopping_cart_img.setAttribute("src", '圖庫/shopping_cart.png')
      ch01_txt1_img.setAttribute("src", '圖庫/妹妹吸氣.png')
      ch01_txt2_img.setAttribute("src", '圖庫/妹妹吐氣.png')
      ch01_txt1_M_img.setAttribute("src", '圖庫/弟弟吸氣.png')
      ch01_txt2_M_img.setAttribute("src", '圖庫/弟弟吐氣.png')
      ch01_friendA_img.setAttribute("src", '圖庫/朋友A.png')
      ch01_friendB_img.setAttribute("src", '圖庫/朋友B.png')
      ch01_friendC_img.setAttribute("src", '圖庫/朋友C.png')
      ch01_fridge_img.setAttribute("src", '圖庫/冰箱(蛋糕).png')
      ch01_fridge2_img.setAttribute("src", '圖庫/剩下沒幾口的蛋糕.png')
      ch01_door_img.setAttribute("src", '圖庫/開門(溝通).png')
      ch01_door2_img.setAttribute("src", '圖庫/關著的門(溝通).png')
      ch01_door3_img.setAttribute("src", '圖庫/門.png')
      ch01_door_frame_img.setAttribute("src", '圖庫/門框.png')
      ch01_table_img.setAttribute("src", '圖庫/table.png')
      ch01_pork_img.setAttribute("src", '圖庫/豬排.png')
      ch01_txt3_img.setAttribute("src", '圖庫/砰.png')
      ch01_txt4_img.setAttribute("src", '圖庫/The Next Day....png')
      ch01_end2_img.setAttribute("src", '圖庫/開心雙手交疊在胸前(女版主角).png')
      ch01_end10_img.setAttribute("src", '圖庫/所有人牽手(女版主角).png')
      ch01_end2_M_img.setAttribute("src", '圖庫/開心雙手交疊在胸前(男版主角).png')
      ch01_end10_M_img.setAttribute("src", '圖庫/所有人牽手(男版主角).png')
      choose_Gender_returnButton.appendChild(button)   //顯示
      break
    case 1:   //第二章
      //選擇性別畫面
      choose_Gender_man_img.style.opacity = 1   //不透明(顯示)(5/25新增)
      choose_Gender_man_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')   //設定圖片(5/25新增)
      choose_Gender_man_img.addEventListener('click', ch02_M)   //設定點選後開始第一章故事(5/25新增)
      choose_Gender_girl_img.style.opacity = 1    //(5/25新增)
      choose_Gender_girl_img.setAttribute("src", '圖庫/主角一般(溝通).png')    //(5/25新增)
      choose_Gender_girl_img.addEventListener('click', ch02_F)    //(5/25新增)
      gender_img.style.opacity = 1
      gender_img.setAttribute("src", '圖庫/gender.png')
      male_img.style.opacity = 1
      male_img.setAttribute("src", '圖庫/male.png')
      female_img.style.opacity = 1
      female_img.setAttribute("src", '圖庫/female.png')
      ch02_fire_img.setAttribute("src", '圖庫/fire.png')
      ch02_fire2_img.setAttribute("src", '圖庫/fire2.png')
      ch02_maymay_img.setAttribute("src", '圖庫/主角一般(溝通).png')
      ch02_maymayhappy_img.setAttribute("src", '圖庫/主角開心(溝通).png')
      ch02_maymaysad_img.setAttribute("src", '圖庫/主角小哭(溝通).png')
      ch02_maymaycry_img.setAttribute("src", '圖庫/主角大哭(溝通).png')
      ch02_maymaystopcrying_img.setAttribute("src", '圖庫/主角停止哭泣(溝通).png')
      ch02_dd_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')
      ch02_ddhappy_img.setAttribute("src", '圖庫/男版主角開心(溝通).png')
      ch02_ddsad_img.setAttribute("src", '圖庫/男版主角小哭(溝通).png')
      ch02_ddcry_img.setAttribute("src", '圖庫/男版主角大哭(溝通).png')
      ch02_ddstopcrying_img.setAttribute("src", '圖庫/男版主角停止哭泣(溝通).png')
      ch02_door1_img.setAttribute("src", '圖庫/門.png')
      ch02_door2_img.setAttribute("src", '圖庫/關著的門(溝通).png')
      ch02_door_frame_img.setAttribute("src", '圖庫/門框.png')
      ch02_dad_img.setAttribute("src", '圖庫/爸爸一般(溝通).png')
      ch02_dadangry_img.setAttribute("src", '圖庫/爸爸生氣(溝通).png')
      ch02_dadholdhands_img.setAttribute("src", '圖庫/爸爸牽手(女版主角).png')
      ch02_dadhug_img.setAttribute("src", '圖庫/爸爸抱抱(女版主角).png')
      ch02_dadholdhands_M_img.setAttribute("src", '圖庫/爸爸牽手(男版主角).png')
      ch02_dadhug_M_img.setAttribute("src", '圖庫/爸爸抱抱(男版主角).png')
      ch02_dadsorry_img.setAttribute("src", '圖庫/爸爸抱歉(溝通).png')
      ch02_dadsurprise_img.setAttribute("src", '圖庫/爸爸震驚(溝通).png')
      ch02_dad_open_the_door_img.setAttribute("src", '圖庫/爸爸開門.png')
      ch02_mom_img.setAttribute("src", '圖庫/媽媽一般(溝通).png')
      ch02_momangry_img.setAttribute("src", '圖庫/媽媽生氣(溝通).png')
      ch02_momsurprise_img.setAttribute("src", '圖庫/媽媽震驚(溝通).png')
      ch02_momsad_img.setAttribute("src", '圖庫/媽媽流淚(溝通).png')
      ch02_momsad3_img.setAttribute("src", '圖庫/媽媽流淚反轉(溝通).png')
      ch02_mom_standing_by_the_door_img.setAttribute("src", '圖庫/媽媽一般反轉(溝通).png')
      ch02_friend_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')
      ch02_txt1_img.setAttribute("src", '圖庫/妹妹吸氣.png')
      ch02_txt2_img.setAttribute("src", '圖庫/妹妹吐氣.png')
      ch02_friend_M_img.setAttribute("src", '圖庫/主角一般(溝通).png')
      ch02_txt1_M_img.setAttribute("src", '圖庫/弟弟吸氣.png')
      ch02_txt2_M_img.setAttribute("src", '圖庫/弟弟吐氣.png')
      ch02_txt4_img.setAttribute("src", '圖庫/嗚....png')
      ch02_txt5_img.setAttribute("src", '圖庫/嗚嗚...嗚嗚....png')
      ch02_txt6_img.setAttribute("src", '圖庫/叩叩.png')
      ch02_txt7_img.setAttribute("src", '圖庫/還好嗎.png')
      ch02_Note1_img.setAttribute("src", '圖庫/音符1.png')
      ch02_Note2_img.setAttribute("src", '圖庫/音符2.png')
      ch02_Note3_img.setAttribute("src", '圖庫/音符3.png')
      ch02_Note4_img.setAttribute("src", '圖庫/音符4.png')
      ch02_Note5_img.setAttribute("src", '圖庫/音符5.png')
      ch02_Note6_img.setAttribute("src", '圖庫/音符6.png')
      ch02_toy_f_img.setAttribute("src", '圖庫/抱著玩具坐在床上(女版主角).png')
      ch02_toy_m_img.setAttribute("src", '圖庫/抱著玩具坐在床上(男版主角).png')
      ch02_end1_img.setAttribute("src", '圖庫/父母牽我的手(女版主角).png')
      ch02_end2_img.setAttribute("src", '圖庫/一家人坐在沙發上抱抱(女版主角).png')
      ch02_end3_1_img.setAttribute("src", '圖庫/爸爸手忙腳亂媽媽安慰(女版主角).png')
      ch02_end3_2_img.setAttribute("src", '圖庫/開心雙手交疊在胸前(女版主角).png')
      ch02_end1_M_img.setAttribute("src", '圖庫/父母牽我的手(男版主角).png')
      ch02_end2_M_img.setAttribute("src", '圖庫/一家人坐在沙發上抱抱(男版主角).png')
      ch02_end3_1_M_img.setAttribute("src", '圖庫/爸爸手忙腳亂媽媽安慰(男版主角).png')
      ch02_end3_2_M_img.setAttribute("src", '圖庫/開心雙手交疊在胸前(男版主角).png')
      ch02_end4_img.setAttribute("src", '圖庫/父母抱歉.png')
      ch02_end4_2_img.setAttribute("src", '圖庫/父母雙手搭在我的肩膀上(女版主角).png')
      ch02_end4_2_M_img.setAttribute("src", '圖庫/父母雙手搭在我的肩膀上(男版主角).png')
      ch02_end5_1_img.setAttribute("src", '圖庫/冒汗1.png')
      ch02_end5_2_img.setAttribute("src", '圖庫/冒汗2.png')
      ch02_end7_img.setAttribute("src", '圖庫/媽媽摸我頭(女版主角).png')
      ch02_end7_M_img.setAttribute("src", '圖庫/媽媽摸我頭(男版主角).png')
      ch02_end7_1_img.setAttribute("src", '圖庫/飲料1.png')
      ch02_end7_2_img.setAttribute("src", '圖庫/飲料2.png')
      ch02_end7_3_img.setAttribute("src", '圖庫/飲料3.png')
      ch02_end7_4_img.setAttribute("src", '圖庫/飲料4.png')
      ch02_end7_5_img.setAttribute("src", '圖庫/漢堡1.png')
      ch02_end7_6_img.setAttribute("src", '圖庫/漢堡2.png')
      ch02_end9_img.setAttribute("src", '圖庫/一家人坐在床上(女版主角).png')
      ch02_end9_M_img.setAttribute("src", '圖庫/一家人坐在床上(男版主角).png')
      ch02_end10_F_img.setAttribute("src", '圖庫/爸爸蹲下來摸我(女版主角).png')
      ch02_end10_M_img.setAttribute("src", '圖庫/爸爸蹲下來摸我(男版主角).png')
      choose_Gender_returnButton.appendChild(button)   //顯示
      break
    case 2:   //第三章
      ch03()
      ch03_dd_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')
      ch03_ddscared_img.setAttribute("src", '圖庫/男版主角害怕(溝通).png')
      ch03_ddprotect_img.setAttribute("src", '圖庫/小智站出來.png')
      ch03_ddangry_img.setAttribute("src", '圖庫/男版主角生氣(溝通).png')
      ch03_friend1_img.setAttribute("src", '圖庫/男同學A.png')
      ch03_friend1scared_img.setAttribute("src", '圖庫/男同學A抱歉.png')
      ch03_friend2_img.setAttribute("src", '圖庫/男同學B.png')
      ch03_friend2scared_img.setAttribute("src", '圖庫/男同學B抱歉.png')
      ch03_friend1angry_img.setAttribute("src", '圖庫/男同學A生氣.png')
      ch03_friend2angry_img.setAttribute("src", '圖庫/男同學B生氣.png')
      ch03_name1_img.setAttribute("src", '圖庫/秋明.png')
      ch03_name2_img.setAttribute("src", '圖庫/李嚴.png')
      ch03_name3_img.setAttribute("src", '圖庫/小政.png')
      ch03_bell_img.setAttribute("src", '圖庫/bell.png')
      ch03_door_img.setAttribute("src", '圖庫/門.png')
      ch03_door_frame_img.setAttribute("src", '圖庫/門框.png')
      ch03_window_img.setAttribute("src", '圖庫/窗戶.png')
      ch03_teacherangry_img.setAttribute("src", '圖庫/老師嚴肅.png')
      ch03_female_classmate_img.setAttribute("src", '圖庫/女同學A(嘴角平).png')
      break
    case 3:   //第四章
      ch04()
      ch04_dd_img.setAttribute("src", '圖庫/男版主角一般(溝通).png')
      ch04_ddsad_img.setAttribute("src", '圖庫/男版主角小哭(溝通).png')
      ch04_ddangry_img.setAttribute("src", '圖庫/男版主角生氣(溝通).png')
      ch04_ddshy_img.setAttribute("src", '圖庫/男版主角停止哭泣(溝通).png')
      ch04_ddhappy_img.setAttribute("src", '圖庫/男版主角開心(溝通).png')
      ch04_ddprotect_img.setAttribute("src", '圖庫/小智站出來.png')
      ch04_furyo_shounen_img.setAttribute("src", '圖庫/furyo_shounen.png')
      ch04_listen_to_music_img.setAttribute("src", '圖庫/聽音樂.png')
      ch04_hairball_img.setAttribute("src", '圖庫/毛球.png')
      ch04_jacket_img.setAttribute("src", '圖庫/衣服.png')
      ch04_pants_img.setAttribute("src", '圖庫/褲子.png')
      ch04_music_img.setAttribute("src", '圖庫/音樂.png')
      ch04_dessert_img.setAttribute("src", '圖庫/甜點.png')
      ch04_idol_img.setAttribute("src", '圖庫/偶像.png')
      ch04_door_img.setAttribute("src", '圖庫/門.png')
      ch04_door_frame_img.setAttribute("src", '圖庫/門框.png')
      ch04_fb_img.setAttribute("src", '圖庫/fb.png')
      ch04_news_img.setAttribute("src", '圖庫/news.png')
      ch04_bell_img.setAttribute("src", '圖庫/bell.png')
      ch04_teacher_img.setAttribute("src", '圖庫/老師.png')
      ch04_female_classmate_img.setAttribute("src", '圖庫/女同學A.png')
      ch04_female_classmate2_img.setAttribute("src", '圖庫/女同學B.png')
      ch04_male_classmate_img.setAttribute("src", '圖庫/男同學A.png')
      ch04_male_classmate2_img.setAttribute("src", '圖庫/男同學B.png')
      ch04_male_classmateSOR_img.setAttribute("src", '圖庫/男同學抱歉.png')
      ch04_applaud_img.setAttribute("src", '圖庫/同學拍手.png')
      ch04_txt1_img.setAttribute("src", '圖庫/gay.png')
      ch04_txt2_img.setAttribute("src", '圖庫/弟弟吸氣.png')
      ch04_txt3_img.setAttribute("src", '圖庫/弟弟吐氣.png')
      ch04_txt4_img.setAttribute("src", '圖庫/向左.png')
      ch04_txt5_img.setAttribute("src", '圖庫/我覺得不好笑.png')
      ch04_txt6_img.setAttribute("src", '圖庫/現在很多男生.png')
      ch04_txt7_img.setAttribute("src", '圖庫/都喜歡女團好嗎.png')
      ch04_tears1_img.setAttribute("src", '圖庫/冒汗1.png')
      ch04_tears2_img.setAttribute("src", '圖庫/冒汗2.png')
      ch04_end2_img.setAttribute("src", '圖庫/做筆記.png')
      ch04_end3_img.setAttribute("src", '圖庫/主角朋友同學老師牽手.png')
      ch04_end4_img.setAttribute("src", '圖庫/開心雙手交疊在胸前(男版主角).png')
      ch04_end5_img.setAttribute("src", '圖庫/爸爸蹲下來摸我(男版主角).png')
      ch04_basketball_img.setAttribute("src", '圖庫/籃球.png')
      ch04_game_img.setAttribute("src", '圖庫/手遊.png')
      break
    default:
      home()
      break
  }
}

function typing_music_start(){
  var keyboard_typing = document.getElementById('myaudio_text')   //打字音效
  keyboard_typing.volume = 0.5
  keyboard_typing.play()      //播放打字音效
}
function typing_music_end(){
  var keyboard_typing = document.getElementById('myaudio_text')   //打字音效
  keyboard_typing.pause()     //暫停打字音效
  keyboard_typing.currentTime = 0     //將打字音效播放時間限回歸
}

//首頁所需文字
const home_text = ["開始遊戲", "遊戲說明"]

//選擇章節頁面所需文字
const choose_chaper_Buttons = ["分享的故事", "溝通的故事", "友情的故事", "反霸凌的故事", "回首頁"]

home()