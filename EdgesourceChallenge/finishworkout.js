export class FinishWorkOut {
  constructor(workOutID, endTime) {
    this.workOutID = workOutID;
    this.endTime = endTime;
  }

  getWorkOutID() {
    return this.workOutID;
  }
  getEndTime() {
    return this.endTime;
  }
}
