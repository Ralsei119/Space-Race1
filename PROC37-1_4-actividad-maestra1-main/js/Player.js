class Player {
  constructor() {

  }
 
 addPlayer(){
  var playerIndex="players/player"+this.index

  if(this.index===1){
    this.positionX=width/2-100
    }else{
this.positionX=width/2+100
    }

database.ref(playerIndex).set({
  name:this.name,
  positionX:this.positionX,
  positionY:this.positionY
})


 }
 

 getDistance(){
  var playerDistanceRef=database.ref("players/player"+this.index)
  playerDistanceRef.on("value",data =>{
    var data=data.val()
    this.positionX=data.positionX
this.positionY=data.positionY
  })
 }
 
 
 
 
 
 
 
 
 
 
 
  getCount(){
var playerCountRef=database.ref("playerCount");
playerCountRef.on("value",function(data){
  playerCount=data.val();
})


 }
 updateCount(count){
  database.ref("/").update({
    playerCount:count
  })
 } 

static getPlayersInfo(){
  var playerInfoRef=database.ref("players")
  playerInfoRef.on("value",data =>{
    allPlayers=data.val();
  })
}


update(){

var playerIndex = "players/player" + this.index;
database.ref(playerIndex).update({ 
name: this.name,
positionX: this.positionX,
positionY: this.positionY,

 })




}






}
