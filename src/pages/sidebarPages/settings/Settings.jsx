import { Tabs } from '@mantine/core';
import Profile from './Profile';
import Password from './Password';
import Notifications from './Notifications';
import styles from "./Settings.module.css"

function Settings() {
  return (
    <Tabs defaultValue="profile" className={styles.settingsContent}>
      <Tabs.List>
        <Tabs.Tab value="profile" >Profile</Tabs.Tab>
        <Tabs.Tab value="password" >Password</Tabs.Tab>
        <Tabs.Tab value="notification">Notification</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="profile" pt="xs">
        <Profile />
      </Tabs.Panel>

      <Tabs.Panel value="password" pt="xs">
        <Password />
      </Tabs.Panel>

      <Tabs.Panel value="notification" pt="xs">
        <Notifications />
      </Tabs.Panel>
    </Tabs>
  );
}

export default Settings
