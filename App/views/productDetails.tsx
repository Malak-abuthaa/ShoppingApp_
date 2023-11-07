import React from 'react';
import {Card, Text} from 'react-native-paper';
function ProductDetails({route, navigation}) {
  const product = route.params;
  return (
    <Card>
      <Card.Cover resizeMode={'center'} source={{uri: product.images[0]}} />

      <Card.Content>
        <Text variant="titleLarge">{product.title}</Text>
        <Text variant="bodyMedium">${product.price}</Text>
        <Text>Category: {product.category}</Text>
        <Text>Brand: {product.brand}</Text>
        <Text>description: {product.description}</Text>
        <Text>rating: {product.rating}</Text>
      </Card.Content>
    </Card>
  );
}

export default ProductDetails;
