import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, SizedBox, Text } from '@components';
import { responsiveHeight, responsiveWidth } from '@theme';

import { ISelectedVariantOption } from './useFilterModal';

import { styles as GStyles } from '../../eastplayers-test.styles';
import { ProductVariant } from '../../mock-data';
import { Button } from '../button';

interface IFilterModalFooterProps {
  onAddToCart: () => void;
  selectedVariantOptions: ISelectedVariantOption;
  variants?: ProductVariant[];
}

export const FilterModalFooter = ({
  onAddToCart,
  selectedVariantOptions,
  variants,
}: IFilterModalFooterProps) => {
  const [qty, setQty] = useState(1);

  const onAddQty = () => setQty(pre => pre + 1);

  const onSubtractQty = () => {
    if (qty > 0) {
      setQty(pre => pre - 1);
    }
  };

  const isDisableAddToCart = useMemo(() => {
    if (qty <= 0) {
      return true;
    }
    const unSelectedVariant = variants?.find(
      variant => selectedVariantOptions?.[variant.id] === '',
    );
    return !!unSelectedVariant;
  }, [selectedVariantOptions, qty, variants]);

  return (
    <View style={styles.wrapper}>
      <View style={GStyles.flexRowItemCenter}>
        <Text
          text="SỐ LƯỢNG"
          color="black"
          preset="bodySemiBold"
          style={{ flex: 1 }}
        />

        <>
          <Icon
            icon="minus"
            size={14}
            style={[styles.button, styles.qtyButton]}
            onPress={onSubtractQty}
          />

          <View style={[styles.qtyInput, styles.button]}>
            <Text text={`${qty}`} />
          </View>
          <Icon
            icon="plus"
            style={[styles.button, styles.qtyButton]}
            onPress={onAddQty}
          />
        </>
      </View>
      <SizedBox height={responsiveHeight(31)} />
      <View style={GStyles.buttonRowContainer}>
        <Icon icon="heart" size={20} style={GStyles.heartButton} />
        <SizedBox width={responsiveWidth(16)} />
        <Button
          label="Thêm vào giỏ hàng"
          onPress={onAddToCart}
          isDisabled={isDisableAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: responsiveWidth(16),
    marginTop: responsiveHeight(36),
    paddingBottom: responsiveHeight(24),
  },
  button: {
    height: responsiveHeight(40),
    width: responsiveWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButton: {
    backgroundColor: '#F7F6FA',
  },
  qtyInput: {
    marginHorizontal: responsiveWidth(8),
    borderWidth: 1,
    borderColor: '#D3D3E1',
  },
});
