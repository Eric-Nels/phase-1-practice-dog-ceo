console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breeds = document.getElementById('dog-breeds');
const newImg = document.createElement('img');
newImg.setAttribute('src', imgUrl)
breeds.appendChild(newImg)