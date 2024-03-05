// import React from 'react';
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

// function Example() {
//   return (
//     <>
//       <IonIcon icon={logoIonic}></IonIcon>
//       <IonIcon icon={logoIonic} size="large"></IonIcon>
//       <IonIcon icon={logoIonic} color="primary"></IonIcon>
//       <IonIcon icon={logoIonic} size="large" color="primary"></IonIcon>
//       console.log
//     </>
//   );
// }
// export default Example;import React from 'react';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonText,
    IonTitle,
    IonToolbar,
    IonMenu,IonPage,IonButtons,IonMenuButton,
  } from '@ionic/react';
  import { chevronForward, listCircle } from 'ionicons/icons';
  
  
  
  function Example() {
    return (
      <><IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"><IonList>
      <IonItem routerLink="/tab3">
              <IonLabel>Live View</IonLabel>
            </IonItem>
            <IonItem routerLink="/dashboard">
              <IonLabel>User 1</IonLabel>
            </IonItem>
            <IonItem routerLink="/dashboard/users/2">
              <IonLabel>User 2</IonLabel>
            </IonItem>
          </IonList></IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      
    </IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="light">
          <IonList inset={true}>
            <IonItem button={true}>
              <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
              <IonLabel>General</IonLabel>
              <IonNote slot="end">6</IonNote>
            </IonItem>
            <IonItem button={true}>
              <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
              <IonLabel>Shopping</IonLabel>
              <IonNote slot="end">15</IonNote>
            </IonItem>
            <IonItem button={true}>
              <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
              <IonLabel>Cleaning</IonLabel>
              <IonNote slot="end">3</IonNote>
            </IonItem>
            <IonItem button={true}>
              <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
              <IonLabel>Reminders</IonLabel>
              <IonNote slot="end">8</IonNote>
            </IonItem>
          </IonList>
  
          <IonList inset={true}>
            <IonItem button={true} detail={false}>
              <div className="unread-indicator-wrapper" slot="start">
                <div className="unread-indicator"></div>
              </div>
              <IonLabel>
                <strong>Rick Astley</strong>
                <IonText>Never Gonna Give You Up</IonText>
                <br />
                <IonNote color="medium" className="ion-text-wrap">
                  Never gonna give you up Never gonna let you down Never gonna run...
                </IonNote>
              </IonLabel>
              <div className="metadata-end-wrapper" slot="end">
                <IonNote color="medium">06:11</IonNote>
                <IonIcon color="medium" icon={chevronForward}></IonIcon>
              </div>
            </IonItem>
            <IonItem button={true} detail={false}>
              <div className="unread-indicator-wrapper" slot="start"></div>
              <IonLabel>
                <strong>Ionitron</strong>
                <IonText>I have become sentient</IonText>
                <br />
                <IonNote color="medium" className="ion-text-wrap">
                  That is all.
                </IonNote>
              </IonLabel>
              <div className="metadata-end-wrapper" slot="end">
                <IonNote color="medium">03:44</IonNote>
                <IonIcon color="medium" icon={chevronForward}></IonIcon>
              </div>
            </IonItem>
            <IonItem button={true} detail={false}>
              <div className="unread-indicator-wrapper" slot="start">
                <div className="unread-indicator"></div>
              </div>
              <IonLabel>
                <strong>Steam</strong>
                <IonText>Game Store Sale</IonText>
                <br />
                <IonNote color="medium" className="ion-text-wrap">
                  That game you added to your wish list 2 years ago is now on sale!
                </IonNote>
              </IonLabel>
              <div className="metadata-end-wrapper" slot="end">
                <IonNote color="medium">Yesterday</IonNote>
                <IonIcon color="medium" icon={chevronForward}></IonIcon>
              </div>
            </IonItem>
            <IonItem button={true} detail={false}>
              <div className="unread-indicator-wrapper" slot="start"></div>
              <IonLabel>
                <strong>Ionic</strong>
                <IonText>Announcing Ionic 7.0</IonText>
                <br />
                <IonNote color="medium" className="ion-text-wrap">
                  This version is one more than Ionic 6!
                </IonNote>
              </IonLabel>
              <div className="metadata-end-wrapper" slot="end">
                <IonNote color="medium">Yesterday</IonNote>
                <IonIcon color="medium" icon={chevronForward}></IonIcon>
              </div>
            </IonItem>
          </IonList>
        </IonContent>
      </>
    );
  }
  export default Example;