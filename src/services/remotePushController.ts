import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: token => {
        console.log('Token', token);
      },

      onNotification: notification => {
        console.log('Remote Controller =>', notification);
      },

      // senderId: '869166589415',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default RemotePushController;