var neighborhoodList = [
	"Albany Park",
	"Archer Heights",
	"Armour Square",
	"Ashburn",
	"Auburn Gresham",
	"Austin",
	"Avalon Park",
	"Avondale",
	"Belmont Cragin",
	"Beverly",
	"Bridgeport",
	"Brighton Park",
	"Burnside",
	"Calumet Heights",
	"Chatham",
	"Chicago Lawn",
	"Clearing",
	"Douglas",
	"Dunning",
	"East Garfield Park",
	"East Side",
	"Edgewater",
	"Edison Park",
	"Englewood",
	"Forest Glen",
	"Fuller Park",
	"Gage Park",
	"Garfield Ridge",
	"Grand Boulevard",
	"Greater Grand Crossing",
	"Hegewisch",
	"Hermosa",
	"Humboldt Park",
	"Hyde Park",
	"Irving Park",
	"Jefferson Park",
	"Kenwood",
	"Lakeview",
	"Lincoln Park",
	"Lincoln Square",
	"Logan Square",
	"Loop",
	"Lower West Side",
	"Near North Side",
	"Near South Side",
	"Near West Side",
	"New City",
	"North Center",
	"North Lawndale",
	"North Park",
	"Norwood Park",
	"McKinley Park",
	"Montclare",
	"Mount Greenwood",
	"Morgan Park",
	"Oakland",
	"O'Hare",
	"Portage Park",
	"Pullman",
	"Riverdale",
	"Rogers Park",
	"Roseland",
	"South Chicago",
	"South Deering",
	"South Lawndale",
	"South Shore",
	"Washington Heights",
	"Washington Park",
	"West Elsdon",
	"West Englewood",
	"West Garfield Park",
	"West Lawn",
	"West Pullman",
	"West Ridge",
	"West Town",
	"Woodlawn",
	"Uptown"
];

var allFilters = [
	"music",
	"history",
]
    $("#add-topic").on("click", function(event) {

    	if ($("#topic-input").val() !=="") {
          
	        event.preventDefault();
		    // This line grabs the input from the textbox
		    var filter = $("#topic-input").val().trim();

		    // Adding movie from the textbox to our array
		    allFilters.push(filter);
		    console.log(allFilters)

		    $("#topic-input").val("")
		    
 		}
    });	


function createButtons (){

    $("#btnHolder").empty();

  	// Looping through the GIF topics
  	for (var i=0; i<topics.length; i++) {

  		// Using jQuery to create a button for string in the "topics" array
  		var $gifBtn = $('<button>');
  		// Adding class "topic" to each button
  		$gifBtn.attr("class", "topic btn btn-primary");
  		// Adding attribute to distinguish one button from another
  		$gifBtn.attr("topic-name", topics[i])
  		// Putting "topic[i]" text inside the generated button
  		$gifBtn.text(topics[i])
  		// Add the button to the page within the "btnHolder"
  		$("#btnHolder").append($gifBtn);

  		// Debugging
  		console.log($gifBtn, "gif button");

  	};
  };



for (i=0; i<neighborhoodList.length; i++) {
	var neighName = $("<button>");
	neighName.attr("href", "#");
	neighName.attr("value", neighborhoodList[i])
	neighName.attr("class", "neighborhood btn btn-primary")
	neighName.prepend(neighborhoodList[i]);

	$("#neighborhoods").append(neighName);
}
	

function dropdownList(){

	document.getElementById("neighborhoods").classList.toggle("show")
};

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("neigh-list");
		var i;
		for (i=0; i<neighborhoods.length; i++) {
			var openDropdown = neighborhoods[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
				
			}
		} 
	}
}
