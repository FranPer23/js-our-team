const teamMembers = [
    {
        image: "img/wayne-barnett-founder-ceo.jpg",
        firstName: "Wayne",
        surname: "Barnett",
        title: "Founder & CEO"
    },

    {
        image: "img/angela-caroll-chief-editor.jpg",
        firstName: "Angela",
        surname: "Caroll",
        title: "Chief Editor"
    },

    {
        image: "img/walter-gordon-office-manager.jpg",
        firstName: "Walter",
        surname: "Gordon",
        title: "Office Manager"
    },

    {
        image: "img/angela-lopez-social-media-manager.jpg",
        firstName: "Angela",
        surname: "Lopez",
        title: "Social Media Manager"
    },

    {
        image: "img/scott-estrada-developer.jpg",
        firstName: "Scott",
        surname: "Estrada",
        title: "Developer"
    },

    {
        image: "img/barbara-ramos-graphic-designer.jpg",
        firstName: "Barbara",
        surname: "Ramos",
        title: "Graphic Designer"
    },

]

console.log(teamMembers);

const cardRow = document.querySelector(".row");
let cards = "";

for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i]
    cards += 
    `<div class="col m-3">


        <div class="card" style="width: 18rem;">
        <img src="${curMember.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${curMember.firstName} ${curMember.surname}</h5>
                <p class="card-text">${curMember.title}</p>
            </div>
        </div>
    
    </div>`;
}

cardRow.innerHTML = cards;