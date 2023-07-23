import React from "react";
import products from "../../data/products";

import './ProductsTable.css'

export default (props) => {
    function getRows() {
        return products.map((product, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R${product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    );

}
