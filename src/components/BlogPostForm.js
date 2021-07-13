import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ initialValues, onSubmit }) => {
    const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

    return (
		<View>
			<Text style={styles.header}>Title: </Text>
			<TextInput
				style={styles.titleInput}
				autoCorrect={false}
				value={title}
				onChangeText={(text) => {
					setTitle(text);
				}}
			/>
			<Text style={styles.header}>Content: </Text>
			<TextInput
				style={styles.contentInput}
				autoCorrect={false}
				value={content}
				onChangeText={(text) => {
					setContent(text);
				}}
			/>
			<Button
				title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
			/>
		</View>
	);
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    titleInput: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
		height: 50,
		fontSize: 30,
	},
	header: {
		fontSize: 24,
		margin: 15,
	},
	contentInput: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
		height: 50,
		fontSize: 30,
	},
});

export default BlogPostForm;