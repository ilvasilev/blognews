import React from 'react';
import Header from './components/header'
import Posts from './components/posts'
import styles from './app.module.css'
import Footer from './components/footer'

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
