"use sctrict";

/* const result = confirm("Are you here?");
console.log(result) */

/* const answer = prompt("Ты в порядке?", "Нет");
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

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?",""),
          b = prompt("Насколько оцените его?","");

    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');        
    } else{
        console.log('Вы ошиблись');
        i--;}
}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}
else{
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);
/* if(num < 49) {
    console.log('Error');
}
else if(num > 100) {
    console.log('Many');
}
else {
    console.log('NICE!!!');
}

(num === 50) ? console.log('Ok!') : console.log(Error); */
/* 
const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Right!');
        break;
    default:
        console.log('Not this time');
        break;
}
 */