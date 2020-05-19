var movingDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="movingDancer"></span>');
  this.top = top;
  this.left = left;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = makeDancer.prototype.step;
  // oldStep.call(this);
  //this.move = makeDancer.prototype.setPosition;


  //return blinkyDancer;
};

movingDancer.prototype = Object.create(makeDancer.prototype);
movingDancer.prototype.constructor = movingDancer;

movingDancer.prototype.step = function() {
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
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  };
  this.$node.css(styleSettings);
  // this.$node.css('color', 'blue');
  // this.$node.toggle();

};
