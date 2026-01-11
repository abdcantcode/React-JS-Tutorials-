import React, { useContext } from 'react';
import { ProductContextProvider } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const data = useContext(ProductContextProvider);
  const { id } = useParams();

  console.log(id);

  let selectedData=data.find((elem)=>elem.id==id)

  console.log(selectedData);

  return (
    
    <div className='product'>
            <img src={selectedData.image} alt="" />
          <h1>{selectedData.title}</h1>
    </div>
  );
};

export default ProductDetails;
