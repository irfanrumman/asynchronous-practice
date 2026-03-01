// synchronous bloking behaviour

console.log("Take a order");
function process() {
  console.log("processing order");

  // bloking 3s delay
  const currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log("processed order");
}
process();
