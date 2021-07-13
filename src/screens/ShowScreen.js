import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context }  from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(post => post.id === navigation.getParam('id'));

	return (
		<View>
			<Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <AntDesign name="edit" size={30} style={styles.editIcon}/>
          </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    editIcon: {
        marginRight: 25
    }
});

export default ShowScreen;
