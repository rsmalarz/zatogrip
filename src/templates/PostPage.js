import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '@containers';

const PostPage = ({ pageContext }) => (
  <Post
    body={pageContext?.body}
    cover={pageContext?.cover}
    footnotes={pageContext?.footnotes}
    relatedPosts={pageContext.articles}
    title={pageContext.metadata.title}
  />
);

PostPage.propTypes = {
  pageContext: PropTypes.shape({
    articles: PropTypes.shape({
      articles: PropTypes.arrayOf(PropTypes.shape({})),
      heading: PropTypes.string,
    }),
    body: PropTypes.string,
    cover: PropTypes.shape({}),
    footnotes: PropTypes.arrayOf(PropTypes.shape({})),
    metadata: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,

};

export default PostPage;
