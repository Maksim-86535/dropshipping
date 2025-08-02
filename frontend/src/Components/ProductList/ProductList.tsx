import type { IProduct } from "../../Api/Product";
import Product from "../Product/Product";
import './ProductList.css';


interface IProps {
    products: IProduct[]
}

const ProductList = ({products}: IProps) => {
    return(
        <div className="ProductList">
            {products.map(product => (
                <Product product={product} />
            ))}
        </div>
    );
}

export default ProductList;
