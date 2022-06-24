import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { LocalImage, Text } from '@components';
import { colors, responsiveHeight } from '@theme';

interface IButtonProps {
  label: string;
  isDisabled?: boolean;
  onPress: () => void;
}

export const Button = ({
  label,
  isDisabled = false,
  onPress,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isDisabled}>
      <View style={styles.background}>
        <LocalImage source={isDisabled ? 'disabledButton' : 'bgWallpaper'} />
      </View>
      <Text text={label} preset="bodySmBold" color={colors.palette.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
});
