export const getTimestamp = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes: any = date.getMinutes();
  let seconds: any = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    day +
    '-' +
    month +
    '-' +
    year +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    ' ' +
    ampm
  );
  //   this.time = this.date.getTime();
  //   console.log(this.dateStr);
  //   this.formatAMPM(this.date);
};

// export const formatAMPM = (date): void => {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
//   console.log(strTime);
// };
