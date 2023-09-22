import React, { useEffect, useState } from 'react'
import styles from "./LatestTrends.module.css"
import Card from './Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProducts } from '../../redux/productsSlice'
import PopularSkeleton from '../Skeleton/Popular Skeleton/PopularSkeleton'
import SuggestionSkeleton from '../Skeleton/Suggestions Skeleton/SuggestionSkeleton'
import { ProductsType, StoreDataType } from '../../types/types'
import NoResultFound from '../No Result Found/NoResultFound'
import productData from '../Dummy/DummyDataForProducts'

const LatestTrends = () => {
    let skeletonArray=new Array(5).fill(2)
    const navigate=useNavigate()
    const[latestTrendData,setLatestTrendData]=useState<ProductsType[]>([])
    const[isSearching,setIsSearching]=useState(false)
    const [dataToShow,setDataToShow]=useState<ProductsType[]>([])
    const searchData=useSelector((state:StoreDataType)=>state?.search)
    const dispatch=useDispatch()
// console.log("latestTrendData",latestTrendData)


//GENTING LATEST TRENDS PRODUCT LIST FROM FAKE API
    useEffect(()=>{
        const fetchTrendData=async()=>{
            setIsSearching(true)
            try {
                const data=await fetch("https://fakestoreapi.com/products/")
                const res=await data.json()
                // console.log("res",res)
                setLatestTrendData(res)
                dispatch(setProducts(res))
                setIsSearching(false)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log("error", error.message);
                    setLatestTrendData(productData)
                    dispatch(setProducts(productData))
                    setIsSearching(false)
                } else {
                    console.log("error", error);
                    setLatestTrendData(productData)
                    dispatch(setProducts(productData))
                    setIsSearching(false)
                }
              
            }
        }
fetchTrendData()
// eslint-disable-next-line
    },[])

    useEffect(()=>{
        setIsSearching(true)
        if(searchData===""){setDataToShow(latestTrendData);setIsSearching(false)}
        if(searchData!==""){
            let timerId
            if(timerId){clearTimeout(timerId)}
          
                timerId=setTimeout(()=>{
                    handleSearch()
                },1000)
            
        }
        // eslint-disable-next-line
    },[searchData,latestTrendData])


    //WHEN SEARCH SHOW MATCHED NAME DATA
function handleSearch(){
    const newData=latestTrendData.filter((data)=>{return data?.title.toLowerCase().includes(searchData.toLowerCase())}).filter((dat)=>{return dat.category==="women's clothing"})
    setDataToShow(newData)
    setIsSearching(false)
}

  return (
   
    <section className={styles.outerCont}>
        <h1 className={styles.title}>Latest Trends</h1>
        <div className={styles.cardCont}>
        {latestTrendData.length===0&&skeletonArray.map((item,idx)=>{return <PopularSkeleton key={idx}/>})}
        {latestTrendData.length!==0&&dataToShow.length===0&&!isSearching&&<NoResultFound/>}
        {
            dataToShow.filter((dat)=>{return dat.category==="women's clothing"}).slice(0,6).map((data)=>{
        return <>
            <Card data={data}/>
        </>
    })
    }
        </div>

        <h1 className={styles.text}>Popular suggestions</h1>
        <div className={styles.suggestionCont}>
        {latestTrendData.length===0&&skeletonArray.map((item,idx)=>{return <SuggestionSkeleton key={idx}/>})}
        {latestTrendData.slice(0,5).map((item)=>{
            return <p onClick={()=>navigate("/products")} key={item.id} className={styles.desc}>{item?.title}</p>
        })}
        </div>
    </section>
  )
}

export default LatestTrends