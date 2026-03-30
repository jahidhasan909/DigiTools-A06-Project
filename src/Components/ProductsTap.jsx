import React from 'react';
import Card from './Card';

const ProductsTap = ({ data,setSelectCart,selectCart }) => {



    return (
        <div className='grid grid-cols-3 container mx-auto gap-3 px-36 mt-5'>
            {
                data.map(details => {
                    return (
                        <Card details={details} selectCart={selectCart} setSelectCart={setSelectCart}  ></Card>
                    )
                })
            }
        </div>
    );
};

export default ProductsTap;