var xClickz = document.getElementById('xicon');
let tClickz = document.getElementById("ticon");

var xClickedz = false;
var tClickedz = false;

xClickz.addEventListener("click", function () {
  

  xClickedz = true
  xWarn.style.display ='none'
});

tClickz.addEventListener("click", function () {
    alert('clicked Telegram')

    tClickedz = true
    tWarn.style.display ='none'
  });


  var twitterUrl = document.getElementById('id_quote_retweet_link').value
  var xWarn = document.getElementById('xfollw-warning')
  var tWarn = document.getElementById('twarning')
  var airdropBtn = document.getElementById('airdropsubmitbtn')



  airdropBtn.addEventListener("click", function () {
    if(xClickedz ){
       

        if(tClickedz){

            if (refUrlx.value.length > 12){
                
            }
        }else{
            tWarn.innerHTML = 'You have not Join our Telegram community'
        }

        
    }else{
        xWarn.innerHTML='ERROR! You have not Follow us on Twitter'
       
    }
  });


