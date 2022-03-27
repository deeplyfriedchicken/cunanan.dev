import React from 'react';

import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';

import Image from './Image/Image';

function Markdown(props: ReactMarkdownProps) {
  const renderers = {
    image: Image,
  };

  return <ReactMarkdown renderers={renderers} {...props} />;
}

export default Markdown;
