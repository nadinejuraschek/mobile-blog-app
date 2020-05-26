// REACT
import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

// COMPONENTS
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.container}>
            <BlogPostForm
                blogPost={{ title: blogPost.title, content: blogPost.content }}
                onSubmit={(title, content, callback) => 
                    editBlogPost(blogPost.id, title, content, () => navigation.pop())
                }
            />
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