import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9944055610365530"
          data-ad-slot="4767975208"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
    );
  }
}