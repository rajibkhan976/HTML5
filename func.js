
function isBetween(x, from, to){
	if(x > from && x < to){
		console.log(true);
	}
	else{
		console.log(false);
	}
}

isBetween(10, 0, 20);


function range(to, from){
	var i;
	var range = [];
	for(i = to; i < from; i += 1){
		range.push(i);
	}
	console.log(range);
}

range(3, 10);

function min(a, b){
	if (a < b){
		console.log(a + ' is minimum');
	}
	else if(a === b){
		console.log(a + ' is equal to ' + b);
	}
	else {
		console.log(b + ' is minimum');
	}
}

function longestWord(sentence){
	var word = sentence.split(" ");
	console.log(word);
	var arrlength = 0;
	for(i = 0; i < word.length; i += 1){
	 if(word[i].length > arrlength){
	 arrlength = word[i].length;
	 }
	}
	}
	
longestWord('Hello Andreas');
min(3,4);
min(4,4);
min(3,2);
