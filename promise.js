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
  .then(addCalender)
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("This is synchronous part");
