import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import climate from '../assets/images/climate.png';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function ClimateScreen() {
	const router = useRouter();

	const [temperature, setTemperature] = useState(75);
	const [isCarOn, setIsCarOn] = useState(false);

	return (
		<View style={styles.container}>
			<Image source={climate} style={styles.image} resizeMethod='cover' />

			<Pressable onPress={() => router.back()} style={styles.back}>
				<Entypo name='chevron-left' size={26} color='white' />
			</Pressable>

			<View style={styles.footer}>
				<Text style={styles.temperature}>
					Interior 74°F - Exterior 66°F
				</Text>

				<View style={styles.controlsRow}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name='power'
							size={36}
							color='white'
							onPress={() => setIsCarOn((prev) => !prev)}
						/>
						<Text style={styles.iconContainerText}>
							{isCarOn ? 'On' : 'Off'}
						</Text>
					</View>

					<View style={styles.temperatureContainer}>
						<Entypo
							name='chevron-left'
							size={30}
							color='gray'
							onPress={() => setTemperature(temperature - 1)}
						/>
						<Text style={styles.temperatureText}>
							{temperature}°
						</Text>
						<Entypo
							name='chevron-right'
							size={30}
							color='gray'
							onPress={() => setTemperature(temperature + 1)}
						/>
					</View>

					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name='car-door'
							size={36}
							color='gray'
						/>
						<Text style={styles.iconContainerText}>Vent</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161818',
	},
	image: {
		height: '65%',
		width: '100%',
	},
	back: {
		position: 'absolute',
		top: 50,
		left: 23,
		backgroundColor: '#2f3030',
		padding: 10,
		borderRadius: 5,
	},
	footer: {
		alignItems: 'center',
		padding: 12,
		marginBottom: 20,
		marginTop: 'auto',
	},
	label: {
		color: 'gray',
		fontSize: 18,
		fontWeight: 600,
		marginVertical: 20,
	},
	temperature: { color: 'white', marginBottom: 20 },
	controlsRow: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
	iconContainer: {
		gap: 7,
		alignItems: 'center',
	},
	iconContainerText: {
		color: 'white',
		fontSize: 16,
	},
	temperatureContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
	},
	temperatureText: {
		fontSize: 40,
		color: 'white',
	},
});
