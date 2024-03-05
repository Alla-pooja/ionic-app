import { IonContent,IonMenuButton,IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        {/* Add other header content as needed */}
      </IonToolbar>
    </IonHeader>

    <IonContent>
      {/* Your home page content */}
    </IonContent>
  </IonPage>
  );
};

export default Home;
