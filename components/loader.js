import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default function Loader() {
	return (
		<AnimatedLoader
			visible={true}
			overlayColor='#FDF6AA'
			source={require('../assets/loader.json')}
			animationStyle={styles.lottie}
			speed={1}
		></AnimatedLoader>
	);
}

const styles = StyleSheet.create({
	lottie: {
		width: 100,
		height: 100,
	},
});
