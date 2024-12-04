// Reexport the native module. On web, it will be resolved to ExpoAudioBufferStreamerModule.web.ts
// and on native platforms to ExpoAudioBufferStreamerModule.ts
export { default } from './ExpoAudioBufferStreamerModule';
export { default as ExpoAudioBufferStreamerView } from './ExpoAudioBufferStreamerView';
export * from  './ExpoAudioBufferStreamer.types';
