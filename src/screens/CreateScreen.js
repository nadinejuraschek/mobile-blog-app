// REACT
import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const { addBlogPost } = useContext(BlogContext);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={text => setTitle(text)} 
            />
            <Text style={styles.label}>Content:</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={text => setContent(text)} 
            />
            <Button 
                title='Add Blog Post' 
                onPress={() => addBlogPost(title, content)} 
            />
        </View>
    );
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

export default CreateScreen;