import { BoardConfig } from '@/app/constants/board';
import { styles } from './Board.styles';

export function BoardTitle({ board, color = '#267db6' }: { board: Pick<BoardConfig, 'en' | 'ko'>; color?: string }) {
  return (
    <div className={styles.titleBox}>
      <p className={styles.titleEn}>{board.en}</p>
      <h2 className={styles.titleKo(color)}>{board.ko}</h2>
      <div className={styles.titleLine} />
    </div>
  );
}
