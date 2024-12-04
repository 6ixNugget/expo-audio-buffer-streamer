import * as React from 'react';

import { ExpoAudioBufferStreamerViewProps } from './ExpoAudioBufferStreamer.types';

export default function ExpoAudioBufferStreamerView(props: ExpoAudioBufferStreamerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
