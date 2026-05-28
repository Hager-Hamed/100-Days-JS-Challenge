const months = [
  "January ",
  "February",
  "March ",
  "April",
  "May",
  "June ",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateNow = new Date();
const dateNowObj = {
  year: dateNow.getFullYear(),
  month: dateNow.getMonth(),
  day: dateNow.getDate(),
};

let dateChoosedObj = {
  year: dateNow.getFullYear(),
  month: dateNow.getMonth(),
  day: dateNow.getDate(),
};

// addEventToDays();
addInitialEvents();
renderChoosedDay();
renderDatepicker();

function renderChoosedDay() {
  $(".curr-picked__text").text(
    new Date(
      `${dateChoosedObj.month + 1}-${dateChoosedObj.day}-${dateChoosedObj.year}`
    ).toLocaleDateString([], {
      year: "numeric",
      day: "2-digit",
      month: "2-digit",
    })
  );
}

function renderDatepicker() {
  $(".datepicker__year-text").text(dateNowObj.year);
  $(".datepicker__month-text").text(months[dateNowObj.month]);

  const currMonthDays = new Date(
    dateNowObj.year,
    dateNowObj.month + 1,
    0
  ).getDate();

  let daysli = "";
  for (let i = 1; i <= currMonthDays; i++) {
    if (
      dateNowObj.year === dateChoosedObj.year &&
      dateNowObj.month === dateChoosedObj.month &&
      dateChoosedObj.day === i
    ) {
      daysli += `<li class="active">${i}</li>`;
    } else {
      daysli += `<li>${i}</li>`;
    }
  }
  $(`.datepicker__days`).html(daysli);

  addEventToDays();
}

function addInitialEvents() {
  $("#datepicker__year-prev").on("click", () => {
    dateNowObj.year--;
    renderDatepicker();
  });

  $("#datepicker__year-next").on("click", () => {
    dateNowObj.year++;
    renderDatepicker();
  });

  $("#datepicker__month-prev").on("click", () => {
    dateNowObj.month--;
    if (dateNowObj.month < 0) dateNowObj.year--, (dateNowObj.month = 11);
    renderDatepicker();
  });

  $("#datepicker__month-next").on("click", () => {
    dateNowObj.month++;
    if (dateNowObj.month > 11) dateNowObj.year++, (dateNowObj.month = 0);
    renderDatepicker();
  });
}

function addEventToDays() {
  $(".datepicker__days li").on("click", (e) => {
    $(".datepicker__days li").removeClass("active");
    $(e.target).addClass("active");

    dateChoosedObj = {
      year: dateNowObj.year,
      month: dateNowObj.month,
      day: +$(e.target).text(),
    };
    renderChoosedDay();
  });
}
