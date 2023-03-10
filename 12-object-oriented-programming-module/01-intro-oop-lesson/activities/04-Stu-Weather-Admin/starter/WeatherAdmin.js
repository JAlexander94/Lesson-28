const fs = require('fs');
const UserSearch = require('./UserSearch');
const moment = require('moment');

const WeatherAdmin = function () {
  this.getData = () => {
    fs.readFile('log.txt', 'utf8', (data, error) => {
      if(error){console.error(error)}else{console.log(data)}
    });
  };

  this.newUserSearch = (name, location) => {
    const newUserSearch = new UserSearch(name, location);
    const logTxt = `\nName: ${newUserSearch.name} Location: ${
      newUserSearch.location
    } Date: ${moment(newUserSearch.date).format('DD/MM/YYYY')}`;

    fs.appendFile('log.txt', logTxt, (err) => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
