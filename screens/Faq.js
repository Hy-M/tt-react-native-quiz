import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import Accordion from "../components/Accordion";

export default class Faq extends Component {
	state = {
		faqData: [
			{
				title: "What does this app do?",
				data:
					"Not much. But it was built with love and effort to grow my React Native skills.",
			},
			{
				title: "Did you build this accordion?",
				data: "I did indeed.",
			},
			{
				title: "What is the largest bird in the world?",
				data: "An ostrich. They can reach 9 feet in height.",
			},
		],
	};

	render() {
		const { faqData } = this.state;
		return (
			<View>
				<View style={styles.container}>
					<Text style={styles.heading}>Frequently asked questions</Text>
				</View>
				<View style={styles.accordion}>
					{faqData.map((faq) => {
						return <Accordion title={faq.title} body={faq.data} />;
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20,
	},
	accordion: {
		backgroundColor: "#fff",
		height: "100%",
		alignItems: "center",
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
