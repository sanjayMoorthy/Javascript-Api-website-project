let ProductsList = document.querySelector(".productsContainer")
let input = document.querySelector("input")
let loding = document.querySelector(".loading")


// console.log(div)
window.addEventListener("DOMContentLoaded", () => {
    loding.classList.add("active")
    fetch("https://dummyjson.com/products")
        .then(json => json.json())
        .then(data => {
            let datas = data.products
   
        for (let i = 0; i < datas.length; i++) {
            // console.log(datas[i].title);
            let aTag = document.createElement("a")
            let imgTag = document.createElement("img")
            imgTag.setAttribute("class","imges")
            let h5 = document.createElement("h5")
            h5.setAttribute("class","namessss")

            imgTag.src = datas[i].thumbnail
            h5.innerText = datas[i].title.toLowerCase()
            //  console.log(h5.innerText);


            aTag.append(imgTag)
            aTag.append(h5)
            ProductsList.append(aTag)

            aTag.href = `redirect.html?id=${datas[i].id}`
            loding.classList.remove("active")

            input.addEventListener("keyup",()=>{
                let val = input.value.toLowerCase() 

                if(val.indexOf(h5.innerText) != -1){
                    h5.parentElement.style.display = "block"
                }
                else if(val == ""){
                    h5.parentElement.style.display = "block"
                }
                else{
                    h5.parentElement.style.display = "none"
                }
            })
        }
        })
})












// div.append(a)