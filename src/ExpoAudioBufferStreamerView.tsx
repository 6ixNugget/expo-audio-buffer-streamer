import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAudioBufferStreamerViewProps } from './ExpoAudioBufferStreamer.types';

const NativeView: React.ComponentType<ExpoAudioBufferStreamerViewProps> =
  requireNativeView('ExpoAudioBufferStreamer');

export default function ExpoAudioBufferStreamerView(props: ExpoAudioBufferStreamerViewProps) {
  return <NativeView {...props} />;
}
