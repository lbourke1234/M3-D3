

window.onload = () => {
    // addNewProductToAPI()
    removeDefault()
}



const addNewProductToAPI = () => {
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let brand = document.getElementById('brand').value
    let image = document.getElementById('image-URL').value
    let price = document.getElementById('price').value

    // console.log(brand)
    // console.log(description.value)

    let newProduct = {
        name: name,
        description: description,
        brand: brand,
        imageUrl: image,
        price: price
    }
    return pushNewProduct(newProduct)
}

const pushNewProduct = async (newProduct) => {
    // console.log(newProduct)
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U',
            'Content-Type': 'application/json'
        }
    })
    const body = await response.json()
    // console.log(body)
    alert('New phone has been added')

}

const removeDefault = () => {
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
    })
}



let existingProduct = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    brand: document.getElementById('brand').value,
    imageUrl: document.getElementById('image-URL').value,
    price: document.getElementById('price').value
}
const editProduct = async () => {
    existingProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('image-URL').value,
        price: document.getElementById('price').value
    }
    let searchParams = new URLSearchParams(window.location.search)
    let productID = searchParams.get('productId')
    console.log(productID)
    if (productID) {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/product/' + productID, {
        method: 'PUT',
        body: JSON.stringify(existingProduct),
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U',
            'Content-Type': 'application/json'
        }
        
    })
    } else {
        console.log(false)
    }

    alert('successfully edited')
    console.log(existingProduct)


}
