import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState([ "bleach"]);

  const onAddCategory = (newCategory) => {

    if(Categories.includes (newCategory) ) return ;

    console.log(newCategory)
    setCategories([newCategory,...Categories]);
  };

  console.log(Categories);
  return (
    <>
    
      <h1>GifExpertApp</h1>
    
      <AddCategory 
      //setCategories={ setCategories }
      onNewCategory={ event  => onAddCategory(event)}
      />
      
     

      { 
          Categories.map( ( category ) => (
          <GifGrid  key={ category } category={ category }/>
          ))    
          
          }
     
     
      
      
      
    </>
  );
};
