// VideoCard.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

interface VideoCardProps {
  video: {
    uid: string;
    devicename: string;
    deviceid: string;
    substream: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
  <IonCard>
    <IonCardHeader>
    <IonCardContent>
      <iframe
        id="fp_embed_player"
        src={`https://restreamservers.com:8888/embed_player?urlServer=wss://restreamservers.com:8443&streamName=${video.substream}&mediaProviders=WebRTC,Flash,MSE,WSPlayer&autoplay=1`}
        frameBorder="0"
        width="100%"
        height="200px"
        style={{ overflow: 'hidden' }}
      ></iframe>
    </IonCardContent>
      <IonCardSubtitle>Camera ID: {video.deviceid}</IonCardSubtitle>
      <IonCardTitle>{video.devicename}</IonCardTitle>
    </IonCardHeader>

    
  </IonCard>
);

export default VideoCard;
