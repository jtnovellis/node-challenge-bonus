import { faker } from '@faker-js/faker';
import fs from 'fs';

const createNames = () => {
  const person = faker.name.fullName();
  return person;
};

for (let i = 1; i <= 1000; i++) {
  fs.appendFile('names.txt', createNames(), (err) => {
    if (err) {
      throw err;
    };
  });
  console.log(`Name added to file names.txt, No. of names ${i}`);
};
console.log('The procces has been completed satisfactotily');