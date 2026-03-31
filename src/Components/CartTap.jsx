import React from 'react';
import { toast } from 'react-toastify';

const CartTap = ({ selectCart, setSelectCart }) => {



    const handleRemove = (details) => {
        const fillterDatas = selectCart.filter((select => select.id !== details.id))
        setSelectCart(fillterDatas)
        toast.error('Remove Cart')
    }
    const handleChecout = () => {
        setSelectCart([])
        toast.success('Proceed to Checkout successful')
    }

    return (
        <div className='container mx-auto bg-base-300 p-5 rounded-md'>
            <h2 className='text-xl font-semibold'>Your Cart</h2>
            {selectCart.length === 0 ?
                <div className='py-10'>
                    <img className='w-60 h-52  mx-auto' src="https://i.ibb.co.com/XkrcpC6R/5166615.png" alt="" />
                    <p className='text-center text-neutral/50'>Your cart is empty</p>
                </div> :
                <div className=' space-y-4'>
                    {
                        selectCart.map(details => {
                            return (
                                <div className='flex justify-between items-center bg-base-200 rounded-2xl p-3'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-14 rounded-md h-14 bg-white p-3' src={details.icon} alt="" />
                                        <div>
                                            <h1>{details.name}</h1>
                                            <p className='text-neutral/50'>${details.price}</p>
                                        </div>
                                    </div>
                                    <p onClick={() => handleRemove(details)} className='text-red-400 btn'>Remove</p>

                                </div>
                            )
                        })
                    }
                </div>
            }

            <div className='flex justify-between'>
                <h3>Total:</h3>
                <h3 className='font-semibold'>$
                    {selectCart.reduce((total, items) => total + items.price, 0)}
                </h3>
            </div>
            {selectCart.length === 0 ? '' : <button onClick={handleChecout} className='btn w-full rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button>}
        </div>
    );
};

export default CartTap;