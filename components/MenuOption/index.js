import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function MenuOption({ item }) {
	return (
		<Link href={item.href} asChild>
			<Pressable style={styles.optionRow}>
				<View style={styles.optionRowLeft}>
					<MaterialCommunityIcons
						name={item.iconName}
						size={30}
						color='gray'
					/>
					<Text style={styles.optionText}>{item.name}</Text>
				</View>

				<MaterialIcons
					name='keyboard-arrow-right'
					size={30}
					color='gray'
				/>
			</Pressable>
		</Link>
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
