export type ProductsType={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{rate:number,count:number}
}

export type StoreDataType={
    search:string,
    products:ProductsType[],
    finalProductToShow:ProductsType[]
}

export type DummyProductType={
id:number,
title:string,
description:string,
price:number,
discountPercentage:number,
rating:number,
stock:number,
brand:string,
category:string,
thumbnail:string,
images:string[]
}