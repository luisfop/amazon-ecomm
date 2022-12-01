import React, { useState } from 'react'
import css from './Products.module.css'

import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {

    const [parent] = useAutoAnimate()

    const [menuData, setMenuData] = useState<any>(ProductsData);

    const filterProducs = (type) => {
        setMenuData(ProductsData.filter((product: any) => product.type === type));
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>



            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => setMenuData(ProductsData)}>All</li>
                    <li onClick={() => filterProducs("skin care")}>Skin Care</li>
                    <li onClick={() => filterProducs("conditioner")}> Conditioners</li>
                    <li onClick={() => filterProducs("foundation")}> Foundations</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {menuData.map((product: any, index: number) => (
                        <div className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}</span>
                                <div>Show now!</div>
                            </div>

                            <img src={product.img} alt="" className="img-p" />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Products
