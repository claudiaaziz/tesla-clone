import { StyleSheet, View, Image } from 'react-native';
import {
	Entypo,
	MaterialCommunityIcons,
	FontAwesome5,
	Ionicons,
} from '@expo/vector-icons';
import car from '../../assets/images/car.png';

export default function Controls() {
	return (
		<>
			{/* not done so flat list appears to scroll to top of page */}
			<Image source={car} style={styles.car} resizeMode='contain' />

			<View style={styles.controls}>
				<Entypo name='lock' size={30} color='gray' />
				<MaterialCommunityIcons name='fan' size={30} color='gray' />
				<FontAwesome5 name='bolt' size={30} color='gray' />
				<Ionicons name='car-sport-sharp' size={30} color='gray' />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 50,
	},
	car: {
		height: 350,
		width: 420,
		alignSelf: 'center',
	},
});
