const myDB = require("../db/db")

for(let i=1; i<= 10; i++){
    myDB.create(`test-user-${i}`,10);
}

myDB.bulkCreate('test-bulk-1',10,5);

const tickets = myDB.find();
console.log('All tickets: ' ,tickets);

const winners = myDB.draw(3);

console.log('Winners: ',winners);