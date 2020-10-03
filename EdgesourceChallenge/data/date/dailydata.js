//This is dealing with the date to be added to the object

export class DailyData {
  dateNow() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    date = mm + "/" + dd + "/" + yyyy;
    return new Date(date).toDateString();
  }

  checkDate(date) {
    if (new Date(date).toDateString() === this.dateNow()) return true;
    return false;
  }
}
