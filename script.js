let button = document.querySelector(".submit");
let result = document.querySelector(".result");

button.onclick = function() {
    let Answer1 = Number(document.querySelector(".Answer1").value);
    let Answer2 = document.querySelector(".Answer2").value;
    
    if(Answer2 === "Unranked" || Answer2 === "Bronze" || Answer2 === "Silver" || Answer2 === "Gold" && Answer1 <=2){
    result.innerHTML = "You are the Takumi";}	
    else if(Answer2 === "Plat" && Answer1 <=3){
	result.innerHTML = "You are Dominus"; }
    else if(Answer2 === "Diamond" || Answer2 === "Champ" && Answer1 <=4){
    result.innerHTML = "You are Fennec";}
    else if(Answer2 === "Grand Champ" || Answer2 === "SSL" && Answer1 >= 5){
  result.innerHTML = "You are the Octane";}
};
    //write SS if-else conditional statement below

                  
    //write SS if-else conditional statement below







