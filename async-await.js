// async/await example

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
// detailPromise
//   .then(addCalender)
//   .then((calender) => {
//     console.log(calender);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

async function meeting() {
  try {
    const meetingDetail = await detailPromise;
    console.log(meetingDetail);
    const calender = await addCalender(meetingDetail);
    console.log(calender);
  } catch (error) {
    console.log(error.message);
  }
}
meeting();

console.log("I am synchronous");
