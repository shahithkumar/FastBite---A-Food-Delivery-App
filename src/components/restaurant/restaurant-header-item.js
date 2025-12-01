import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native';
import AppBar from '../common/app-bar';

export default function RestaurantHeaderItem(props) {
  const item = props.item;
  const [favorite, setFavorite] = useState(false)
  const route = useRoute();

  return (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.item}
    >
      <View style={styles.overlay}>
        <AppBar favorite={favorite} setFavorite={setFavorite} screenName={route.name} transparent />
        <View style={styles.info_panel}>
          <Paragraph numberOfLines={1} style={styles.address}>
            {item.address}
          </Paragraph>
          <Title style={styles.name}>
            {item.name}
          </Title>
          <View style={styles.metadata_row}>
            <View style={styles.stat_item}>
              <Icon name="star" color={colors.yellow} size={18} />
              <Title style={styles.stat_text}>{item.star} • Restaurant</Title>
            </View>
            <View style={[styles.stat_item, { marginLeft: 20 }]}>
              <Icon name="clock-outline" color={colors.lightgray} size={18} />
              <Title style={styles.stat_text}>{item.delivery_time} mins</Title>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 250,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  info_panel: {
    paddingHorizontal: 25,
  },
  address: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginBottom: 4,
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.white,
    lineHeight: 36,
    marginBottom: 12,
  },
  metadata_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat_item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  stat_text: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
});

