let objectArray = [];

// ImageObject functie aanmaken
function ImageObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
    // console.log(name);
}
//fotoLocaties
function createObjects() {
    for (let counter = 0; counter < allImages.length; counter++) {
        objectArray.push(new ImageObject(allImages[counter], counter));
    }
}

function fillGallery(obj) {
    console.log(obj);

    let gallery = document.createElement('div');
    gallery.className = 'item';

    let galleryItem = document.createElement('img');

    // Afbeeldingen vanuit directory
    galleryItem.src = 'images/' + obj.name;
    galleryItem.alt = obj.description;

    // Maak tekst zichtbaar
    galleryItem.title = obj.description;

    gallery.append(galleryItem);
    id.append(gallery);
}

function showRandomImages() {
    for(let counter = objectArray.length; counter > 0; counter--) {
        let randomNumber = Math.floor(Math.random()*objectArray.length);
        // fillGallery(allImages[randomNumber] );
        fillGallery(objectArray[randomNumber] );
        objectArray.splice(randomNumber, 1);
    }
}




function setStorage(){
  let storage = prompt('Achtergrond kleur?', 'green');
  window.localStorage.setItem("background", storage);
}

function getStorage(){
  return window.localStorage.getItem('background');
}

function useStorage(){
  document.body.style.backgroundColor= getStorage();
}


createObjects();
createJSON();
showRandomImages();
