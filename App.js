import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Quiz from "./screens/Quiz";
import Blog from "./screens/Blog";
import { Icon } from "react-native-elements";
import Faq from "./screens/Faq";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const QuizStack = createStackNavigator();
const BlogStack = createStackNavigator();
const FaqStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const QuizStackScreen = ({ navigation }) => {
	return (
		<QuizStack.Navigator>
			<QuizStack.Screen
				name="Quiz"
				component={Quiz}
				options={{
					headerLeft: () => {
						return (
							<TouchableOpacity onPress={() => navigation.openDrawer()}>
								<Icon
									name="bars"
									type="font-awesome"
									color="#50d3a7"
									style={{
										padding: 10,
										marginRight: 10,
										fontSize: 20,
									}}
								/>
							</TouchableOpacity>
						);
					},
				}}
			/>
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

const FaqStackScreen = () => {
	return (
		<FaqStack.Navigator>
			<FaqStack.Screen name="FAQ's" component={Faq} />
		</FaqStack.Navigator>
	);
};

const Tabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Quiz"
			tabBarOptions={{
				activeTintColor: "#50d3a7",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 15,
				},
			}}
		>
			<Tab.Screen name="Quiz" component={QuizStackScreen} />
			<Tab.Screen name="Blog" component={BlogStackScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={Tabs} />
				<Drawer.Screen name="FAQ" component={FaqStackScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
