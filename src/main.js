// query selector variables go here 👇
  const posterImageElement = document.querySelector('.poster-img') // use period if calling the class
  const posterTitleElement = document.querySelector('.poster-title')
  const posterQuoteElement = document.querySelector('.poster-quote')
  const newPosterFormTitleInput = document.querySelector('#poster-title') // use hashtag when using the id
  const newPosterFormUrlInput = document.querySelector('#poster-image-url')
  const newPosterFormQuoteInput = document.querySelector('#poster-quote')
  const newPosterFormElement = document.querySelector('.poster-form')
  const mainPosterSection = document.querySelector('.main-poster')
  const savedPostersSection = document.querySelector('.saved-posters')
  const showSavedPostersButton = document.querySelector('.show-saved')
  const savedPostersBackButton = document.querySelector('.back-to-main')
  const showRandomPosterButton = document.querySelector('.show-random')
  const showFormButton = document.querySelector('.show-form')
  const customPosterBackButton = document.querySelector('.show-main')
  const generateCustomPosterButton = document.querySelector('.make-poster')
  const savePosterButton = document.querySelector('.save-poster')



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
showRandomPosterButton.addEventListener('click', getRandomPoster);
showFormButton.addEventListener('click', showForm);
customPosterBackButton.addEventListener('click', takeMeBack);
showSavedPostersButton.addEventListener('click', viewSavedPosters)
savedPostersBackButton.addEventListener('click', backToMain)
generateCustomPosterButton.addEventListener('click', function(event){
  event.preventDefault()
  createCustomPoster()
})
savePosterButton.addEventListener('click', addPosterToSavedArray)

// On Refresh picture changing
document.addEventListener('DOMContentLoaded', function () { // This is how it changes the poster when page is refreshed
  getRandomPoster();
});

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

class Poster {
  constructor(imageURL, title, quote) {
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}

function getRandomPoster() {
  const randomImageIndex = getRandomIndex(images);
  const randomTitleIndex = getRandomIndex(titles);
  const randomQuoteIndex = getRandomIndex(quotes);

  const randomImage = (images[randomImageIndex]);
  const randomTitle = (titles[randomTitleIndex]);
  const randomQuote = (quotes[randomQuoteIndex]);

  const newPoster = createPoster(randomImage, randomTitle, randomQuote);
  // const currentPoster = newPoster
  currentPoster = newPoster
  displayPoster(currentPoster)
}

function displayPoster(poster) {
  posterImageElement.src = poster.imageURL;
  posterTitleElement.innerText = poster.title;
  posterQuoteElement.innerText = poster.quote;
}

function showForm() {
  // toggle on the form
  newPosterFormElement.classList.toggle('hidden')
  // toggle off the poster
  mainPosterSection.classList.toggle('hidden')
}

function takeMeBack() {
  mainPosterSection.classList.toggle('hidden')
  newPosterFormElement.classList.toggle('hidden')
}

function viewSavedPosters() {
  mainPosterSection.classList.toggle('hidden')
  savedPostersSection.classList.toggle('hidden')
}

function backToMain() {
  mainPosterSection.classList.toggle('hidden')
  savedPostersSection.classList.toggle('hidden') 
}

function createCustomPoster() {
customPoster = new Poster (newPosterFormUrlInput.value, newPosterFormTitleInput.value, newPosterFormQuoteInput.value)

takeMeBack()

posterImageElement.src = customPoster.imageURL;
posterTitleElement.innerText = customPoster.title;
posterQuoteElement.innerText = customPoster.quote;

addImage(customPoster.imageURL)
addTitle(customPoster.title)
addQuote(customPoster.quote)

currentPoster = customPoster

return currentPoster
}


function addImage(customImageUrl) {
  if (!images.includes(customImageUrl)) {
    images.push(customImageUrl)
  }
}

function addTitle(customTitleText) {
  if (!titles.includes(customTitleText)) {
    titles.push(customTitleText)
  }
}

function addQuote(customQuoteText) {
  if (!quotes.includes(customQuoteText)) {
    quotes.push(customQuoteText)
  }
}

function addPosterToSavedArray() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  }
}