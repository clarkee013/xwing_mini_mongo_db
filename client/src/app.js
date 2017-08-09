var CollectionView = require('./views/collectionView');

var app = function(){
  var url = "http://localhost:3000/items"
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var itemString = this.responseText;
  var items = JSON.parse(itemString);
  var ui = new CollectionView(items);
}

window.addEventListener('load', app);