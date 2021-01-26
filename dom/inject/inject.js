/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const injectDiv = document.getElementById("inject");

const centerTag = document.createElement("center");
const horizontalLine1 = document.createElement("hr");
const horizontalLine2 = document.createElement("hr");

// All elements in center tag 
const h1Tag = document.createElement("h1");
const iTagh1 = document.createElement("i");
iTagh1.innerHTML = "HTML Practice Exercise TEKcamp";
const h2Tag = document.createElement("h2");
const aTag = document.createElement("a");

// iTagh1.innerHTML = "HTML Practice Exercise TEKcamp"
h1Tag.append(iTagh1);
centerTag.append(h1Tag, h2Tag)

aTag.setAttribute("href", "")
aTag.innerHTML = 'TEKsystems "TEKcamp"'
h2Tag.append(aTag);

centerTag.append(h1Tag, h2Tag)


// All elements in middle section
const iHTML = document.createElement("i");
const pTag1 = document.createElement("p");
pTag1.innerHTML = "I love <i>HTML</i> for the following reasons:"
const olTag = document.createElement("ol");

const listArray =["I learned it quickly", "I can make webpages using code", "It's fun"]
for (let i = 0; i < 3; i++) {
    let liItem = document.createElement("li")
    liItem.innerHTML = listArray[i];
    olTag.append(liItem);
}

// All elements in last section
const pTag2 = document.createElement("p");
const h1Tag2 = document.createElement('h1');
h1Tag2.innerHTML = "Have a great day!";
pTag2.innerHTML = "My instructor's email address is : <a href='mailto:ayunas@teksystems.com'>ayunas@teksystems.com</a>."


injectDiv.append(centerTag, horizontalLine1, pTag1, olTag, horizontalLine2, pTag2, h1Tag2, `I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]`);


