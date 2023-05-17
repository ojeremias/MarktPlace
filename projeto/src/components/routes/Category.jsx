import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <h1>Categoria de produtos</h1>
            <p>
                <Link to="/category/brinquedos">Brinquedos</Link>
            </p>
        </div>
    )
}

export default Category;