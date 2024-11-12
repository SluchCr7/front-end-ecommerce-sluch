'use client'
import React from 'react'
import { shopContext } from '../../Context/ShopContext'
import { useContext , useEffect , useState} from 'react'
import OrderDone from '@/app/Components/OrderDone'
const Page = () => {
  const {calcTotal, productCart  , delivery_fee, removeFromCart , NumProducts} = useContext(shopContext)
  const [productsCartArr, setProductsCartArr] = useState([])
  const [OrderMess , setOrderMess] = useState(false)
  useEffect(() => {
    const tempData = []
    for (let key in productCart) {
      for (let size in productCart[key]) {
        tempData.push({
          id: key,
          size: size,
          count: productCart[key][size]
        })
      }
    }
    setProductsCartArr(tempData)
  }, [productCart])
  const inputsData = [
    [
      {
        type: 'text',
        placeholder: 'First Name'
      },
      {
        type: 'text',
        placeholder: 'Last Name'
      }
    ],
    {
      type: 'text',
      placeholder: 'Email'
    },
    {
      type: 'text',
      placeholder: 'Address'
    },
    {
      type: 'text',
      placeholder: 'Phone'
    },
    [
      {
        type: 'text',
        placeholder: 'City'
      },
      {
        type: 'text',
        placeholder: 'Country'
      }
    ]
  ]
  return (
    <div className='relative flex flex-col lg:flex-row p-10 items-center w-full gap-5 justify-between'>
      {
        OrderMess && (
          <OrderDone setOrderMess={setOrderMess} OrderMess={OrderMess} />
        )
      }
      <div className=' w-[100%] lg:w-[60%] flex items-start flex-col gap-2'>
        <h1 className=' text_headlineLeft text-ModeOne-text dark:text-ModeTwo-text text-xl font-bold'>Delivery Information</h1>
        <div className='flex items-start flex-col gap-3'>
          <div className='flex flex-col lg:flex-row w-full items-center gap-3'>
            {
              inputsData[0].map((item, index) => {
                return (
                  <input key={index} type="text" className='w-full py-2 px-3 border bg-transparent text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-text dark:border-ModeTwo-text rounded-md' placeholder={item.placeholder} />
                )
              })
            }
          </div>
          <input type="email" className='w-full py-2 px-3 border bg-transparent text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-text dark:border-ModeTwo-text rounded-md' placeholder='Email' />
          <input type="phone" className='w-full py-2 px-3 border bg-transparent text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-text dark:border-ModeTwo-text rounded-md' placeholder='Phone' />
          <input type="text" className='w-full py-2 px-3 border bg-transparent text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-text dark:border-ModeTwo-text rounded-md' placeholder='Address' />
          <div className='flex flex-col lg:flex-row w-full items-center gap-3'>
            {
              inputsData[4].map((item, index) => {
                return (
                  <input key={index} type="text" className='w-full py-2 px-3 border bg-transparent text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-text dark:border-ModeTwo-text rounded-md' placeholder={item.placeholder} />
                )
              })
            }
          </div>
        </div>
      </div>
      {
        NumProducts > 0 ?
        <div className='w-[100%] lg:w-[40%] flex items-start flex-col gap-2'>
          <h1 className=' text_headlineLeft text-ModeOne-text dark:text-ModeTwo-text text-xl font-bold'>Order Summary</h1>
          <div className='flex items-start w-full flex-col gap-4'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>Subtotal</span>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>
                ${calcTotal(productsCartArr)}
              </span>
            </div>
            <div className='flex w-full items-center justify-between'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>Delivery Fee</span>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>${delivery_fee}</span>
            </div>
            <div className='flex w-full items-center justify-between'>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>Total</span>
              <span className='text-ModeOne-text dark:text-ModeTwo-text'>${calcTotal(productsCartArr) + delivery_fee}</span>
            </div>
          </div>
          <button onClick={() => setOrderMess(true)} className='border-[1px] border-ModeOne-text dark:border-ModeTwo-text my-4 px-2 py-1 w-[70%] text-ModeOne-text dark:text-ModeTwo-text rounded-md'>Place Order</button>
        </div>
        
        :
          <>
          </>
      }
    </div>
  )
}

export default Page