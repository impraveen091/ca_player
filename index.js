/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenNavigation from './src/navigation/ScreenNavigation';

AppRegistry.registerComponent(appName, () => ScreenNavigation);
