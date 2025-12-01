import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

export default function RestaurantItem(props) {
  const navigation = useNavigation();
  const { item } = props.data;

  return (
    <Pressable
      onPress={() => navigation.navigate('RestaurantDetail', { item: item })}
      android_ripple={{ color: colors.lightgray, borderless: false }}
      style={styles.item}
    >
      <View style={styles.content}>
        <View style={styles.main_row}>
          <View style={styles.image_container}>
            <Image source={{ uri: item.image }} style={styles.restaurant_image} />
          </View>
          <View style={styles.info_container}>
            <Title style={styles.restaurant_name}>{item.name}</Title>
            <Title numberOfLines={1} style={styles.restaurant_categories}>
              {item.categories.map((c) => c.name).join(', ')}
            </Title>

            <View style={styles.stats_row}>
              <View style={styles.stat_item}>
                <Icon name="star" color={colors.yellow} size={16} />
                <Title style={styles.stat_text}>{item.star}</Title>
              </View>
              <View style={[styles.stat_item, { marginLeft: 12 }]}>
                <Icon name="clock-outline" color={colors.textSecondary} size={16} />
                <Title style={styles.stat_text}>{item.delivery_time} min</Title>
              </View>
              <View style={styles.price_row}>
                {['$', '$$', '$$$'].map((p, i) => (
                  <Title
                    key={i}
                    style={[
                      styles.price_indicator,
                      { color: i < item.cost.length ? colors.textMain : colors.gray }
                    ]}
                  >
                    $
                  </Title>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 1,
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  main_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_container: {
    backgroundColor: colors.lightgray,
    borderRadius: 15,
    padding: 4,
  },
  restaurant_image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  info_container: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  restaurant_name: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textMain,
    marginBottom: 2,
    lineHeight: 24,
  },
  restaurant_categories: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 10,
    fontWeight: '400',
  },
  stats_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat_item: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat_text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMain,
    marginLeft: 4,
  },
  price_row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  price_indicator: {
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 1,
  },
});

