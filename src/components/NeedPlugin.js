import React, { Component } from 'react';

class NeedPlugin extends Component {  
  render() {
    return (
      <div>
      	<p>if you see this paragraph, it means that your browser blocks the ajax request made to backend.</p> 
      	<p>The reason behind is that this website is trying to use data provided by a different domain.</p>
      	<p>To read more about this error, please read <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">this page</a>.</p>
      	<p>For Chrome user, you can simply install this Chrome plugin to continue:</p>
        <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">allow-control-allow-origin</a>
      </div>
    );
  }
}

export default NeedPlugin;