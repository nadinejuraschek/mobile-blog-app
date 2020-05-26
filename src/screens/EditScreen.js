// REACT
import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

// COMPONENTS
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    const [ title, setTitle ] = useState(blogPost.title);
    const [ content, setContent ] = useState(blogPost.content);

    return (
        <View style={styles.container}>
            <BlogPostForm />
        </View>
    );
};

// STYLESHEET
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10
    }
});

export default EditScreen;