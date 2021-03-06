// REACT
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

// COMPONENTS
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext);

    return (
        <View style={styles.container}>
            <BlogPostForm 
                onSubmit={(title, content) => {
                    addBlogPost(title, content, () => navigation.navigate('Index'));
                }
            } />
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

export default CreateScreen;