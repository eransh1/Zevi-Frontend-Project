import { useState } from 'react'
import styles from "./ProductsCont.module.css"
import Card from './Card/Card'
import ProductsSkeleton from '../Skeleton/Products Skeleton/ProductsSkeleton'
import { ProductsType } from '../../types/types'
import NoResultFound from '../No Result Found/NoResultFound'

type ProductsPropsType={
  products:ProductsType[],
  isExpanded:boolean,
  isSearching:boolean
}
let skeletonArray=new Array(4).fill(2)


const ProductsCont = ({products,isExpanded,isSearching}:ProductsPropsType) => {
    const[favCont,setFavCont]=useState<number[]>([])
console.log("isSearching",isSearching)
    const handleFavContClick=(id:number)=>{
        let tempFav=favCont
        if(tempFav.includes(id)){
            let arr=tempFav.filter((data)=>{return data!==id})
            setFavCont(arr)
            return
        }
        setFavCont((p)=>{return [...p,id]})
    }
  return (
    <section style={{left:isExpanded?"10rem":"",width:isExpanded?"55%":""}} className={styles.outerCont}>
    {products.length===0&&isSearching&&skeletonArray.map((item,idx)=>{return <ProductsSkeleton key={idx}/>})}
    {products.length===0&&!isSearching&&<><NoResultFound/></>}
    {products.map((card:ProductsType)=>{
        return <Card data={card} favCont={favCont} handleLikeIconClick={handleFavContClick}/>
    })}
    </section>
  )
}

export default ProductsCont