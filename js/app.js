// var questions = [{
// 	question: "Have you worn it in the last six months",
// 	optionOne: "yes",
// 	optionTwo "no",
// },]s
/*$( document ).ready(function() {
    console.log( "ready!" );
});*/

function foo (){
//	history.push("test")
	console.log(fauxhistory[0]);
};




(function() { 
  var app = angular.module('flowChart', [

'ngAnimate'
  	]);
// angular.module('cardAnimations', ['ngAnimate']);

  	app.controller('TrailController', function(){
	    
		this.fauxhistory = ["whoIs"];
	    // this.tab = "whoIs";
	    this.tab = "whoIs";

	    this.setTab = function(newValue){
	      this.tab = newValue;
	      this.fauxhistory.unshift(newValue)
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };

	    this.restart = function(){
	    	this.fauxhistory = ["whoIs"];
	    	this.tab = "whoIs"
	    }

	    this.goBack = function(newValue){
	    this.tab = newValue;
	    this.fauxhistory.shift()
	    }
	    this.card = "not this" ;
	});

	app.controller('TrailDirections', function(){
	   this.card = "Yellow";

	});

	app.directive('controller2', function() {
	  return {
	    controller: function($scope) {
	      $scope.faux =[{
	      	showOn:"nocorkscrewreq",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      }];
	    }
	  }
	});




	app.directive('controller1', function() {
	  return {
	    controller: function($scope) {
	      $scope.wines =[{
	      	showOn:">nocorkscrewreq",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"buythebiggestbottle",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"theyrarelyhaveasenseoftaste",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"Leaveyourwineathomebringwhiskyorvodka",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"bringanopenbottleandhopenooneopensit",
	      	name:"EL Camposino",
	      	forward:"No cork screw required",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"sniffyourglassof",
	      	name:"Pino Noir",
	      	forward:"sniff your glass of",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"goforhighoctane",
	      	name:"Zinfandel or Shiraz",
	      	forward:"Go for something high octane",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"goforsomthingexotic",
	      	name:"Sangiovese or Grenache",
	      	forward:"go for somthing exotic",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"fruitforwardwine",
	      	name:"Argentinian Malbec",
	      	forward:"put the best fruit forward",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"somethingearthy",
	      	name:"Chinon or Bourgueil",
	      	forward:"something earthy",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"pleasebringmemy",
	      	name:"Buttery Chardonnay",
	      	forward:"please bring me my",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"gobudgetgobulk",
	      	name:"3 Liter Box Wine",
	      	forward:"Go Budget Go Bulk",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"whiteand9suchas",
	      	name:"Sauvignon Blanc",
	      	forward:"White and under £7",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"whybuyanythingbut",
	      	name:"Bordeaux or Burgundy",
	      	forward:"Why Anything But...",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"drinkabottleofsun",
	      	name:"California Cabernet",
	      	forward:"Drink a Bottle of Sun",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"cultclassics",
	      	name:"Sine Qua Non or Cayuse",
	      	forward:"Have a Cult Classic",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"drinkabottleofsun",
	      	name:"California Cabernet",
	      	forward:"Drink a Bottle of Sun",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"askfor",
	      	name:"Cotes du Rhone",
	      	forward:"Ask for",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"cheapbubbly",
	      	name:"Spanish Cava",
	      	forward:"cheap bubbly",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"somethingsweet",
	      	name:"Riesling or Chennin Blanc",
	      	forward:"something sweet",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"compacencyisabitch",
	      	name:"Merlot",
	      	forward:"Compacency Is A Bitch",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"hedonisticjoyride",
	      	name:"California Pinot Noir",
	      	forward:"Hedonistic Joy Ride",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"theyrarelyhaveasenseoftaste",
	      	name:"Bucksfizz 2 for £5",
	      	forward:"They Rarely Rave A Sense Of Taste",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },{
	      	showOn:"theydontdeservewinegetoutofmyflowchart",
	      	name:"Just get Tango or Shloer",
	      	forward:"They don't deserve wine",
	      	grape:"Cabernet blend",
	      	year:"2011",
	      	colour:"Medium-Bodied Red",
	      	shortDescription:"Fruity Red",
	      	Country:"Chili",
	      	description:"Campesino is a tribute to the farmers who toiled this ancient valley after the conquering Incas introduced agriculture in the 15th century. The dark smoky fruit, vibrant palate and ripe tannins combine to deliver an approachable red wine perfect for any occasion.",
	      	imageurl:"assets/180028_lightbox.png",
	      	link:"gooogle.com",
	      	price:"£19.00",
	      },
	      ];
	      $scope.cards = [{
	      	showOn:"whoIs",
	      	text:"Who is the wine for?",
	      	opt1:[{ text: "Someone else",link: "areyouatasocial"}],
	      	opt2:[{
	      		text: "Personal use",
	      		link: "areyouathome"
	      	}],
	      },{
	      	showOn:"areyouathome",
	      	text:"Are you at home?",
	      	opt1:[{
	      		text: "Yes",
	      		link: "alone?"
	      	}],
	      	opt2:[{
	      		text: "No",
	      		link: "onthego"
	      	}],
	      },{
	      	showOn:"onthego",
	      	text:"On the go...",
	      	opt1:[{
	      		text: "Dinner Party",
	      		link: "iswinethemaincourse"
	      	}],
	      	opt2:[{
	      		text: "Restaurant",
	      		link: "fancy"
	      	}],
	      	opt3:[{
	      		text: "Special Occasion",
	      		link: "specialoccasion"
	      	}],
	      	opt4:[{
	      		text: "Outside",
	      		link: "outside"
	      	}],
	      },{
	      	showOn:"outside",
	      	text:"",
	      	opt1:[{
	      		text: "Camping",
	      		link: ">nocorkscrewreq"
	      	}],
	      	opt2:[{
	      		text: "In the street",
	      		link: ">nocorkscrewreq"
	      	}],
	      },{
	      	showOn:"areyouatasocial",
	      	text:"Are you at a social gathering?",
	      	opt1:[{
	      		text: "yes",
	      		link: "whatistheoccation"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "aretheywinelovers"
	      	}],
	      },{
	      	showOn:"whatistheoccation",
	      	text:"What is the occation?",
	      	opt1:[{ 
	      		text:"dinner party", 
	      		link:"whoiscooking"
	      	}],
	      	opt2:[{ 
	      		text:"get together", 
	      		link:"doyouknowthem"
	      	}],
	      	opt3:[{ 
	      		text:"Bachelor party",
	      		link:"Leaveyourwineathomebringwhiskyorvodka"
	      	}],
	      	opt4:[{ 
	      		text:"Art opening",
	      		link:"theyrarelyhaveasenseoftaste"
	      	}],
	      },{
	      	showOn:"whoiscooking",
	      	text:"Who is cooking?",
	      	opt1:[{ text:"me", link:"theydontdeservewinegetoutofmyflowchart"}],
	      	opt2:[{
	      		text: "them",
	      		link: "buythebiggestbottle"
	      	}],
	      },{
	      	showOn:"doyouknowthem",
	      	text:"Do you know them?",
	      	opt1:[{
	      		text: "yes",
	      		link: "aretheywinelovers"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "bringanopenbottleandhopenooneopensit"
	      	}],
	      },{
	      	showOn:"aretheywinelovers",
	      	text:"Are they wine lovers?",
	      	opt1:[{
	      		text: "yes",
	      		link: "aretheyyourfavoritepeopleintheworld"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "theydontdeservewinegetoutofmyflowchart"
	      	}],
	      },{
	      	showOn:"aretheyyourfavoritepeopleintheworld",
	      	text:"are they your favorite people in the world?",
	      	opt1:[{
	      		text: "yes",
	      		link: "hedonisticjoyride"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "theydontdeservewinegetoutofmyflowchart"
	      	}],
	      },{
	      	showOn:"specialoccasion",
	      	text:"What is the occasion?",
	      	opt1:[{
	      		text: "with your partner?",
	      		link: "withtheparnter"
	      	}],
	      	opt2:[{
	      		text: "new years",
	      		link: "newyears",
	      	}],
	      	opt3:[{
	      		text: "blind date",
	      		link: "somethingsweet",
	      	}],
	      	opt4:[{
	      		text: "birthday",
	      		link: "somethingsweet",
	      	}],
	      },{
	      	showOn:"withtheparnter",
	      	text:"",
	      	opt1:[{
	      		text: "eloping?",
	      		link: "somethingsweet",
	      	}],
	      	opt2:[{
	      		text: "aniversary?",
	      		link: "howmanyyears",
	      	}],
	      },{
	      	showOn:"howmanyyears",
	      	text:"How many years?",
	      	opt1:[{
	      		text: "it's our first",
	      		link: "hedonisticjoyride",
	      	}],
	      	opt2:[{
	      		text: "more then one",
	      		link: "compacencyisabitch",
	      	}],
	      },{
	      	showOn:"newyears",
	      	text:"Are you alone?",
	      	opt1:[{
	      		text: "Party!",
	      		link: "cheapbubbly"
	      	}],
	      	opt2:[{
	      		text: "yep",
	      		link: "goforsomthingexotic"
	      	}],
	      },{
	      	showOn:"fancy",
	      	text:"Is it a fancy place?",
	      	opt1:[{
	      		text: "not really",
	      		link: "orderfromawindow"
	      	}],
	      	opt2:[{
	      		text: "of course",
	      		link: "canyoupronouncethemenu"
	      	}],
	      },{
	      	showOn:"orderfromawindow",
	      	text:"Is there table service?",
	      	opt1:[{
	      		text: "yes",
	      		link: "drinkabottleofsun"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "gobudgetgobulk"
	      	}],
	      },{
	      	showOn:"canyoupronouncethemenu",
	      	text:"Can you pronounce the menu?",
	      	opt1:[{
	      		text: "yes",
	      		link: "newvsoldworld"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "askfor"
	      	}],
	      },{
	      	showOn:"newvsoldworld",
	      	text:"New world vs old world",
	      	opt1:[{
	      		text: "new",
	      		link: "areyouintocults"
	      	}],
	      	opt2:[{
	      		text: "old",
	      		link: "whybuyanythingbut"
	      	}],
	      	opt3:[{
	      		text: "what?",
	      		link: "Thxforplayingnowgetoutofmyflowchart"
	      	}],
	      },{
	      	showOn:"areyouintocults",
	      	text:"Are you into cults?",
	      	opt1:[{
	      		text: "yes",
	      		link: "cultclassics"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "drinkabottleofsun"
	      	}],
	      },{
	      	showOn:"iswinethemaincourse",
	      	text:"Is wine the main course?",
	      	opt1:[{
	      		text: "yes",
	      		link: "goforsomthingexotic"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "dinnerfromamicrowave"
	      	}],
	      },{
	      	showOn:"dinnerfromamicrowave",
	      	text:"Is dinner from a microwave?",
	      	opt1:[{
	      		text: "yes",
	      		link: "gobudgetgobulk"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "cookingwithyourwine"
	      	}],
	      },{
	      	showOn:"cookingwithyourwine",
	      	text:"Cooking with your wine?",
	      	opt1:[{
	      		text: "no",
	      		link: "koolaidman"
	      	}],
	      	opt2:[{
	      		text: "yes",
	      		link: "whiteand9suchas"
	      	}],
	      },{
	      	showOn:"koolaidman",
	      	text:"Are you a kool-aid man?",
	      	opt1:[{
	      		text: "yes",
	      		link: "fruitforwardwine"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "eatdirtasachild"
	      	}],
	      },{
	      	showOn:"eatdirtasachild",
	      	text:"Eat dirt as a child?",
	      	opt1:[{
	      		text: "not me",
	      		link: "spraybutterinyourmouth"
	      	}],
	      	opt2:[{
	      		text: "yum",
	      		link: "somwthingearthy"
	      	}],
	      },{
	      	showOn:"spraybutterinyourmouth",
	      	text:"Spray butter in your mouth?",
	      	opt1:[{
	      		text: "yep",
	      		link: "pleasebringmemy"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "Thxforplayingnowgetoutofmyflowchart"
	      	}],
	      },{
	      	showOn:"alone?",
	      	text:"are you alone?",
	      	opt1:[{
	      		text: "yes",
	      		link: "recoveringfromwork"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "dinner"
	      	}],
	      },{
	      	showOn:"recoveringfromwork",
	      	text:"Recovering from work?",
	      	opt1:[{
	      		text: "yes",
	      		link: "sniffyourglassof"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "gettingdrunk"
	      	}],
	      },{
	      	showOn:"gettingdrunk",
	      	text:"getting drunk?",
	      	opt1:[{
	      		text: "yes",
	      		link: "goforhighoctane"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "feelingfancy"
	      	}],
	      },{
	      	showOn:"feelingfancy",
	      	text:"feeling fancy?",
	      	opt1:[{
	      		text: "oui.",
	      		link: "goforsomthingexotic"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "dailydrinkingwine"
	      	}],
	      },{
	      	showOn:"dailydrinkingwine",
	      	text:"Daily drinking wine?",
	      	opt1:[{
	      		text: "yes",
	      		link: "koolaidman"
	      	}],
	      	opt2:[{
	      		text: "for my collection",
	      		link: "newvsoldworld"
	      	}],
	      },{
	      	showOn:"dinner",
	      	text:"Having dinner?",
	      	opt1:[{
	      		text: "yes",
	      		link: "iswinethemaincourse"
	      	}],
	      	opt2:[{
	      		text: "no",
	      		link: "dailydrinkingwine"
	      	}],
	      },{
	      	showOn:"extendhere",
	      	text:"Who is the wine for?",
	      	opt1:[{
	      		text: "Someone else",
	      		link: "areYouAtASocial"
	      	}],
	      	opt2:[{
	      		text: "Personal use",
	      		link: "areYouAtHome"
	      	}],
	      	opt3:[{
	      		text: "brill",
	      		link: "kk"
	      	}],
	      	opt4:[{
	      		text: "brill2",
	      		link: "kk2"
	      	}],
	      }

	      ];
	    }
	  };
	});

})();  
