"use strict";

const pages = document.querySelectorAll(".page");

const navigationItems = document.querySelectorAll(
  "[data-page]"
);


function showPage(pageName) {
  
  pages.forEach(page => {
    
    page.classList.remove("active");
    
  });
  
  
  const targetPage =
    document.getElementById(`page-${pageName}`);
  
  if (targetPage) {
    
    targetPage.classList.add("active");
    
  }
  
  
  navigationItems.forEach(item => {
    
    if (item.dataset.page === pageName) {
      
      item.classList.add("active");
      
    } else {
      
      item.classList.remove("active");
      
    }
    
  });
  
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


navigationItems.forEach(item => {
  
  item.addEventListener("click", () => {
    
    const page =
      item.dataset.page;
    
    if (page) {
      
      showPage(page);
      
    }
    
  });
  
});


const searchInput =
  document.getElementById("searchInput");


if (searchInput) {
  
  searchInput.addEventListener(
    "keydown",
    event => {
      
      if (event.key === "Enter") {
        
        const value =
          searchInput.value.trim();
        
        if (!value) return;
        
        showPage("explore");
        
        console.log(
          "Recherche :",
          value
        );
        
      }
      
    }
  );
  
}


document
  .querySelectorAll('[data-action="open-content"]')
  .forEach(button => {
    
    button.addEventListener(
      "click",
      () => {
        
        showPage("challenges");
        
      }
    );
    
  });


document
  .querySelectorAll(".save-button")
  .forEach(button => {
    
    button.addEventListener(
      "click",
      () => {
        
        const saved =
          button.classList.toggle(
            "saved"
          );
        
        button.textContent =
          saved ? "♥" : "♡";
        
      }
    );
    
  });


const answers =
  document.querySelectorAll(".answer");


answers.forEach(answer => {
  
  answer.addEventListener(
    "click",
    () => {
      
      answers.forEach(item => {
        
        item.classList.remove(
          "selected"
        );
        
      });
      
      answer.classList.add(
        "selected"
      );
      
    }
  );
  
});


document
  .querySelectorAll(".category-card")
  .forEach(card => {
    
    card.addEventListener(
      "click",
      () => {
        
        const category =
          card.querySelector(
            "strong"
          )?.textContent;
        
        console.log(
          "Catégorie sélectionnée :",
          category
        );
        
      }
    );
    
  });


document
  .querySelectorAll(".create-option")
  .forEach(option => {
    
    option.addEventListener(
      "click",
      () => {
        
        console.log(
          "Ouverture de l'espace de création"
        );
        
      }
    );
    
  });


showPage("home");
/***--------------changeProfil--------------------------------- ***/

//1-change profile---change le nom
document.getElementById('editName').addEventListener('input',function(){
  document.getElementById('nom').textContent=this.value;
  document.getElementById('name').textContent=((this.value).charAt(0)).toUpperCase()+this.value.slice(1);
  document.getElementById('firstLitter').textContent=(this.value.charAt(0)).toUpperCase();
  large1.textContent=(this.value.charAt(0)).toUpperCase();
  console.log(large1);
})
//2-  mot de passe--masquer/afficher
const btnPwd=document.getElementById('togglePwd');
const inputPwd=document.getElementById('editPwd');
btnPwd.addEventListener('click',()=>{
  const isHidden=inputPwd.type==='password';
  if(isHidden){
        inputPwd.type='text';
        btnPwd.textContent='Masquer';
      }

   else{
    inputPwd.type='password';
    btnPwd.textContent='Afficher';
   }
})
//--3) les competences
const competences=[];
const inputSkill=document.getElementById('editSkillInput');//input
 const listSkill=document.getElementById('listSkill');//affichage
inputSkill.addEventListener('keydown',(e)=>{
  if(e.key==='Enter'){
    e.preventDefault();
    const val=e.target.value.trim();
    if(!val)return;
    competences.push(val);
    e.target.value='';
    affichelist();
  }
}); 
 function affichelist(){
  listSkill.innerHTML="";
  competences.forEach((comp,index)=>{
    const list=document.createElement('div');
    list.className='liste';
    list.innerHTML=`<span>${comp}</span><span class="remove-list">X</span>`;
    document.getElementById('skills').innerHTML =`${comp},`;
    list.querySelector('.remove-list').addEventListener('click',()=>{
   competences.splice(index,1);
    affichelist();})
    listSkill.appendChild(list);
    
  });
}
// page profil 
const large1=document.querySelector('.large1');
