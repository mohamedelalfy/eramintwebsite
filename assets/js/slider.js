// Get and Set The Main Information
// Get Slider Irem
var sliderImges = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number of Slides
var slidesCount = sliderImges.length;

// set Current Index
var currentSlide = 1;

// slide Number Element
var slideNumberElement = document.getElementById('slidesCount');

// Previous and Next Buttons
var nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev');

// Handel Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = PrevSlide;

//  create The Main UL Element
var paginationElement = document.createElement('ul');

// set Id for The Created Element
paginationElement.setAttribute('id', 'pagination-ul');

// create List Item Pased on slides Count
for (var i = 1; i <= slidesCount; i++) {
    // Create The LI
    var paginationItem = document.createElement('li');

    // set Custom Attribute for The Created Li
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild((document.createTextNode(i)));

    // Append Items to The Main UL List
    paginationElement.appendChild(paginationItem);
}

// Add The Created Ul Element To The Page 
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get paginationBullets Item
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Item
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();

    };

}

// Triger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do Noothind
        return false;
    } else {
        currentSlide++;
        theChecker();
    }

}

// Previous Slide Function
function PrevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do Noothind
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    // set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActiev();
    // set Active Class on Current Slide
    sliderImges[currentSlide - 1].classList.add('active');

    // Set Active Class on Current pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
}

// Check If Current Slides Is The First
if (currentSlide === 1) {
    // Add Disabled Class on Pervious Button
    prevButton.classList.add('disabled');
} else {
    // Remove Disabled Class on Pervious Button
    prevButton.classList.remove('disabled');
}

// Check If Current Slides Is The last
if (currentSlide === slidesCount) {
    // Add Disabled Class on Pervious Button
    nextButton.classList.add('disabled');
} else {
    // Remove Disabled Class on Pervious Button
    nextButton.classList.remove('disabled');
}
// Remove All Active Classes From Imges and Pagenaiton Polits

function removeAllActiev() {
    // Loop Trough Imges
    sliderImges.forEach(function (img) {
        img.classList.remove('active');
    });

    // Loop Through The paginationBullets
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}