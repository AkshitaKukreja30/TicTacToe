var i=1;
var winner="";
var gameEnded=false;
var j=1;
function mark(id) {
  if(j==0){
  	document.getElementById(id).disabled = true;
  	alert(winner+ " has already won!")
  	return;
  }
  if(i%2==0){
  	document.getElementById(id).value="X";
  	document.getElementById(id).disabled = true;
  	winner="Player X";
    }
  else{
  	document.getElementById(id).value="0";
  	document.getElementById(id).disabled = true;
   	winner="Player 0";
  	  }
	console.log("inside"+ id)
	console.log("j = "+j)
	if(j==1){
		if(gameEnded=false &&
		(b1.value!="" && b2.value!="" && b3.value!="" && b1.value==b2.value  && b2.value==b3.value)||
		(b4.value!="" && b5.value!="" && b6.value!="" && b4.value==b5.value  && b5.value==b6.value)||
		(b7.value!="" && b8.value!="" && b9.value!="" && b7.value==b8.value  && b8.value==b9.value)||
		(b1.value!="" && b4.value!="" && b7.value!="" && b1.value==b4.value  && b4.value==b7.value)||
		(b2.value!="" && b5.value!="" && b8.value!="" && b2.value==b5.value  && b5.value==b8.value)||
		(b3.value!="" && b6.value!="" && b9.value!="" && b3.value==b6.value  && b6.value==b9.value)||
		(b1.value!="" && b5.value!="" && b9.value!="" && b1.value==b5.value  && b5.value==b9.value)||
		(b3.value!="" && b5.value!="" && b7.value!="" && b3.value==b5.value  && b5.value==b7.value)
		)
	{
		gameEnded=true;
		alert(winner + " won");
		j=0;
			}
		else {
		if(b1.value!="" && b2.value!="" && b3.value!="" && b4.value!="" && b5.value!="" && b6.value!="" && b7.value!="" && b8.value!="" && b9.value!=""){
		alert("It's a draw");
	}
	}

}
  i++;
 }




  function playagain(){
  	location.reload();
  }
  






