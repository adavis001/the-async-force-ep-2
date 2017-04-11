/*jshint esversion:6*/
const reqButton = document.querySelector('#requestResourceButton');
const speciesLink = null;

console.log(reqButton);



reqButton.addEventListener('click', function(event){
	// console.log(resourceType.value);
	// console.log(resourceId.value);
	// console.log('http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');

	const oneReq = new XMLHttpRequest();


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
		twoReq.open('GET', gender);
		// request the species
    	const speciesReq = new XMLHttpRequest();
    	speciesReq.addEventListener('load', speciesRequire);
    	speciesReq.open('GET', requestData.species);
    	speciesReq.send();

    	function speciesRequire() {
      	const requestSpecies = JSON.parse(this.responseText);
      	three.innerHTML = requestSpecies.name;

    	}
	}
	
});	