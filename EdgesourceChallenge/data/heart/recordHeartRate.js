//This is taking in the heart data

export class RecordHeartData {
  heartRateRecording(timeNow, heartrate) {
    let obj = {};
    obj["time"] = timeNow;
    obj["heartRate"] = heartrate;
    return obj;
  }
}
