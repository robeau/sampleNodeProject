'use strict';

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    showPeople(JSON.parse(this.responseText));
  }
});

xhr.open("GET", "/read");
xhr.send();

function showPeople(data) {
  var ul = document.querySelectorAll('#people')[0],
      peopleArr = [];

  for (var key in data) peopleArr.push(data[key]);

  peopleArr.forEach(function(person) {
    var li = document.createElement('li');
    li.append(person.name);
    ul.append(li);
  });
}
