import React from 'react';
import { View } from 'react-native';

import { Icon, Text } from '@components';
import { colors } from '@theme';
import { range } from 'ramda';

import { styles } from '../eastplayers-test.styles';
import { Product } from '../mock-data';

interface IProductOverviewInfoProps {
  product: Product;
}

export const ProductOverviewInfo = ({ product }: IProductOverviewInfoProps) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.flexRowItemCenter}>
        <View style={styles.saleTag}>
          <Text
            text={`${product.discountAmount}%`}
            preset="bodySmRegular"
            color={colors.palette.white}
          />
        </View>
        <Text text="406.000đ" style={styles.price} preset="bodyLargeBold" />
        <Text
          text="406.000đ"
          preset="bodySmRegular"
          color={colors.grey[400]}
          style={styles.originalPrice}
        />
      </View>
      <Text
        text={product.name}
        preset="bodyLargeRegular"
        style={styles.productName}
      />
      <View style={styles.flexRowItemCenter}>
        {range(0, 5).map((i: number) => (
          <Icon
            key={`star - ${i}`}
            icon="star"
            size={18}
            style={styles.starIcon}
          />
        ))}
        <Text
          style={styles.countText}
          text={`${product.rateTingCount} . Đã bán ${product.soldCount}`}
          preset="bodySmRegular"
        />
        <Icon icon="heart" size={20} style={styles.heartButton} />
      </View>
    </View>
  );
};
