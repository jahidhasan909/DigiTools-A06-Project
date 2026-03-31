import React, { use, useState } from 'react';
import ProductsTap from './ProductsTap';
import CartTap from './CartTap';

const CardSection = ({ fillterData, selectCart, setSelectCart }) => {
    const data = use(fillterData);


    const [selectType, setSelectType] = useState('products')


    return (
        <div className='mt-26 space-y-3'>
            <h1 className='text-center font-bold text-2xl md:text-[38px]'>Premium Digital Tools</h1>
            <p className='text-center text-neutral/50 text-[0.70rem] md:text-[0.90rem]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center items-center'>
                <button onClick={() => setSelectType('products')} className={`btn rounded-3xl  ${selectType === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`}>Products</button>
                <button onClick={() => setSelectType('Cart')} className={`
                ${selectType === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}
                    btn rounded-3xl `}>Cart ({selectCart.length})</button>
            </div>
            {selectType === 'products' ?
                <ProductsTap data={data} selectCart={selectCart} setSelectCart={setSelectCart}></ProductsTap> :
                <CartTap selectCart={selectCart} setSelectCart={setSelectCart}></CartTap>}
        </div>
    );
};

export default CardSection;