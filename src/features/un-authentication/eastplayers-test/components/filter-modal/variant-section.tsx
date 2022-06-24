import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '@components';
import { colors, responsiveHeight, responsiveWidth } from '@theme';

import { ISelectedVariantOption } from './useFilterModal';

import { ProductVariant, VariantOption } from '../../mock-data';

interface IVariantSectionProps {
  variant: ProductVariant;
  selectedOptions: ISelectedVariantOption;
  onSelectOption: (variantId: string, optionId: string) => () => void;
}

export const VariantSection = ({
  variant,
  onSelectOption,
  selectedOptions,
}: IVariantSectionProps) => {
  const renderOption = (option: VariantOption) => {
    const isDisabled = option?.qty <= 0;
    const isSelected = selectedOptions?.[variant.id] === option.id;

    return (
      <TouchableOpacity
        onPress={onSelectOption(variant.id, option.id)}
        key={`option-${option.id}`}
        disabled={isDisabled}
        style={[styles.optionItem, isSelected && styles.selectedOptionItem]}>
        <Text
          text={option?.optionName}
          color={isDisabled ? colors.grey[500] : 'black'}
          preset={isSelected ? 'bodyBold' : 'bodyRegular'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.variantContainer}>
      <Text
        text={variant?.variantName?.toUpperCase()}
        color="black"
        preset="bodySemiBold"
      />
      <View style={styles.optionContainer}>
        {variant?.variantOptions?.map(option => renderOption(option))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  variantContainer: {
    paddingHorizontal: responsiveWidth(16),
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(12),
  },
  optionItem: {
    borderWidth: 1,
    borderColor: '#D3D3E1',
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(9),
    marginLeft: responsiveWidth(8),
  },
  selectedOptionItem: {
    borderColor: '#000',
  },
});
