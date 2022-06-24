import { StyleSheet } from 'react-native';

import { colors, responsiveHeight, responsiveWidth } from '@theme';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.palette.white,
    flex: 1,
  },
  backButton: {
    width: responsiveWidth(34),
    height: responsiveWidth(34),
    borderRadius: responsiveWidth(34),
    backgroundColor: colors.palette.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: responsiveHeight(50),
    left: responsiveWidth(16),
    zIndex: 99,
  },
  carouselPagingContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: responsiveHeight(16),
    zIndex: 99,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveWidth(2),
    borderRadius: 99,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
  },
  heartButton: {
    width: responsiveWidth(32),
    height: responsiveWidth(32),
    borderRadius: responsiveWidth(32),
    backgroundColor: colors.secondary[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // paddingHorizontal: responsiveWidth(20),
  },
  flexRowItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowItemEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  productName: {
    marginTop: responsiveHeight(12),
    marginBottom: responsiveHeight(8),
  },
  starIcon: {
    marginRight: responsiveWidth(5),
  },
  countText: {
    marginLeft: responsiveWidth(4),
    flex: 1,
  },
  saleTag: {
    backgroundColor: colors.palette.red,
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(6),
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  price: {
    marginLeft: responsiveWidth(12),
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginLeft: responsiveWidth(6),
  },
  sectionContainer: {
    backgroundColor: colors.palette.white,
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(20),
  },
  variantButton: {
    backgroundColor: colors.palette.white,
    marginHorizontal: responsiveWidth(16),
    marginVertical: responsiveHeight(12),
    padding: responsiveWidth(12),
    borderRadius: 8,
  },
  variantButtonText: {
    flex: 1,
    marginLeft: responsiveWidth(14),
  },
  buttonRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(16),
    paddingBottom: responsiveHeight(8),
  },
});
