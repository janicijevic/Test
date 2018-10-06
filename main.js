let headers = document.querySelectorAll('#main>div>h1');
let welcome = document.querySelector('#banner>h1');
let links = document.querySelectorAll('a');

for (let i=0; i<links.length; i++){
    links[i].onclick = function(event){
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector(links[i].hash).offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
}


window.onload = function(){
    setTimeout(function(){
        welcome.classList.add('active');
    }, 700);
}

window.onscroll = function(){

    for (let i = 0; i<headers.length; i++){

        let y = headers[i].getBoundingClientRect().y;

        if (y < window.innerHeight - 100){
            headers[i].classList.add('active');
        }else{
            headers[i].classList.remove('active');
        }
    }

}