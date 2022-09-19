const os = require('os')
// infor about current user 
const user = os.userInfo()
console.log(user);

// method return the system uptime uptime in secounds
console.log(`the system uptime is ${os.uptime()} secounds`);
const currentOS = {
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
