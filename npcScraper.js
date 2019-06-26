var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://hollowknight.fandom.com/wiki/NPCs_of_Hallownest')
  .wait(7000)
  .viewport(2500, 1500)
  .evaluate(() => {
    const nodes = document.querySelectorAll("table img")
    const images = [].slice.call(nodes)
    return images.map((node) => {
      return node.src
    })
  })
  .end()
  
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log('Search Failed', error);
  });