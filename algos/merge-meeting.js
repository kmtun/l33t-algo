const mergeRanges = function (meeting) {
  meeting.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  // put first meeting into result
  const mergedMeeting = [meeting[0]];
  for (let i = 1; i < meeting.length; i++) {
    // get current Meeting
    const currentMeet = meeting[i];
    // get prev meeting
    const prevSortedMeet = mergedMeeting[mergedMeeting.length - 1];
    // if current start time is less than or equal to prev end Time
    if(currentMeet.startTime <= prevSortedMeet.endTime) {
      // set the prev end Time
      prevSortedMeet.endTime = Math.max(currentMeet.endTime, prevSortedMeet.endTime);
    }
    else {
      mergedMeeting.push(currentMeet);
    }
  }
  return mergedMeeting;
}

// mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ])

mergeRanges([
  { startTime: 1, endTime: 5 },
  { startTime: 2, endTime: 3 },
  { startTime: 5, endTime: 15 },
  { startTime: 10, endTime: 12 },
])