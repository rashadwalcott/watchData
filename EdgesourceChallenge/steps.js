export class Steps {
  stepDataRecording(timeNow, stepCount) {
    let obj = {};
    obj[timeNow] = stepCount;
    return obj;
  }
}
