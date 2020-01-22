//Q1 //
let array1 = [1,2,3,1] 

function findDoubles(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j=0; j < 4; j++){
            if(arr[i] == arr[j]){
                return true 
            }
        }
    return false
    } 
}

//Q2//
var i;
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
 
  fib[i] = fib[i - 2] + fib[i - 1];
}
function findFibonnacciSequence(fib){
    let num= prompt("Please enter a number greater than 1: ")
   

//Q3//
List list = new ArrayList();

        int arrayHalf = N / 2;
        for (int i = -arrayHalf; i &lt;=arrayHalf; i++) {
            list.add(i);
        }

        if(N % 2 == 0) {
            list.remove(new Integer(0));
        }

 return list.stream().mapToInt(Integer::intValue).toArray();

 //Q4//
 function numbers() {
	var result = false;
	let number= prompt("Please enter a number greater than 0: ")
	var prevSums = new Object(); 
	
	while ( !result && prevSums[ number ] == undefined ) {
		
		prevSums[ number ] = true;
		
		var sum = 0;
		while ( number > 0 ) {
			
			sum += Math.pow( number % 10, 2 ); 
			number = Math.floor( number / 10 );
		}
		
		if ( sum == 1 )
			result = true; 
		else 
			number = sum;
	}
	
	return result;
}
numbers();
