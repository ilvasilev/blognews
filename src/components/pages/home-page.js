import React from 'react';
import Header from '../header'
import Posts from '../posts'
import styles from './home-page.module.css'
import Footer from '../footer'

function App() {
  return (
    <div className={styles.app}>
    <Header />
    <div className={styles.container}>    
    <Posts />
    </div>
    <Footer />
    </div>
  );
}

export default App;
