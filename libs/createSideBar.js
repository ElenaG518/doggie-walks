'use strict';

$('a.nav-home').click(function(event) {
  console.log('goHome function ran');
  event.preventDefault();
  $('.nav-home').addClass('active');
  $('.nav-all-rates, .nav-contact').removeClass('active');
  $('.sidebar').addClass('hide');
});

$('.nav-all-rates').click(function(event) {
  console.log('nav all rates function ran');
  event.preventDefault();
  $('.dropdown').show();
});

function showSideBarWalk() {
  console.log('showSideBarWalk function ran');
  $('.nav-all-rates').addClass('active');
  $('.nav-home, .nav-contact').removeClass('active');
  if ($('.sidebar').hasClass('hide')) {
    $('.sidebar').removeClass('hide');
    generateWalkRates();
  } else if (!$('.sidebar').hasClass('hide')) {
    if ($('#walk').hasClass('highlight')) {
      $('.sidebar').addClass('hide');
    } else if (!$('#walk').hasClass('highlight')) {
      generateWalkRates();
    }
  }
  console.log('st ', sticky);
  window.scrollTo(0, sticky);
}

function walkSection() {
  $('a.js-walking').click(function(event) {
    console.log('walkSection function ran');
    event.preventDefault();
    showSideBarWalk();
  });
}

function showWalkRatesNav() {
  $('a.nav-walking').click(function(event) {
    console.log('showWalkRatesNav function ran');
    event.preventDefault();
    showSideBarWalk();
    $('.dropdown').hide();
  });
}

function generateWalkRates() {
  $('#rates').html(`<section id="walk" class="highlight">
        <table>
        <caption>Dog Walking</caption>
        <tr>
        <th>duration</th>
        <th>fee</th>
        </tr>

        <tr>
        <td>30 minutes</td>
        <td>$18</td>
        </tr>

        <tr>
        <td>45 minutes</td>
        <td>$25</td>
        </tr>
        <tr>
        <td>60 minutes</td>
        <td>$30</td>
        </tr>
        </table>

        <p>* $5 per each additional dog </p>`);
}

function showSideBarRun() {
  console.log('showSideBarRun function ran');
  $('.nav-all-rates').addClass('active');
  $('.nav-home, .nav-contact').removeClass('active');
  if ($('.sidebar').hasClass('hide')) {
    $('.sidebar').removeClass('hide');
    generateRunRates();
  } else if (!$('.sidebar').hasClass('hide')) {
    if ($('#run').hasClass('highlight')) {
      $('.sidebar').addClass('hide');
    } else if (!$('#run').hasClass('highlight')) {
      generateRunRates();
    }
  }
  console.log('st ', sticky);
  window.scrollTo(0, sticky);
}

function runSection() {
  $('a.js-running').click(function(event) {
    console.log('runSection function ran');
    event.preventDefault();
    showSideBarRun();
  });
}

function showRunRatesNav() {
  $('a.nav-running').click(function(event) {
    console.log('showRunRatesNav function ran');
    event.preventDefault();
    showSideBarRun();
    $('.dropdown').hide();
  });
}

function generateRunRates() {
  $('#rates').html(`<section id="run" class="highlight">
      <table>
        <caption>Dog Runs</caption>
        <tr>
          <th>duration</th>
          <th>fee</th>
        </tr>
        <tr>
          <th>15 minutes</th>
          <th>$20</th>
        </tr>
        <tr>
          <th>20 minutes</th>
          <th>$25</th>
        </tr>
        <tr>
          <th>30 minutes</th>
          <th>$35</th>
        </tr>
      </table>
      <p> * $5 per each additional dog</p>`);
}

function showSideBarHike() {
  console.log('showSideBarHike function ran');
  $('.nav-all-rates').addClass('active');
  $('.nav-home, .nav-contact').removeClass('active');
  if ($('.sidebar').hasClass('hide')) {
    $('.sidebar').removeClass('hide');
    generateHikeRates();
  } else if (!$('.sidebar').hasClass('hide')) {
    if ($('#hike').hasClass('highlight')) {
      $('.sidebar').addClass('hide');
    } else if (!$('#hike').hasClass('highlight')) {
      generateHikeRates();
    }
  }
  console.log('st ', sticky);
  window.scrollTo(0, sticky);
}

