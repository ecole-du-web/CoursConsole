const divChat = document.querySelector('.photoFetch');


document.querySelector('.fetch').addEventListener('click', () => {



    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => divChat.style.backgroundImage = `url('${data[0].url}')`)
    


})    
