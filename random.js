const _ = require('lodash');

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doneTasks = {
  Allahverdi: [4],
  Eli: [4],
  Emin: [4],
  Fatime: [4],
  Isa: [4, 6],
  Kenan: [4],
  Malik: [4, 5],
  Mehemmed: [4],
  MehemmedEli: [4],
  Nureddin: [4],
  Revan: [4],
  Turan: [4],
  Terlan: [4, 1],
};

const newTasks = {
  // Allahverdi: [],
  // Eli: [],
  // Emin: [],
  // Fatime: [],
  // Isa: [],
  // Kenan: [],
  // Malik: [],
  // Mehemmed: [],
  // MehemmedEli: [],
  // Nureddin: [],
  // Revan: [],
  // Turan: [],
  // Terlan: [],
};

let usedTasks = [];

for (const person in newTasks) {
  let excludedTasks = _.concat(doneTasks[person], usedTasks);
  let possibleTasks = _.difference(tasks, excludedTasks);
  let selectedTask = possibleTasks[_.random(0, possibleTasks.length - 1)];
  usedTasks.push(selectedTask);
  console.log(person, selectedTask);
}

// 07.02.2024
// Allahverdi 4
// Eli 8
// Emin 11
// Fatime 12
// Isa 6
// Kenan 2
// Malik 5
// Mehemmed 3
// MehemmedEli 9
// Nureddin 10
// Revan 7
// Turan 4
// Terlan 1
