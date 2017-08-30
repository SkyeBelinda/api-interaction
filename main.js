

//ajax
// var pageCounter = 1;
// var animalContainer = document.getElementById("animal-info");
// var btn = document.getElementById("btn");
//
// btn.addEventListener("click", function(){
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
//   ourRequest.onload = function() {
//     var ourData = JSON.parse(ourRequest.responseText);
//     renderHtml(ourData);
//   };
//   ourRequest.send();
//   pageCounter++;
//   if (pageCounter > 3) {
//     btn.classList.add("hide-me");
//   }
// });
//
// function renderHtml(data) {
//   var htmlString = '';
//
//   for (i = 0; i < data.length; i ++) {
//     htmlString += "<p>" + data[i].name + ' is a ' + data[i].species + ' that likes to eat '
//
//     for (ii = 0; ii < data[i].foods.likes.length; ii++) {
//       if (ii == 0){
//         htmlString += data[i].foods.likes[ii];
//       } else {
//         htmlString += " and " + data[i].foods.likes[ii];
//       }
//     }
//
// htmlString += ' and dislikes ';
//
// for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
//   if (ii == 0){
//     htmlString += data[i].foods.dislikes[ii];
//   } else {
//     htmlString += " and " + data[i].foods.dislikes[ii];
//   }
// }
//
//     htmlString += '.</p>'
//   }
// animalContainer.insertAdjacentHTML('beforeend', htmlString)
// }


var getProverb = document.getElementById("proverb");
var getTranslation = document.getElementById("translation")
var btn = document.getElementById("btn");

function getIt(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  xhr.onload = function() {
    var ourData = JSON.parse(xhr.responseText);
    getProverb.innerHTML = ranProverb.source;
    getTranslation.innerHTML = ranTranslation.source;
  };
xhr.send();
};
