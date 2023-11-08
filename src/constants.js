import { Platform } from 'react-native';

// common durations of animation
export const OPEN_ANIM_DURATION = 1;
export const CLOSE_ANIM_DURATION = 1;

export const USE_NATIVE_DRIVER = (Platform.OS !== "web");
