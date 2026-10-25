const axios = require('axios'); // download this tool before using axios
const cheerio = require('cheerio'); //download cheerio 

axios.get('https://en.wikipedia.org/wiki/web_scraping')
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });

// this program works with device with 
// node.js axios and cheerio downloaded 
// please use with caution and only use it with website that allow scraping
