import type { Component } from 'solid-js';
import styles from './App.module.scss';
import HeaderBar from './components/headerBar/headerBar';
import TeamPicker from './components/teamPicker/teamPicker';

const App: Component = () => {
  return (
    <div>
        <header class={`${styles.header}`} >
         <HeaderBar title="Professors Team Builder" />
        </header>
        <main>
          <div class={`${styles.teamPicker}`}>
            <TeamPicker /> 
          </div>
        </main>
        <footer>

        </footer>
    </div>
  );
};

export default App;
