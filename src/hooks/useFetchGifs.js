import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
 //un hook es una funcion que regresa algo nada más
  const [images, setImages] = useState([]);
  const [isLoanding,seIsLoanding] = useState( true )



   const getImages = async () =>{

     const newImages = await getGifs(category);
     setImages(newImages);
     seIsLoanding(false);
   }
   useEffect(()=>{
     getImages();
    
   }, [] )


 
    return {
        images,
        isLoanding
    }
}
