/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './src/config/ReactotronConfig';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import App from './src';
import {name as appName} from './app.json';

MaterialCommunityIcons.loadFont();

AppRegistry.registerComponent(appName, () => App);
