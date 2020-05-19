$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function () {
    var iterate = 0;
    for (var x = 0; x < window.dancers.length; x++) {
      window.dancers[x].lineUp(iterate);
      iterate += 50;
    }
  });

  $('.partyOn').on('click', function () {
    for (var x = 0; x < window.dancers.length; x++) {
      window.dancers[x].partyOn();
    }
  });

  $(document).on('mouseover', '.hoverDancer', function () {
    // console.log('success');
    var spin = {
      animation: 'spin 1s linear infinite'
    };
    $('.hoverDancer').css(spin);
  });

  $(document).on('mouseleave', '.hoverDancer', function () {
    // console.log('success');
    var spin = {
      animation: ''
    };
    $('.hoverDancer').css(spin);
  });

  $('.pairUp').on('click', function () {
    var iterateX = 150;
    var iterateY = 200;
    for (var x = 0; x < window.dancers.length; x += 2) {
      window.dancers[x].pause();
      window.dancers[x].setPosition(iterateX, iterateY);
      iterateX += 50;
      window.dancers[(x + 1)].pause();
      window.dancers[(x + 1)].setPosition(iterateX, iterateY);
      iterateY += 100;
    }
  });

  $('.partnerDance').on('click', function () {
    var iterateY = 0;
    var iterateX = 15;
    for (var x = 0; x < window.dancers.length; x += 2) {
      window.dancers[x].partnerDance(iterateY);
      iterateY += 50;
      window.dancers[(x + 1)].partnerDance(iterateY);
      iterateY += 150;
    }
  });

  // On button press make dancers form into a line, iterate through window.dancers
});