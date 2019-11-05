"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
  } else if (!isLoginUnique(allLogins, login)) {
    console.log("Такий логін уже використовується");
  } else {
    allLogins.push(login);
    console.log("Вітаю, Ваш логін успішно додано!");
    console.log("Оновлений масив логінів: ", allLogins);
  }
};

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
