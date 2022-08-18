const viewCart = document.querySelector(".cart")
const Cart = document.querySelector(".carts")

Cart.addEventListener("click", () => {
    if(viewCart.style.display === "none") {
        viewCart.style.display = "block";
    } else {
        viewCart.style.display = "none";
    }
})

// document.addEventListener("click", (event) => {
//     const Clicked = event.target;
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", (event) => {
            const Product = event.target.parentElement;
        let items = document.querySelector("span.item-count")
         parseInt(items.textContent)
         items.textContent ++
         console.log(items)
         const Cart = document.querySelector(".cart");
         const AddNew = document.createElement("div");
         AddNew.setAttribute("class", "added")

         const CartImage = document.createElement("img");
         CartImage.src = Product.querySelector("img").src;

         const Prodetails = document.createElement("div");

         const productName = document.createElement("h2");
         productName.innerHTML = Product.querySelector("h3").innerHTML;

         const price = document.createElement("p")
         price.innerHTML = Product.querySelector("span.price").textContent

         const Remove = document.createElement("button")
         Remove.innerHTML ='Remove'

         Prodetails.append(productName)
         Prodetails.append(price)
         Prodetails.append(Remove)

         AddNew.append(CartImage)
         AddNew.append(Prodetails)


         Cart.prepend(AddNew)
         button.innerHTML = "Remove from Cart"
         button.style.backgroundColor = "red"
         
        
        console.log(Product.querySelector("img").src)
        console.log(Product.querySelector("h3").innerHTML)
    } )
    })
        // })

   
    // console.log(Clicked.innerHTML)
// })