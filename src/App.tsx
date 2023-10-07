import { SolidIcon } from './components/SolidIcon';
import * as styles from './App.css';
import { createSignal } from 'solid-js';

export function App() {
  const [isSpining, setIsSpining] = createSignal(true);

  function toggle() {
    setIsSpining((prev) => !prev);
  }

  return (
    <main class={styles.root}>
      <h1 class={styles.heading}>Hello Solid.js🍦</h1>

      <button type='button' onClick={toggle} class={styles.button}>
        {isSpining() ? 'Stop' : 'Start'}
      </button>

      <SolidIcon class={isSpining() ? styles.icon.spin : styles.icon.default} />
    </main>
  );
}
