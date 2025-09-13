//該遊戲換畫面之運作方式為先重製畫面再讀取新頁面
function clear(){   //重製畫面
    while (homeButton.firstChild) {
      homeButton.removeChild(homeButton.firstChild)   //清除所有開始按鈕
    }
    while (chooseButton.firstChild) {
      chooseButton.removeChild(chooseButton.firstChild)   //清除所有選擇按鈕
    }
    while (storyText.firstChild) {
      storyText.removeChild(storyText.firstChild)   //清除文字敘述
    }
    while (choose_Gender_returnButton.firstChild) {
      choose_Gender_returnButton.removeChild(choose_Gender_returnButton.firstChild)   //清除回到首頁按鈕
    }
    while (next_text_img.firstChild) {
      next_text_img.removeChild(next_text_img.firstChild)   //清除提示下一段文字的圖片
    }
    while (tips_text.firstChild) {
      tips_text.removeChild(tips_text.firstChild)   //清除提示文字
    }
    chart_canvas.style.maxWidth = "0vw"   //調成0避免占空間，但還是存在
  
    home_img_L_1.style.opacity = 0
    home_img_R_1.style.opacity = 0
    //透明(隱藏)
    left_img.style.opacity = 0
    right_img.style.opacity = 0
    choose_Gender_man_img.style.opacity = 0    //(5/25新增)
    choose_Gender_girl_img.style.opacity = 0    //(5/25新增)
    gender_img.style.opacity = 0
    male_img.style.opacity = 0
    female_img.style.opacity = 0
  //ch01
    ch01_mom_img.style.opacity = 0
    ch01_mom2_img.style.opacity = 0
    ch01_mom_go_out_img.style.opacity = 0
    ch01_dad_img.style.opacity = 0
    ch01_gg_img.style.opacity = 0
    ch01_gg_cake_img.style.opacity = 0
    ch01_gghappy_img.style.opacity = 0
    ch01_ggangry_img.style.opacity = 0
    ch01_gg_go_home_img.style.opacity = 0
    ch01_gg_hug_img.style.opacity = 0
    ch01_gg_hug_M_img.style.opacity = 0
    ch01_maymay_img.style.opacity = 0
    ch01_maymayscared_img.style.opacity = 0
    ch01_maymayangry_img.style.opacity = 0
    ch01_maymaycry_img.style.opacity = 0
    ch01_maymaystopcry_img.style.opacity = 0
    ch01_maymaysad_img.style.opacity = 0
    ch01_maymayhappy_img.style.opacity = 0
    ch01_maymayread_img.style.opacity = 0
    ch01_dd_img.style.opacity = 0
    ch01_ddscared_img.style.opacity = 0
    ch01_ddangry_img.style.opacity = 0
    ch01_ddcry_img.style.opacity = 0
    ch01_ddstopcry_img.style.opacity = 0
    ch01_ddsad_img.style.opacity = 0
    ch01_ddhappy_img.style.opacity = 0
    ch01_ddread_img.style.opacity = 0
    ch01_cake1_img.style.opacity = 0
    ch01_cake2_img.style.opacity = 0
    ch01_cake3_img.style.opacity = 0
    ch01_shopping_cart_img.style.opacity = 0
    ch01_txt1_img.style.opacity = 0
    ch01_txt2_img.style.opacity = 0
    ch01_txt1_M_img.style.opacity = 0
    ch01_txt2_M_img.style.opacity = 0
    ch01_friendA_img.style.opacity = 0
    ch01_friendB_img.style.opacity = 0
    ch01_friendC_img.style.opacity = 0
    ch01_fridge_img.style.opacity = 0
    ch01_fridge2_img.style.opacity = 0
    ch01_door_img.style.opacity = 0
    ch01_door2_img.style.opacity = 0
    ch01_door3_img.style.opacity = 0
    ch01_door_frame_img.style.opacity = 0
    ch01_table_img.style.opacity = 0
    ch01_pork_img.style.opacity = 0
    ch01_txt3_img.style.opacity = 0
    ch01_txt4_img.style.opacity = 0
    ch01_end2_img.style.opacity = 0
    ch01_end10_img.style.opacity = 0
    ch01_end2_M_img.style.opacity = 0
    ch01_end10_M_img.style.opacity = 0
  //ch02
    ch02_fire_img.style.opacity = 0
    ch02_fire2_img.style.opacity = 0
    ch02_maymay_img.style.opacity = 0
    ch02_maymayhappy_img.style.opacity = 0
    ch02_maymaysad_img.style.opacity = 0
    ch02_maymaycry_img.style.opacity = 0
    ch02_maymaystopcrying_img.style.opacity = 0
    ch02_dd_img.style.opacity = 0
    ch02_ddhappy_img.style.opacity = 0
    ch02_ddsad_img.style.opacity = 0
    ch02_ddcry_img.style.opacity = 0
    ch02_ddstopcrying_img.style.opacity = 0
    ch02_door1_img.style.opacity = 0
    ch02_door2_img.style.opacity = 0
    ch02_door_frame_img.style.opacity = 0
    ch02_dad_img.style.opacity = 0
    ch02_dadangry_img.style.opacity = 0
    ch02_dadholdhands_img.style.opacity = 0
    ch02_dadhug_img.style.opacity = 0
    ch02_dadholdhands_M_img.style.opacity = 0
    ch02_dadhug_M_img.style.opacity = 0
    ch02_dadsorry_img.style.opacity = 0
    ch02_dadsurprise_img.style.opacity = 0
    ch02_dad_open_the_door_img.style.opacity = 0
    ch02_mom_img.style.opacity = 0
    ch02_momangry_img.style.opacity = 0
    ch02_momsurprise_img.style.opacity = 0
    ch02_momsad_img.style.opacity = 0
    ch02_momsad3_img.style.opacity = 0
    ch02_mom_standing_by_the_door_img.style.opacity = 0
    ch02_friend_img.style.opacity = 0
    ch02_txt1_img.style.opacity = 0
    ch02_txt2_img.style.opacity = 0
    ch02_friend_M_img.style.opacity = 0
    ch02_txt1_M_img.style.opacity = 0
    ch02_txt2_M_img.style.opacity = 0
    ch02_txt4_img.style.opacity = 0
    ch02_txt5_img.style.opacity = 0
    ch02_txt6_img.style.opacity = 0
    ch02_txt7_img.style.opacity = 0
    ch02_Note1_img.style.opacity = 0
    ch02_Note2_img.style.opacity = 0
    ch02_Note3_img.style.opacity = 0
    ch02_Note4_img.style.opacity = 0
    ch02_Note5_img.style.opacity = 0
    ch02_Note6_img.style.opacity = 0
    ch02_toy_f_img.style.opacity = 0
    ch02_toy_m_img.style.opacity = 0
    ch02_end1_img.style.opacity = 0
    ch02_end2_img.style.opacity = 0
    ch02_end3_1_img.style.opacity = 0
    ch02_end3_2_img.style.opacity = 0
    ch02_end1_M_img.style.opacity = 0
    ch02_end2_M_img.style.opacity = 0
    ch02_end3_1_M_img.style.opacity = 0
    ch02_end3_2_M_img.style.opacity = 0
    ch02_end4_img.style.opacity = 0
    ch02_end4_2_img.style.opacity = 0
    ch02_end4_2_M_img.style.opacity = 0
    ch02_end5_1_img.style.opacity = 0
    ch02_end5_2_img.style.opacity = 0
    ch02_end7_img.style.opacity = 0
    ch02_end7_M_img.style.opacity = 0
    ch02_end7_1_img.style.opacity = 0
    ch02_end7_2_img.style.opacity = 0
    ch02_end7_3_img.style.opacity = 0
    ch02_end7_4_img.style.opacity = 0
    ch02_end7_5_img.style.opacity = 0
    ch02_end7_6_img.style.opacity = 0
    ch02_end9_img.style.opacity = 0
    ch02_end9_M_img.style.opacity = 0
    ch02_end10_F_img.style.opacity = 0
    ch02_end10_M_img.style.opacity = 0
  //ch03
    ch03_dd_img.style.opacity = 0
    ch03_ddscared_img.style.opacity = 0
    ch03_ddprotect_img.style.opacity = 0
    ch03_ddangry_img.style.opacity = 0
    ch03_friend1_img.style.opacity = 0
    ch03_friend1scared_img.style.opacity = 0
    ch03_friend2_img.style.opacity = 0
    ch03_friend2scared_img.style.opacity = 0
    ch03_friend1angry_img.style.opacity = 0
    ch03_friend2angry_img.style.opacity = 0
    ch03_name1_img.style.opacity = 0
    ch03_name2_img.style.opacity = 0
    ch03_name3_img.style.opacity = 0
    ch03_bell_img.style.opacity = 0
    ch03_door_img.style.opacity = 0
    ch03_door_frame_img.style.opacity = 0
    ch03_window_img.style.opacity = 0
    ch03_teacherangry_img.style.opacity = 0
    ch03_female_classmate_img.style.opacity = 0
  //ch04
    ch04_dd_img.style.opacity = 0
    ch04_ddsad_img.style.opacity = 0
    ch04_ddangry_img.style.opacity = 0
    ch04_ddshy_img.style.opacity = 0
    ch04_ddhappy_img.style.opacity = 0
    ch04_ddprotect_img.style.opacity = 0
    ch04_furyo_shounen_img.style.opacity = 0
    ch04_listen_to_music_img.style.opacity = 0
    ch04_hairball_img.style.opacity = 0
    ch04_jacket_img.style.opacity = 0
    ch04_pants_img.style.opacity = 0
    ch04_music_img.style.opacity = 0
    ch04_dessert_img.style.opacity = 0
    ch04_idol_img.style.opacity = 0
    ch04_door_img.style.opacity = 0
    ch04_door_frame_img.style.opacity = 0
    ch04_fb_img.style.opacity = 0
    ch04_news_img.style.opacity = 0
    ch04_bell_img.style.opacity = 0
    ch04_teacher_img.style.opacity = 0
    ch04_female_classmate_img.style.opacity = 0
    ch04_female_classmate2_img.style.opacity = 0
    ch04_male_classmate_img.style.opacity = 0
    ch04_male_classmate2_img.style.opacity = 0
    ch04_male_classmateSOR_img.style.opacity = 0
    ch04_applaud_img.style.opacity = 0
    ch04_txt1_img.style.opacity = 0
    ch04_txt2_img.style.opacity = 0
    ch04_txt3_img.style.opacity = 0
    ch04_txt4_img.style.opacity = 0
    ch04_txt5_img.style.opacity = 0
    ch04_txt6_img.style.opacity = 0
    ch04_txt7_img.style.opacity = 0
    ch04_tears1_img.style.opacity = 0
    ch04_tears2_img.style.opacity = 0
    ch04_end2_img.style.opacity = 0
    ch04_end3_img.style.opacity = 0
    ch04_end4_img.style.opacity = 0
    ch04_end5_img.style.opacity = 0
    ch04_basketball_img.style.opacity = 0
    ch04_game_img.style.opacity = 0
  }
  