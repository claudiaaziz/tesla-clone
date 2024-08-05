import { Image, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import car from '../assets/images/car.png';
import {
	Entypo,
	MaterialCommunityIcons,
	FontAwesome5,
	Ionicons,
} from '@expo/vector-icons';

export default function Page() {
	return (
		<View style={styles.container}>
			<Header />
			<Image source={car} style={styles.car} resizeMode='contain' />

			<View style={styles.controls}>
				<Entypo name='lock' size={30} color='gray' />
				<MaterialCommunityIcons name='fan' size={30} color='gray' />
				<FontAwesome5 name='bolt' size={30} color='gray' />
				<Ionicons name='car-sport-sharp' size={30} color='gray' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161818',
	},
	car: {
		height: 350,
		width: '100%',
	},
	controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red'
    }
});
