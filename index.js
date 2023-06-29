// Create Element:
const newParagraphElement = document.createElement("h2");
// Adding text to an Element:
newParagraphElement.innerText = "Players!";
// Adding an id to an element:
newParagraphElement.id = "paragraphELe";
// Adding a class to an element:
// newParagraphElement.className="paraClass" - for one class per element
// newParagraphElement.classList.add("newClass") for multiple classes on an element

// Fetch Element:
const puppyContainer = document.getElementById("puppyContainer");
// Adding a new element to another Element:
puppyContainer.appendChild(newParagraphElement);

const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT";

async function fetchPuppies() {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.log(error);
  }
}

function renderPuppies(puppiesArray) {
  for (let i = 0; i < puppiesArray.length; i++) {
    console.log(puppiesArray[i]);
    const singlePuppy = document.createElement("div");
    singlePuppy.className = "flexPuppy";

    const puppyNamePara = document.createElement("p");
    puppyNamePara.innerText = puppiesArray[i].name;
    singlePuppy.appendChild(puppyNamePara);

    const puppyBreed = document.createElement("p");
    puppyBreed.innerText = puppiesArray[i].breed;
    singlePuppy.appendChild(puppyBreed);

    const puppyPic = document.createElement("img");
    puppyPic.src = puppiesArray[i].imageUrl;
    puppyPic.className = "images";
    singlePuppy.appendChild(puppyPic);

    const seeDetails = document.createElement("button");
    seeDetails.innerText = "See Details";
    seeDetails.addEventListener("click", () => {
      localStorage.setItem("id", puppiesArray[i].id);
      window.location.href = "storage.html";
    });
    puppyContainer.appendChild(seeDetails);

    puppyContainer.appendChild(singlePuppy);
  }
}

async function buildSite() {
  try {
    const puppies = await fetchPuppies();
    await renderPuppies(puppies);
  } catch (error) {
    console.log(error);
  }
}
buildSite();
