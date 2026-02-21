//Promise basics
/*
return new Promise((resolve)=>{})
*/

function greet(name, ms = 2000) {
  return new Promise((resolve, reject) => {
    if (ms < 4000) {
      reject("Time must be up to 4 seconds");
    }
    else{
      console.log("Waiting for the response oooo....");
      setTimeout(() => console.log("We're still waiting oooo...."), 2000);
      setTimeout(() => {
        resolve(`Hello, ${name}`);
      }, ms);  
    }
  });
}

greet("Peter", 5000)
  .then((resp) => {console.log(resp)})
  .catch((error) => {
    console.log("Error: " + error);
  })
  .finally(() => {
    console.log("Hmmm... finally it's over");
  });



//EXERCISE:
function mightFail(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Boom! Something went wrong."));
      else resolve("All good.");
    }, 6000);
  });
}

mightFail(true).then(
  value => console.log(value),
  )
  .catch(error => console.log(error));

async function True(){
  const value = await mightFail(false);
  console.log(value);
}

True();