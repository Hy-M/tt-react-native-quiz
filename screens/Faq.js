import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function Faq() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>FAqqqq</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	innerContainer: {
		marginLeft: 10,
		marginRight: 10,
	},
	mainText: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 20,
		lineHeight: 25,
	},
	subText: {
		fontSize: 11,
		textAlign: "center",
		marginBottom: 20,
	},
	img: {
		height: 200,
		width: 200,
		borderWidth: 3,
		borderColor: "#50d3a7",
	},
	btn: {
		backgroundColor: "#50d3a7",
		padding: 10,
	},
	heading: {
		fontSize: 32,
		marginBottom: 40,
		color: "#50d3a7",
		fontWeight: "bold",
	},
});
