//This is taking in the step data

export class Steps {
  stepDataRecording(timeNow, stepCount) {
    let obj = {};
    obj["time"] = timeNow;
    obj["additionalSteps"] = stepCount;
    return obj;
  }
}
