import React, { useRef, useState } from 'react';
import {
  IonBackButton, IonButtons, IonButton, IonHeader,
  IonToolbar, IonTitle, IonContent, IonPage,
  IonList, IonItem, IonLabel, IonInput
} from '@ionic/react';

import './Form.css';

const Login = ({ track, history }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ formErrors, setFormErrors ] = useState(null);
  const [ showLoading, setShowLoading ] = useState(false);

  const formRef = useRef(null);

  const goTo = path => {
    history.push(path, { direction: 'forward' });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setShowLoading(true);
      
      // const user = await login(email, password);

      dispatch({
        type: Actions.LoggedIn,
        user
      });

      history.push('/app/browse');
      setShowLoading(false);
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Login</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <form onSubmit={handleSubmit} method="post" ref={formRef} action="" className="form">
        <IonList>
          <IonItem>
            <IonLabel position={'fixed'}>Email</IonLabel>
            <IonInput type="email" value={email} onInput={e => setEmail(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'fixed'}>Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onInput={e => setPassword(e.currentTarget.value)}
              />
          </IonItem>
          <IonButton expand="block" type="submit">Log in</IonButton>
        </IonList>
      </form>
      <div className="below-form">
        <a className="create" href="#/" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a>
        <a href="#/" onClick={(e) => { e.preventDefault(); goTo('/reset-password')}}>Forgot your password?</a>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Login;
