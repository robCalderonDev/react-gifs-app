
export const getGifs = async(category) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=MVQze8BSmNnD07NcSa2mn1GRsBwGZO2q&q=${category}&limit=5`;
    //espera que se resiva la respuesta 
   
    const resp = await fetch( url );
    
    const { data } = await resp.json();
  
    const gifs = data.map( img =>{
     return{
       id: img.id,
       title:img.title,
       url:img.images.downsized_medium.url
     }
    })
   
    return gifs;
    
   }