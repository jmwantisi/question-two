const calculateMaxiMini = (number = 0) => {

	const numberList = number.toString().split('');
	let currentList = JSON.parse(JSON.stringify(numberList));

	const data = {
		number_list: numberList,
		current_list: currentList
	}

	const maxi = parseInt(findMaxi(data))

	const mini = parseInt(findMini(data))

	return [maxi, mini]

}

const findMaxi = (params = {}) => {

	let { number_list, current_list } = params;

	let index = 0
	let currentListNumberIndex = 0

	while (index < number_list.length) {

		currentListNumberIndex = (index + 1);
		while (currentListNumberIndex < number_list.length) {

			[number_list[index], number_list[currentListNumberIndex]] = [number_list[currentListNumberIndex], number_list[index]];

			const preceedingValue = parseInt(number_list.join(''))
			const suceedingValue = parseInt(current_list.join(''))

			// compare size from the value on the left and value after it
			if (preceedingValue > suceedingValue) {

				current_list = JSON.parse(JSON.stringify(number_list));

				// swap values if value on the left is smaller than value on the right
				[number_list[index], number_list[currentListNumberIndex]] = [number_list[currentListNumberIndex], number_list[index]];

			}
			currentListNumberIndex = currentListNumberIndex + 1;

		}
		index = index + 1;
	}

	return current_list.join('')
}

const findMini = (params = {}) => {

	let { number_list, current_list } = params;

	let index = 0
	let currentListNumberIndex = 0

	while (index < number_list.length) {

		currentListNumberIndex = (index + 1);
		while (currentListNumberIndex < number_list.length) {

			[number_list[index], number_list[currentListNumberIndex]] = [number_list[currentListNumberIndex], number_list[index]];

			const preceedingValue = parseInt(number_list.join(''))
			const suceedingValue = parseInt(current_list.join(''))

			// compare size from the value on the left and value after it
			if (preceedingValue < suceedingValue) {

				current_list = JSON.parse(JSON.stringify(number_list));

				// swap values if value on the left is smaller than value on the right
				[number_list[index], number_list[currentListNumberIndex]] = [number_list[currentListNumberIndex], number_list[index]];

			}
			currentListNumberIndex = currentListNumberIndex + 1;

		}
		index = index + 1;
	}

	return current_list.join('')
}


console.log(calculateMaxiMini(12340))
console.log(calculateMaxiMini(98761))
console.log(calculateMaxiMini(9000))
console.log(calculateMaxiMini(357758017083851))



