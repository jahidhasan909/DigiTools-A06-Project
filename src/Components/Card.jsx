import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Card = ({ details, setSelectCart, selectCart }) => {


    const [buyNowClick, setBuyNowClick] = useState(false)
    const handleBuyNow = () => {
        setBuyNowClick(true)
        setSelectCart([...selectCart, details])
        toast.success('Added to cart successful')
    }
    return (

        <div className="bg-base-100 w-80 h-[360px]  shadow-sm rounded-xl p-5 space-y-3">
            <div className='flex justify-between items-center'>
                <img src={details.icon} alt="" />
                <span className={`badge 
                    ${details.tag === 'Best Seller' ?
                        'bg-amber-100 text-orange-700' :
                        details.tag === 'New' ? 'bg-green-200 text-green-800' : 'bg-purple-200 text-purple-500'}`}>{details.tag}</span>
            </div>
            <div className="">
                <h2 className="text-xl font-semibold">{details.name}</h2>
                <p className='text-[0.75rem] text-neutral/50'>{details.description}</p>
            </div>
            <div className='flex items-center'>
                <h1 className='text-2xl font-semibold'>${details.price}</h1>
                /<p className='text-neutral/50'>{details.period}</p>
            </div>
            <ul className=''>{
                details.features.map((fe, index) => <li key={index} className='flex items-center gap-2 text-neutral/50'><FaCheck className='text-green-500' />{fe}</li>)
            }
            </ul>
            <button
                type='button'
                onClick={handleBuyNow}
                disabled={buyNowClick === true ? true : false}
                className={`btn 
            ${buyNowClick === true ? 'bg-green-600 text-white' :
                        'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} 
            rounded-3xl w-full `}>
                {buyNowClick === true ?
                    ' Added to Cart' :
                    'Buy Now'}</button>
        </div>

    );
};

export default Card;