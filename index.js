import { useState, useEffect } from 'react';
import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const useDynamicWidth = (widthPercent) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const useDynamicHeight = (heightPercent) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const useOrientationChange = () => {
  const [orientation, setOrientation] = useState(
    screenWidth < screenHeight ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    const updateOrientation = (newDimensions) => {
      screenWidth = newDimensions.window.width;
      screenHeight = newDimensions.window.height;

      setOrientation(screenWidth < screenHeight ? 'portrait' : 'landscape');
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
    //   Dimensions.removeEventListener('change', updateOrientation); remove the bug
    };
  }, []);

  return orientation;
};

export { useDynamicWidth, useDynamicHeight, useOrientationChange };
