import state from '../state'


let newState =state.getState()

export default class Catalog{
    constructor(data){
        this.container = document.getElementById(data.container)
        this.products = data.products
        this.filter = []
        this.createCatalogList(this.products)
    }

    createFilter(){
        let filter =document.createElement('div')
        filter.setAttribute('class','card filter')
        return  filter
    }

    createCatalogList(products){
        this.container.innerHTML =''
        let listContainer = document.createElement('div')
        //listContainer.appendChild(this.createFilter())
        for(let i=0;i<products.length;i++){
            listContainer.appendChild(this.createProductCard (products[i]))
        }
        
        this.container.appendChild(listContainer)
    }

    createProductCard (product){
        let productCard = document.createElement('div')

        productCard.setAttribute('class','card')
        productCard.addEventListener('click',()=>this.openProductPage(product))

        let topsection = document.createElement('div')
        topsection.setAttribute('class','top-section')

        let image =  document.createElement('img')
        image.setAttribute('class','image-container')
        image.setAttribute('src',product.image)

        let price = document.createElement('div')
        price.setAttribute('class','price')
        price.innerHTML ='$ '+ product.price

        topsection.appendChild(image)
        topsection.appendChild(price)

        productCard.appendChild(topsection)

        let productinfo = document.createElement('div')
        productinfo.setAttribute('class','product-info')

        let name = document.createElement('a')
        name.setAttribute('href','product.html')
        name.setAttribute('class','name')
        name.innerHTML = product.name

        let dis = document.createElement('div')
        dis.setAttribute('class','dis')
        dis.innerHTML = product.dis

        let toCart = document.createElement('div')
        toCart.setAttribute('class','btn1')
        toCart.addEventListener('click',()=>this.addToCart(product))
        toCart.innerHTML = 'Add to cart'

        productinfo.appendChild(name)
        productinfo.appendChild(dis)
        productinfo.appendChild(toCart)

        productCard.appendChild(productinfo)

        return productCard
    }

    openProductPage(product){
        console.log('hi')
        newState.product = product
        state.setState(newState)
        window.location = 'product.html'
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
            console.log('break?')

           newState.cart.push(product)
           state.setState(newState)
    }


}