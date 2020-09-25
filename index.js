//EdgeSource Code Challenge

import { WatchData } from "./watchData.js";
import { allData } from "./allData.js";

const watch = new WatchData();
console.log("average steps");
watch.avgNumOfSteps(allData);
console.log("min steps");
watch.minNumOfSteps(allData);
console.log("max steps");
watch.maxNumOfSteps(allData);
console.log("avg workout calories");
watch.avgNumOfWorkoutCalories(allData, "lifting");
