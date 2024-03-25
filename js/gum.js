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


// airdropBtn.addEventListener("click", function (event) {
//     event.preventDefault()
//     var retweetUrl = document.getElementById('id_quote_retweet_link').value.length
//     var telUsername = document.getElementById('id_telegram_username').value
//     var addValue = document.getElementById('id_solana_wallet').value
//     var addWarn = document.getElementById('addwarning')
    
  
//     if(xClickedz ){
       

//         if( retweetUrl > 40 ){
           
//            retweetz = true

//             if (tClickedz){
                

//                 if(telUsername.length > 3){
//                     teleConf = true

//                     if(addValue.length > 30){
//                         addConf = true

//                     }
//                     else{
//                         addWarn.innerHTML = "Please Enter a valid Address"
//                     }
//                 }else{
//                     telUserWarn.innerHTML = 'Please Enter a valid username'
//                 }

               
//             }else{
//                 tWarn.innerHTML = 'You have not Join our Telegram community'
                
                
//             }
//         }else{
//             retweetWarn.innerHTML = "Please Enter a valid link"
//             console.log(retweetUrl)

//         }

        
//     }else{
//         xWarn.innerHTML='ERROR! You have not Follow us on Twitter'
       
//     }


//     if(retweetz){retweetWarn.style.display = "none"}
//     if(teleConf){telUserWarn.style.display = "none"}
//     if(addConf){addWarn.style.display = "none"}


//   });


// Add event listeners to input fields for validation on change
document.getElementById('id_quote_retweet_link').addEventListener('input', function () {
    validateInputs();
});

document.getElementById('id_telegram_username').addEventListener('input', function () {
    validateInputs();
});

document.getElementById('id_solana_wallet').addEventListener('input', function () {
    validateInputs();
});

// Event listener for the airdropBtn click event
airdropBtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateInputs();
});

// Function to validate inputs
function validateInputs() {
    var retweetUrl = document.getElementById('id_quote_retweet_link').value.trim();
    var telUsername = document.getElementById('id_telegram_username').value.trim();
    var addValue = document.getElementById('id_solana_wallet').value.trim();
    var addWarn = document.getElementById('addwarning');

    var retweetWarn = document.getElementById('xwarning');
    var tWarn = document.getElementById('twarning');
    var xWarn = document.getElementById('xfollw-warning');
    var telUserWarn = document.getElementById('tuserWarning');

    var retweetz = false;
    var teleConf = false;
    var addConf = false;

    if(!xClickedz ){
        xWarn.innerHTML='ERROR! You have not Follow us on Twitter'
    }

    
    

    if (retweetUrl.length > 40) {
        retweetz = true;
        retweetWarn.style.display = 'none';
    } else {
        retweetz = false;
        retweetWarn.innerHTML = 'Please enter a valid link';
        retweetWarn.style.display = 'block';
    }

    if(!tClickedz){
        tWarn.innerHTML = 'You have not Join our Telegram community'
    }

    if (telUsername.length > 3) {
        teleConf = true;
        telUserWarn.style.display = 'none';
    } else {
        teleConf = false;
        telUserWarn.innerHTML = 'Please enter a valid username';
        telUserWarn.style.display = 'block';
    }

    if (addValue.length > 30) {
        addConf = true;
        addWarn.style.display = 'none';
    } else {
        addConf = false;
        addWarn.innerHTML = 'Please enter a valid address';
        addWarn.style.display = 'block';
    }

    // Check if all validations pass
    if (xClickedz && tClickedz && retweetz && teleConf && addConf) {
        // Proceed with your logic here
       if(){

       }else{
        
       }
    }
}
