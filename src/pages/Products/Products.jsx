import React from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router'
import{useState} from "react";
export const Products = () => {
  const catId=parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000)
  const [sort,setSort]=useState(null);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItems'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type="checkbox"  id="1" value={1}></input>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox"  id="2" value={2}></input>
            <label htmlFor='1'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox"  id="3" value={3}></input>
            <label htmlFor='1'>Coats</label>
          </div>
        </div>
        <div className='filterItems'>
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItems'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}></input>
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className='inputItem'>
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}></input>
            <label htmlFor='desc'>Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img  classNme="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1100" style={{width:"100%", height:500}}
                    alt=""/>
      <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
export default Products