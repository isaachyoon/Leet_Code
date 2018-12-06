function rotate(matrix) {
	let len = matrix.length;
	let row = 0;
	let end = matrix.length;
	while(row <= end) {
		for (let col = 0+row; col < matrix.length-1-row; col++) {
			//row = 1 col =1
			let temp1 = matrix[row][col];   //11
			console.log(row,col)
			
			let temp2 = matrix[col][len-1-row]; //12
			matrix[col][len-1-row] = temp1;
			console.log(col,len-1-row)
 
			
			temp1 = matrix[len-1-row][len-1-col]; //22
			matrix[len-1-row][len-1-col] = temp2;
			console.log(len-1-row,len-1-col)

			
			temp2 = matrix[len-1-col][0+row] //
			matrix[len-1-col][0+row] = temp1;
			console.log(len-1-col,0+row)

			matrix[row][col] = temp2; //00 
		}
		console.log(matrix)
		row++;
		end--;
	}
	return matrix;
}

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

let matrix2 = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16]
]

let res = rotate(matrix2);
console.log(res)