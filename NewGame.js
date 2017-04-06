//made for google chrome
var arr = [ ["P1", " 1", " 2", " 3", " 4", " 5", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X", " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			[" X", " X", " X",  " X", " X", " X", "7"],
			];                              

var player = {
	tile : "P1",
	hp : 5,
	x : 0,
	y : 0,
	score : []
}
var ground = new monster(0,0,0, "", 0, tile);
function exit(x,y){
	console.log("exit");
			$("#main").text("You win with a score of " + player.score);
			
}

function addFunction(){
			prompt("What will you do?");
}
function tile(){
	console.log("this is an  empty space");
	return true;
	}
	function tile(x,y){
	arr[player.x][player.y] = ground;
	player.x = x;
	player.y = y;
	arr[x][y] = player;
	clear();
	hexGrid(arr, "myCanvas");
	console.log("this is an  empty space");
	return true;
	}
function no(){
	console.log("No");
	document.getElementById("up").disabled = false;
	document.getElementById("down").disabled = false;
	document.getElementById("downright").disabled = false;
	document.getElementById("downleft").disabled = false;
	document.getElementById("upleft").disabled = false;
	document.getElementById("upright").disabled = false;
	$("#box").html("");

}
function minotaur(x,y){
	var hold = false;
	document.getElementById("up").disabled = true;
	document.getElementById("down").disabled = true;
	document.getElementById("downright").disabled = true;
	document.getElementById("downleft").disabled = true;
	document.getElementById("upleft").disabled = true;
			$("#box").html("Would you like to fight this monster?</br><input onclick = \"rng("+x+",+"+ y+")\" type = \"button\" value = \"Yes\" id = \"answer\" ></input> <input type = \"button\" id =\"answer\" onclick = \"no()\" value = \"No\"></input>");
			
		



}

function rng(x,y){
		var r = Math.random()*100;
		console.log(r);
	if(r < 50){
		console.log("You won!");
		$("#"+"box").text( "You have outskilled the monster.\nYou have won "+arr[x][y].prize+" points");
		player.score.push(arr[x][y].prize);
		arr[x][y] = player;
		arr[player.x][player.y] = ground;
		player.x = x;
		player.y = y;
			clear();
	hexGrid(arr, "myCanvas");
	$("#"+"hp").text( player.hp);
	}
	else{
		console.log("You have been outskilled");
		player.hp = player.hp - arr[x][y].attack;
		$("#"+"box").text("You have been outskilled\nYou have lost " + arr[x][y].attack + " hp. You have " + player.hp + " hp left");
	}
	if(player.hp <= 0){
		$("#main").text( "You lose");
	}
	else{
	var myScore = "";
	for(var i = 0; i < player.score.length; i++){
	myScore = myScore.concat(player.score[i]+", ");
	}
	$("#score").text( myScore);
}
	document.getElementById("up").disabled = false;
	document.getElementById("down").disabled = false;
	document.getElementById("downright").disabled = false;
	document.getElementById("downleft").disabled = false;
	document.getElementById("upleft").disabled = false;
	document.getElementById("upright").disabled = false;
}
function  monster(name, hp, prize, tile,attack, newFunction){	
		this.name = name;
		this.hp = hp;
		this.prize = prize;
		this.tile = tile;
		this.attack = attack;
		this.myFunction=newFunction;	

		
	}

		
function movement(move){
	switch (move){
		case 1:
		//downleft
		if(player.x%2 != 0){
					arr[player.x+1][player.y-1].myFunction(player.x+1, player.y-1);
				
			}
			else{
				if(player.x + 1 >=  0){
					arr[player.x+1][player.y].myFunction(player.x+1, player.y);
				

				}
				else{
					console.log("Out of bounds");
				}
			}
			break;

		case 2:
		//down
			arr[player.x+2][player.y].myFunction(player.x+2, player.y);

		
			break;
		case 3:
		//downright;
		if(player.x%2 == 0){
			
					arr[player.x+1][player.y+1].myFunction(player.x+1, player.y+1);
			}
		
		
		else{
				arr[player.x+1][player.y].myFunction(player.x+1, player.y);

			
		
			}
		
			break;
			
			
			//upleft
	case 7:
		if(player.x%2 != 0){
					arr[player.x-1][player.y-1].myFunction(player.x-1, player.y-1);
				
				
			}
			else{
						arr[player.x-1][player.y].myFunction(player.x-1, player.y);

				
			}
			break;
//upright
		case 9:
		if(player.x%2 == 0){
			
				arr[player.x-1][player.y+1].myFunction(player.x-1, player.y+1);
			
		}
		else{
				
					arr[player.x-1][player.y].myFunction(player.x-1, player.y);		
		}
			break;
			
		
		case 8:
		//up
		
			arr[player.x-2][player.y].myFunction(player.x-2, player.y);

		
			break;
	}

	
}


function printPage(arr){
	$("#myTable").append($("<table align = \"center\" cellpadding = \"5\">"));
	for(var i =0; i < arr.length; i++){
		$("#myTable").append($("<tr>"));
		for(var j = 0; j <= arr[0].length-1; j++){
			var x = i;
			$("#myTable").append($("<td align = \"center\" id = \""+i+""+j+"\"></td>"));
		}
		$("#myTable").append($("</tr>"));
	}	
	$("#myTable").append($("</table>"));
	$("#00").text("P1");
	
var table = "";
	table = table + "<table align = \"center\" cellpadding = \"5\">";
	for(var i =0; i < arr.length; i++){
		table = table + "<tr>";
		for(var j = 0; j <= arr[0].length-1; j++){
			var x = i;
			table = table + "<td align = \"center\" id = \""+i+""+j+"\"></td>";
		}
		table = table + "</tr>";
	}	
	table = table + "</table>";
	$("#myTable").html(table);
	$("#00").text("P1");

}
function populateGrid(jQuery){
	console.log("ran");
	for(var i =0; i <= arr.length-1; i++){
		for(var j = 0; j <= arr[0].length-1; j++){
				arr[i][j] = new monster("ground", 0, 0, " ",0, tile);
					
		}
	}
	arr[0][0] = player;
	arr[2][0] = new monster("Minotaur", 5,10,'M', 2, minotaur);
var r = Math.random()*100;
for(var i =0; i <= arr.length-1; i++){
		for(var j = 0; j <= arr[0].length-1; j++){
			console.log(r);
			if(r< 25 && arr[i][j].tile != "P1"){
				console.log("add ");
				arr[i][j] = new monster("minotaur",5, 10, 'M',2, minotaur);
			}
			r = Math.random() *100;
		}
	}
	
	
	while(true){
		var x = Math.floor((Math.random()*arr.length));
		var y =Math.floor((Math.random()*arr[0].length));
		if(arr[x][y].tile != ("P1" || 'M')){
			arr[x][y] = new monster("exit", 0, 0, "E",0, exit);
			break;
		}	
	}

hexGrid(arr, "myCanvas");

}

function hex(ctx, x,y, text){
	  ctx.moveTo(x, y);
      ctx.lineTo(x+30, y);
      ctx.moveTo(x, y);
      ctx.lineTo(x-20, y-25);
      ctx.moveTo(x-20, y-25);
      ctx.lineTo(x, y-50);
      ctx.moveTo(x, y-50);
      ctx.lineTo(x+30, y-50);
      ctx.moveTo(x+30, y-50);
      ctx.lineTo(x+50, y-25);
      ctx.moveTo(x+50, y-25);
      ctx.lineTo(x+30, y);
	  ctx.font = "20px Arial";
      ctx.fillText(text, x+3, y-17);
}	
function hexGrid(arr, canvasId){
var c = document.getElementById(canvasId);
var ctx = c.getContext("2d");
var x = 100;
var y =60;
var xVert = 100;
var yVert = 60;
var swap = 0;
ctx.beginPath();
for(var i = 0; i < arr.length; i++){
	for(var j = 0; j < arr[0].length; j++){
				   
			if(typeof arr[i][j] != 'undefined'){								

			hex(ctx,x,y, arr[i][j].tile);
			x+=100;
			}
			
			
	
			ctx.stroke();
	
	}
	if (swap == 0){
	x = xVert - 50;
	swap = 1;
	}
	else{
	x = xVert;
	swap = 0;
	}
	y += 25;
				  
				   
		
	}
}
function callGrid(){
	hexGrid(arr, "myCanvas");
}
function clear(){
	var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
console.log("clear");
ctx.clearRect(0,0,1000, 1000);
}