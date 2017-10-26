var stack;
var stackElement;
var stackElementTxt;
var sTakeBtn = $("#stackTake");
var sAddBtn = $("#stackAdd");
var sOverflowAlert = $("#stack .overflow");
var sUnderflowAlert = $("#stack .underflow");
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

  $("#stackAdd").on('click', function() {
    if ($('#stackInput').val() == '') {
      stackElementTxt = stack.stackControl.length + 1;
    } else {
      stackElementTxt = $('#stackInput').val();
    }
    if (stack.push(stackElementTxt) == 'Stack Overflow') {
      disable(this);
      sOverflowAlert.toggleClass('hide');
    } else {
      pushElement();
    }
    if (stack.stackControl.length == 1) {
      enable(sTakeBtn);
      sUnderflowAlert.addClass('hide');
    }
  });

  $("#stackTake").on('click', function() {
    if (stack.stackControl.length < stack.MAX_SIZE && sAddBtn.prop('disabled') && !sOverflowAlert.hasClass('hide')) {
      enable(sAddBtn);
      sOverflowAlert.addClass('hide');
    }
    if (stack.pop() == 'Stack Underflow') {
      disable(this);
      sUnderflowAlert.toggleClass('hide');
    } else {
      popElement();
    }
  });
});
