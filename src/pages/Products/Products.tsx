import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/SearchBar/Searchbar'
import styles from "./Products.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductsCont from '../../components/Products Container/ProductsCont'
import {TbSquareRoundedChevronRightFilled} from "react-icons/tb"
import { useDispatch } from 'react-redux'
import { setProducts } from '../../redux/productsSlice'
import { ProductsType } from '../../types/types'
import productData from '../../components/Dummy/DummyDataForProducts'
const Products = () => {
  const[isSearching,setIsSearching]=useState(false)
  const[dataToShow,setDataToShow]=useState<ProductsType[]>([])
  // eslint-disable-next-line
  const[searchBarClicked,setIsSearhBarClicked]=useState(false)
  const[isExpanded,setIsExpanded]=useState(false)
  const dispatch=useDispatch()

useEffect(()=>{
  const fetchTrendData=async()=>{
    try {
        const data=await fetch("https://fakestoreapi.com/products/")
        const res=await data.json()
        dispatch(setProducts(res))
        setDataToShow(res)
    } catch (error:unknown) {
      if (error instanceof Error) {
        console.log("error", error.message);
        
        dispatch(setProducts(productData))
        setDataToShow(productData)
    } else {
        console.log("error", error);
        
        dispatch(setProducts(productData))
        setDataToShow(productData)
    }
        
    }
}
fetchTrendData()
// eslint-disable-next-line
},[])

  return (
    <>
    <Navbar/>
    <div className={styles.searchCont}><Searchbar setIsSearchBarClicked={setIsSearhBarClicked}/></div>
    <h1 className={styles.searchText}>Search Results</h1>
    <div className={styles.outerCont}>
    <Sidebar setDataToShow={setDataToShow} isExpanded={isExpanded} setIsSearching={setIsSearching}/>
    <TbSquareRoundedChevronRightFilled style={{transform:isExpanded?"translateX(0)":""}} onClick={()=>setIsExpanded(e=>!e)} className={styles.expandIcon}/>
    <ProductsCont products={dataToShow} isExpanded={isExpanded} isSearching={isSearching}/>

    </div>
    
    </>
  )
}

export default Products