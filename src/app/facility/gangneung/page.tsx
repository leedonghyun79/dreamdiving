import { MarineTrainingSection } from '@/app/components/domain/facility/MarineTrainingSection';

export default function Page() {
  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px 100px' }}>
      <MarineTrainingSection defaultLocation="gangneung" />
    </main>
  );
}
