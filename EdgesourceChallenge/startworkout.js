export class StartWorkout {
  constructor(workoutType, startTime) {
    this.workoutType = workoutType;
    this.startTime = startTime;
  }

  getWorkoutType() {
    return this.workoutType;
  }

  getStartTime() {
    return this.startTime;
  }
}
