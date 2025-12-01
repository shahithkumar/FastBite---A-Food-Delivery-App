import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FoodItem from '../../../components/food/food-item';
import RestaurantHeaderItem from '../../../components/restaurant/restaurant-header-item';
import colors from '../../../constants/colors';
import useFetch from '../../../hooks/use-fetch';
import { useRoute } from '@react-navigation/native';

export default function RestaurantDetailScreen() {
  const route = useRoute();
  const item = route.params.item;

  const params = {
    endpoint: `restaurants/${item.id}/foods`,
    method: "GET",
    auth: true
  }

  const { status, data } = useFetch(params);

  if (status == "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.background }}>
        <ActivityIndicator color={colors.primary} size={"large"} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <RestaurantHeaderItem item={item} />
      <View style={styles.content}>
        <View style={styles.food_list_header}>
          <Title style={styles.food_list_title}>Popular Dishes</Title>
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list_content}
          keyExtractor={item => item.id.toString()}
          renderItem={item => (
            <FoodItem data={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.background,
    marginTop: -30,
    paddingTop: 10,
  },
  food_list_header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  food_list_title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textMain,
  },
  list_content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
});

