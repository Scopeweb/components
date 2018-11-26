import * as contentful from 'contentful';
import * as actions from './Blog/Actions';

const client = contentful.createClient({
  space: '5bn9q0airq7w',
  accessToken:
    '4b25a0a20b2ebc037d5b960990915530c5c87c6c0cb8d26f8bb67db56a8b42c7'
});

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading());

    return (
      client
        .getEntries()
        .then(({ items }) => dispatch(actions.loadBlogSuccess(items)))
        .then(() => dispatch(actions.blogLoading(false)))
        .catch(error => {
          console.log(error);
          dispatch(actions.blogLoading(false));
        })
    );
  };
}
