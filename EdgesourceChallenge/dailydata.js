export class DailyData {
  dateNow() {
    let date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }
}
