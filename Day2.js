const fs = require('fs');

const parseData = (cb) => {
    fs.readFile('./txtFiles/Day2Input.txt', (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data.toString().split('\n'));
        }
    })
}
    


const giveGoodPasswords = (cb) => {
    parseData((err, data) => {
        if (err) {
            throw err;
        } else {

            let goodPasswords = [];


            for(let i = 0; i < data.length; i++) {
                const currentSet = data[i].split(' ');
                // The first index will be the number of occurances allowed
                let numOccurances = currentSet[0];
                // The Second index will be the letter that is required and a colon
                const letterRequired = currentSet[1][0]; // just getting the letter
                // The third index will be the password
                const password = currentSet[2];

                let maxOcc = Number.parseInt(numOccurances.split('-')[1]);
                let minOcc = Number.parseInt(numOccurances.split('-')[0]);


                let count = 0;
                for(let j = 0; j < password.length; j++) {
                    if (password[j] === letterRequired) {
                        count++;
                    }
                }
                if ((count >= minOcc) && (count <= maxOcc)) { 
                    goodPasswords.push(data[i])
                    // The count is valid
                    // Password is valid
                }
            }
            cb(goodPasswords.length);
        }
    });

}

// giveGoodPasswords((data) => console.log(data));


const giveGoodPasswordsUniqiue = (cb) => {
    parseData((err, data) => {
        if (err) {
            throw err;
        } else {

            let goodPasswords = [];

            for (let i = 0; i < data.length; i++) {
                const currentSet = data[i].split(' ');
                // The first index will be the two indexes to check in the password
                let indexPositions = currentSet[0];
                // The Second index will be the letter that is required and a colon
                const letterRequired = currentSet[1][0]; // just getting the letter
                // The third index will be the password
                const password = currentSet[2];

                let firstIndex = Number.parseInt(indexPositions.split('-')[0]) - 1;
                let secondIndex = Number.parseInt(indexPositions.split('-')[1]) - 1;

                if ((password[firstIndex] === letterRequired) && (password[secondIndex] === letterRequired)) {
                    // Do Nothing
                } else if ((password[firstIndex] === letterRequired) || (password[secondIndex] === letterRequired)) {
                    goodPasswords.push(data[i]);
                }


            }
            cb(goodPasswords.length);
        }
    });
}

giveGoodPasswordsUniqiue((data) => console.log(data));