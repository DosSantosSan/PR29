'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

//console.dir(box);

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//for (let i =0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//};

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');


div.classList.add('black');

//document.body.append(div);  //добавление элемента в конец

wrapper.append(div);    //добавление элемента в конец
//wrapper.appendChild(div); //добавление элемента в конец -- старый метод

//wrapper.prepend(div);     //добавление элемента в начало



//hearts[0].before(div);    //добавление элемента после
//hearts[0].after(div);     //добавление элемента до

//wrapper.insertBefore(div, hearts[0]); //добавление элемента после -- старый метод



//circles[0].remove();      //удалить элемент

//wrapper.removeChild(hearts[1]); //удалить элемент -- старый метод



//hearts[0].replaceWith(circles[0]);      //замена одного элемента другим

//wrapper.replaceChild(circles[0], hearts[0]);    //замена одного элемента другим -- старый метод


// РЕДАКТИРОВАНИЕ ЭЛЕМЕНТА

//div.innerHTML = 'Hello world';

div.innerHTML = '<h1>Hello world</h1>';

//div.textContent = 'hello';

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');