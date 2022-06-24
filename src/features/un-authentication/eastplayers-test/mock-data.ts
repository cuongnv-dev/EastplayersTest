export interface Product {
  name: string;
  id: string;
  price: number;
  salePrice?: number;
  discountAmount?: number;
  soldCount?: number;
  rateTingCount?: number;
  variants?: ProductVariant[];
  images: string[];
}

export interface ProductVariant {
  id: string;
  variantName: string;
  variantOptions: VariantOption[];
}

export interface VariantOption {
  id: string;
  optionName: string;
  qty: number;
}

export const sampleProduct: Product = {
  id: '146184b4-f310-11ec-b939-0242ac120002',
  name: 'Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%',
  price: 406000,
  salePrice: 366000,
  discountAmount: 10,
  soldCount: 99,
  rateTingCount: 996,
  variants: [
    {
      id: '5f6a2bb4-f310-11ec-b939-0242ac120002',
      variantName: 'Màu sắc',
      variantOptions: [
        {
          id: 'c26a442e-f310-11ec-b939-0242ac120002',
          optionName: 'Đen',
          qty: 100,
        },
        {
          id: 'ca1aad80-f310-11ec-b939-0242ac120002',
          optionName: 'Trắng',
          qty: 0,
        },
        {
          id: 'ce7d9eb4-f310-11ec-b939-0242ac120002',
          optionName: 'Xanh',
          qty: 50,
        },
      ],
    },
    {
      id: 'fe51b377-dee8-49c6-9d77-b73d7e85da6e',
      variantName: 'Kích thước',
      variantOptions: [
        {
          id: 'd3db098c-f310-11ec-b939-0242ac120002',
          optionName: 'S',
          qty: 100,
        },
        {
          id: 'd8447030-f310-11ec-b939-0242ac120002',
          optionName: 'M',
          qty: 50,
        },
        {
          id: 'dbd0c46a-f310-11ec-b939-0242ac120002',
          optionName: 'L',
          qty: 50,
        },
        {
          id: 'e0b57368-f310-11ec-b939-0242ac120002',
          optionName: 'XL',
          qty: 100,
        },
        {
          id: 'e53fd982-f310-11ec-b939-0242ac120002',
          optionName: '2XL',
          qty: 50,
        },
      ],
    },
  ],
  images: [
    'https://picsum.photos/id/10/200/300',
    'https://picsum.photos/id/11/200/300',
    'https://picsum.photos/id/12/200/300',
    'https://picsum.photos/id/13/200/300',
  ],
};
