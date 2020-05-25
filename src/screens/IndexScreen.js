// REACT
import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// CONTEXT
import { Context as BlogContext } from '../context/BlogContext';

// ICONS
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  
    return (
      <View>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                style={styles.row} 
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
};

// HEADER
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={styles.headerIcon} name="plus-circle" />
            </TouchableOpacity>
    };
};

// STYLESHEET
const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    headerIcon: {
        fontSize: 24,
        marginRight: 10
    }
});

export default IndexScreen;
