
describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });

    it('should go to 0 x-axis when Line Up is toggled', function() {
      sinon.spy(blinkyDancer.$node, 'css');
      blinkyDancer.lineUp();
      expect(blinkyDancer.$node.css.called).to.be.true;
    });
  });
});

describe('Square Dancer', function() {

  var square, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    square = new squareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(square.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an instance of makeDancer', function() {
    expect(square).to.be.an.instanceof(makeDancer);
  });



  it('should have a step function that makes its node grow/shrink', function() {
    sinon.spy(square.$node, 'css');
    square.step();
    expect(square.$node.css.called).to.be.true;
  });

  describe('Grow / Shrink', function() {
    it('should Grow or Shrink at least once per second', function() {
      sinon.spy(square, 'step');
      expect(square.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(square.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(square.step.callCount).to.be.equal(2);
    });
    it('should go to 0 x-axis when Line Up is toggled', function() {
      sinon.spy(square.$node, 'css');
      square.lineUp();
      expect(square.$node.css.called).to.be.true;

    });
  });
});

describe('movingDancer', function() {

  var move, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    move = new squareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(move.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an instance of makeDancer', function() {
    expect(move).to.be.an.instanceof(makeDancer);
  });



  it('should have a step function that makes its node grow/shrink', function() {
    sinon.spy(move.$node, 'css');
    move.step();
    expect(move.$node.css.called).to.be.true;
  });

  describe('Move', function() {
    it('should Move at least once per second', function() {
      sinon.spy(move, 'step');
      expect(move.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(move.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(move.step.callCount).to.be.equal(2);
    });
    it('should go to 0 x-axis when Line Up is toggled', function() {
      sinon.spy(move.$node, 'css');
      move.lineUp();
      expect(move.$node.css.called).to.be.true;
    });
  });
});