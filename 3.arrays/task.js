function compareArrays(arr1, arr2) {
   return (arr1.length === arr2.length) && (arr1.every((item, index) => item === arr2[index]));
   
}

function getUsersNamesInAgeRange(users, gender) {
   return users.filter((user)=> user.gender === gender).reduce((accumAge, ageUser, index, arrUsersFilter)=>{
    accumAge += ageUser.age;
   return (index === arrUsersFilter.length - 1) ? accumAge / arrUsersFilter.length : accumAge;
  },0)
}