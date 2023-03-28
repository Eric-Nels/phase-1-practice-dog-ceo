console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


document.addEventListener('DOMContentLoaded', () => {
    const dogImgs = document.getElementById('dog-image-container');
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(url =>{
                const img = document.createElement('img');
                img.src = url;
                dogImgs.appendChild(img);    
        })
    })
    .catch(error => console.error(error));
});

document.addEventListener('DOMContentLoaded', () => {
    const dogBreeds = document.getElementById("dog-breeds");
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (const obj in data.message) {
                const li = document.createElement('li');
                li.textContent = obj;
                dogBreeds.appendChild(li);
                }       
            })
    .catch(error => console.error(error));
}); 

const listItem = document.getElementsByTagName('li')
const listText = listItem.textContent
document.addEventListener('DOMContentLoaded', () =>{
    for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', event => {
        event.preventDefault()
        event.target.listText
        listItem.style.color = 'red';
    });
    }    
}) 





