const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // SAME AS BELOW 
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // DOES SAME THING AS ABOVE 
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
