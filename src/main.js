import Slider from './components/Slider'
import {mainSliderContent} from './fakeServerRes'
import headerSet from './components/Header'
import Search from "./components/Search";

new Search({ container: "search-container", input: "header-input" });

headerSet()
let slider = new Slider({container:'slider-container',...mainSliderContent,name:'main'})


