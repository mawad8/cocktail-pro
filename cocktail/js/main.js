// what is an API?? it's application programing interface

// WHAT IS JSON ?? JAVASCRIPT OBJECT NOTATION , IS A TYPE OF DATA STRUCTURE THAT VERY CLOSELY REPRESENT AN OBJECT TREE
// IN JS
// EXAMPLE
// like object{inide object {inside object}}
// ^^ plain js object example
// let anything = {
// 	property1: {

// 	},
// 	property2: {
// 		deeperproperty1:{}

// 	},
// }
// // JSON FORMAT THE OBJECT IN JSON
// {
// 	"toyota":{
// 		"make":"camry",
// 		"year": 2000,
// 		"color": "blue",
// 		"orgin":{
// 			"interior": "malaysia"
// 			"suspension": "china"
// 		}

// 	}
// 	"toyota":{
// 		"make":"r4",
// 		"year": 2005,
// 		"color": "green",
// 		"orgin": {
// 			"interior": "malaysia",
// 			"suspension": "china";
// 		}
// 	}
// }
// what you can do with API the CRUD Acronym
// are the 4 basic commands manipulate serverside data
// C - CREATE. CREATING NEW DATA AND STORING IT IN THE DATA BASE
// R - READ. TAKING SOMTHING FROM THE DATABASE TO LOOK AT.
// U - UPDATE. EDIT EXISTING DATA IN THE DATABASE
// D - DELETE. COMPLETELY REMOVE A PIECE OF DATA FROM THE DATABASE

// WHAT IS uth and why is it important???????
// auth is short for authorization. authorization is usually needed when you want to acces private info within a certain API

// what is an APIKEY 
// MOST APIS THAT DON'T NEED TO ACCESS PRIVAT INFO WILL
// OFFER AN APIKEY ITS SIMILAR TO A PASSWORD, BUT THE  REASON WHY THEY GIVEN 
//  TO YOU IS TO MAKRE SURE YOU ARE NOT A BOT AND TO MAKE SURE THAT THEY  can track your use of it 

 // what is https? hyper text transfer protocol secure 
 // if we want to connect to API using our browser we can securely do that with a couple of basic line of code




// what is AJAX???? asychronous JS and XML
// synchronous JS is js  THAT RUNS FROM TOP TO BOTTOM IN THE ORDER IN WHICH IT WAS WRRITIEN
// this is usfule to us when using it with apis, we can use
// the api however we want without blocking the natural order that our JS func run

// synchronous JS EXAMPLE
function callbroo() {
	console.log("heybroo");
	// body...
}
function calldon() {
	setTimeout(function(){
	console.log("heydon");
		
	}, 1000)
	// body...
}
function calldud() {
	console.log("heydud");
	// body...
}

// this three order dowen its the order for the func dosent mattar how we wrote it up
// here its deffierant becuse  we but settimeout so we make it work in sertin time 1000 second thats
 // why when we run it go the last one
calldon();
callbroo();
calldud();


// chucknorris joke example
// $.ajax({
// 	type:"GET",
// 	url:"https://api.chucknorris.io/jokes/random",
	
// 	success: function(dataThatWeGotFromeTheAPI){
// 		console.log(dataThatWeGotFromeTheAPI);
// 		document.getElementById('icone').src = 
// 		dataThatWeGotFromeTheAPI.icon_url;
// 		document.getElementById("joke").innerHTML = 
// 		dataThatWeGotFromeTheAPI.value;


// 	}
// })

// check cocktail recipes by name
function fd(){
	// save user input 
	let drnks = document.getElementById('s').value;

$.ajax({
	type:"GET",
	url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ drnks,
	
	success: function(dataThatWeGotFromeTheAPI){
		console.log(dataThatWeGotFromeTheAPI);
		let drkarray = dataThatWeGotFromeTheAPI.drinks;
		console.log(drkarray)
		for (let i = 0; i <  drkarray.length; i++) {
			console.log(drkarray[i].strDrink)
			let drkname = drkarray[i].strDrink;
			let drkthum = drkarray[i].strDrinkThumb;
			let drkcat = drkarray[i].strCategory;
			document.getElementById('dbox').innerHTML +=
			"<div class='ditem col-12'>" + 
			"<img src='"+ drkthum + "'>"+ "<h4 class='ddd'>" + drkname + "</h4>"+
			"<h6 class='cat'>"  + drkcat + "</h6>" +
			"</div>";

			// let imm = document.getElementById('imm').src = drkthum;



		}
	


	}
})
}

// ADD our func to the button in JS you can't add another func you have to right another one
document.getElementById('bs').addEventListener("click", fd);

function clockco(){

let time = new Date();
let ampmch = time.getHours();
if (ampmch >= 12) {
	document.getElementById('ampm').innerHTML = "pm"
}else{
	document.getElementById('ampm').innerHTML = "am"
}

let h = time.getHours();
if (h > 12) {

	h = h - 12;
}

let m = time.getMinutes();
if (m < 10) {
	m = "0" + m;
}
let s = time.getSeconds();
if (s < 10) {
	s = "0" + s;
}
 let hb = document.getElementById("h");
 let mb = document.getElementById("m");
 let sb = document.getElementById("se");
 hb.innerHTML = h;
 mb.innerHTML = m;
 sb.innerHTML = s;

 setTimeout(clockco, 1000);


}
clockco();