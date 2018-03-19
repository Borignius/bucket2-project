const url = "https://talaikis.com/api/quotes/random/"
const text = document.getElementById('text')
const image = document.getElementById('roboImg')
const roboName = document.getElementById('roboName')
const infoText = document.getElementById('info')
let info = false

function showInfo() {
  if (info === false) {
    infoText.innerText = "Since the mythic era man has been guided by the reasonable goal of creating sentience, while this app does not do that in the slightest you can now pretend that it does with the RoboSpeakaTron5000. This wondrous waste of time simply connects an image of a robot to a quote using complicated algorithms to determine relation. The algorithms are so advanced that they are in your brain and are different for each user experience. Click now and find out what robots are thinking!"
    info = true
  } else if (info === true) {
    infoText.innerText = ""
    info = false
  }
}

function makeBot() {

  let roboNumber = Math.random() * 100000000000000000
  image.src = "https://robohash.org/" + roboNumber + ".png"

  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      image.src = "https://robohash.org/" + roboNumber + ".png"
      text.innerText = data.quote
      roboName.innerText = "Quote made by bot number #" + roboNumber
    })
    .catch(console.error())
}

makeBot()
