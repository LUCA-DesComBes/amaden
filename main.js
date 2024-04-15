import '/style.css'
import { getItems } from "./items.js"
 
const availableItems = document.querySelector("#available-items");
const cart = document.getElementById('cartList')

const cartItems = [];

getItems().then((data) => {
    console.log(data);
    for(let items of data){
        console.log(items);
        const listItem = document.createElement("li");
        listItem.classList.add("item")
        listItem.innerHTML = `
            <img src="${items.imageUrl}" alt="${items.name}"/>
            <h3>${items.name}</h3>
            <p>${items.price} €</p>
            <button>Add to cart</button>
        `
        availableItems.appendChild(listItem);
        const btnItem = listItem.querySelector("button")
        btnItem.addEventListener("click", () => {
            cartItems.push(items)
            let tmp = "";
            for(let article of cartItems){
                const listCart = document.createElement("li");
                listCart.classList.add("cart-item")
                let html =  `
                <li class="cart-item">
                <h3>${article.name}</h3>
                <p>${article.price} €</p>
                <button>Remove to cart</button>
                </li>
                ` 
                tmp += html;
            }
            cart.innerHTML = tmp
        })
    }
})