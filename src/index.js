let citySelect = document.querySelector("#city-select");

citySelect.addEventListener("change", function () {
  let selected = citySelect.value;
  let time;

  if (selected === "paris") {
    time = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");
  }
  if (selected === "tokyo") {
    time = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
  }
  if (selected === "sydney") {
    time = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:mm A");
  }

  if (time) {
    alert(time);
  }
});
