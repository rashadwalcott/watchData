//This is the class that has the algorithms

import { AllRecordings } from "./allRecording.js";
export class FitnessTracker {
  getMinSteps(nDays) {
    if (nDays <= 1) return `You need to enter more than one day`;
    let data = new AllRecordings();
    let alldata = data.DummyData();
    let arr = [];

    for (let i = 0; i < nDays; i++) {
      arr.push(alldata[i].stepRecording.additionalSteps);
    }

    return `Your minimum steps were ${Math.min(...arr)} in ${nDays} days`;
  }

  getMaxSteps(nDays) {
    if (nDays <= 1) return `You need to enter more than one day`;
    let data = new AllRecordings();
    let alldata = data.DummyData();
    let arr = [];

    for (let i = 0; i < nDays; i++) {
      arr.push(alldata[i].stepRecording.additionalSteps);
    }

    return `Your maximum steps were ${Math.max(...arr)} in ${nDays} days`;
  }

  getAvgSteps(nDays) {
    if (nDays <= 1) return `You need to enter more than one day`;
    let data = new AllRecordings();
    let alldata = data.DummyData();
    let avgSteps = 0;
    let count = 0;

    for (let i = 0; i < nDays; i++) {
      avgSteps += alldata[i].stepRecording.additionalSteps;
      count++;
    }

    return `Your average steps were ${Math.floor(
      avgSteps / count
    )} in ${nDays} days`;
  }

  getAvgHeartRate(nDays) {
    if (nDays <= 0) return `You need to enter more than one day`;
    let data = new AllRecordings();
    let alldata = data.DummyData();
    let avgHeartRate = 0;
    let count = 0;

    for (let i = 0; i < nDays; i++) {
      avgHeartRate += alldata[i].heartData.heartRate;
      count++;
    }

    return `Your average heart rate was ${Math.floor(
      avgHeartRate / count
    )} in ${nDays} days`;
  }

  getAverageCalories(nDays, type) {
    if (nDays <= 0) return `You need to enter at least 1 day`;
    let data = new AllRecordings();
    let alldata = data.DummyData();

    let count = 0;
    let avgCalories = 0;
    for (let i = 0; i < nDays; i++) {
      if (alldata[i].workoutDetails.type === type) {
        avgCalories += alldata[i].workoutDetails.additionalCaloriesBurned;
        count++;
      }
      if (count === 0) {
        return `You have not done any ${type} in ${nDays} days`;
      }
      return `Your average calories are ${
        avgCalories / count
      } in ${nDays} days`;
    }
  }
}
