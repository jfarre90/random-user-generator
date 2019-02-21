var btn = document.querySelector("#btn");
var city = document.querySelector("#city");
var email = document.querySelector("#email");
var user = document.querySelector("#username");
var fullname = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var url = 'https://randomuser.me/api';

function handleErrors(request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
};

function parseJSON(response){
  return response.json();
}

function updateProfile(data){
  city.innerText = data.results[0].location.city;
  email.innerText = data.results[0].email;
  user.innerText = data.results[0].login.username;
  fullname.innerText = data.results[0].name.first + " " + data.results[0].name.last;
  avatar.src = data.results[0].picture.medium;
}

function printError(request){
  alert("error with the url");
}

function getNewUser(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
}

btn.addEventListener("click", getNewUser);