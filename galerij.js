const allImages = [
    '/img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './img/11.jpg',
    './img/12.jpg',
    './img/13.jpg',
    './img/14.jpg',
    './img/15.jpg',
    './img/16.jpg',
    './img/17.jpg',
    './img/18.jpg',
    './img/19.jpg',
    './img/20.jpg'];
    /*  './splash/1.jpg',
      './splash/2.jpg',
      './splash/3.jpg',
      './splash/4.jpg',
      './splash/5.jpg',
      './splash/6.jpg',
      './splash/7.jpg',
      './splash/8.jpg',
      './splash/9.jpg',
      './splash/10.jpg',
      './splash/11.jpg',
      './splash/12.jpg',
      './splash/13.jpg',
      './splash/14.jpg',
      './splash/15.jpg',
      './splash/16.jpg',
      './splash/17.jpg',
      './splash/18.jpg',
      './splash/19.jpg',
      './splash/20.jpg'*/
const id = document.getElementById('gallery');

function fillGallery(url) {
    let gallery = document.createElement('div');
    gallery.className = 'item';

    let galleryItem = document.createElement('img');

    // Afbeeldingen vanuit directory
    galleryItem.src = 'images/' + url;
    galleryItem.alt = 'With love from Lissabon';

    // Maak tekst zichtbaar
    galleryItem.title = 'With somewhere with Luv';

    gallery.append(galleryItem);
    id.append(gallery);
}

function showRandomImages() {
    for(let counter = allImages.length; counter > 0; counter--) {
        let randomNumber = Math.floor(Math.random()*allImages.length);
        fillGallery(allImages[randomNumber] );
        allImages.splice(randomNumber, 1);
    }
}

function createJSON(){
  //todo filter tekst
let id =document.getElementById('json');

//voeg data toe
let applicationData = "application/json;charset=utf-8,"
//zorg dat het een download link wordt dat wordt omgezet naar een string
  + encodeURIComponent(JSON.stringify(objectArray));

  let json = document.createElement('a');
  json.href = 'data' + applicationData;
  json.download = 'json.json';
  json.innerHTML = 'Ready to download your json file';

  id.appendChild(json);
}

function requestListener(){
  let obj = JSON.parse(this.responseText)
  objectArray=obj.slice();
}

function createGetRequest(){
  let request = new XMLHttpRequest();
  request.addEventListener('type', requestListener);

  request.open("GET", "data/json.json", false);
  request.send();
}
showRandomImages();
