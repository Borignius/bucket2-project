const url = "https://talaikis.com/api/quotes/random/"
const text = document.getElementById('text')
const image = document.getElementById('roboImg')
const roboName = document.getElementById('roboName')
const infoText = document.getElementById('info')
const butt = document.getElementById('butt')
let randomFact = ''
let randomQuote = ''
let info = false

function showInfo() {
  if (info === false) {
    infoText.innerText = "Since the mythic era man has been guided by the reasonable goal of creating sentience, while this app does not do that in the slightest you can now pretend that it does with the RoboSpeakaTron5000. This wondrous waste of time simply connects an image of a robot to a quote using complicated algorithms to determine relation. The algorithms are so advanced that they are in your brain and are different for each user experience. Click now and find out what robots are thinking! Now with facts!"
    butt.innerText = "Hide Info"
    info = true
  } else if (info === true) {
    infoText.innerText = ""
    butt.innerText = "Show Info"
    info = false
  }
}

function makeBot() {
  let randomNumber = Math.floor(Math.random() * 20)
  let roboNumber = Math.random() * 100000000000000000
  image.src = "https://robohash.org/" + roboNumber + ".png"

  fetch("https://www.reddit.com/r/todayilearned/.json")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      randomFact = data.data.children[randomNumber].data.title
    })

  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      image.src = "https://robohash.org/" + roboNumber + ".png"
      randomQuote = data.quote
    })
    .catch(console.error())

  if (Math.floor(Math.random() * 20) % 2 === 0) {
    text.innerText = randomQuote
    roboName.innerText = "Quote made by bot number #" + roboNumber
  }else{
    text.innerText = randomFact
    roboName.innerText = "Fact made by bot number #" + roboNumber
  }
  if (text.innerText) {

  }else {
    roboName.innerText = ''
  }
}

makeBot()
