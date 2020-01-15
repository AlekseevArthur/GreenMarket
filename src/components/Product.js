import state from '../state'

let newState = state.getState()

export default class Product{
    constructor(container){
        this.container = document.getElementById(container)
        this.createProductPage()
    }

    createProductPage(){
        let {product} = newState
        console.log(this)
        let page = document.createElement('div')
        page.setAttribute('class','product-page')

        let image = document.createElement('img')
        image.setAttribute('class','product-image')
        image.setAttribute('src',product.image)

        let content=document.createElement('div')
        content.setAttribute('class','product-content')

        let name=document.createElement('div')
        name.setAttribute('class','product-name')
        name.innerHTML = product.name

        let price=document.createElement('div')
        price.setAttribute('class','product-price')
        price.innerHTML ='$ ' + product.price

        let dis=document.createElement('div')
        dis.setAttribute('class','product-dis')
        dis.innerHTML = product.fullDis

        let btn=document.createElement('div')
        btn.setAttribute('class','product-btn')
        btn.innerHTML = 'Add to cart'
        btn.addEventListener('click',()=>this.addToCart(product))

        content.appendChild(name)
        content.appendChild(price)
        content.appendChild(dis)
        content.appendChild(btn)

        page.appendChild(image)
        page.appendChild(content)

        this.container.appendChild(page)

    }

    addToCart(product){  
        product.quantity=1
        for(let i=0;i<newState.cart.length;i++){
            if(newState.cart[i].id===product.id){
                newState.cart[i].quantity++
                state.setState(newState)
                return
            }
        }
           newState.cart.push(product)
           state.setState(newState)
    }
}