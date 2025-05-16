import { createFileRoute } from '@tanstack/react-router';
// import { useState } from 'react';

import { BackgroundBeams } from '@/components/ui/background-beams';
// import { cn } from '@/lib/utils';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';

export const Route = createFileRoute('/receipt')({
  component: RouteComponent,
});

function RouteComponent() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedSession, setSelectedSession] = useState('all');

  // const dummyReceipts = [
  //   {
  //     id: 1,
  //     amount: 1500,
  //     session: 'morning',
  //     date: '2024-01-15',
  //     customerName: 'John Doe',
  //   },
  //   {
  //     id: 2,
  //     amount: 2000,
  //     session: 'afternoon',
  //     date: '2024-01-15',
  //     customerName: 'Jane Smith',
  //   },
  //   {
  //     id: 3,
  //     amount: 1800,
  //     session: 'evening',
  //     date: '2024-01-15',
  //     customerName: 'Bob Johnson',
  //   },
  //   {
  //     id: 4,
  //     amount: 2500,
  //     session: 'morning',
  //     date: '2024-01-16',
  //     customerName: 'Alice Brown',
  //   },
  // ];

  // const filteredReceipts = dummyReceipts.filter((receipt) => {
  //   const matchesSearch = receipt.customerName
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const matchesSession =
  //     selectedSession === 'all' || receipt.session === selectedSession;
  //   return matchesSearch && matchesSession;
  // });

  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10">
        <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 bg-black">
          <h2 className="text-xl font-bold text-neutral-200">
            Print your TESA receipt with ease
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">
            Choose the session and level
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn('flex w-full flex-col space-y-2', className)}>
//       {children}
//     </div>
//   );
// };
