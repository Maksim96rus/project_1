"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмтреле?', '');

const personalMovievDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

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

if (personalMovievDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovievDB.count >= 10 && personalMovievDB.count < 30){
    console.log('Вы классичесский зритель'); 
} else if (personalMovievDB.count >= 30){
    console.log('Вы киноман'); 
} else {
    console.log('Произошла ошибка');
}
    


console.log(personalMovievDB);

