var p1 = document.getElementById('p-visible');
var a = document.getElementById('a');
var nameJs = document.getElementById('name-js');
var nameJunior = document.getElementById('name-junior');
var img = document.getElementById('img-visible');
var imgVisible = document.createElement('img');
imgVisible.setAttribute('src','images/image-john.jpg')

function next() {
    p1.innerText = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;
    nameJs.innerText = 'John Tarkpor';
    nameJunior.innerHTML = 'Junior Front-end Developer';
    img.src = imgVisible.src;
}