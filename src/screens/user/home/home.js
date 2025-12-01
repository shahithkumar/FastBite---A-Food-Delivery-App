import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Title } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foods from '../../../components/food/foods';
import Restaurants from '../../../components/restaurant/restaurants';
import colors from '../../../constants/colors';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.title}>Let's Find</Title>
          <Headline style={styles.subtitle}>Something to Eat.</Headline>
        </View>
        <Tab.Navigator
          lazy={true}
          backBehavior={'none'}
          style={{ flex: 3 }}
          sceneContainerStyle={{
            paddingHorizontal: 20,
            backgroundColor: colors.background
          }}
          tabBarOptions={{
            showIcon: true,
            tabStyle: {
              flexDirection: "row",
              paddingVertical: 10,
            },
            style: {
              elevation: 0,
              backgroundColor: colors.background,
              borderBottomWidth: 0,
            },
            labelStyle: {
              fontSize: 16,
              fontWeight: '700',
              textTransform: 'none',
              fontFamily: 'System',
            },
            activeTintColor: colors.primary,
            inactiveTintColor: colors.gray,
            indicatorStyle: {
              height: 4,
              backgroundColor: colors.primary,
              borderRadius: 2,
              width: '20%',
              marginLeft: '15%',
            },
          }}>
          <Tab.Screen
            name={"Restaurants"}
            component={Restaurants}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="store" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name={"Foods"}
            component={Foods}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="hamburger" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '400',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '800',
    color: colors.textMain,
    marginVertical: 0,
    letterSpacing: 0.5,
  },
});

