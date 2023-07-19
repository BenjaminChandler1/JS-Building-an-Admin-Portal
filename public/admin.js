
// Your Code Here
async function main() {
    const reponse = await fetch('http://localhost:3000/listBoooks')
    const data = await response.json()

    data.forEach(book => {
        renderBook(book)
    })


}

function renderBook(book) {
    const root = document.querySelector('root')

    const li = document.createElement('li')
    li.textContent = book.title 
    
    const quanityInput = documnet.createElement('input')
    quanityInput.value = book.quantity

    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', async function() {
        await fetch('http://localhost:3001/updateBook', {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.srtingify ({
                id: book.id,
                quantity: quanityInput.value
            })
        })
    })

    li.append(quanityInput, saveButton)
    
    root.append(li)
}

