import React from 'react';

/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { home, informationCircle, person, search } from 'ionicons/icons';


import { AppContextProvider } from './State';

import Tabs from './Tabs';
import Login  from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Signup  from './pages/Signup';

import Audio from './components/Audio';
import TrackPlayer from './components/TrackPlayer';

const App = () => {
  return (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonRouterOutlet>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/signup" component={Signup} exact={true} />
            <Route path="/reset-password" component={ResetPassword} exact={true} />
             <Route exact={true} path="/" render={() => <Redirect to="/app/browse" />} />
          </IonRouterOutlet>
          <Route path="/app" component={Tabs} />
          <Audio />
          <TrackPlayer />
        </IonPage>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
  );
}

export default App;
