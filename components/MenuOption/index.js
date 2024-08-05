import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function MenuOption({ item }) {
	return (
		<View style={styles.optionRow}>
			<View style={styles.optionRowLeft}>
				<MaterialCommunityIcons
					name={item.iconName}
					size={30}
					color='gray'
				/>
				<Text style={styles.optionText}>{item.name}</Text>
			</View>

			<MaterialIcons name='keyboard-arrow-right' size={30} color='gray' />
		</View>
	);
}

const styles = StyleSheet.create({
	optionRow: {
		flexDirection: 'row',
		color: 'white',
		justifyContent: 'space-between',
		paddingHorizontal: 25,
		marginVertical: 13,
	},
	optionRowLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	optionText: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
	},
});
