import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

export default class Quiz extends Component {
	state = {
		startQuiz: false,
		answers: [
			{ id: 1, choice: "JavaScript" },
			{ id: 2, choice: "Python" },
			{ id: 3, choice: "C" },
			{ id: 4, choice: "Ruby" },
			{ id: 5, choice: "C#" },
			{ id: 6, choice: "PHP" },
		],
		isSelected: [],
		prevChoice: null,
		selections: [],
		submitChoices: false,
	};

	handleStartPress = () => {
		this.setState({
			startQuiz: true,
			submitChoices: false,
			selections: [],
			isSelected: [],
			prevChoice: null,
		});
	};

	handleAnswerPress = (answer) => {
		const { isSelected, prevChoice, selections } = this.state;

		if (!isSelected.length) {
			this.setState((currentState) => {
				return {
					isSelected: [true],
					[answer.id]: true,
					prevChoice: answer.id,
					selections: [...currentState.selections, answer.id],
				};
			});
		} else {
			if (prevChoice === answer.id) {
				this.setState((currentState) => {
					return {
						isSelected: [],
						[answer.id]: false,
						prevChoice: null,
						selections: currentState.selections.filter(
							(id) => id !== answer.id
						),
					};
				});
			} else {
				this.setState((currentState) => {
					return {
						[prevChoice]: false,
						[answer.id]: true,
						prevChoice: answer.id,
						selections: [...currentState.selections, answer.id],
					};
				});
			}
		}
	};

	handleSubmit = () => {
		const { selections } = this.state;
		if (selections.length > 3 || !selections.length) {
			alert("Please select between 1 and 3 choices");
		} else {
			this.setState({ submitChoices: true });
		}
	};

	render() {
		const { startQuiz, answers, submitChoices, selections } = this.state;
		if (startQuiz) {
			if (!submitChoices) {
				return (
					<View style={styles.container}>
						<View style={styles.innerContainer}>
							<Text style={styles.mainText}>
								What are your top 3 programming languages from the list below?
							</Text>
							<Text style={styles.subText}>
								Select your answers in order of preference.
							</Text>
						</View>
						<View>
							{answers.map((answer) => (
								<CheckBox
									key={answer.id}
									title={answer.choice}
									iconType="material"
									checkedIcon="add"
									uncheckedIcon="add"
									checked={this.state[answer.id] || false}
									containerStyle={
										selections.includes(answer.id)
											? {
													backgroundColor: "#50d3a7",
											  }
											: null
									}
									onPress={() => this.handleAnswerPress(answer)}
								/>
							))}
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "80%",
								justifyContent: "space-evenly",
							}}
						>
							{selections.map((id, index) => {
								if (index <= 2) {
									for (let choice of answers) {
										if (choice["id"] == id) {
											return (
												<Text style={styles.mainText} key={id}>
													{index + 1}: {choice.choice}
												</Text>
											);
										}
									}
								}
							})}
						</View>
						<TouchableOpacity onPress={() => this.handleSubmit()}>
							<Text style={styles.btn}>Submit</Text>
						</TouchableOpacity>
					</View>
				);
			} else {
				return (
					<View style={styles.container}>
						<Text style={styles.heading}>Your answers were:</Text>
						{selections.map((id, index) => {
							for (let choice of answers) {
								if (choice["id"] == id) {
									return (
										<Text style={styles.mainText} key={id}>
											{index + 1}: {choice.choice}
										</Text>
									);
								}
							}
						})}
						<TouchableOpacity
							onPress={() =>
								this.setState({ startQuiz: false }, () =>
									this.handleStartPress()
								)
							}
						>
							<Text style={styles.btn}>Retake</Text>
						</TouchableOpacity>
					</View>
				);
			}
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.heading}>Quiz</Text>
					<Text style={styles.mainText}>
						A unique quiz with only one question.
					</Text>
					<TouchableOpacity onPress={() => this.handleStartPress()}>
						<Text style={styles.btn}>Start</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}
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
	btn: {
		backgroundColor: "#50d3a7",
		padding: 10,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 12,
		color: "white",
		fontSize: 16,
		overflow: "hidden",
		textAlign: "center",
		marginTop: 20,
		width: 100,
	},
	heading: {
		fontSize: 32,
		marginBottom: 40,
		color: "#50d3a7",
		fontWeight: "bold",
	},
});
