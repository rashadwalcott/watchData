// This is taking in the calories data

export class RecordCalories {
  constructor(time, caloriesBurned) {
    this.time = time;
    this.caloriesBurned = caloriesBurned;
  }
  getTime() {
    return this.time;
  }
  getCaloriesBurned() {
    return this.caloriesBurned;
  }
}
