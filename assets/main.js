let renderItems = (data) => {
    let containerEl = document.querySelector('#mood')
    data.forEach(item => {
        let itemHtml = `
        <li>
            <h2>${item['mood']}</h2>
            <p>${item['light']}</p>
            <p>${item['pure']}</p>
            <p>${item['intense']}</p>
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
        console.log(data)
        renderItems (data)
	})
    