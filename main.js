let headers = document.querySelectorAll('#main>div>h1');
let welcome = document.querySelector('#banner>h1');
let links = document.querySelectorAll('a');
let socialLinks = document.querySelectorAll('.icons');

socialLinks.forEach(elem => {elem.onclick = event => {
	let l = elem.children[0].classList[1].substr(3);
	switch(l){
		case "youtube": location.href = "http://youtube.com";
			break;
		case "facebook": location.href = "http://facebook.com";
			break;
		case "reddit-alien": location.href = "http://reddit.com";
			break;
		case "twitter": location.href = "http://twitter.com";
			break;
	}
}});

for (let i=0; i<links.length; i++){
    links[i].onclick = event => {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector(links[i].hash).offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
}



window.onload = () => {
    setTimeout(() => {
        welcome.classList.add('active');
    }, 700);
}

window.onscroll = () => {

    for (let i = 0; i<headers.length; i++){

        let y = headers[i].getBoundingClientRect().y;

        if (y < window.innerHeight - 100){
            headers[i].classList.add('active');
        }else{
            headers[i].classList.remove('active');
        }
    }

}