"use strict";

let totalPice;
const credits = 23580;
const pricePerDroid = 3000;

let droidsNumber = prompt("Сколько дроидов Вы хотите приобрести?", "");

if (!Number(droidsNumber) || droidsNumber === null) {
  console.log("Отменено пользователем!");
} else {
  totalPice = Number(droidsNumber) * pricePerDroid;
  if (totalPice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${Number(droidsNumber)} дроидов, на счету осталось ${credits -
        totalPice} кредитов.`
    );
  }
}
