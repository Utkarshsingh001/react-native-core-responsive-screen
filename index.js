import scaledSheetCreator from "./lib/ScaledSheet";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "./lib/scaling-utils";
import {
  useDynamicWidth,
  useDynamicHeight,
  useOrientationChange,
} from "./lib/orientationscale";

export const ScaledSheet = scaledSheetCreator(
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale
);
export * from "./lib/scaling-utils";
export { useDynamicWidth, useDynamicHeight, useOrientationChange };
