// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.node2 = $('<span class="squareDancer"></span>');
  this.node3 = $('<span class="movingDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // this.time = timeBetweenSteps;

};

makeDancer.prototype.step = function() {
  clearInterval(this.timer2);
  clearInterval(this.timer3);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // FIX
  // var dancer = this;
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // setTimeout(function() {}, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  clearInterval(this.timer2);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (increment) {
  clearTimeout(this.timer);
  clearInterval(this.timer2);
  clearInterval(this.timer3);
  // var plus = 0
  // for (var x = 0; x < window.dancers.length; x++) {
  var styleSettings = {
    top: 30 + increment,
    left: 0
  };
  this.$node.css(styleSettings);
  this.node2.css(styleSettings);
  this.node3.css(styleSettings);
  //   plus += 30;
  // }
};

makeDancer.prototype.partyOn = function () {
  clearInterval(this.timer2);
  clearInterval(this.timer3);
  var styles = {
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  };
  this.$node.css(styles);
  this.step();
};

makeDancer.prototype.pause = function () {
  clearTimeout(this.timer);
  clearInterval(this.timer2);
};

// pair up method
// on button click iterate through window.dancers
// stop timeout
// put posiitons next to each other
// shake up and down or something
makeDancer.prototype.partnerDance = function (y) {
  clearTimeout(this.timer);
  var node01 = this.$node;
  var node02 = this.node2;
  var node03 = this.node3;

  this.timer2 = setInterval(function () {
    var righty = {
      top: $("body").height() - 200,
      // left: $("body").width() * Math.random()
      left: 150 + y
    };
    node01.css(righty);
    node02.css(righty);
    node03.css(righty);
  }, 1000);

  this.timer3 = setInterval(function () {
    var lefty = {
      top: $("body").height() - 1000,
      // left: $("body").width() * Math.random()
      left: 150 + y
    };
    node01.css(lefty);
    node02.css(lefty);
    node03.css(lefty);
  }, 800);

};