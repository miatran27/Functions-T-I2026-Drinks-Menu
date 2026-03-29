fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		// renderItems(data)
        console.log(data)
	})
	// .catch(error => console.error('Error loading data:', error))