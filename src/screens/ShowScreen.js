// REACT
import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

// STYLESHEET
const styles = StyleSheet.create({

});

export default ShowScreen;