
mystery=["Death Note","Tower of God","Case Closed","Paranoia Agent","Rampo Kitan"];
action=["JoJo","Demon Slayer","Bleach","HunterxHunter","Naruto","Dragon Ball Z"];
fighting=["ATTACK ON TITAN","SAMURAI CHAMPLOO","ONE PIECE","HunterxHunter","NARUTO"];
Movies=[' Spirited Away','Your Name',' Akira',' Princess Mononoke','My Neighbor Totoro'];
thriller=['Steins Gate','Death Note','Monster','Rainbow','Death Parade'];
function myfunction(){
var genre= document.getElementById("Genre").value;
if(genre=="Mystery"){
temp = mystery;
}
else if(genre=="Action"){
temp=action;}
else if(genre=='Fighting'){temp=fighting;}
else if(genre=='Movies'){temp=Movies;}
else if(genre=='Thriller'){temp=thriller;}
var text='';
for(value of temp){
    text += value + '<br>';
}
document.getElementById("demo").innerHTML= 'Top ' +genre+' Animes' +'<br>'+ text;
}
