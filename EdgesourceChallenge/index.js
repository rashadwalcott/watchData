//EdgeSource Code Challenge

import { WatchData } from "./watchData.js";
import { Steps } from "./steps.js";
import { allData } from "./allData.js";
import { newData } from "./allData.js";

const watch = new WatchData(newData);
const steps = new Steps(newData);

// console.log("Minimum steps");
// console.log(watch.minNumOfSteps(allData));

// console.log("Maximum steps");
// console.log(watch.maxNumOfSteps(allData));

// console.log("Average Steps");
// console.log(watch.avgNumOfSteps(allData));

// console.log("Average Resting heart rate");
// console.log(watch.avgRestingRate(allData));

// console.log("Average Workout calories");
// console.log(watch.avgNumOfWorkoutCalories(allData, "lifting"));

//NEW RETRY CODE
// console.log(watch);
// console.log(watch.getMinSteps("09 19 2020", "09 21 2020"));
// console.log(watch.getMaxSteps("09 19 2020", "09 22 2020"));
// console.log(watch.getAvgSteps("09 17 2020", "09 18 2020"));
// console.log(watch.getAvgRestingHeartRate("09 18 2020", "09 19 2020"));
console.log(watch.getavgWorkoutCal());

// console.log(newData);
// console.log(steps.getMinSteps("09 19 2020", "09 21 2020"));

///LOOOOKKKKK AT THE MIN< MAX AND AVG CODE FOR IF A DATE THAT THERE IS NO DATA FOR IS ENTERED
