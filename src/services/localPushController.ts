import PushNotification, {Importance} from 'react-native-push-notification';

PushNotification.configure({
  onNotification: notification => {
    console.log('Local Notification', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: 'channal-id',
    channelName: 'my channel',
    channelDescription: 'A channel for notification',
    playSound: true,
    soundName: 'default',
    importance: Importance.HIGH,
    vibrate: true,
    // vibration: 1000,
  },
  created => console.log(`channel created ${created}`),
);

export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channal-id',
    // channelName: 'my-channel',
    autoCancel: true,
    bigText:
      'This is notification demo from react-native, it will show when expanded',
    subText: 'Local Notification demo!',
    title: 'Local Notification Title',
    message: 'Hey, Expand me!!!',
    // channelDescription: 'A channel for notification',
    playSound: true,
    soundName: 'default',
    importance: 'max',
    vibrate: true,
    vibration: 1000,
  });
};
