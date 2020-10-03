//EdgeSource Code Challenge

import { WatchData } from "./watchData.js";
import { FitnessTracker } from "./fitnesstracker.js";
import { Workout } from "./workout.js";
import { Steps } from "./steps.js";
import { newData } from "./allData.js";
import { WorkoutDetails } from "./workoutDetails.js";
import { DailyData } from "./dailydata.js";

const watch = new WatchData(newData);
const steps = new Steps(newData);

const fitnessTracker = new FitnessTracker();

const stepData = new Steps();
const datenow = new DailyData();

const dailyheartrate = [];
const dailystepRate = [];

for (let i = 0; i <= 10; i++) {
  dailyheartrate.push(
    fitnessTracker.heartRateRecording(`5:${i}`, Math.ceil(Math.random() * i))
  );
}
const workoutDetails = new WorkoutDetails("cardio", "5;10", "12345", "6:10");
console.log(workoutDetails.getdetails());
console.log(dailyheartrate);

console.log(datenow.checkDate("02/09/2020"));
console.log(datenow.dateNow());
// console.log(workout);

//   "fitness tracker heart rate",
//   fitnessTracker.heartRateRecording("5:10", "65")
// );

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
// console.log(watch.getAvgSteps("09 19 2020", "09 21 2020"));
// console.log(watch.getAvgRestingHeartRate("09 18 2020", "09 19 2020"));

// console.log(newData);
// console.log(steps.getMinSteps("09 19 2020", "09 21 2020"));

///LOOOOKKKKK AT THE MIN< MAX AND AVG CODE FOR IF A DATE THAT THERE IS NO DATA FOR IS ENTERED
