import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getMetricMetaInfo} from '../utils/helpers.js';

export default class AddEntry extends Component {
	render() {
		return (<View>
			{getMetricMetaInfo('bike').getIcon()}
		</View>)
	}
}

