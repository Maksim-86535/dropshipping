import ProductList from '../../Components/ProductList/ProductList';
import'./MainPage.css';
import { Products, type IProduct } from '../../Api/Product';

const MainPage = () => {
    const products: IProduct[] = Products.get();
    
    return(
        <>
            <ProductList 
                products={products}
            />
        </>
    );
};

export default MainPage;
