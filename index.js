/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './components/shared/tabs/i18n/i18n.config'

AppRegistry.registerComponent(appName, () => App);
