// callback funtion hell theke bacar jonno ashlo promise
// promise

const hasMeeting = false;
const detailPromise = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetail = {
      titel: "Greeting",
      location: "Dhaka",
      time: "09:00 PM",
    };
    resolve(meetingDetail);
  } else {
    reject(new Error("Meeting is scheduled"));
  }
});

const addCalender = (meetingDetail) => {
  const calender = `${meetingDetail.titel} wiil be held on ${meetingDetail.location} at ${meetingDetail.time}`;
  // return new Promise((res) => {
  //   res(calender);
  // });
  return Promise.resolve(calender);
};

// promise chaining
detailPromise
  .then(addCalender) // syntex  .then((meetingDetail) => addCalender(meetingDetail))
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  });

/* 
  promise.all([promise1, promise2])
      .then((res)=>{
        console.log(res);
        });  akhane sobgulo akshathe suru hoy kaj shesh hobar por array akare ashe shobgulo.
  
  promise.race([promise1, promise2])
      .then((res)=>{
        console.log(res);
        }); akhaneo kaj shuru hoy akshathe, kintu jeta age shesh hoy sheta result e ashe. kintu kaj shobgulotei hoy.
  */

console.log("This is synchronous part");
