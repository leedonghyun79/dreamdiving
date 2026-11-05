import { BSAC_INTRO_BLOCKS, BSAC_INTRO_LEAD } from '@/app/constants/bsac';
import { BsacLead } from '@/app/components/domain/bsac/BsacLead';
import { BsacBlock } from '@/app/components/domain/bsac/BsacBlock';
import { styles } from '@/app/components/domain/bsac/Bsac.styles';

export default function BsacIntroPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <BsacLead lead={BSAC_INTRO_LEAD} imageRatio="3 / 4" image={encodeURI('/assets/basc 단체/소개/소개.webp')} />
        <div className={styles.video} style={{ padding: 0, overflow: 'hidden' }}>
          <iframe
            src="https://player.vimeo.com/video/1070954112?title=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&transparent=0&app_id=122963"
            width="426"
            height="240"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="소개영상"
            style={{ width: '100%', height: '100%', margin: 0, display: 'block' }}
          />
        </div>
        {BSAC_INTRO_BLOCKS.map((b) => (
          <BsacBlock key={b.title} {...b} />
        ))}
      </div>
    </main>
  );
}
