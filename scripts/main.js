// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

// Add your javascript here
function getAge(date) {
  let year = Number(date.substr(0, 4));
  let month = Number(date.substr(4, 2)) - 1;
  let day = Number(date.substr(6, 2));
  let today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() < month ||
    (today.getMonth() == month && today.getDate() < day)
  ) {
    age--;
  }
  return age;
}
document.getElementById("age").innerHTML = getAge("19900503");
document.getElementById("experience").innerHTML = getAge("20110801");
