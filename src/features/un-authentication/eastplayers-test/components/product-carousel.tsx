import React, { memo, useCallback, useRef, useState } from 'react';
import { ListRenderItem, View } from 'react-native';

import equals from 'react-fast-compare';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

import { Icon, Text } from '@components';
import { colors, deviceWidth } from '@theme';

import { styles } from '../eastplayers-test.styles';
import { Product } from '../mock-data';

interface IProductCarouselProps {
  product: Product;
}

const ProductCarouselComponent = ({ product }: IProductCarouselProps) => {
  const carouselRef = useRef(null);

  const [snapIndex, setSnapIndex] = useState(0);

  const renderCarouselItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <FastImage
        source={{ uri: item }}
        style={{ width: deviceWidth, height: '100%' }}
      />
    ),
    [],
  );

  const onSnapToItem = useCallback((index: number) => {
    setSnapIndex(index);
  }, []);

  return (
    <View style={{ flex: 0.4, backgroundColor: colors.background.blue }}>
      <Icon icon="chevronLeft" style={styles.backButton} size={12} />

      <Carousel
        layoutCardOffset={9}
        ref={carouselRef}
        data={product.images}
        renderItem={renderCarouselItem}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.carouselPagingContainer}>
        <Text
          text={`${snapIndex + 1}/${product.images.length}`}
          preset="bodySmBold"
          color={colors.palette.white}
        />
      </View>
    </View>
  );
};
export const ProductCarousel = memo(ProductCarouselComponent, equals);
