const os= require('os')


// info about user
const user= os.userInfo()
console.log(user);

// system uptime
console.log('System uptime is: '+(os.uptime())+' seconds');

const currOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currOS);