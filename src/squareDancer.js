var squareDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="squareDancer"></span>');
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = makeDancer.prototype.step;
  // oldStep.call(this);
  //this.move = makeDancer.prototype.setPosition;


  //return blinkyDancer;
};

squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function() {
  let oldStep = makeDancer.prototype.step.bind(this);
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep.call(this);
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var move = makeDancer.prototype.setPosition;
  // move(Math.random(), Math.random());

  var styleSettings = {
    border: 30 * Math.random() + "px solid green",
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);

  // this.$node.css('color', 'blue');
  // this.$node.toggle();

};

