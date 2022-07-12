

const rows = document.querySelectorAll('.cont-container div#block-final-content div div.views-row');
// console.log(rows);
for (const row of rows) {
  row.classList.add('col-lg-3');
  row.classList.add('col-sm-6');
  row.classList.add('col-6');

  // row.classList.add('p-lg-0');
  row.classList.add('pt-2');
  row.classList.add('p-sm-3');
}
const is_title_exist = document.querySelector('#block-final-page-title');
const data = document.querySelectorAll('.contextual-region');

if(is_title_exist)
{
  console.log("present");
  data[4].classList.add('row');
}
else
{
  console.log("not present");
  data[3].classList.add('row');
}

console.log(data);  


const btn_values = document.querySelectorAll('.cont-container .views-row .card-title a');
const getbtn_values = document.querySelectorAll('.cont-container .views-row .btn');
// console.log(getbtn_values);
for (const ind in btn_values) {
let link = btn_values[ind].getAttribute('href');
getbtn_values[ind].setAttribute('href',link);
}
