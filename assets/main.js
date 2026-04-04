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
        <li data-mood="${item.mood}" data-intensity="${item.intensity}">
            <h2>${item.name}</h2>
            <p>${intensityLevel}</p>
        </li>
        `
        containerEl.insertAdjacentHTML('beforeend', itemHtml)
    })
}

// Setting up variables for my mood buttons

let selectedMood = null
    let buttons = document.querySelectorAll('section button')
    buttons.forEach(button => {
    button.addEventListener('click', () => {
        selectedMood = button.textContent
    })
    })

// Submit button

let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
    event.preventDefault()

// Intensity slider
    let slider = document.querySelector('#intensity')
    let intensityValue = Number(slider.value)
    let items = document.querySelectorAll('#mood li')

    items.forEach(item => {
        let itemMood = item.getAttribute('data-mood')
        let itemIntensity = Number(item.getAttribute('data-intensity'))
        if (itemMood === selectedMood && itemIntensity === intensityValue) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
  })




fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		// renderItems(data)
        console.log(data)
        renderItems(data)
	})
    