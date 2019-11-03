"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let bool = false;
  const logLength = login.length;
  if (logLength >= 4 && logLength <= 16) {
    bool = true;
  }
  return bool;
};

const isLoginUnique = function(allLogins, login) {
  let bool = true;
  for (const item of allLogins) {
    if (item === login) {
      bool = false;
      break;
    }
  }
  return bool;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
  } else if (isLoginUnique(allLogins, login) === false) {
    console.log("Такий логін уже використовується");
  } else {
    allLogins.push(login);
    console.log("Вітаю, Ваш логін успішно додано!");
    console.log('Оновлений масив логінів: ', allLogins);
  }
};


addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'