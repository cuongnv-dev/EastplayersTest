import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon, Text } from '@components';
import { colors } from '@theme';

import { styles } from '../eastplayers-test.styles';

interface IProductVariantButtonProps {
  onPress: () => void;
}

export const ProductVariantButton = ({
  onPress,
}: IProductVariantButtonProps) => {
  return (
    <View style={{ backgroundColor: colors.grey[100] }}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.variantButton, styles.flexRowItemCenter]}>
        <Icon icon="tag" size={20} />
        <Text
          text={'Màu, Kích thước'}
          style={styles.variantButtonText}
          color={'#0F172A'}
        />
        <Icon icon="chevronRight" />
      </TouchableOpacity>
    </View>
  );
};
