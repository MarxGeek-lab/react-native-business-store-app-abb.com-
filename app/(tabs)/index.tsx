import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TileProduct from '@/constants/Tile/Tile';

export default function HomeScreen() {

  const data = [
    { img: require('@/assets/images/catalogue/pagne3.webp'), name: 'Product', price: 1200 },
    { img: require('@/assets/images/catalogue/pagne2.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/pagne.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame2.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame3.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame7.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame5.webp'), name: 'Product 2', price: 1200 },
    { img: require('@/assets/images/catalogue/dame6.webp'), name: 'Product 2', price: 1200 },
  ]
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.collectionProduct}>
        <ThemedText type="titleSection" style={styles.titleSection}>Notre Collection</ThemedText>
        <ThemedView style={styles.gridProduct}>
          {data.map((list, index) => {
            const { img, name, price } = list;
            return <TileProduct img={img} name={name} price={price} key={index} />
          })}
        </ThemedView>  
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  collectionProduct: {
    flexDirection: 'column',
    marginBottom: 8,
    width: '100%'
  },
  titleSection: {
    marginBottom: 20
  },
  gridProduct: {
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 30
  },
});
