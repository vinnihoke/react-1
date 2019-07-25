const myArray = [1,2,3,4];

//This is an example of imperative programming where we are telling it EXACTLY what to do.
for (let i = 0; i < myArray.length; i++) {
	myArray[i] = myArray[i] * 2;
}


//This would be an example of declarative programming. We're technically declaring what should be done, then executing that.
const fourteenth = (number) => {
	return number * 14;
}

console.log(myArray.map(fourteenth));