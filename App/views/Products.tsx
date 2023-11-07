import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchForProduct, getListOfProduct} from '../service/productsService';
import {Searchbar, Text} from 'react-native-paper';
function Products({navigation}) {
  const [productList, setProductList] = useState<any>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [onLoadingError, setOnloadingError] = useState<boolean>(false);
  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };
  const fetchDataListOfSearchProduct = useCallback(async () => {
    setLoading(true);
    let data = await SearchForProduct(searchQuery);
    setProductList(data.products);
    setLoading(false);
  }, []);
  const fetchDataListOfProduct = useCallback(async () => {
    let data = await getListOfProduct();
    setProductList(data.products);
    console.log(data.products[0].images[0]);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchDataListOfProduct().catch(() => {
      console.error;
      setOnloadingError(true);
    });
  }, [fetchDataListOfProduct]);

  return onLoadingError ? (
    <View>
      <Text>Error while loadig data</Text>
    </View>
  ) : loading ? (
    <ActivityIndicator
      size="large"
      style={{alignItems: 'center', height: '100%'}}
    />
  ) : (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onEndEditing={fetchDataListOfSearchProduct}
        icon={{source: 'arrow-left', direction: 'auto'}}
      />
      <View style={styles.container}>
        <FlatList
          data={productList}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails', item)}>
                <View style={styles.row}>
                  <Image source={{uri: item.images[0]}} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.titleText}>${item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          )}
          contentContainerStyle={{
            flexGrow: 2,
          }}
          refreshing={loading}
          onRefresh={
            searchQuery ? fetchDataListOfSearchProduct : fetchDataListOfProduct
          }
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    alignItems: 'flex-start',
    width: 150,
    height: 150,
    margin: 1,
    resizeMode: 'contain',
  },
  titleText: {justifyContent: 'flex-start'},

  row: {
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  textContainer: {
    margin: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Products;
