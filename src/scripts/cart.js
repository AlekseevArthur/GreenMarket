import state from "../state";
import Cart from "../components/Cart";
import Search from "../components/Search";
import headerSet from '../components/Header'
headerSet()
new Search({ container: "search-container", input: "header-input" });

let thisState = state.getState()

let cart = new Cart({ container: "cart-container", products: thisState.cart });
