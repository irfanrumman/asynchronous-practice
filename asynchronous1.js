// asynchronous non-blocking behaviour

console.log("Take a order");
function process() {
  console.log("processing order");

  setTimeout(() => {
    console.log("cooking done...");
  }, 4000);
  console.log("processed order");
}
process();
