const id = window.location.search.slice(4)
let loding = document.querySelector(".loading")

let singelProduct = document.querySelector(".singelProduct")
let product = document.querySelector(".product")
let AllImages = document.querySelector(".prodectAll_image")
let backButton =document.querySelector(".backBtn")
window.addEventListener("DOMContentLoaded",()=>{
    loding.classList.add("active")
    fetch(`https://dummyjson.com/products/${id}`)
    .then(json=>json.json())
    .then(data => {
        
        let title = document.createElement('h1')
        let image = document.createElement('img')
        let description = document.createElement('p')
        let price = document.createElement('h2')
        let discountPercentage = document.createElement('h3')
        let category = document.createElement('h3')
        let brand = document.createElement('h4')
        let div = document.createElement('div')
        div.setAttribute('class','details')


        title.innerText = data.title
        image.src = data.thumbnail

        price.innerText = `$ ${data.price}`
        discountPercentage.innerText = `Discount: ${data.discountPercentage}`
        brand.innerText = `Brand: ${data.brand}`
        category.innerText = `Category: ${data.category}`
        description.innerText = `Description: ${data.description}`


        product.append(title)
        product.append(image)


        
        div.append(price)
        div.append(discountPercentage)
        div.append(category)
        div.append(brand)
        div.append(description)

        singelProduct.append(div)

        let datas = data.images
        for(let i=0; i<datas.length;i++){
            let allProductImages = document.createElement('img')
            allProductImages.setAttribute("class","allImage")
            allProductImages.src = datas[i]
            AllImages.append(allProductImages)
        }

        loding.classList.remove("active")
    })
})

backButton.addEventListener("click",()=>{
    location = "index.html"
})

