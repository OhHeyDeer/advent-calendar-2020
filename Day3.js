// Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?
const { Cipher } = require('crypto');
const fs = require('fs');

const getData = (cb) => {
    fs.readFile('./txtFiles/Day3Input.txt', (err, data) => {
        if (err) {
            throw err;
        } else {

            let arrayOfStrings = data.toString().split('\n');
            console.log(arrayOfStrings.length);
            let count = 0;
            let currentChar;
            let rowIndex = 0;
            let colIndex = 0;
            while (rowIndex < arrayOfStrings.length){
                let currentRow = arrayOfStrings[rowIndex];
            
                currentChar = currentRow[colIndex];


                if (currentChar === '#') {
                    count ++;
                }

                if (currentRow.length < colIndex) {
                    colIndex = colIndex - currentRow.length;

                } else {
                    if (rowIndex === 0) {
                        colIndex = 0;
                    } else {
                        colIndex = (colIndex + 3);
                    }
                }
                rowIndex ++;

            }
            cb(count);
                
        }
    });
}

getData((data) => console.log(data));
