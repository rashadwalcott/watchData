import { Workout } from "./workout.js";
import { StartWorkout } from "./startworkout.js";
export class WorkoutDetails {
  constructor(type, start, Id, end) {
    this.type = type;
    this.start = start;
    this.id = Id;
    this.end = end;
  }

  getdetails() {
    let workout = new Workout();
    let startWorkoutDetails = workout.startWorkout(this.type, this.start);
    let endWorkoutDetails = workout.endWorkout(this.id, this.end);
    let obj = {};
    obj["StartWorkout"] = startWorkoutDetails;
    obj["endWOrkOutDetais"] = endWorkoutDetails;
    return obj;
  }
}
