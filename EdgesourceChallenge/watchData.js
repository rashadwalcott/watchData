//EdgeSource Code Challnge

export class WatchData {
  constructor(stepData) {
    this.stepData = stepData;
  }
  //Come back and calculate for the whole day
  getMinSteps(startDate, endDate) {
    const stepData = this.stepData.logsteps;

    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);

    let dates = [];
    let stepCount = [];

    //Making sure the date parameters are correct
    if (formatEndDate < formatStartDate)
      throw new Error("Your ending date is less than your starting date");

    while (formatStartDate < formatEndDate) {
      dates = [...dates, new Date(formatStartDate)];
      formatStartDate.setDate(formatStartDate.getDate() + 1);
    }
    dates = [...dates, formatEndDate];
    // console.log(dates);
    if (dates.length <= 1) throw new Error("You must enter more than one day");
    // This is bringing me back data from a single Date
    for (let step in stepData) {
      const stepDates = stepData[step].time.toDateString();
      for (let date of dates) {
        // console.log(dates);
        if (stepDates === date.toDateString()) {
          // console.log(stepData[step]);
          //   stepCount.push(stepData[step].additionalSteps);
          //   // console.log(stepCount);
        }
      }
    }
    // return ` Minimum steps were ${Math.min(...stepCount)}`;
  }
  //Come back and figure out if I need a days total
  getMaxSteps(startDate, endDate) {
    const stepData = this.stepData.logsteps;

    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);

    let dates = [];
    let stepCount = [];

    //Making sure the date parameters are correct
    if (formatEndDate < formatStartDate)
      throw new Error("Your ending date is less than your starting date");

    while (formatStartDate < formatEndDate) {
      dates = [...dates, new Date(formatStartDate)];
      formatStartDate.setDate(formatStartDate.getDate() + 1);
    }
    dates = [...dates, formatEndDate];
    if (dates.length <= 1) throw new Error("You must enter more than one day");
    // This is bringing me back data from a single Date
    for (let step in stepData) {
      const stepDates = stepData[step].time.toDateString();
      // console.log(stepDates);
      for (let date of dates) {
        // console.log(date);
        if (stepDates === date.toDateString()) {
          stepCount.push(stepData[step].additionalSteps);
          // console.log(stepCount);
        }
      }
    }
    return ` Maximum steps were ${Math.max(...stepCount)}`;
  }

  // minNumOfSteps(nDays) {
  //   if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
  //   let minSteps = [];
  //   for (let data in nDays) {
  //     if (nDays[data].additionalSteps >= 0)
  //       minSteps.push(nDays[data].additionalSteps);
  //   }
  //   return Math.min(...minSteps);
  // }

  // maxNumOfSteps(nDays) {
  //   if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
  //   let maxSteps = [];
  //   for (let data in nDays) {
  //     if (nDays[data].additionalSteps >= 0)
  //       maxSteps.push(nDays[data].additionalSteps);
  //   }

  //   return Math.max(...maxSteps);
  // }

  // avgNumOfSteps(nDays) {
  //   if (nDays.length <= 1) throw new Error("You worked out less than 1 day");
  //   let stepArray = [];
  //   for (let data in nDays) {
  //     if (nDays[data].additionalSteps >= 0);
  //     stepArray.push(nDays[data].additionalSteps);
  //   }

  //   const avgSteps = stepArray.reduce((a, b) => a + b, 0) / stepArray.length;
  //   return Math.floor(avgSteps);
  // }

  // avgRestingRate(nDays) {
  //   if (nDays.length < 0)
  //     throw new Error("There is no heart rate data availble");
  //   let heartArr = [];
  //   for (let data in nDays) {
  //     heartArr.push(nDays[data].heartRate);
  //   }

  //   const avgHeartRate = heartArr.reduce((a, b) => a + b, 0) / heartArr.length;
  //   return Math.floor(avgHeartRate);
  // }

  // avgNumOfWorkoutCalories(nDays, workoutType) {
  //   if (nDays.length < 0) throw new Error("You have no workout data available");
  //   let workoutArr = [];
  //   for (let data in nDays) {
  //     if (nDays[data].workouts.workoutType === workoutType) {
  //       if (nDays[data].workouts.additionalCaloriesBurned >= 0)
  //         workoutArr.push(nDays[data].workouts.additionalCaloriesBurned);
  //     }
  //   }
  //   const avgCaloriesBurned =
  //     workoutArr.reduce((a, b) => a + b, 0) / workoutArr.length;
  //   return Math.floor(avgCaloriesBurned);
  // }
}
