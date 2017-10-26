var queue;
var queueElement;
var queueElementTxt;
var qBtns = {
  add: $("#queueAdd"),
  take: $("#queueTake")
};
var qAlerts = {
  overflow: $("#queue .overflow"),
  underflow: $("#queue .underflow")
};
var enqueueElement = function() {
  $('#queueInput').val('');
  queueElement = '<div><span>';
  queueElement += queue.queueControl[0];
  queueElement += '</span></div>';
  $('#queue .elements').append(queueElement);
};
var dequeueElement = function() {
  $('#queue .elements div:first-child').remove();
};

$(document).ready(function() {
  queue = new QueueDataStructure();

  $(qBtns.add).on('click', function() {
    if ($('#queueInput').val() == '') {
      queueElementTxt = queue.queueControl.length + 1;
    } else {
      queueElementTxt = $('#queueInput').val();
    }
    if (queue.enqueue(queueElementTxt) == 'Queue Overflow') {
      disable(this);
      qAlerts.overflow.toggleClass('hide');
    } else {
      enqueueElement();
    }
    if (queue.queueControl.length == 1) {
      enable(qBtns.take);
      qAlerts.underflow.addClass('hide');
    }
  });

  $(qBtns.take).on('click', function() {
    if (queue.queueControl.length < queue.MAX_SIZE && qBtns.add.prop('disabled') && !qAlerts.overflow.hasClass('hide')) {
      enable(qBtns.add);
      qAlerts.overflow.addClass('hide');
    }
    if (queue.dequeue() == 'Queue Underflow') {
      disable(this);
      qAlerts.underflow.toggleClass('hide');
    } else {
      dequeueElement();
    }
  });
});
