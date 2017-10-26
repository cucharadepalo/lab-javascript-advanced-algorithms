function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  return (this.queueControl.length == 0) ? true : false;
  // if (this.queueControl.length == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
};

QueueDataStructure.prototype.canEnqueue = function() {
  return (this.queueControl.length < this.MAX_SIZE) ? true : false;
  // if (this.queueControl.length < this.MAX_SIZE) {
  //   return true;
  // } else {
  //   return false;
  // }
};

QueueDataStructure.prototype.enqueue = function(e) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(e);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return 'Queue Underflow';
  } else {
    e = this.queueControl[this.queueControl.length - 1];
    this.queueControl.pop();
    return e;
  }
};
