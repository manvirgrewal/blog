import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';


const IndexScreen = ( { navigation } ) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove();
        }
    }, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => `${blogPost.id}`}
				renderItem={({ item }) => {
					return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.blogIndex}>
                                    <Text style={styles.text}> {item.title} </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <AntDesign style={styles.deleteIcon} name="delete" color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
					);
				}}
			/>
		</View>
	);


};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign name="plus" size={30} style={styles.plusIcon}/>
          </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
	blogIndex: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey'
	},
    text: {
        fontSize: 20,
        color: 'purple'
    },
    deleteIcon: {
        fontSize: 25
    },
    plusIcon: {
        marginRight: 25
    }
});

export default IndexScreen;
