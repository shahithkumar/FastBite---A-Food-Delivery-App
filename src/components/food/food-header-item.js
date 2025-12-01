import * as React from 'react';
import { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native';
import AppBar from '../common/app-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartContext } from '../../providers/CartContext';

export default function FoodHeaderItem(props) {
  const { addToCart } = useContext(CartContext);
  const item = props.item;
  const [favorite, setFavorite] = useState(false)
  const [count, setCount] = useState(1);
  const route = useRoute();

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    if (count != 1) {
      setCount(count - 1)
    }
  }

  function addToCart_() {
    let order = { ...item };
    order.count = count;
    addToCart(order)
  }

  return (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.item}
    >
      <View style={styles.overlay}>
        <AppBar favorite={favorite} setFavorite={setFavorite} screenName={route.name} title={item.name} />

        <View style={styles.bottom_row}>
          <View style={styles.quantity_selector}>
            <TouchableOpacity style={styles.qty_btn} onPress={countDown}>
              <Title style={styles.qty_btn_text}>−</Title>
            </TouchableOpacity>
            <Title style={styles.qty_value}>{count}</Title>
            <TouchableOpacity style={styles.qty_btn} onPress={countUp}>
              <Title style={styles.qty_btn_text}>+</Title>
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            contentStyle={styles.cart_btn_content}
            style={styles.cart_btn}
            color={colors.primary}
            onPress={addToCart_}
          >
            Add to Cart
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 350,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  bottom_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  quantity_selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 48,
    width: 120,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  qty_btn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qty_btn_text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textMain,
  },
  qty_value: {
    fontSize: 18,
    fontWeight: '800',
    minWidth: 20,
    textAlign: 'center',
    color: colors.textMain,
  },
  cart_btn: {
    borderRadius: 30,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cart_btn_content: {
    height: 48,
    paddingHorizontal: 20,
  },
});

