import { useEffect } from 'react';
import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';

import { isIos } from '@common';

const { AppModule } = NativeModules;

export const getVersion = (): string => {
  return AppModule.getVersion();
};
export const getAppName = (): string => {
  return AppModule.getAppName();
};
export const getDeviceId = (): string => {
  return AppModule.getDeviceId();
};
export const setAppBadges = (count: number) => {
  if (typeof count !== 'number' || !isIos) {
    return;
  }
  AppModule.setBadges(count);
};
export const clearNotification = () => {
  AppModule.clearNotification();
};
export const clearCache = () => {
  AppModule.clearCache();
};
export const getBuildNumber = (): string => {
  return AppModule.getBuildNumber();
};
export const registerPhotosChanges = () => {
  if (isIos) {
    AppModule.registerPhotosChanges();
  }
};

type Image = {
  uri: string;
  width?: number;
  height?: number;
};
type ImageResponse = {
  uri: string;
  name: string;
};
export const fixRotation = ({ uri, height = 800, width = 600 }: Image) => {
  return new Promise<ImageResponse>(rs => {
    if (isIos) {
      AppModule.fixRotation(
        uri,
        width,
        height,
        (_?: string, res?: ImageResponse) => {
          if (res) {
            rs({ uri: res.uri, name: res.name });
          } else {
            rs({ uri: uri, name: 'new_image.png' });
          }
        },
      );
    } else {
      AppModule.fixRotation(uri, width, height, rs, () => {
        rs({ uri: uri, name: 'new_image.png' });
      });
    }
  });
};

export const usePhotosPermissionChange = (callback: () => void) => {
  // effect
  useEffect(() => {
    let photosChangeEvent: NativeEventEmitter,
      subscription: EmitterSubscription;
    if (isIos) {
      photosChangeEvent = new NativeEventEmitter(AppModule);
      subscription = photosChangeEvent.addListener('PhotosChange', callback);
    }
    return () => {
      if (isIos) {
        subscription.remove();
      }
    };
  }, [callback]);

  return null;
};
