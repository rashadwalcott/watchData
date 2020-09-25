//EdgeSource Code Challnge

export class WatchData {
  constructor() {}

  minNumOfSteps(nDays) {
    if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
    let minSteps = [];
    for (let data in nDays) {
      if (nDays[data].additionalSteps >= 0)
        minSteps.push(nDays[data].additionalSteps);
    }
    return Math.min(...minSteps);
  }

  maxNumOfSteps(nDays) {
    if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
    let maxSteps = [];
    for (let data in nDays) {
      if (nDays[data].additionalSteps >= 0)
        maxSteps.push(nDays[data].additionalSteps);
    }

    return Math.max(...maxSteps);
  }

  avgNumOfSteps(nDays) {
    if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
    let stepArray = [];
    for (let data in nDays) {
      if (nDays[data].additionalSteps >= 0);
      stepArray.push(nDays[data].additionalSteps);
    }

    const avgSteps = stepArray.reduce((a, b) => a + b, 0) / stepArray.length;
    return Math.floor(avgSteps);
  }

  avgRestingRate(nDays) {
    if (nDays.length < 0)
      throw new Error("There is no heart rate data availble");
    let heartArr = [];
    for (let data in nDays) {
      heartArr.push(nDays[data].heartRate);
    }

    const avgHeartRate = heartArr.reduce((a, b) => a + b, 0) / heartArr.length;
    return Math.floor(avgHeartRate);
  }

  avgNumOfWorkoutCalories(nDays, workoutType) {
    if (nDays.length < 0) throw new Error("You have no workout data available");
    let workoutArr = [];
    for (let data in nDays) {
      if (nDays[data].workouts.workoutType === workoutType) {
        if (nDays[data].workouts.additionalCaloriesBurned >= 0)
          workoutArr.push(nDays[data].workouts.additionalCaloriesBurned);
      }
    }
    const avgCaloriesBurned =
      workoutArr.reduce((a, b) => a + b, 0) / workoutArr.length;
    return Math.floor(avgCaloriesBurned);
  }
}
