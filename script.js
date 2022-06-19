"use sctrict";

/* const result = confirm("Are you here?");
console.log(result) */

/* const answer = prompt("Ты долбаеб?", "Нет");
console.log(typeof(answer));  */

/* const answers = [];
 */
/* answers[0] = prompt('Как тебя зовут?','');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько тебе лет?',''); */

/* console.log(typeof(answers));
 */

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("Насколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("Насколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);