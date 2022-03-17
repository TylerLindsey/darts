var dart19 = null;
var dart20 = 20;
console.log(typeof(dart19));
console.log(typeof(dart20));
// if ((
// if (dart19==7) {
//   console.log('Aim right');
// } else if (dart19==19) {
//   console.log('Repeat that');
// } else if (dart19==3){
//   console.log('Aim left');
// } else {
//   console.log('Check your aim');
// })
// ||
// (if (dart20==5) {
//   console.log('Aim right');
// } else if (dart20==20) {
//   console.log('Repeat that');
// } else if (dart20==1){
//   console.log('Aim left');
// } else {
//   console.log('Check your aim');
// }))


if ((dart20==5) || (dart19==7)) {
  console.log('Aim right');
} else if ((dart20==1) || (dart19==3)) {
  console.log('Aim left');
} else if ((dart20==20) || (dart19==19)) {
  console.log('Good throw, Repeat that');
} else {
  console.log('Check your aim');
}