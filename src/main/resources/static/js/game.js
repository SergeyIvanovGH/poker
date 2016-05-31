$(function() {

  //Fisher-Yates Shuffle
  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function range(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
  }

  var deck = shuffle(range(1, 52));

  function dealCard(cardNumber, max, target) {
    if (cardNumber > max) {
      return;
    }

    var rotationDegree = Math.floor(Math.random() * 60) - 30;
    $('<img />', {
      src: 'images/cards/' + deck.pop() + '.png',
      style: 'transform: rotate(' + rotationDegree + 'deg);'
    }).appendTo('#' + target);

    setTimeout(function() {
      dealCard(cardNumber + 1, max, target);
    }, 500);
  }

  setTimeout(function() {
    dealCard(1, 2, 'player1');
  }, 500);

  setTimeout(function() {
    dealCard(1, 2, 'player2');
  }, 1500);

  setTimeout(function() {
    dealCard(1, 5, 'table');
  }, 2500);

});
