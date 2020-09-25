//EdgeSource Code Challenge

import { WatchData } from "./watchData.js";
import { allData } from "./allData.js";

const watch = new WatchData();

console.log("Minimum steps");
console.log(watch.minNumOfSteps(allData));

console.log("Maximum steps");
console.log(watch.maxNumOfSteps(allData));

console.log("Average Steps");
console.log(watch.avgNumOfSteps(allData));

console.log("Average Resting heart rate");
console.log(watch.avgRestingRate(allData));

console.log("Average Workout calories");
console.log(watch.avgNumOfWorkoutCalories(allData, "lifting"));
