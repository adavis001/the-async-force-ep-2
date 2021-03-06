/*jshint esversion:6*/
const reqButton = document.querySelector('#requestResourceButton');
//this function finds requested data for a person and appends data to document
function reqPerson() {
		if(this.status === 404){
		throwError();
	}
	const requestData = JSON.parse(this.responseText);
	const name = requestData.name;
	one.innerHTML = 'Name: ' + name;		
	const gender = requestData.gender;
	two.innerHTML = `Gender: ${gender}`;
	const twoReq = new XMLHttpRequest();
	twoReq.open('GET', gender);
	twoReq.addEventListener('load', reqPerson);
    const speciesReq = new XMLHttpRequest();
    speciesReq.addEventListener('load', speciesRequire);
    speciesReq.open('GET', requestData.species);
	if(this.status === 404){
		throwError();
	}
    speciesReq.send();
    
    	function speciesRequire() {
      		const requestSpecies = JSON.parse(this.responseText);
      		three.innerHTML = requestSpecies.name;
   }
}	
//this function finds requested data for a planet and appends fata to document
function reqPlanet() {
		if(this.status === 404){
		throwError();
	}
	const requestData = JSON.parse(this.responseText);
	const name = requestData.name;
	one.innerHTML = 'Name: ' + name;		
	const terrain = requestData.terrain;
	two.innerHTML = `terrain: ${terrain}`;
	const population = requestData.population;
	three.innerHTML = `population: ${population}`;
	const planetFilms = requestData.films;
		function filmRequire(){
			const filmData = JSON.parse(this.responseText);
    		let newList = document.createElement('li');
    		const planetName = filmData.title;
    		newList.innerHTML = planetName;
    		four.appendChild(newList);
    		console.log(filmData.title);
		}
			for(let i =0; i<requestData.films.length; i++){
				const reqFilm = new XMLHttpRequest();
				reqFilm.addEventListener('load', filmRequire);
				reqFilm.open('GET', requestData.films[i]);
				reqFilm.send();
			}
}
//this function finds requested data for a starship and appends fata to document
function reqStarships() {
		if(this.status === 404){
		throwError();
	}
	const requestShips = JSON.parse(this.responseText);
	const shipName = requestShips.name;
	one.innerHTML = `name: ${shipName}`;
	const shipManufac = requestShips.manufacturer;
	two.innerHTML = `manufacturer: ${shipManufac}`;
	const shipClass = requestShips.starship_class;
	three.innerHTML = `ship class: ${shipClass}`;
			function filmRequire(){
			const filmData = JSON.parse(this.responseText);
    		let newList = document.createElement('li');
    		const planetName = filmData.title;
    		newList.innerHTML = planetName;
    		four.appendChild(newList);
    		console.log(filmData.title);
		}
			for(let i =0; i<requestShips.films.length; i++){
				const reqFilm = new XMLHttpRequest();
				reqFilm.addEventListener('load', filmRequire);
				reqFilm.open('GET', requestShips.films[i]);
				reqFilm.send();
			}
}

function throwError(){
  const display = document.querySelector("#contentContainer");
  const errorMessage = document.createElement('h2');
  errorMessage.id = "eerror";
  errorMessage.style.backgroundColor = "pink";
  errorMessage.innerHTML = `Error 404 File not found`;
  display.appendChild(errorMessage);
 }

reqButton.addEventListener('click', function(event){
	//clears fourth div before running function.  Fourth div only needed for planet requests.
	four.innerHTML = null;
	contentContainer.innerHTML = null;
	const oneReq = new XMLHttpRequest();
	//if requesting people, run reqPerson function
	if(resourceType.value === "people"){
		oneReq.addEventListener('load', reqPerson);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();
		reqPerson();

	}
	//if requesting planets, run reqPlanet function
	if(resourceType.value === "planets"){
		oneReq.addEventListener('load', reqPlanet);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();
		reqPlanet();
	}
	//if requesting starships, run reqStarships function
	if(resourceType.value === "starships"){
		oneReq.addEventListener('load', reqStarships);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();
		reqStarships();
	}
}

);	