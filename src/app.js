import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.css'

const App = React.createClass({
  render: function() {
    return (
      <div className={styles['container']}>
        Goodbye world text
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
