const numberOfFilms = prompt('Сколько фильмов вы уже посмтреле?', '');

const personalMovievDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovievDB.movies[a] = b;
personalMovievDB.movies[c] = d;

console.log(personalMovievDB);