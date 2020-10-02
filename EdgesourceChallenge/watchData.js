//EdgeSource Code Challnge

export class WatchData {
  constructor(stepData) {
    this.stepData = stepData;
  }

  getMinSteps(startDate, endDate) {
    const stepData = this.stepData.logsteps;
    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);
    const filteredSteps = [];

    let dates = [];

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
          filteredSteps.push(stepData[step]);
        }
      }
    }
    //
    //This giving the dates grouped together with sum of the steps
    let result = [];
    filteredSteps.reduce(function (groups, value) {
      let date = value.time.toDateString();

      if (!groups[date]) {
        groups[date] = { date, totalSteps: 0 };
        result.push(groups[date]);
      }
      groups[date].totalSteps += value.additionalSteps;
      return groups;
    }, {});
    // console.log(result);

    function getMin() {
      if (result.length > 1) {
        let min = result.reduce(
          (min, steps) => (steps.totalSteps < min ? steps.totalSteps : min),
          result[0].totalSteps
        );
        return `Minimum was ${min} steps for the selected time period`;
      } else if (result.length === 1)
        return `You need to compare against more than one day`;
      else return ` You do not have any data on the selected days`;
    }

    return getMin();
  }

  //Come back and figure out if I need a days total
  getMaxSteps(startDate, endDate) {
    const stepData = this.stepData.logsteps;
    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);
    const filteredSteps = [];

    let dates = [];

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
          filteredSteps.push(stepData[step]);
        }
      }
    }
    //
    //This giving the dates grouped together with sum of the steps
    let result = [];
    filteredSteps.reduce(function (groups, value) {
      let date = value.time.toDateString();

      if (!groups[date]) {
        groups[date] = { date, totalSteps: 0 };
        result.push(groups[date]);
      }
      groups[date].totalSteps += value.additionalSteps;
      return groups;
    }, {});
    console.log(result);

    function getMax() {
      if (result.length > 1) {
        let max = result.reduce(
          (max, steps) => (steps.totalSteps > max ? steps.totalSteps : max),
          result[0].totalSteps
        );
        return `Maximum was ${max} steps for the selected time period`;
      } else if (result.length === 1)
        return `You need to compare against more than one day`;
      else return ` You do not have any data on the selected days`;
    }
    return getMax();
  }

  getAvgSteps(startDate, endDate) {
    const stepData = this.stepData.logsteps;
    const formatStartDate = new Date(startDate);
    const formatEndDate = new Date(endDate);
    const filteredSteps = [];

    let dates = [];

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
          filteredSteps.push(stepData[step]);
        }
      }
    }
    //
    //This giving the dates grouped together with sum of the steps
    let result = [];
    // console.log(filteredSteps);
    filteredSteps.reduce(function (groups, value) {
      let date = value.time.toDateString();

      if (!groups[date]) {
        groups[date] = { date, totalSteps: 0 };
        result.push(groups[date]);
      }
      groups[date].totalSteps += value.additionalSteps;

      return groups;
    }, {});
    // console.log(result);

    function getAvg() {
      if (result.length > 1) {
        let total = 0;

        for (let i = 0; i < result.length; i++) {
          total += result[i].avgSteps;
        }
        return `Average steps is ${Math.floor(
          total / result.length
        )} for selected time period`;
      } else if (result.length == 1)
        return `You need to compare against more than one day`;
      else return ` You do not have any data on the selected days`;
    }

    return getAvg();
  }

  getAvgRestingHeartRate(startDate, endDate) {
    const heartData = this.stepData.logheart;
    const formatStartDate = new Date(startDate);
    const formatEndDate = endDate ? new Date(endDate) : formatStartDate;
    const filteredHeartData = [];

    let dates = [];

    //Making sure the date parameters are correct
    if (formatEndDate < formatStartDate)
      throw new Error("Your ending date is less than your starting date");

    while (formatStartDate < formatEndDate) {
      dates = [...dates, new Date(formatStartDate)];
      formatStartDate.setDate(formatStartDate.getDate() + 1);
      dates = [...dates, formatEndDate];
    }
    if (formatStartDate === formatEndDate) {
      dates = [...dates, new Date(formatStartDate)];
    }

    // console.log(dates);
    if (dates.length <= 0) throw new Error("You must enter at least one day");

    //This is bringing me back data from each date in the range
    for (let heart in heartData) {
      const heartDates = heartData[heart].time.toDateString();

      for (let date of dates) {
        if (heartDates === date.toDateString()) {
          filteredHeartData.push(heartData[heart]);
        }
      }
    }
    //THis is giving the dates grouped together with the total and the count for the heart array
    let result = [];
    filteredHeartData.reduce(function (groups, value) {
      let date = value.time.toDateString();

      if (!groups[date]) {
        groups[date] = { date, totalHeartRate: 0, count: 0, avgHeartRate: 0 };
        result.push(groups[date]);
      }
      // console.log(groups[date]);
      groups[date].totalHeartRate += value.heartRate;
      groups[date].count += 1;
      groups[date].avgHeartRate =
        groups[date].totalHeartRate / groups[date].count;

      return groups;
    }, {});

    // console.log(result);

    function getAvg() {
      if (result.length > 1) {
        let total = 0;
        for (let i = 0; i < result.length; i++) {
          total += result[i].avgHeartRate;
        }
        return `Average heart rate is ${Math.floor(
          total / result.length
        )} for selected time period`;
        // return Math.floor(
        //   result.reduce((sum, heart) => sum.avgHeartRate + heart.avgHeartRate) /
        //     result.length
        // );
      } else if (result.length === 1) {
        for (let heart in result) {
          return `Average heart rate is ${Math.floor(
            result[heart].avgHeartRate
          )} for selected time period`;
        }
      } else {
        return `You do not have any data on the selected days`;
      }
    }
    return getAvg();
    // console.log(result);
  }

  getavgWorkoutCal() {
    console.log("Workout Calories");
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
