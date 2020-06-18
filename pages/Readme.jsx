import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Readme = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Readme</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Built with Ionic React</h2>
        <p>
          <b>Disclaimer: this app does not actually play audio (due to licensing and simplicity reasons)</b>
        </p>
        <p>
          This is a demo built with <a target="_blank" href="http://ionicframework.com/docs/react">Ionic React</a>, JavaScript (rather than TS). It was built with 🔥 in Stackblitz.
        </p>
        <p>
          This app will run on iOS, Android, or the Web (as a Progressive Web App) using the power of <a target="_blank"  href="http://capacitor.ionicframework.com/">Capacitor</a> to access Native and Web APIs.
        </p>
        <p>
          Note: if you notice any CSS weirdness refresh the stackblitz
        editor as it can sometimes get out of sync
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Readme;
