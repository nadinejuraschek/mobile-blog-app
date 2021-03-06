// CONTEXT
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title, 
          content: action.payload.content
        }
      ];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost
      });
    default:
      return state;
  };
};

const addBlogPost = dispatch => {
  return ( title, content, callback ) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    };
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = dispatch => {
  return ( id, title, content, callback ) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content }});
    if (callback) {
      callback();
    };
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ 
    title: 'Test Post', 
    content: 
    'Sartorial hella tumblr meggings twee. 8-bit knausgaard four loko tumeric coloring book. Chicharrones yuccie tacos 8-bit. Jean shorts flannel intelligentsia gastropub cloud bread church-key. Knausgaard semiotics swag fashion axe, scenester tofu selfies hexagon raclette microdosing chicharrones. Palo santo venmo tumeric kickstarter, gluten-free tilde fam street art VHS normcore polaroid chambray.' 
  }]
);
