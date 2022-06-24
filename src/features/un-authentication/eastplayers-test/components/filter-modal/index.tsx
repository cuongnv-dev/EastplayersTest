import React, { RefObject, useCallback } from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';

import { Icon, SizedBox, Text } from '@components';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { responsiveHeight, responsiveWidth } from '@theme';

import { FilterModalFooter } from './filter-modal-footer';
import useFilterModal from './useFilterModal';
import { VariantSection } from './variant-section';

import { Product, ProductVariant } from '../../mock-data';

export interface IFilterModalProps {
  bottomSheetModalRef: RefObject<BottomSheetModalMethods>;
  product: Product;
  onClose: () => void;
}

export const FilterModal = ({
  bottomSheetModalRef,
  product,
  onClose,
}: IFilterModalProps) => {
  const { selectedOptions, snapPoints, handleOnSelectVariantOption, getKey } =
    useFilterModal(product);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <Text text="Chọn phân loại" preset="bodyLargeBold" />
        <Icon icon="cross" size={12} onPress={onClose} />
      </View>
    );
  }, [onClose]);

  const renderFooter = useCallback(() => {
    return (
      <FilterModalFooter
        variants={product.variants}
        onAddToCart={onClose}
        selectedVariantOptions={selectedOptions}
      />
    );
  }, [onClose, selectedOptions, product.variants]);

  const renderItem: ListRenderItem<ProductVariant> = useCallback(
    ({ item }) => {
      return (
        <VariantSection
          variant={item}
          selectedOptions={selectedOptions}
          onSelectOption={handleOnSelectVariantOption}
        />
      );
    },
    [selectedOptions, handleOnSelectVariantOption],
  );

  const renderSeparator = () => <SizedBox height={responsiveHeight(24)} />;

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        detached={true}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        footerComponent={renderFooter}>
        <BottomSheetFlatList
          ListHeaderComponent={renderHeader}
          data={product.variants}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={getKey}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: responsiveWidth(16),
    borderBottomWidth: 1,
    borderBottomColor: '#EEEDF5',
    paddingBottom: responsiveHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(16),
  },
});
