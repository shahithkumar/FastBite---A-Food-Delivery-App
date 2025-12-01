import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function FoodItem(props) {
  const navigation = useNavigation();
  const { item } = props.data;

  return (
    <Pressable
      onPress={() => navigation.navigate('FoodDetail', { item: item })}
      android_ripple={{ color: colors.lightgray, borderless: false }}
      style={styles.item}
    >
      <View style={styles.content}>
        <View style={styles.image_row}>
          <View style={styles.info_container}>
            <Title style={styles.food_name}>{item.name}</Title>
            <Title numberOfLines={2} style={styles.food_description}>{item.description}</Title>

            <View style={styles.metadata_container}>
              <View style={styles.stat_item}>
                <Icon name="fire" color={colors.primary} size={16} />
                <Title style={styles.stat_text}>{item.calories} kcal</Title>
              </View>
              <View style={styles.price_tag}>
                <Title style={styles.price_text}>${item.cost}</Title>
              </View>
            </View>
          </View>
          <View style={styles.image_container}>
            <Image source={{ uri: item.image }} style={styles.food_image} />
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
    marginHorizontal: 1, // To show shadow on sides
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
  image_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_container: {
    backgroundColor: colors.lightgray,
    borderRadius: 15,
    padding: 4,
  },
  food_image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  info_container: {
    flex: 1,
    paddingRight: 12,
  },
  food_name: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textMain,
    marginBottom: 4,
  },
  food_description: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
    marginBottom: 12,
    fontWeight: '400',
  },
  metadata_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stat_item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#FFF2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  stat_text: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 4,
  },
  price_tag: {
    backgroundColor: colors.success,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  price_text: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.white,
  },
});

