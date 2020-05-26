// REACT
import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, blogPost }) => {
    const [ title, setTitle ] = useState(blogPost.title);
    const [ content, setContent ] = useState(blogPost.content);

    return (
        <>
        <Text style={styles.label}>Title:</Text>
        <TextInput 
            style={styles.input}
            value={title}
            onChangeText={newTitle => setTitle(newTitle)}
        />
        <Text style={styles.label}>Content:</Text>
        <TextInput 
            style={styles.input}
            value={content}
            onChangeText={newContent => setContent(newContent)}
        />
        <Button 
            title='Save' 
            onPress={() => onSubmit(title, content)}
        />
        </>
    );
};

// DEFAULT PROPS
BlogPostForm.defaultProps = {
    blogPost: {
        title: '',
        content: ''
    }
};

// STYLESHEET
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 18,
        marginBottom: 20,
        padding: 5
    }
});

export default BlogPostForm;