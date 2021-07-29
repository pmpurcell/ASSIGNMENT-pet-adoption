const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2018/06/Blue-the-Velociraptor-in-Jurassic-World.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://sm.mashable.com/t/mashable_sea/photo/default/cover_kqfc.960.png"
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    name: "Smokey",
    color: "Poop-Colored",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "http://www.dinopit.com/wp-content/uploads/2012/09/compsognathus.jpg"
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://cdn.shopify.com/s/files/1/1018/7517/articles/fat_cat_4d1e8174-4917-476e-b280-ad71f4ea261f_1024x1024.png?v=1546452788"
  },
  {
    name: "Salem",
    color: "Poop-Colored",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://i.natgeofe.com/n/b96b572c-98e2-4ec2-a714-08a6b95cf646/triceratopshorridus_hexdcb.jpg"
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://i.ytimg.com/vi/PbVU0te_zV4/maxresdefault.jpg"
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/564x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg"
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Chocolate-Labrador-Retriever-e1533746894917-1600x700.jpg"
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/a2/70/84/a27084861e4a2bc347a17ff2cb7a2078.jpg"
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "https://media.vanityfair.com/photos/5ef0ba54e132b56358d73dcf/master/pass/GettyImages-1133517737.jpg"
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://dinoanimals.com/wp-content/uploads/2020/07/Iguanodon-2.jpg"
  }
];

  const renderToDom = (divId, textToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
  }


  const buttons = () => {
    const domString = `
    <button id= "all">All</button>
    <button id= "cat">Cats</button>
    <button id= "dog">Dogs</button>
    <button id= "dino">Dinos</button>
    `

    renderToDom("#btn-container", domString);
  }


const filterType = (array, animal) => {
return array.filter(petObj => petObj.type === animal);
};

// Austin's method

const petTypeColor = (petArray) => {
  petArray.forEach((card) => {
    // console.log("Why won't this work?");
    if (card.type === "cat") {
      card.typeColorBkg = `#4EB6EC`;
      console.log(card)
    };
    if (card.type === "dog") {
      card.typeColorBkg = "lightblue";
      console.log(card)
    };
    if (card.type === "dino") {
      card.typeColorBkg = "lightblue";
      console.log(card)
    };
  })
};


// Adding Classlist Styles

// const petTypeColor = (array) => {
//     console.log("Why won't this work?");
//     array.forEach((card) => {
//       let animalText = document.querySelector(`.card`).innerHTML;
//       console.log(animalText)
//       if (animalText === "Type: cat"){
//         console.log("This works!");
//         animalText.classList.add("cat-color");
//       };
//       if (animalText === "Type: dog"){
//         animalText.classList.add("dog-color")}
//       if (animalText === "Type: dino"){
//           animalText.classList.add("dino-color")}
//      })

//   }; 



// 1. Event Listener - Set event listener to body of paragraph
// 2. If Statment - Create If Statements checking if what is clicked is equal to the buttons.
// 3. Filter - If the proper button is clicked, use a filter to show only the selected type.


const handleButtonClicks = (event) => {
  if (event.target.id === "all") {
    cardBuilder(pets)};
  if (event.target.id === "cat") {
    const printCats = filterType(pets, event.target.id);
    cardBuilder(printCats);
  } else if (event.target.id === "dog") {
    const printDogs = filterType(pets, event.target.id);
    cardBuilder(printDogs);
  } else if (event.target.id === "dino") {
    const printDinos = filterType(pets, event.target.id);
    cardBuilder(printDinos);
  } else {
    console.log ("The buttons are not working like I want them to.")
  };
};


const buttonEvents = () => {
    document.querySelector("#btn-container").addEventListener(`click`, handleButtonClicks);
  }



const cardBuilder = (petArray) => {  
  let domString = "";
  petArray.forEach ((card) => {
    petTypeColor(pets);      
  domString += `
    <div class='card' style='width: 18rem;'>
  <img src=${card.imageUrl} class='card-img-top' alt=${card.name}>
  <div class='card-body'>
    <h3 class='card-text'> ${card.name}</h3>
    <p class='card-text'> Color: ${card.color}</p>
    <p class='card-text'> Skill: ${card.specialSkill}</p>
    <div class="type-box" style="background-color: ${card.typeColorBkg}">
    <p class='card-text' id="animalType"> Type: ${card.type}</p>
    </div>
  </div>
 </div>
 `;
});

renderToDom("#pet-cards", domString)

}

const whatAreMyCards = (array) => {
  const myCards = document.querySelector(".card").innerHTML;
  array.forEach((card) => {
    console.log(myCards)
  })
};

const init = () => {
buttons();
buttonEvents();
cardBuilder(pets);
// petTypeColor(pets);
whatAreMyCards(pets);
}

init();

