import { useMemo, useState } from 'react';

import { Product, ProductVariant } from '../../mock-data';

export interface ISelectedVariantOption {
  [key: string]: string;
}

export default function useFilterModal(product: Product) {
  const initialVariantOptions = useMemo(() => {
    const initialObj: ISelectedVariantOption = {};
    product?.variants?.forEach(variant => {
      initialObj[variant.id] = '';
    });

    return initialObj;
  }, [product]);

  const [selectedOptions, setSelectedOptions] =
    useState<ISelectedVariantOption>(initialVariantOptions);

  const handleOnSelectVariantOption =
    (variantId: string, optionId: string) => () => {
      setSelectedOptions(pre => ({ ...pre, [variantId]: optionId }));
    };

  const snapPoints = useMemo(() => ['55%'], []);

  const getKey = (item: ProductVariant, index: number) =>
    `variant - ${item.id} - ${index}`;

  return {
    selectedOptions,
    snapPoints,
    handleOnSelectVariantOption,
    getKey,
  };
}
