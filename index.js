const findMatching = (names, string) => {
	return names.filter(names => names.toUpperCase() === string.toUpperCase());
}



const fuzzyMatch = (names, string) => {
	return names.filter(names => names.slice() === string.slice())
}


const matchName = (driver, sting) => {
	return driver.filter(driver => driver.slice === string.slice())
}