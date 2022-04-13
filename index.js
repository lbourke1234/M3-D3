let product = {
	// "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
    "name": "app test 1",  //REQUIRED
    "description": "somthing longer", //REQUIRED
    "brand": "nokia", //REQUIRED
    "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    "price": 100, //REQUIRED
    "userId": "admin", //SERVER GENERATED
    // "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    // "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    // "__v": 0 //SERVER GENERATED
}
JSON.stringify(product)

window.onload = () => {
    getData()
}


const getData = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
        }
    })
    const body = await response.json()
    // console.log(body)
    let row = document.querySelector('.row')
    body.forEach(product => {
        // console.log(product)
        createProduct(product, row)
    })
}


const createProduct = (product, row) => {
    

    row.innerHTML += ` <div class="card col-3">
                            <img src="${product.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <a href="#" class="btn btn-primary">€${product.price}</a>
                            </div>
                        </div>
                    `
}