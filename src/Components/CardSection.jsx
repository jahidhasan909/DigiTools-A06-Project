import React, { useState } from 'react';
import ProductsTap from './ProductsTap';
import CartTap from './CartTap';

const CardSection = () => {


    const [selectType, setSelectType] = useState('products')

    return (
        <div className='mt-20 space-y-3'>
            <h1 className='text-center font-bold text-4xl'>Premium Digital Tools</h1>
            <p className='text-center text-neutral/50'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center items-center'>
                <button onClick={() => setSelectType('products')} className={`btn rounded-3xl  ${selectType === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}>Products</button>
                <button onClick={() => setSelectType('Cart')} className={`
                ${selectType === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}
                    btn rounded-3xl `}>Cart (2)</button>
            </div>
            {selectType === 'products' ? 
            <ProductsTap></ProductsTap> : 
            <CartTap></CartTap>}
        </div>
    );
};

export default CardSection;