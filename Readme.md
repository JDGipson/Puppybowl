// STEPS:
// Code Demo Legend: Any steps prefixed with a SM will be for state management lecture (i.e. being able to render individual details about a movie on another page)

// Step 1: We need to make sure that we have access to the data that we want to render (i.e. writing an async function that can send a request to an API and receive that data back).

let arrOfPuppies = [
{
name: "Titanic",
gender: "Female",
age: 4,
furtherDetails: {
Owner: "Jack",
Team: "Sailors",
},
},
{
name: "Titanic",
gender: "Female",
age: 4,
furtherDetails: {
Owner: "Jack",
Team: "Sailors",
},
},
{
name: "Lucky",
gender: "Male",
age: 3,
furtherDetails: {
Owner: "Sputnik",
Team: "Astros",
},
},
{
name: "Giselle",
gender: "Female",
age: 6,
furtherDetails: {
Owner: "Rain",
Team: "Storm",
},
},
];

// Step 2: We need to use the data, and render it onto the DOM. To do so, we wil use some common DOM manipulation tools to accomplish this.

function renderPuppiesOnTheDom() {
// Make sure that you have all of your HTML "ingredients" that you plan on cooking with. In other words, do you have access to the HTML elements that you plan on manipulating / changing?
let puppyContainerElement = document.getElementById("puppy Container");

// We need to do something for each element in our dataset that we want to display on our website.
for (let i = 0; i < arrOfPuppies.length; i++) {
// [Optional] Sometimes it's helpful to have a helper variable referencing the current data element you want to use.
let currentMovieElement = arrOfPuppies[i];

    // I need to make a new "ingredient" for each element in our dataset.
    let newPuppyElement = document.createElement("div");

    // I want to "style", or start decorating / writing inside of, that new element.
    // List of things we can do to new elements:
    // .style
    // .innerText
    // .classList
    // .add("name-of-new-class")
    // .remove
    // .contains
    // .id
    newPuppyElement.innerText = `Name of puppy is ${currentPuppyElement.name}. Gender of the puppy is ${currentPuppyElement.gender}. ;

    // [Optional] If you want to add CSS using classes, you can add a new class like below. Be sure to add a CSS selector rule that targets that class name in your css file.
    newMovieElement.classList.add("single-movie-element");

    // Step SM1: in order to let our users navigate to a different page, we need to use event listeners.
    // [Cristina's Question: How do I make a button?]:
    let newButton = document.createElement("button");
    newButton.innerText = "See Details";

    newButton.addEventListener("click", () => {
      // SM1-a: Now that we have our event listener, I want to be able to store the specific movie's info onto our browser using localStorage. I.e. We are managing our state data.
      // localStorage syntax - how do we add data to localStorage?
      // Skeleton Syntax:
      // localStorage.setItem("nameOfYourKey", theActualDataYouWantToStore)
      localStorage.setItem("movieTitle", currentMovieElement.name);
      localStorage.setItem(
        "criticReview",
        arrOfMovies[i].furtherDetails.criticReview
      );
      localStorage.setItem(
        "movieDesc",
        arrOfMovies[i].furtherDetails.description
      );

      // SM1-b: Now that we've cached the data on our browser, we want to navigate to the details page.
      // Skeleton Syntax on how to navigate to different pages using vanilla DOM:
      // window.location.href = "newPathUrl"
      window.location.href = "movie-details.html";
    });

    // SM2: Don't forget to append the button to the element you want.
    // To see further steps after SM2, go to movie-details.js file.
    newMovieElement.appendChild(newButton);

    // The new element above is still free-floating. We need to fix this.
    movieContainerElement.appendChild(newMovieElement);

}
}

// Don't forget to invoke your function that renders your DOM!
renderMoviesOntoTheDOM();
