import React, { useState, FormEvent } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonButtons,
  IonBackButton
} from "@ionic/react";


import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './Form.css';

export const ResetPassword = ({ history, match }) => {
  const [ email, setEmail ] = useState('');
  const [ formErrors, setFormErrors ] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // await sendPasswordResetEmail(email);
    } catch (e) {
      setFormErrors(e.code);
    }
  }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Reset Password</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <form onSubmit={e => handleSubmit(e)} action="post" className="form">
        <IonList>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput type="email" value={email} onInput={e => setEmail(e.currentTarget.value)} />
          </IonItem>
          <IonButton expand="block" type="submit">Reset Password</IonButton>
        </IonList>
      </form>
      <div class="below-form">
        <Link to='/login'>Back to login</Link>
      </div>
    </IonContent>
  </IonPage>
  );
}

export default ResetPassword;