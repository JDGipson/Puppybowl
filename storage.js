const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT";

window.onload = async () => {
  async function fetchPuppies() {
    try {
      const response = await fetch(`${BASE_URL}/players`);
      const result = await response.json();
      return result.data.players;
    } catch (error) {
      console.log(error);
    }
  }

  const fetchAll = fetchPuppies();

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

      const detailPuppy = document.getElementById("detailPage");

      const singlePuppyName = document.createElement("p");
      singlePuppyName.innerText = ` Name: ${puppiesArray[i].name}`;

      const singlePuppyBreed = document.createElement("p");
      singlePuppyBreed.innerText = `Breed: ${puppyArray[i].breed}`;

      const singlePuppyStatus = document.createElement("p");
      singlePuppyStatus.innerText = `Status: ${puppyArray[i].status}`;

      const singlePuppyTeam = document.createElement("p");
      singlePuppyTeam.innerText = `Team: ${puppyArray[i].teamId}`;

      const singlePuppyPic = document.createElement("img");
      singlePuppyPic.src = puppiesArray[i].imageUrl;

      detailPuppy.appendChild(singlePuppyName);
      detailPuppy.appendChild(singlePuppyBreed);
      detailPuppy.appendChild(singlePuppyStatus);
      detailPuppy.appendChild(singlePuppyTeam);
      detailPuppy.appendChild(singlePuppyPic);
    }
  }
};
