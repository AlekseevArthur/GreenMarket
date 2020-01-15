import { products } from "../state/products";
import Catalog from "../components/Catalog";
import Search from "../components/Search";
import headerSet from '../components/Header'
headerSet()
new Search({ container: "search-container", input: "header-input" });

let catalog = new Catalog({ container: "catalog-container", products });

let filters = {};

//fiter

function onChange() {
  filters[this.name] = this.value;
  let newCatalog = [];
  let treeSection = document.getElementsByClassName("tree-section")[0];
  let plantSection = document.getElementsByClassName("plant-section")[0];
  if (filters.category === "trees") {
    treeSection.style.display = "block";
    plantSection.style.display = "none";
  } else if (filters.category === "plants") {
    treeSection.style.display = "none";
    plantSection.style.display = "block";
  }else if (!filters.category) {
    treeSection.style.display = "none";
    plantSection.style.display = "none";
    filters ={}
    catalog.createCatalogList(products)
    return
  }

 newCatalog = products.filter(el=>el[this.name]===filters[this.name])
  catalog.createCatalogList(newCatalog)
 return newCatalog

}

let checkboxs = document.getElementsByClassName("filter-checkbox");
for (let i = 0; i < checkboxs.length; i++) {
  checkboxs[i].addEventListener("change", onChange);
}

function filterProducts() {}
