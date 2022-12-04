"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмтреле?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмтреле?', '');
    }

}

start();

const personalMovievDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms() {
    for (let i=0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovievDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    } 

}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovievDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovievDB.count >= 10 && personalMovievDB.count < 30){
        console.log('Вы классичесский зритель'); 
    } else if (personalMovievDB.count >= 30){
        console.log('Вы киноман'); 
    } else {
        console.log('Произошла ошибка');
    } 
}

// detectPersonalLevel();

function snowMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovievDB);
    }
}
snowMyDB(personalMovievDB.privat);


function writeYourGenre() {
    for (let i=1; i <= 3; i++) {
        personalMovievDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);

}
}
writeYourGenre();


// console.log(personalMovievDB);

