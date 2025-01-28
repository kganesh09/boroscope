import Carsol from '../homepagecomponents/carosel'
import Industry from '../homepagecomponents/industry'
import ProductShow from '../homepagecomponents/productshow'
import ProductCategories from '../homepagecomponents/productcatagory';
import './home.css'

export default function Home() { 
    return (
        <div>
            <Carsol />
            <Industry />
            <ProductShow />
            <ProductCategories />
        </div>
    );
}
