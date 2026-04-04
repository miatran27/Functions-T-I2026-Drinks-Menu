let renderItems = (data) => {
    let containerEl = document.querySelector('#mood')
    data.forEach(item => {
        let intensityLevel = item.intensity

        if (intensityLevel === 1) {
            intensityLevel = 'Light'
        } else if (intensityLevel === 2) {
            intensityLevel = 'Pure'
        } else if (intensityLevel === 3) {
            intensityLevel = 'Intense'
        }

        let itemHtml = `
        <li>
            <h2>${item.name}</h2>
            <p>${intensityLevel}</p>
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
        renderItems(data)
	})
    