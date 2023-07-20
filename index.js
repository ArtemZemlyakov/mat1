const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';
const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();
const message = (existingUserLogin, existingUserPassword ) === ('the_best_user', '12345678')
?'Добро пожаловать the_best_user'
: 'Логин и (или) Пароль введены неверно!';
alert ( message);

