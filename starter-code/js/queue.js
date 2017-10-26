var queue;
var queueElement;
var queueElementTxt;
var qTakeBtn = $("#queueTake");
var qAddBtn = $("#queueAdd");
var qOverflowAlert = $("#queue .overflow");
var qUnderflowAlert = $("#queue .underflow");
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

  $("#queueAdd").on('click', function() {
    if ($('#queueInput').val() == '') {
      queueElementTxt = queue.queueControl.length + 1;
    } else {
      queueElementTxt = $('#queueInput').val();
    }
    if (queue.enqueue(queueElementTxt) == 'Queue Overflow') {
      disable(this);
      qOverflowAlert.toggleClass('hide');

    } else {
      enqueueElement();
    }
    if (queue.queueControl.length == 1) {
      enable(qTakeBtn);
      qUnderflowAlert.addClass('hide');
    }
  });

  $("#queueTake").on('click', function() {
    if (queue.queueControl.length < queue.MAX_SIZE && qAddBtn.prop('disabled') && !qOverflowAlert.hasClass('hide')) {
      enable(qAddBtn);
      qOverflowAlert.addClass('hide');
    }
    if (queue.dequeue() == 'Queue Underflow') {
      disable(this);
      qUnderflowAlert.toggleClass('hide');
    } else {
      dequeueElement();
    }
  });
});
