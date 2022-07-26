import { useState } from "react";

//este componente es un imput que buscara a los gif que ingresemos
export const AddCategory = ({ onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //console.log(target.value)
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return ;
    //setCategories( Categories =>[inputValue,...Categories])
    setInputValue('')
    onNewCategory(inputValue.trim())
   
   
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
