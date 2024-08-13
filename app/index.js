import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Controls from '../components/Controls';
import menuOptions from '../assets/menuOptions';
import MenuOption from '../components/MenuOption';

export default function Page() {
	return (
		<View style={styles.container}>
			<Header />

			<FlatList
				data={menuOptions}
				renderItem={MenuOption}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={Controls}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161818',
	},
});
