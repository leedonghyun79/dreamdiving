import { notFound } from 'next/navigation';
import { SCHEDULE_PROGRAMS } from '@/app/constants/schedule';
import { ScheduleCalendar } from '@/app/components/domain/schedule/ScheduleCalendar';

export function generateStaticParams() {
  return SCHEDULE_PROGRAMS.map((p) => ({ program: p.id }));
}

export default async function ProgramSchedulePage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program: id } = await params;
  const program = SCHEDULE_PROGRAMS.find((p) => p.id === id);
  if (!program) notFound();
  return <ScheduleCalendar program={program} />;
}
