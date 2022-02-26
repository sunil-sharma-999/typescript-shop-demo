import React from 'react';
import { Wrapper } from './Item.styles';
import { ItemProps } from '../../types/types';
import { Button } from '@material-ui/core';

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper style={{ minHeight: 'max-content' }}>
      <img src={item.image} alt={item.title} />
      <div
        style={{
          display: 'grid',
          alignContent: 'flex-start',
        }}>
        <h3 style={{ justifySelf: 'flex-end', margin: '0' }}>
          {item.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h3>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
