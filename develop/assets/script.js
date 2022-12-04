let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  logline(new Date().getMilliseconds());

  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}