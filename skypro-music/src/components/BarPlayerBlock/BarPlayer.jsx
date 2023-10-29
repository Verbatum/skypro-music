import { PlayerControls } from '../PlayerControlBlock/PlayerControls';
import { PlayerTrackPlay } from '../PlayerTrackPlayBlock/PlayerTrackPlay';
import styles from './barPlayer.module.css';

export function BarPlayer({ isLoading }) {
  return (
    <div className={styles.bar__player}>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </div>
  );
}