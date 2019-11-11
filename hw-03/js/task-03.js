"use strict";

const findBestEmployee = function(employees) {
  let everBestWorker;
  let maxTasksNr = 0;
  for (const key in employees) {
    if (employees[key] > maxTasksNr) {
      everBestWorker = key;
      maxTasksNr = employees[key];
    }
  }
  return everBestWorker;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);
