import { styles } from './Bsac.styles';

// **강조** 구간을 파란색 볼드로 렌더링
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={styles.em}>
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
