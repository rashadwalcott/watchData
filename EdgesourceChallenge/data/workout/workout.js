//This is bringing the workout classes together

import { StartWorkout } from "./startworkout.js";
import { FinishWorkOut } from "./finishworkout.js";
import { RecordCalories } from "./caloriesData.js";

export class Workout {
  startWorkout(workoutType, startTime) {
    let startWorkout = new StartWorkout(workoutType, startTime);
    let type = startWorkout.getWorkoutType();
    let time = startWorkout.getStartTime();
    let obj = {};
    obj["startTime"] = time;
    obj["type"] = type;
    return obj;
  }

  endWorkout(workoutId, endTime) {
    let finishWorkout = new FinishWorkOut(workoutId, endTime);
    let obj = {};
    obj["End Time"] = finishWorkout.getEndTime();
    obj["Work Out ID"] = finishWorkout.getWorkOutID();
    return obj;
  }

  getCalories(timeNow, calories) {
    let caloriesRecording = new RecordCalories(timeNow, calories);
    let obj = {};
    obj["time"] = caloriesRecording.getTime();
    obj["additionalCaloriesBurned"] = caloriesRecording.getCaloriesBurned();
    return obj;
  }
}
