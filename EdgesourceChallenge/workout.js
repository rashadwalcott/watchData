import { StartWorkout } from "./startworkout.js";
import { FinishWorkOut } from "./finishworkout.js";

export class Workout {
  startWorkout(workoutType, startTime) {
    let startWorkout = new StartWorkout(workoutType, startTime);
    let type = startWorkout.getWorkoutType();
    let time = startWorkout.getStartTime();
    let obj = {};
    obj["time"] = time;
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
}
