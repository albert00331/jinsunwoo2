const timeDiv = document.getElementById("time");
const todayDiv = document.getElementById("today");
function getTime() {
  let now = new Date();
  let hour = formatNumber(now.getHours()); //시 0 ~ 23
  let minute = formatNumber(now.getMinutes()); // 0 ~ 59분
  let second = formatNumber(now.getSeconds()); // 0 ~ 59초
  let noon = "오전";
  if(hour > 12) {
    noon = "오후";
  }
  timeDiv.textContent = noon + " " + hour + ":" + minute + ":" +second;
}

let now = new Date();
let dayNumber = now.getDay(); // 요일 0-6
let year = now.getFullYear();
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let day = ("0" + now.getDate()).slice(-2);
const dayList = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
todayDiv.textContent = year + "-" + month + "-" + day + " " + dayList[dayNumber];
getTime();
setInterval(getTime, 1000);

function formatNumber(number) {
  if(number < 10) {
    return "0" + number;
  }
  return number;
}

