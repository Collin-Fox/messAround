import * as fs from "fs";

const testObject = {
    name: 'Coliln',
    age: '24',
    address: 'nunya'
}
fs.writeFile('datafiles/buttonData.json', JSON.stringify(testObject, null, 2), err => {
    if(err) {
        console.log(err)
    }else {
        console.log('Worked')
    }

    }

)