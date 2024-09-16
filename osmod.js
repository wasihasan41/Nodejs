const  os  = require('os'); //its a built in module thats why we dont need to specify ./ for filename 
console.log(os.freemem()); //user pc storage in bytes
console.log(os.homedir()); //path of users current home directory
console.log(os.hostname()); //host name of os
console.log(os.release());
console.log(os.totalmem());
console.log(os.uptime());
console.log(os.type());
console.log(os.networkInterfaces());