function hikeSection() {
  $('a.js-hiking').click(function(event) {
    console.log('hikeSection function ran');
    event.preventDefault();
    showSideBarHike();
  });
}

function showHikeRatesNav() {
  $('a.nav-hiking').click(function(event) {
    console.log('showHikeRatesNav function ran');
    event.preventDefault();
    showSideBarHike();
    $('.dropdown').hide();
  });
}

function generateHikeRates() {
  $('#rates').html(`<section id="hike" class="highlight">
    <table>
    <caption>Hike Temescal Canyon or other dog-friendly trails</caption>
    <tr>
    <td>Two-hour session</td>
    <td>$75 per day</td>
    </tr>
    </table>

    <p>* $5 per each additional dog.</p>
    <p>**includes pick-up and drop off within a 5 mile radius from Mar Vista. $5 extra fee for an additional 5-mile radius each way.</p>
    <p>*food and treats must be provided by owner for the safety of your pet.</p> </section>`);
}

function showSideBarSit() {
  console.log('showSideBarSit function ran');
  $('.nav-all-rates').addClass('active');
  $('.nav-home, .nav-contact').removeClass('active');
  if ($('.sidebar').hasClass('hide')) {
    $('.sidebar').removeClass('hide');
    generateSitRates();
  } else if (!$('.sidebar').hasClass('hide')) {
    if ($('#sit').hasClass('highlight')) {
      $('.sidebar').addClass('hide');
    } else if (!$('#sit').hasClass('highlight')) {
      generateSitRates();
    }
  }
  // if (window.innerWidth < 420) {
  console.log('st ', sticky);
  window.scrollTo(0, sticky);
  // }
}

function sitSection() {
  $('a.js-sitting').click(function(event) {
    console.log('hikeSection function ran');
    event.preventDefault();
    showSideBarSit();
  });
}

function showSitRatesNav() {
  $('a.nav-sitting').click(function(event) {
    console.log('showSitRatesNav function ran');
    event.preventDefault();
    showSideBarSit();
    $('.dropdown').hide();
  });
}

function generateSitRates() {
  $('#rates').html(`<section id="sit" class="highlight">
    <table>
      <caption>In-Home Pet-Sitting / House Sitting</caption>
      <tr>
      <td>Pet sitting</td>
      <td>$75 per day</td>
      </tr>
    </table>

    <p>* $10 per each additional pet.</p>
    <p>* $20 extra for overnight stays
    
    </section>`);
}

function showSideBarContact() {
  console.log('showSideBarContact function ran');
  $('.nav-contact').addClass('active');
  $('.nav-home, .nav-all-rates').removeClass('active');
  if ($('.sidebar').hasClass('hide')) {
    $('.sidebar').removeClass('hide');
    generateContactInfo();
  } else if (!$('.sidebar').hasClass('hide')) {
    if ($('#contact').hasClass('highlight')) {
      $('.sidebar').addClass('hide');
    } else if (!$('#contact').hasClass('highlight')) {
      generateContactInfo();
    }
  }
  if (window.innerWidth < 420) {
    window.scrollTo(0, 620);
  }
}

function showContactNav() {
  $('a.nav-contact').click(function(event) {
    console.log('showContactNav function ran');
    event.preventDefault();
    showSideBarContact();
  });
}

function generateContactInfo() {
  $('#rates').html(`<section id="contact" class="contact-style highlight">
    <h2>Contact me:</h2>
    <img src="images/cropped/meanddoggies.jpg" alt="me and doggies" class="contact-photo">
    <p>Elena's Dog Walking & Pet Sitting Service<br>
    Mar Vista, CA <br>
    310-384-6767 <br>
    <a href="mailto:elenag518@gmail.com">elenaG518@gmail.com</a></p>
    </section>`);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
let navbar = document.getElementById('fixed-nav');
// let content = document.getElementById("content");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log('sticky ', sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

function createRates() {
  walkSection();
  showWalkRatesNav();
  runSection();
  showRunRatesNav();
  hikeSection();
  showHikeRatesNav();
  sitSection();
  showSitRatesNav();
  showContactNav();
}

$(createRates);
