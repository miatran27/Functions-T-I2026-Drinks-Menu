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
        <li data-mood="${item.mood}" 
            data-intensity="${item.intensity}" 
            data-intensity-label="${intensityLevel}"
            data-ingredients="${item.ingredients}"
            data-description="${item.description}"
            data-image="${item.image}">
            <h2>${item.name}</h2>
            <p>${item.mood}</p>
            <p>${intensityLevel}</p>
        </li>
        `
        containerEl.insertAdjacentHTML('beforeend', itemHtml)
    })
}

// Setting up variables for my mood buttons

let selectedMood = null
    let buttons = document.querySelectorAll('.mood-buttons button')
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
    
 // This helps clear previous selection data   
    let modalResults = document.querySelector('#modal-results')
    modalResults.innerHTML = ''

// Setting up variable and the function to display the result
    items.forEach(item => {
        let itemMood = item.getAttribute('data-mood')
        let itemIntensity = Number(item.getAttribute('data-intensity'))
        if (itemMood === selectedMood && itemIntensity === intensityValue) {
            item.classList.add('active')

// Modal results
            let name = item.querySelector('h2').textContent
            let mood = item.getAttribute('data-mood')
            let intensityLabel = item.getAttribute('data-intensity-label')
            let ingredients = item.getAttribute('data-ingredients')
            let description = item.getAttribute('data-description')
            let image = item.getAttribute('data-image')

            modalResults.insertAdjacentHTML('beforeend', `
                <h2 class="drink-name">${name}</h2>          
                <p class="drink-ingredients">${ingredients}</p>
                <p class="drink-description">${description}</p>
                <img src="Images/${image}" alt="${name}">
                `)
            } else {
            item.classList.remove('active')
            }
    })

            if (modalResults.innerHTML === '') {
                modalResults.innerHTML = '<p class="no-results">No Results Found!</p>'
            }

    //The line below is to open up my modal 
    modalDialog.showModal()
})

//Getting my modal set up to open up and close
let modalDialog = document.querySelector('#dialog')
let closeButton = modalDialog.querySelector('button')

closeButton.addEventListener('click', () => {
    modalDialog.close()
})

//This allows user to click the area outside of the modal and modal can still close, without having to click the Close button
document.addEventListener('click', (event) => {
    if (event.target == document.documentElement) {
        modalDialog.close()
    }
})

  
//Closing the modal and goes back to hero 
let backButton = modalDialog.querySelector('.back-to-beginning')
backButton.addEventListener('click', () => {
  modalDialog.close()
  window.scrollTo(0, 0)
})


fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		// renderItems(data)
        console.log(data)
        renderItems(data)
	})
    
