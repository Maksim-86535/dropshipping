import type { IProduct } from "../../Api/Product";
import './Product.css';


interface IProps {
    product: IProduct
};

const Product = ({product}: IProps) => {
    return(
        <div className="Product shadow">
            <div className="photo-conteiner">
                <img className="photo" src={product.photo[0]} />
            </div>
            <p className="medium-text">{product.title}</p>
            <p className="medium-text">{product.price} грн</p>
            <div style={{display: "b"}}>
                <p className="small-text description">{product.descriptions}</p>
            </div>
        </div>
    );
}

export default Product;
