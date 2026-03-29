let renderItems = (data) => {
    let containerEl = document.querySelector('#drink-name')
    data.forEach(item => {
        let itemHtml = `
        <li>
            <h2>${item['Mood']}</h2>
            <p>${item['Drink name']}</p>
        </li>
        `

        containerEl.insertAdjacentHTML('beforeend', itemHtml)
    })
}

fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		// renderItems(data)
        renderItems (data)
	})
    

