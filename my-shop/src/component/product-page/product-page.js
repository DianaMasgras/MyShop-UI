import React, { useEffect, useState } from "react";
import ProductRestService from "../../service/product-rest-service";
import {
    useParams,
} from "react-router-dom";

function ProductPage(props) {
    const [product, setProduct] = useState({});
    let params = useParams();

    useEffect(async () => {
        const response = await ProductRestService.getProductById(params.id);
        const product = response.data[0];
        setProduct(product);
        console.log(product);
    }, [])
    console.log('hello', params.id);
    
    if (!product) {
        return (<p>nu exista</p>)
    }
    else {
        return (
            <div >
                <h1>{product.name}</h1>
            </div>
        )
    }
     

}
export default ProductPage;
