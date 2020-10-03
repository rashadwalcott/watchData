//This is bringing in the workout class

import { Workout } from "./workout.js";
export class WorkoutDetails {
  constructor(type, startTime, Id, endTime, timeNow, calories) {
    this.type = type;
    this.startTime = startTime;
    this.id = Id;
    this.endTime = endTime;
    this.time = timeNow;
    this.additionalCaloriesBurned = calories;
  }

  getdetails() {
    let workout = new Workout();
    let startWorkoutDetails = workout.startWorkout(this.type, this.startTime);
    let endWorkoutDetails = workout.endWorkout(this.id, this.endTime);
    let caloriesBurned = workout.getCalories(
      this.time,
      this.additionalCaloriesBurned
    );
    let obj = {};
    obj["StartWorkout"] = startWorkoutDetails;
    obj["endWOrkOutDetais"] = endWorkoutDetails;
    obj["caloriesBurned"] = caloriesBurned;
    return obj;
  }
}
