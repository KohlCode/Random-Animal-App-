document.querySelector('button').addEventListener('click', getAnimal)

function getAnimal(){
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    document.querySelector('h1').innerText = data.name
    document.querySelector('img').src = data["image_link"]
    document.querySelector('h3').innerText = data["latin_name"]
    document.querySelector('#location').innerText = `Found in: ${data["geo_range"]}`
    document.querySelector('#habitat').innerText = `Habitat: ${data.habitat}`
    document.querySelector('#diet').innerText = `Diet: ${data.diet}`
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

