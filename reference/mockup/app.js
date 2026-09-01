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