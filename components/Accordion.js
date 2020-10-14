import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	LayoutAnimation,
} from "react-native";
import { Icon } from "react-native-elements";

export default class Accordion extends Component {
	state = {
		expanded: false,
	};

	toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { expanded } = this.state;
		const { title, body } = this.props;
		return (
			<View style={styles.accordion}>
				<TouchableOpacity
					style={styles.accordionTitle}
					onPress={() => this.toggleExpand()}
				>
					<Text style={styles.mainText}>{title}</Text>
					<Icon
						type="font-awesome"
						name={expanded ? "arrow-up" : "arrow-down"}
						color="#50d3a7"
						size={15}
						style={{}}
					/>
				</TouchableOpacity>
				{expanded && (
					<View style={styles.accordionBody}>
						<Text style={styles.subText}>{body}</Text>
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
