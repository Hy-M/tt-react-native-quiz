import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
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
					{faqData.map((faq, index) => {
						return <Accordion key={index} title={faq.title} body={faq.data} />;
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
	heading: {
		fontSize: 32,
		marginBottom: 40,
		color: "#50d3a7",
		fontWeight: "bold",
		textAlign: "center",
	},
});
