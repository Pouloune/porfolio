function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    showPopup(true);
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
function socialmedia(id,size){
  const soc=document.getElementById(id);
  const img= document.createElement("img");
  img.setAttribute("src",`html_finalprojimages/${id}.svg`);
  img.setAttribute("alt","SVG Icon");
  img.setAttribute("width",`${size}`);
  img.setAttribute("heigth",`${size}`);
  
  soc.appendChild(img);
}

window.addEventListener('DOMContentLoaded', function () {
  const tag = document.getElementById('tag');
  const words = JSON.parse(tag.getAttribute('data-words'));
  const wait = parseInt(tag.getAttribute('data-wait'), 10);

  let wordIndex = 0;
  let letterIndex = 0;

  function type() {
      if (letterIndex < words[wordIndex].length) {
          const span = document.querySelector('.txt');
          span.textContent += words[wordIndex].charAt(letterIndex);
          letterIndex++;
          setTimeout(type, 100); // Adjust the timeout for the typing speed
      } else {
          setTimeout(erase, wait);
      }
  }

  function erase() {
      if (letterIndex > 0) {
          const span = document.querySelector('.txt');
          span.textContent = words[wordIndex].substring(0, letterIndex - 1);
          letterIndex--;
          setTimeout(erase, 50); // Adjust the timeout for the erasing speed
      } else {
          wordIndex++;
          if (wordIndex >= words.length) {
              wordIndex = 0;
          }
          setTimeout(type, 500); // Adjust the timeout before starting to type the next word
      }
  }

  setTimeout(type, 500); // Adjust the initial delay before starting to type
});

window.addEventListener('DOMContentLoaded', function(){
  AOS.init();
  appearElementNav();
  socialmedia("linkedin","16px");
  socialmedia("github","20px");
  socialmedia("facebook","15px");
  socialmedia("instagram","20px");
  socialmedia("x","12px");
  currentDate();
  

});

window.addEventListener('click',function(event){
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarLinks = document.getElementById('navbarLinks');
  if(navbarToggle.style.display!=='none' && navbarLinks.style.display!=="none"){
    const isClickInsideNavbar = navbarToggle.contains(event.target);    
    if (!isClickInsideNavbar) {
        navbarLinks.style.display = 'none';
      
    }
  }
});


function appearElementNav(){
  const navbarToggle = document.getElementById('navbarToggle');
    const navbarLinks = document.getElementById('navbarLinks');

    navbarToggle.addEventListener('click', function () {
      navbarLinks.style.display='block';
    
    });
}


function downloadResume(){
  window.open("https://drive.google.com/file/d/1dxjJoa_hB8pi_AVMkNEkNLY36rFXmI8n/view?usp=sharing", '_blank');
}

function onMeetClick() {
  window.open("https://calendly.com/dasseshella/30min", '_blank');
}

function currentDate() {
  const current = new Date();
  let monthName = current.toLocaleDateString('en-US', {
      month: "long",
  });

  let date = current.getDate();

  let dayName = current.toLocaleDateString('en-US', {
      weekday: "long",
  });

  var monthText = document.getElementById("month");
  monthText.innerHTML = monthName;

  var dayText = document.getElementById("date");
  dayText.innerHTML = date;

  var weekDayText = document.getElementById("day");
  weekDayText.innerText = dayName;
}

 
