import React, { useEffect } from 'react';
import { IonContent, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel } from '@ionic/react';

const LogoutPage: React.FC = () => {
  useEffect(() => {
    // Perform logout actions (e.g., clear user session, redirect to login page)
    // For now, let's clear the local storage token
    localStorage.removeItem('token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    // Redirect to the login page (replace '/login' with your actual login page path)
    window.location.href = '/login-form';
  }, []);

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Logout</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink="/Tab3">
            <IonLabel>Back to Live View</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent>
        <h1>Logging out...</h1>
        {/* You can add a loader or additional content here if needed */}
      </IonContent>
    </IonPage>
  );
};

export default LogoutPage;
