// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

const result = []
const index = [first, second, third].indexOf(result)

const extractBiggest = () => {
	if (first[data.lists[0][1].length - 1] > second[data.lists[1][1].length - 1]) {
		return first.pop()
	}

	if (second[data.lists[1][1].length - 1] > third[data.lists[2][1].length - 1]){
		return second.pop()
	}
	else{
	return third.pop()
	}
    //return result.pop()
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)