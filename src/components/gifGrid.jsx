
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifItem} from './GifItem'

export const GifGrid = ( {category} ) => {
 //useEfect es para disparar efectos secundarios

 const { images,isLoanding } =useFetchGifs( category);

  



    return (
    <>
        <h3>{ category }</h3>
        {
            isLoanding && ( <h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {/* imagenes.map*/}
         
        
               { 
                images.map( ( image ) => (
                 
                 <GifItem key={image.id } { ...image }  />

                ))    
          
                }
          
       </div>







      </>
  )
}
