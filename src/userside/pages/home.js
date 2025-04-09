import Carsol from '../homepagecomponents/carosel'
import Industry from '../homepagecomponents/industry'
import ProductShow from '../homepagecomponents/productshow'
import ProductCategories from '../homepagecomponents/productcatagory';
import Footer from "../homepagecomponents/Footer"
import './home.css'

export default function Home() { 
    return (
        <div>
            <Carsol />
            <Industry />
            <ProductShow />
            <ProductCategories />
            <Footer />
        </div>
    );
}
