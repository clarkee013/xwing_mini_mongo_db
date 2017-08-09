var CollectionView = function(items){
  this.render(items);
}

CollectionView.prototype = {
  render: function(items){
    
    console.log(items);
    items.forEach(function(item){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('items');
      text.innerText = item.name + ": " + '"' + item.item + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = CollectionView;