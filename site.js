
let dishesDiv = document.querySelector("#dishesDiv")

let btnAll = document.querySelector("#btnAll")
btnAll.addEventListener('click',function(){
	populateDishes(dishes)
})

let btnStarter = document.querySelector("#btnStarters")
btnStarters.addEventListener('click', function(){

	let filteredDishes = getDishesBy("Starters")
	populateDishes(filteredDishes)
})

let btnEntrees = document.querySelector("#btnEntrees")
btnEntrees.addEventListener('click', function(){

	let filteredDishes = getDishesBy("Entrees")
	populateDishes(filteredDishes)
})

let btnDesserts = document.querySelector("#btnDesserts")
btnDesserts.addEventListener('click', function(){

	let filteredDishes = getDishesBy("Desserts")
	populateDishes(filteredDishes)
})


function populateDishes (dishesToDisplay) {
	dishesDiv.innerHTML = ''

	dishesToDisplay.forEach(function(dish) {
		let dishItem = `<img src='${dish.imageURL}'></img>
		<h4>
		${dish.title}
		</h4>
		<p>
		${dish.description}
		</p>
		`
		dishesDiv.innerHTML += dishItem
	})
}

populateDishes(dishes)


function getDishesBy(course) {
	let filteredDishes = dishes.filter(function(dish) {
		return dish.course == course
	})

	return filteredDishes
}