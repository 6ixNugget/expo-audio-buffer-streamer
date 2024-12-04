import { registerWebModule, NativeModule } from 'expo';

import { ExpoAudioBufferStreamerModuleEvents } from './ExpoAudioBufferStreamer.types';

class ExpoAudioBufferStreamerModule extends NativeModule<ExpoAudioBufferStreamerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAudioBufferStreamerModule);
