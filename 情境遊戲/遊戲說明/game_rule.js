const game_rule_button = ["選擇一", "選擇二", "選擇三", "選擇四"]
const game_rule_button2 = ["喜", "怒", "哀","樂",]

function game_rule(){
    //宣告
    var create_text_clickNumber = 0        //( (用於判斷文字顯示(+1)) + (完且動畫也顯示完(+1)) = 2)時再新增click事件

    var myAuto5 = document.getElementById('myaudio5');//音樂5
    myAuto5.volume = 0.5; //讓音樂5音量降低(0~1.0)
    myAuto5.play();//播放音樂5

    const text = document.createElement('div')      //文字敘述區
    text.classList.add('txt')

    const next_text = document.createElement('img')
    next_text.classList.add('next_text_img')
    next_text.setAttribute('src', '圖庫/next-text.png')

    const arrow1_img  = document.getElementById('arrow1')
    arrow1_img.style.opacity = 0
    arrow1_img.setAttribute("src", '圖庫/arrow1.png')

    const arrow3_img  = document.getElementById('arrow3')
    arrow3_img.style.opacity = 0
    arrow3_img.setAttribute("src", '圖庫/arrow3.png')

    const maymay_img  = document.getElementById('maymay')
    maymay_img.style.opacity = 0
    maymay_img.setAttribute("src", '圖庫/主角一般(溝通).png')

    const maymayhappy_img  = document.getElementById('maymayhappy')
    maymayhappy_img.style.opacity = 0
    maymayhappy_img.setAttribute("src", '圖庫/主角開心(溝通).png')

    clear()   //重製畫面

    // 暫時背景
    bg.setAttribute('src', '圖庫/暖橘背景(溝通).png')
    if(text_count ==  0){
        create_text()
        maymay_img.style.opacity = 1
        create_text_click()        
    }
    else if(text_count ==  1){
        create_text()
        maymay_img.style.opacity = 1
        create_text_click()     
    }
    else if(text_count ==  2){
        create_text()
        arrow1_img.style.opacity = 1
        create_text_click()    
    }
    else if(text_count == 3){
        maymay_img.style.opacity = 1
        create_text()
        setTimeout(() => {
            maymay_img.style.opacity = 1
            arrow1_img.classList.remove("arrow1");    //把箭頭移到右下
            arrow1_img.classList.add("arrow2");
            arrow1_img.style.opacity = 1            
            create_text_click()        
        }, "4000");
    }
    else if(text_count ==  4){
        create_text()
        maymay_img.style.opacity = 1
        create_text_click()   
    }
    else if(text_count ==  5){
        maymay_img.style.opacity = 1
        maymay_img.classList.remove("maymay");    //把妹妹移到左下
        maymay_img.classList.add("maymay2");
        arrow3_img.style.opacity = 1
        create_Button_innerText()   
    }
    else if(text_count == 6){
        maymayhappy_img.style.opacity = 1
        create_text()
        create_text_click()   
    }
    else if(text_count == 7){
        maymayhappy_img.style.opacity = 1
        create_text()
        maymay_img.classList.remove("maymay2");    //把妹妹移回中間
        maymay_img.classList.add("maymay");
        maymayhappy_img.style.opacity = 0
        maymay_img.style.opacity = 1
        create_text_click()
    }
    else if(text_count == 8){
        create_text()
        create_text_click()
        maymay_img.style.opacity = 1      
    }
    else if(text_count == 9){
        create_checkButton_innerText()
    }
    else if(text_count == 10){
        create_text()
        Mood_end()
        create_text_click()    
    }else{
        music_end()     //背景音量遞減
        text.innerText = "接下來讓我們開始遊戲吧！"
        maymayhappy_img.style.opacity = 1
        next_text_img.appendChild(next_text)
        text.addEventListener('click', () => window.location.reload())//重整頁面
    }
    //顯示相關介面
    storyText.appendChild(text)   //顯示文字敘述
    
    var text_number = 0   //用於create_text()記錄用
    function create_text(){
        typing_music_start()        //打字音效開始
        text.addEventListener('click', create_text_end)      //設定click事件
        setTimeout(() => {
            if(text_number <= game_rule_text[text_count].length + 1){
                text.innerText = game_rule_text[text_count].slice(0,text_number)      //讀取字串中的字
                text_number++
                create_text()       //再次呼叫，以形成迴圈來逐一顯示
            }else if(text_number > game_rule_text[text_count].length + 1){      //字串顯示完成，設定click
                typing_music_end()      //打字音效結束
                create_text_click()
            }
        }, "80");
    }

    function create_text_end(){
        text_number = game_rule_text[text_count].length + 2     //讓create_text()的迴圈結束到else if來去執行create_text_click()
        text.innerText = game_rule_text[text_count]      //顯示完整敘述
        text.removeEventListener('click', create_text_end)      //移除click事件
    }

    function create_text_click(){
        create_text_clickNumber++       //總共會被呼叫兩次，1.動畫結束 2.文字顯示結束，所以>>>(= 2)來去執行下面的if
        if (create_text_clickNumber == 2){
            text.addEventListener('click', game_rule)      //設定click事件
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
            if (i <= game_rule_button[0].length + 1){
                const chaper_button = document.createElement('button')      //情緒選擇按鈕
                chaper_button.innerText = game_rule_button[j-1]
                chaper_button.classList.add('btn-animation')
                chaper_button.addEventListener('click', game_rule)
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
        
        text.innerText = game_rule_text[text_count]
        text_count++
    }
    
    function create_checkButton_innerText(){     //建立按鈕與事件 設定文字敘述
        let i = 0   //用於判斷有無按鈕要載入
        create_btn()
        function create_btn(){    //建立按鈕
            let j //用於設定click事件連結去哪個章節
            j = i
            if (i < game_rule_button2.length){
                const box = document.createElement('input')
                box.setAttribute('type', 'checkbox')
                box.name = game_rule_button2[j]
                box.value = game_rule_button2[j]
                box.id = game_rule_button2[j]
            
                const lab = document.createElement('label')
                lab.htmlFor = game_rule_button2[j]
                lab.appendChild(document.createTextNode(game_rule_button2[j]))
            
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
        
        text.innerText = game_rule_text[text_count]
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
            game_rule()
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
            if(myAuto5.volume > 0.2){
                myAuto5.volume = myAuto5.volume - 0.1 //讓音樂1音量降低(0~1.0)
                music_end()
            }
        }, "1000")
    }
}