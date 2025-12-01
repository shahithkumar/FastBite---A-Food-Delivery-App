import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator, Paragraph, Title } from 'react-native-paper';
import FoodItem from '../../../components/food/food-item';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FoodHeaderItem from '../../../components/food/food-header-item';

import colors from '../../../constants/colors';
import useFetch from '../../../hooks/use-fetch';
import { useRoute } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function Overview(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <View style={styles.card}>
        <Title style={styles.card_title}>Description</Title>
        <Paragraph style={styles.card_text}>
          {props.item.description || "No description available for this item."}
        </Paragraph>
      </View>
      <View style={[styles.card, { marginTop: 15 }]}>
        <Title style={styles.card_title}>Nutrition</Title>
        <View style={styles.stat_row}>
          <Icon name="fire" color={colors.primary} size={20} />
          <Title style={styles.stat_text}>{props.item.calories} Calories</Title>
        </View>
      </View>
    </View>
  )
}

export default function FoodDetailScreen() {
  const route = useRoute();
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <FoodHeaderItem item={item} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.title_container}>
            <Title style={styles.food_name}>{item.name}</Title>
            <View style={styles.rating_badge}>
              <Icon name="star" color={colors.yellow} size={14} />
              <Title style={styles.rating_text}>4.8</Title>
            </View>
          </View>
          <Title style={styles.food_price}>${item.cost}.00</Title>
        </View>

        <View style={styles.tab_container}>
          <Tab.Navigator
            backBehavior={'none'}
            sceneContainerStyle={{ backgroundColor: colors.background }}
            tabBarOptions={{
              style: {
                elevation: 0,
                backgroundColor: colors.white,
                borderBottomWidth: 1,
                borderBottomColor: colors.lightgray,
              },
              labelStyle: {
                fontSize: 14,
                fontWeight: '700',
                textTransform: 'none',
              },
              activeTintColor: colors.primary,
              inactiveTintColor: colors.gray,
              indicatorStyle: {
                height: 3,
                backgroundColor: colors.primary,
                borderRadius: 1.5,
              },
            }}>
            <Tab.Screen name={"Overview"} key={"Overview"}>
              {() => <Overview item={item} />}
            </Tab.Screen>
            <Tab.Screen name={"Reviews"} key={"Reviews"}>
              {() => <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
                <Paragraph style={styles.card_text}>No reviews yet.</Paragraph>
              </View>}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
    marginTop: -30,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  title_container: {
    flex: 1,
  },
  food_name: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '800',
    color: colors.textMain,
  },
  rating_badge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating_text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray,
    marginLeft: 4,
  },
  food_price: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
  },
  tab_container: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  card_title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textMain,
    marginBottom: 10,
  },
  card_text: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  stat_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat_text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textMain,
    marginLeft: 10,
  },
});

