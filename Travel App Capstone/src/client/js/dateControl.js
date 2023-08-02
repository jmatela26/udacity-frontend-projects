//This is for restriction of dates that was already pass
let today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

//If cases
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

//date format yyyy/mm/dd
today = yyyy + '-' + mm + '-' + dd;

//Set attribute
document.getElementById("thisDate").setAttribute("min", today);
document.getElementById("thisDateTo").setAttribute("min", today);
