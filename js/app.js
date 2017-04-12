/*jshint esversion:6*/
const reqButton = document.querySelector('#requestResourceButton');
const speciesLink = null;

console.log(reqButton);



reqButton.addEventListener('click', function(event){

	four.innerHTML = null;
	const oneReq = new XMLHttpRequest();

	if(resourceType.value === "people"){
		oneReq.addEventListener('load', reqPerson);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();
			function reqPerson() {
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
    			speciesReq.send();
    			function speciesRequire() {
      			const requestSpecies = JSON.parse(this.responseText);
      			three.innerHTML = requestSpecies.name;
    		}
		}	
	}
	if(resourceType.value === "planets"){
		oneReq.addEventListener('load', reqPlanet);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();

		function reqPlanet() {
			const requestData = JSON.parse(this.responseText);
			const name = requestData.name;
			one.innerHTML = 'Name: ' + name;		
			const terrain = requestData.terrain;
			two.innerHTML = `terrain: ${terrain}`;
			const population = requestData.population;
			three.innerHTML = `population: ${population}`;
			const planetFilms = requestData.films;
			//four.innerHTML = planetFilms;


			for(let i =0; i<requestData.films.length; i++){
				const reqFilm = new XMLHttpRequest();
				reqFilm.addEventListener('load', filmRequire);
				reqFilm.open('GET', requestData.films[i]);
				reqFilm.send();

			}
				function filmRequire(){
					const filmData = JSON.parse(this.responseText);
    				let newList = document.createElement('div');
    				const planetName = filmData.title;
    				newList.innerHTML = planetName;
    				four.appendChild(newList);
    				console.log(filmData.title);
				}
		}
	}
	if(resourceType.value === "starships"){
		oneReq.addEventListener('load', reqStarships);
		oneReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
		oneReq.send();

		function reqStarships() {
			const requestShips = JSON.parse(this.responseText);
			const shipName = requestShips.name;
			one.innerHTML = `name: ${shipName}`;
			const shipManufac = requestShips.manufacturer;
			two.innerHTML = `manufacturer: ${shipManufac}`;
			const shipClass = requestShips.starship_class;
			three.innerHTML = `ship class: ${shipClass}`;
		}
	}
}

);	