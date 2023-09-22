import React, { useEffect, useState } from 'react'
import styles from "./Dummy.module.css"
import { DummyProductType } from '../../types/types'

const Dummy = () => {
    const [prod,setProd]=useState<DummyProductType[]>([])
    const[page,setPage]=useState(0)
    const[temp,setTemp]=useState(false)
    console.log("temp",temp)
    console.log("page",page)

    const fetchData=async()=>{
if(temp){return}
        const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`)
        const res=await data.json()
        setProd((p)=>{
            return [...p,...res.products]
        })
        setPage(page+1)
        setTemp(false)

    }

    useEffect(()=>{        
fetchData()
    },[])


 if(document.querySelector("#dummyCont")){  
document.querySelector("#dummyCont")?.addEventListener("scroll",()=>{
    
    let obj=document.querySelector("#dummyCont") as HTMLElement | null
    console.log("obj.scrollTop",obj?.scrollTop)
    if(obj && Math.floor(obj?.scrollTop) === Math.floor(obj?.scrollHeight - obj?.offsetHeight))
{console.log("reached end")
if(!temp){
    fetchData()
}

setTemp(true)

}

})
} 
 


  return (
    <div id='dummyCont' className={styles.dummyCont} style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
       {prod.length>0&&prod.map((data)=>{
        return <>
            <div key={data?.id} className={styles.card}>
                <h1>{data?.title}</h1>
                <p>{data?.description}</p>
            </div>
        </>
       })} 
    </div>
  )
}

export default Dummy