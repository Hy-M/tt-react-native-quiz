import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TouchableOpacity,
	LayoutAnimation,
} from "react-native";
import { Icon, normalize } from "react-native-elements";

export default class Accordion extends Component {
	state = {
		expanded: false,
	};

	toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		return (
			<View style={styles.accordion}>
				<TouchableOpacity
					style={styles.accordionTitle}
					onPress={() => this.toggleExpand()}
				>
					<Text style={styles.mainText}>{this.props.title}</Text>
					<Icon
						type="font-awesome"
						name={this.state.expanded ? "arrow-up" : "arrow-down"}
						color="#50d3a7"
						size={15}
						style={{}}
					/>
				</TouchableOpacity>
				{this.state.expanded && (
					<View style={styles.accordionBody}>
						<Text style={styles.subText}>{this.props.body}</Text>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainText: {
		fontSize: 16,
		lineHeight: 25,
		width: "80%",
	},
	subText: {
		lineHeight: 22,
	},
	heading: {
		fontSize: 32,
		marginBottom: 40,
		color: "#50d3a7",
		fontWeight: "bold",
	},
	accordion: {
		width: 330,
		backgroundColor: "#f0f0f0",
		marginBottom: 15,
	},
	accordionTitle: {
		flexDirection: "row",
		height: 60,
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 15,
		paddingRight: 15,
	},
	accordionBody: {
		padding: 15,
		backgroundColor: "white",
	},
});
