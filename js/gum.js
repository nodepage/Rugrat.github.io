var xClickz = document.getElementById("xicon");
let tClickz = document.getElementById("ticon");
var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];

var retweetz = false;
var teleConf = false;
var addConf = false;
var referrals = 0;
var referralId = null;

var xClickedz = false;
var tClickedz = false;

xClickz.addEventListener("click", function () {
  xClickedz = true;
  xWarn.style.display = "none";
  btn1.style.color = "#4e5863";
});

tClickz.addEventListener("click", function () {
  tClickedz = true;
  tWarn.style.display = "none";
  btn2.style.color = "#4e5863";
});

var twitterUrl = document.getElementById("id_quote_retweet_link").value;
var xWarn = document.getElementById("xfollw-warning");
var tWarn = document.getElementById("twarning");
var airdropBtn = document.getElementById("airdropsubmitbtn");
var retweetWarn = document.getElementById("xwarning");

var telUserWarn = document.getElementById("tuserWarning");
var clearTask = document.getElementById("taskz");
var closeTask = document.getElementById("mover");
var Giveaway = document.getElementById("givez");

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
document
  .getElementById("id_quote_retweet_link")
  .addEventListener("input", function () {
    validateInputs();
  });

document
  .getElementById("id_telegram_username")
  .addEventListener("input", function () {
    validateInputs();
  });

document
  .getElementById("id_solana_wallet")
  .addEventListener("input", function () {
    validateInputs();
  });

// Event listener for the airdropBtn click event
airdropBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateInputs();
});

// Function to validate inputs
function validateInputs() {
  var retweetUrl = document
    .getElementById("id_quote_retweet_link")
    .value.trim();
  var telUsername = document
    .getElementById("id_telegram_username")
    .value.trim();
  var addValue = document.getElementById("id_solana_wallet").value.trim();
  var addWarn = document.getElementById("addwarning");

  var retweetWarn = document.getElementById("xwarning");
  var tWarn = document.getElementById("twarning");
  var xWarn = document.getElementById("xfollw-warning");
  var telUserWarn = document.getElementById("tuserWarning");

  var retweetz = false;
  var teleConf = false;
  var addConf = false;

  if (!xClickedz) {
    xWarn.innerHTML = "ERROR! You have not Follow us on Twitter";
  }

  if (retweetUrl.length > 40) {
    retweetz = true;
    retweetWarn.style.display = "none";
  } else {
    retweetz = false;
    retweetWarn.innerHTML = "Please enter a valid link";
    retweetWarn.style.display = "block";
  }

  if (!tClickedz) {
    tWarn.innerHTML = "You have not Join our Telegram community";
  }

  if (telUsername.length > 3) {
    teleConf = true;
    telUserWarn.style.display = "none";
  } else {
    teleConf = false;
    telUserWarn.innerHTML = "Please enter a valid username";
    telUserWarn.style.display = "block";
  }

  if (addValue.length > 30) {
    addConf = true;
    addWarn.style.display = "none";
  } else {
    addConf = false;
    addWarn.innerHTML = "Please enter a valid address";
    addWarn.style.display = "block";
  }

  // Check if all validations pass
  if (xClickedz && tClickedz && retweetz && teleConf && addConf) {
    // Proceed with your logic here
    //addValue is the Address number

    Giveaway.innerHTML = "Successfully Participated";
    clearTask.style.display = "none";
    closeTask.style.display = "none";

    let paragraph = document.createElement("p");

    let strongElement = document.createElement("strong");
    strongElement.textContent = "Referrals ID:";
    paragraph.appendChild(strongElement);

    paragraph.appendChild(document.createTextNode(" SSSSSSS"));

    paragraph.setAttribute("id", "success");

    let form = document.getElementById("airdrop-form");

    form.appendChild(paragraph);

    let Newparagraph = document.createElement("p");
    var old = document.getElementById("success");
    let strongElement2 = document.createElement("strong");
    strongElement2.textContent = "RAT BALANCE :";
    Newparagraph.appendChild(strongElement2);
    Newparagraph.appendChild(document.createTextNode(" 5000 $RAT"));
    Newparagraph.setAttribute("id", "ratu");
    old.appendChild(Newparagraph);

    let Newparagraph2 = document.createElement("p");
    var old = document.getElementById("success");
    let strongElement3 = document.createElement("strong");
    strongElement3.textContent = "Referrals : ";
    Newparagraph2.appendChild(strongElement3);
    Newparagraph2.appendChild(document.createTextNode(` ${referrals}`));
    Newparagraph2.setAttribute("id", "ref");
    old.appendChild(Newparagraph2);

    let Newparagraph3 = document.createElement("p");
    var old = document.getElementById("success");
    let strongElement4 = document.createElement("strong");
    strongElement4.textContent = "Share Referral Link :";
    Newparagraph3.appendChild(strongElement4);
    Newparagraph3.setAttribute("id", "shareref");
    old.appendChild(Newparagraph3);

    let Newparagraph4 = document.createElement("p");
    var old = document.getElementById("success");
    Newparagraph4.textContent = "Share your referral link:";
    Newparagraph4.setAttribute("id", "sharetxt");
    old.appendChild(Newparagraph4);

    let inputElement = document.createElement("textarea");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("name", "Refinput");
    inputElement.setAttribute("id", "Inputref");
    inputElement.readOnly = true;
    // Make the textarea resizable
    inputElement.style.resize = "both";
    inputElement.value = `www.ratsonsol.com/signup.htm?referral_id=${referralId}`;
    old.appendChild(inputElement);

    let Newparagraph5 = document.createElement("p");
    var old = document.getElementById("success");
    Newparagraph5.textContent = "Copy";
    Newparagraph5.setAttribute("id", "CopyBtn");
    old.appendChild(Newparagraph5);

    Newparagraph5.addEventListener("click", function () {
      var copyText = document.querySelector("#Inputref"); 
    copyText.select(); document.execCommand("copy");
    noti.style.display = "block"
    setTimeout(function() {
      noti.style.display = "none"
    }, 1500);
    });

    
    let Newparagraph6 = document.createElement("p");
    let imageElement = document.createElement("img");
    imageElement.src = "./twitter.png";
    var old = document.getElementById("success");
    Newparagraph6.appendChild(imageElement);

    Newparagraph6.textContent = "Share on Twitter";
    Newparagraph6.setAttribute("id", "TwitterBtn");
    old.appendChild(Newparagraph6);

    Newparagraph6.addEventListener("click", function () {

      
      window.open(`
      http://twitter.com/share?text=AIRDROP GIVEAWAY, Win 20,000 $RAT EACH FOR TOP 500 REFERRAL&url=https://www.ratsonsol.com/signup.htm?referral_id=${referralId}`, "_blank")
    });

    if (false) {
      //featch data
    } else {
      var data = {
        address: addValue,
        telegram: telUsername,
        referrals: referrals,
      };

      let jsonString = JSON.stringify(data); //Json covert data

      localStorage.setItem("Data", jsonString);
    }
  }
}

