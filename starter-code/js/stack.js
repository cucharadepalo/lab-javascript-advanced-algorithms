var stack;
var stackElement;
var stackElementTxt;
var sBtns = {
  take: $("#stackTake"),
  add: $("#stackAdd")
};
var sAlerts = {
  overflow: $("#stack .overflow"),
  underflow: $("#stack .underflow")
};
var pushElement = function() {
  $('#stackInput').val('');
  stackElement = '<div><span>';
  stackElement += stack.stackControl[stack.stackControl.length - 1];
  stackElement += '</span></div>';
  $('#stack .elements').append(stackElement);
};
var popElement = function() {
  $('#stack .elements div:last-child').remove();
};
function stackUnderflow() {

}
$(document).ready(function() {
  stack = new StackDataStructure();

  $(sBtns.add).on('click', function() {
    if ($('#stackInput').val() == '') {
      stackElementTxt = stack.stackControl.length + 1;
    } else {
      stackElementTxt = $('#stackInput').val();
    }
    if (stack.push(stackElementTxt) == 'Stack Overflow') {
      disable(this);
      sAlerts.overflow.toggleClass('hide');
    } else {
      pushElement();
    }
    if (stack.stackControl.length == 1) {
      enable(sBtns.take);
      sAlerts.underflow.addClass('hide');
    }
  });

  $(sBtns.take).on('click', function() {
    if (stack.stackControl.length < stack.MAX_SIZE && sBtns.add.prop('disabled') && !sAlerts.overflow.hasClass('hide')) {
      enable(sBtns.add);
      sAlerts.overflow.addClass('hide');
    }
    if (stack.pop() == 'Stack Underflow') {
      disable(this);
      sAlerts.underflow.toggleClass('hide');
    } else {
      popElement();
    }
  });
});
