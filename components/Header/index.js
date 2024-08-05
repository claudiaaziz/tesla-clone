import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.model}>My Model S</Text>
				<Text style={styles.status}>Parked</Text>
			</View>

			<FontAwesome name='user-circle' size={33} color='gray' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 24,
	},
	model: {
		fontSize: 28,
		color: 'white',
		fontWeight: 'bold',
	},
	status: {
		fontSize: 18,
		color: 'gray',
		fontWeight: '500',
	},
});
