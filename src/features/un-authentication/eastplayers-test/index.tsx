import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon, SizedBox } from '@components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { responsiveWidth } from '@theme';

import {
  Button,
  FilterModal,
  ProductCarousel,
  ProductOverviewInfo,
  ProductVariantButton,
} from './components';
import { styles } from './eastplayers-test.styles';
import { sampleProduct } from './mock-data';

export const EastplayersTestScreen = () => {
  const product = sampleProduct;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <View style={styles.wrapper}>
      <ProductCarousel product={product} />

      <View style={{ flex: 0.6 }}>
        <ProductOverviewInfo product={product} />
        <ProductVariantButton onPress={handlePresentModalPress} />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.buttonRowContainer}>
            <Icon icon="heart" size={20} style={styles.heartButton} />
            <SizedBox width={responsiveWidth(16)} />
            <Button
              label="Thêm vào giỏ hàng"
              onPress={handlePresentModalPress}
            />
          </View>
        </View>
      </View>
      <SafeAreaView edges={['bottom']} />
      <FilterModal
        bottomSheetModalRef={bottomSheetModalRef}
        product={product}
        onClose={handleCloseModalPress}
      />
    </View>
  );
};
