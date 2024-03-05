import React, { useState } from 'react';
import { IonAlert, IonButton, IonInput, IonItem, IonLabel, IonLoading } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface LoginFormProps {
  setToken: (tokenData: { token: string; userType: string }) => void;
}

const jsonToFormData = (body_data: any) => {
  let formdata = new FormData();
  for (let x in body_data) formdata.append(x, body_data[x]);
  return formdata;
};

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState<{ status: 'success' | 'failure'; msg: string } | null>(null);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://54.184.152.88:8081/token', jsonToFormData({
        grant_type: 'password',
        username: username,
        password: password,
      }));

      const data = response.data;
      console.log("usename",username)
      console.log('Login Response:', response);
     

      if (response.status === 200 && Object.keys(data).length > 0) {
        const userType = String(data.user_type);

        if (userType === '2') {
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("usertype", data.user_type);
          localStorage.setItem("token_type", data.token_type);
          

          history.push('/tab3', { token: data.access_token }); // Navigate to '/tab3' with token

          setLoginStatus({ status: 'success', msg: 'Login successful!' });
        } else {
          setLoginStatus({ status: 'failure', msg: 'Invalid user type' });
        }
      } else {
        setLoginStatus({ status: 'failure', msg: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginStatus({ status: 'failure', msg: 'An error occurred during login' });
    } finally {
      setLoading(false);
    }
  };

  const handlePassword = (password: any) => {
    console.log("Password", password);
    setPassword(password);
  }

  return (
    <>
      {loginStatus && (
        <IonAlert
          isOpen={true}
          message={loginStatus.msg}
          buttons={['OK']}
          onDidDismiss={() => setLoginStatus(null)}
        />
      )}
      <IonLoading isOpen={isLoading} message="Logging in..." />

      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput
          type="text"
          value={username}
          required
          onIonChange={(e) => setUsername(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type={showPassword ? 'text' : 'password'}
          value={password} 
          required
          onIonChange={(e) => handlePassword(e.detail.value!)}
        />
        <IonButton onClick={handleShowPassword}>Toggle Password</IonButton>
      </IonItem>

      <IonButton expand="full" onClick={handleLogin}>
        Login
      </IonButton>
    </>
  );
};

export default LoginForm;
