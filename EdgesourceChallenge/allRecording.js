//This is where all the data are coming together

import { DailyData } from "./data/date/dailydata.js";
import { RecordHeartData } from "./data/heart/recordHeartRate.js";
import { Steps } from "./data/steps/steps.js";
import { WorkoutDetails } from "./data/workout/workoutDetails.js";
export class AllRecordings {
  workoutDetails(type, startTime, Id, endTime, timeNow, calories) {
    return new WorkoutDetails(type, startTime, Id, endTime, timeNow, calories);
  }
  heartDetails(timeNow, heartrate) {
    let heartRecording = new RecordHeartData();
    return heartRecording.heartRateRecording(timeNow, heartrate);
  }

  stepDetails(time, steps) {
    let stepRecording = new Steps();
    return stepRecording.stepDataRecording(time, steps);
  }
  //Bringing all the pieces together to make a main object
  allData(
    type,
    startTime,
    Id,
    endTime,
    workoutTimeCalories,
    calories,
    timeNow,
    heartrate,
    time,
    steps
  ) {
    let obj = {};
    let dailyRecording = new DailyData();
    obj["date"] = dailyRecording.dateNow();
    obj["heartData"] = this.heartDetails(timeNow, heartrate);
    obj["stepRecording"] = this.stepDetails(time, steps);
    obj["workoutDetails"] = this.workoutDetails(
      type,
      startTime,
      Id,
      endTime,
      workoutTimeCalories,
      calories
    );

    return obj;
  }
  // Just to make some dummy data for testing
  time() {
    return (
      Math.floor((Math.random() * 100) % 24) +
      ":" +
      Math.floor((Math.random() * 100) % 60)
    );
  }
  randomNumber(n) {
    let m = 100;
    n === 2 ? m : (m = 1000);
    return Math.floor(Math.random() * m);
  }

  DummyData() {
    let dummyData = [];
    let workouttypes = [
      "cardio",
      "bicycling",
      "running",
      "weights",
      "swimming",
      "calesthetics",
    ];
    for (let i = 0; i < 20; i++) {
      let id = Math.ceil(Math.random() * 1000);
      let twoDigits = Math.ceil(Math.random() * 100);
      let type = workouttypes[Math.floor((Math.random() * 1000) % 6)];

      dummyData.push(
        this.allData(
          type,
          this.time(),
          this.randomNumber(3),
          this.time(),
          this.time(),
          this.randomNumber(2),
          this.time(),
          this.randomNumber(2),
          this.time(),
          this.randomNumber(2)
        )
      );
    }
    return dummyData;
  }
}
