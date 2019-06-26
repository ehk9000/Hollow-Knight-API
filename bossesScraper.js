var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://hollowknight.fandom.com/wiki/Bosses_of_Hallownest')
  .wait(7000)
  .viewport(2500, 1500)
  .evaluate(() => {
    const nodes = document.querySelectorAll("table a")
    const images = [].slice.call(nodes)
    return images.map((node) => {
      if(node.innerText !== '') {
        return node.innerText
      }
    })
  })
  .end()

  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log('Search Failed', error);
  });