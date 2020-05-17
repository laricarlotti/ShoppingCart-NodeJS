// const { products } = require('../src/data/products');

function getShoppingCart(ids, productsList) {

	let response={
		"products": [],
		"promotion": '',
		"totalPrice": '',
		"discountValue": '',
		"discount": ''	
	};
	
	let myproducts = [];
	let categories = [];
	let looks = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

	ids.forEach((id, index) => {

		let product = productsList.filter((prod) => {
			return (prod.id === id);
		});

		myproducts.push(product[0]);
		response.products[index] = {
			"name" : product[0].name,
			"category" : product[0].category
		};
		
		if (categories.indexOf(product[0].category) === -1) {
			categories.push(product[0].category);
		}
	});

	let look = looks[categories.length-1];
	response.promotion = look;

	let totalPrice = 0.0;
	let totalRegular = 0.0;
	myproducts.forEach((product) => {
		totalRegular = totalRegular + product.regularPrice;
		let price = product.regularPrice;
		product.promotions.forEach((promotion) => {
			if (promotion.looks.indexOf(look) !== -1) {
				price = promotion.price;
			}
		});
		totalPrice = totalPrice + price;
	});

	let discount = totalRegular - totalPrice;

	response.totalPrice = parseFloat(totalPrice).toFixed(2).toString();
	response.discountValue = parseFloat(discount).toFixed(2) + "";
	response.discount = parseFloat((1 - (totalPrice / totalRegular))*100).toFixed(2) + "%"

	return response;

}

// const cart = getShoppingCart([130, 140, 230, 260], products);
// console.log(cart);

module.exports = { getShoppingCart };
