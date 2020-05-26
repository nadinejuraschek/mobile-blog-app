// REACT
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

// ICONS
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

// HEADER
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: 
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <FontAwesome style={styles.headerIcon} name='pencil' />
            </TouchableOpacity>
    };
};

// STYLESHEET
const styles = StyleSheet.create({
    headerIcon: {
        fontSize: 24,
        marginRight: 10
    }
});

export default ShowScreen;