'use strict';

var xhr = new XMLHttpRequest(),
    submit = document.querySelectorAll('#submit')[0];

xhr.open("GET", "/read");
xhr.send();

submit.addEventListener('click', function() {
  var name = document.querySelectorAll('#name')[0],
      age = document.querySelectorAll('#age')[0],
      addXhr = new XMLHttpRequest(),
      data = 'age=' + age.value + '&name=' + name.value;

  addXhr.open("POST", "/add", true);
  addXhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  addXhr.send(data);
  addXhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      xhr.open("GET", "/read");
      xhr.send();
      showPeople();
  }
});
});

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    showPeople(JSON.parse(this.responseText));
  }
});

function showPeople(data) {
  var ul = document.querySelectorAll('#people')[0],
      peopleArr = [];

  for (var key in data) peopleArr.push(data[key]);

  ul.innerHTML = '';
  peopleArr.forEach(function(person) {
    var li = document.createElement('li');
    li.append(person.name);
    ul.append(li);
  });
}
