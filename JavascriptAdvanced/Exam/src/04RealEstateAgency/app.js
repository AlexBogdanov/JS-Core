function realEstateAgency() {
	let regArr = $('#regOffer input').toArray();
    let rentArr = $('#findOffer input').toArray();
    let agencyProfit = 0;
    let apartments = [];
    let index = 0;

	$('[name="regOffer"]').on('click', () => {
		let apRent = Number(regArr[0].value);
		let apType = regArr[1].value;
		let agCommission = Number(regArr[2].value);
		$('#regOffer input').val('');

		if (apRent && apRent > 0 && agCommission && agCommission >= 0 &&
			agCommission <= 100 && apType && !apType.includes(':')) {
			$('#message')
				.text('Your offer was created successfully.');
			$('<div>')
				.attr('class', 'apartment')
				.append($('<p>').text(`Rent: ${apRent}`))
				.append($('<p>').text(`Type: ${apType}`))
				.append($('<p>').text(`Commission: ${agCommission}`))
                .appendTo($('#building'));
            let apartment = {
                rent: apRent,
                type: apType,
                commission : agCommission,
                index
            };
            apartments.push(apartment);
            index += 1;
		} else {
			$('#message')
				.text('Your offer registration went wrong, try again.');
		}
	});

	$('[name="findOffer"]').on('click', () => {
        debugger;
		let famBudget = Number(rentArr[0].value);
		let famApType = rentArr[1].value;
		let famName = rentArr[2].value;
		$('#findOffer input').val('');

		if (famBudget && famApType && famName && famBudget > 0) {
            console.log('tuk');
			let availableApartments = apartments
				.filter(aparment => {
					return aparment.type === famApType;
				}).filter(apartment => {
					return famBudget >= (apartment.rent + (apartment.rent * apartment.commission / 100)); // Might have mistake
                });
            if (availableApartments.length > 0) {
                let currAp = availableApartments[0];
                let commission = currAp.rent * currAp.commission / 100;
                agencyProfit = 2 * commission;
                $('#roof h1').text(`Agency profit: ${agencyProfit} lv.`);
                $($('#building div').get(currAp.index))
                    .empty()
                    .css('border', '2px solid red')
                    .append($('<p>').text(`${famName}`))
                    .append(
                        $('<p>').text(`live here now`)
                    ).append(
                        $('<button>')
                        .text('Move Out')
                        .on('click', () => {
                            $($('#building div').get(currAp.index))
                                .remove();
                            $('#message')
                                .text(`They had found cockroaches in ${famName}\'s apartment`);
                            
                        })
                );
                apartments.splice(currAp.index, 1);
                $('#message').text('Enjoy your new home! :))');
            } else {
                console.log('opa');
                $('#message').text('We were unable to find you a home, so sorry :(');
            }
		}
	});
}