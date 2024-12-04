import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAudioBufferStreamerModuleEvents } from './ExpoAudioBufferStreamer.types';

declare class ExpoAudioBufferStreamerModule extends NativeModule<ExpoAudioBufferStreamerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAudioBufferStreamerModule>('ExpoAudioBufferStreamer');
