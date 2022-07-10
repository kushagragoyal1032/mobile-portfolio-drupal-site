

const rows = document.querySelectorAll('.row div#block-final-content div div.views-row');
// console.log(rows);
for (const row of rows) {
  row.classList.add('col-lg-3');
  row.classList.add('col-sm-6');
  row.classList.add('col-6');

  // row.classList.add('p-lg-0');
  row.classList.add('pt-2');
  row.classList.add('p-sm-3');
}

const data = document.querySelectorAll('.contextual-region');

  data[3].classList.add('row');
  // console.log(data[3]);


const btn_values = document.querySelectorAll('.row .views-row .card-title a');
const getbtn_values = document.querySelectorAll('.row .views-row .btn');
console.log(getbtn_values);
let target = [];
for (const ind in btn_values) {
let link = btn_values[ind].getAttribute('href');
getbtn_values[ind].setAttribute('href',link);
}
