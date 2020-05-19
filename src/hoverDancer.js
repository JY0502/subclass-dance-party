var hoverDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="hoverDancer"><img src="https://i.dlpng.com/static/png/139158_preview.png"></span>');
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();

};

hoverDancer.prototype = Object.create(makeDancer.prototype);
hoverDancer.prototype.constructor = hoverDancer;

hoverDancer.prototype.step = function() {
  let oldStep = makeDancer.prototype.step.bind(this);
  oldStep();

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);

};