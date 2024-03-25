var xClickz = document.getElementById('xicon');
let tClickz = document.getElementById("ticon");
var btn1 = document.getElementsByClassName('btn1')[0]
var btn2 = document.getElementsByClassName('btn2')[0]

var retweetz = false
var teleConf = false
var addConf = false


var xClickedz = false;
var tClickedz = false;

xClickz.addEventListener("click", function () {
  

  xClickedz = true
  xWarn.style.display ='none'
  btn1.style.color = "#4e5863"
});

tClickz.addEventListener("click", function () {
    

    tClickedz = true
    tWarn.style.display ='none'
    btn2.style.color = "#4e5863"

  });


  var twitterUrl = document.getElementById('id_quote_retweet_link').value
  var xWarn = document.getElementById('xfollw-warning')
  var tWarn = document.getElementById('twarning')
  var airdropBtn = document.getElementById('airdropsubmitbtn')
  var retweetWarn = document.getElementById('xwarning')

  var telUserWarn = document.getElementById('tuserWarning')



//   airdropBtn.addEventListener("click", function (event) {
//     event.preventDefault()
    
//     if(xClickedz ){
       

//         if(tClickedz){

//             if (retweetUrl.length > 40){
//                 retweetz = true

//                 // if(telUsername.length > 3){

//                 // }else{
//                 //     telUserWarn.innerHTML = 'Please input a valid username'
//                 // }

               
//             }else{
//                 retweetWarn.innerHTML = "Please input a valid link"

                
//             }
//         }else{
//             tWarn.innerHTML = 'You have not Join our Telegram community'
//         }

        
//     }else{
//         xWarn.innerHTML='ERROR! You have not Follow us on Twitter'
       
//     }

//     if(retweetz){
//         retweetWarn.style.display = "none"
//     }
//   });


airdropBtn.addEventListener("click", function (event) {
    event.preventDefault()
    var retweetUrl = document.getElementById('id_quote_retweet_link').value.length
    var telUsername = document.getElementById('id_telegram_username').value
    var addValue = document.getElementById('id_solana_wallet').value
    var addWarn = document.getElementById('addwarning')
    
  
    if(xClickedz ){
       

        if( retweetUrl > 40 ){
           
           retweetz = true

            if (tClickedz){
                

                if(telUsername.length > 3){
                    teleConf = true

                    if(addValue.length > 30){
                        addConf = true

                    }
                    else{
                        addWarn.innerHTML = "Please Enter a valid Address"
                    }
                }else{
                    telUserWarn.innerHTML = 'Please Enter a valid username'
                }

               
            }else{
                tWarn.innerHTML = 'You have not Join our Telegram community'
                
                
            }
        }else{
            retweetWarn.innerHTML = "Please Enter a valid link"
            console.log(retweetUrl)

        }

        
    }else{
        xWarn.innerHTML='ERROR! You have not Follow us on Twitter'
       
    }


    if(retweetz){retweetWarn.style.display = "none"}
    if(teleConf){telUserWarn.style.display = "none"}
    if(addConf){addWarn.style.display = "none"}


  });
