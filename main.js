const profiles = data.results;
const profile_div = document.getElementById("profileDiv")
const profileExp = data1.results;
const profile_div1 = document.getElementById("userExp")

for (x of profiles){
    // creates card
    let user = document.createElement("div");
    user.className = "card";
    profile_div.appendChild(user);

    // creates img
    let userImg = document.createElement("img");
    userImg.className = "card-img-top"
    userImg.src = x.picture.large;
    user.appendChild(userImg);

    // create body of the card

    // attatch body to card
    let name = document.createElement("name");
    name.className = "card-title";
    name.innerHTML = "name: " + x.name.first;
    name.innerHTML += x.name.last;
    user.appendChild(name);
   
    // age of the hitman
    let age = document.createElement("p");
    age.className = "card-text";
    age.innerHTML = "age: " + x.dob.age;
    user.appendChild(age);

    // gives their city
    let city = document.createElement("p");
    city.className = "card-text";
    city.innerHTML = "location: " + x.location.city;
    user.appendChild(city);

    //gives their # of kills
    let killNum = document.createElement("p");
    killNum.className = "card-text";
    killNum.innerHTML = "Kills: " + x.location.postcode;
    user.appendChild(killNum);
}

for (y of profileExp) {
    // creates card
    let exp = document.createElement("div");
    exp.className = "card";
    profile_div1.appendChild(exp);

    // creates image
    let img1 = document.createElement("img");
    img1.className = "card-img-top";
    img1.src = y.picture.large;
    exp.appendChild(img1);    

    // creates name
    let name = document.createElement("name");
    name.className = "card-title";
    name.innerHTML = "Name: " + y.name.first;
    exp.appendChild(name);

    // Full review
    let review = document.createElement("p");
    review.className = "card-text";
    review.innerHTML = "Review: " + y.name.last;
    exp.appendChild(review);
}


