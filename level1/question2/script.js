
var header = document.querySelector('header');
var section = document.querySelector('section');


var requestURL = 'https://jsonplaceholder.typicode.com/todos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  var todoCardsText = request.response;
  var todoCards = JSON.parse(todoCardsText);
  makeHeader(todoCards);
  makeCards (todoCards);
};

function makeHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = 'Module Assignment Todo cards';
  header.appendChild(myH1);
}

function makeCards(jsonObj){
  var cards = jsonObj;

  for (var i = 0; i < cards.length; i++){
    var unorderedList = document.createElement('ul');
    var myList = document.createElement('li');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myP1 = document.createElement('p');
    var myCheckbox = document.createElement('input');
    var label = document.createElement('label');
    myCheckbox.type = 'checkbox';
    myCheckbox.checked = false;
    myCheckbox.id = 'checkIt';
    label.htmlFor = 'checkIt';

    myH2.textContent = 'userId : ' + cards[i].userId;
    myH3.textContent = 'id : ' + cards[i].id;
    myP1.textContent = cards[i].title;

    label.appendChild(document.createTextNode(' Completed'))
    myList.appendChild(myH2);
    myList.appendChild(myH3);
    myList.appendChild(myP1);
    myList.appendChild(myCheckbox);
    myList.appendChild(label)

    section.appendChild(unorderedList);
    unorderedList.appendChild(myList);

  }
}
