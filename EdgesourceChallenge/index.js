//EdgeSource Code Challenge
//This is where I am testing my data to verify my algorithms

import { AllRecordings } from "./allRecording.js";
import { FitnessTracker } from "./fitnesstracker.js";

const data = new FitnessTracker();
const recordings = new AllRecordings();

console.log(recordings.DummyData());
console.log(data.getMinSteps(2));
console.log(data.getMaxSteps(2));
console.log(data.getAvgSteps(2));
console.log(data.getAvgHeartRate(2));
console.log(data.getAverageCalories(1, "running"));
