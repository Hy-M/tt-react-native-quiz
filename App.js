import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "./screens/Quiz";
import Blog from "./screens/Blog";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const QuizStack = createStackNavigator();
const BlogStack = createStackNavigator();

const QuizStackScreen = () => {
	return (
		<QuizStack.Navigator>
			<QuizStack.Screen name="Quiz" component={Quiz} />
		</QuizStack.Navigator>
	);
};

const BlogStackScreen = () => {
	return (
		<BlogStack.Navigator>
			<BlogStack.Screen name="Blog" component={Blog} />
		</BlogStack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Quiz" component={QuizStackScreen} />
				<Tab.Screen name="Blog" component={BlogStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
