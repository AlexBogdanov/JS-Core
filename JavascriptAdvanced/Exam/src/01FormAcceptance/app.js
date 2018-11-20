function acceptance() {
	let company = $('[name="shippingCompany"]').val();
	let product = $('[name="productName"]').val();
	let quantity = Number($('[name="productQuantity"]').val());
	let scrape = Number($('[name="productScrape"]').val());

	if (company && product && quantity && quantity > 0 && quantity >= scrape && scrape >= 0) {
		let finalCount = quantity - scrape;
		if (finalCount > 0) {
			let div = $('<div>');
			$('<p>')
				.text(`[${company}] ${product} - ${finalCount} pieces`)
				.appendTo(div);
			$('<button>')
				.attr('type', 'button')
				.text('Out of stock')
				.on('click', () => {
					div.remove();
				}).appendTo(div);
			div.appendTo('#warehouse');
		}
		$('[name="shippingCompany"]').val('');
		$('[name="productName"]').val('');
		$('[name="productQuantity"]').val('');
		$('[name="productScrape"]').val('');
	}
}