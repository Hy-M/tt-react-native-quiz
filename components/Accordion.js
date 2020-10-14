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
			<View>
				<TouchableOpacity
					style={styles.accordionTitle}
					onPress={() => this.toggleExpand()}
				>
					<Text>{this.props.title}</Text>
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
						<Text>{this.props.body}</Text>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
	innerContainer: {
		// marginLeft: 10,
		// marginRight: 10,
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
	heading: {
		fontSize: 32,
		marginBottom: 40,
		color: "#50d3a7",
		fontWeight: "bold",
	},
	accordionTitle: {
		flexDirection: "row",
		// justifyContent: "space-between",
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: "center",
		backgroundColor: "lightgrey",
		marginBottom: 5,
	},
	accordionBody: {
		padding: 15,
	},
});
