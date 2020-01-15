import Product from '../components/Product'
import Search from "../components/Search";
import headerSet from '../components/Header'
headerSet()
new Search({ container: "search-container", input: "header-input" });

new Product('product-container')

