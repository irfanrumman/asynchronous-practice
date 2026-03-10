// solve flow control problem with callback

function tackOrder(customer, callback) {
  console.log(`Take a ordrer from ${customer}`);
  callback(customer);
}
function process(customer, callback) {
  console.log(`processing order from ${customer}`);

  setTimeout(() => {
    console.log(`cooking done for ${customer}...`);
    console.log(`processed order from ${customer}`);
    callback();
  }, 4000);
}

function completeOrder(customer) {
  console.log(`completed order for ${customer} `);
}

// callback pattern
tackOrder("Sumit Saha", (customer) => {
  process(customer, () => {
    completeOrder(customer);
  });
});
// ai callback funtion boro hole atao akta hell hoye jabe. atar solution hoyeche promise er maddhome.
