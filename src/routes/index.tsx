import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [selectedItems, setSelectedItems] = useState({
    basicDues: false,
    tshirt: false,
    dinner: false,
  });

  const prices = {
    basicDues: 3000,
    tshirt: 4000,
    dinner: 7000,
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [key, selected]) => {
      return total + (selected ? prices[key as keyof typeof prices] : 0);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted', { selectedItems, total: calculateTotal() });
  };
  // Todo: Add what you're paying for by the left side
  // Todo: Add total cost by the right side
  // Todo: Animation the cards by the sides slide in from the left and right to join the form
  return (
    <div className="w-full relative flex items-center justify-center antialiased pt-7">
      <div className="flex flex-col md:flex-row space-x-4 max-w-6xl mx-auto z-10 md:items-start w-10/12 md:w-full items-center md:justify-between">
        {/* Left Wing */}
        <div className="md:w-64 w-full shadow-input rounded-2xl p-6 bg-black transform transition-transform duration-500 hover:scale-105 -translate-x-4 hover:translate-x-0 max-w-md md:rounded-2xl md:p-8 mt-14">
          <h3 className="text-lg font-semibold text-white mb-4">
            Payment Options
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="basicDues"
                checked={selectedItems.basicDues}
                onCheckedChange={(checked) =>
                  setSelectedItems((prev) => ({
                    ...prev,
                    basicDues: !!checked,
                  }))
                }
              />
              <label
                htmlFor="basicDues"
                className="text-sm font-medium leading-none text-white"
              >
                Basic Dues - ₦3,000
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tshirt"
                checked={selectedItems.tshirt}
                onCheckedChange={(checked) =>
                  setSelectedItems((prev) => ({ ...prev, tshirt: !!checked }))
                }
              />
              <label
                htmlFor="tshirt"
                className="text-sm font-medium leading-none text-white"
              >
                T-shirt - ₦4,000
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dinner"
                checked={selectedItems.dinner}
                onCheckedChange={(checked) =>
                  setSelectedItems((prev) => ({ ...prev, dinner: !!checked }))
                }
              />
              <label
                htmlFor="dinner"
                className="text-sm font-medium leading-none text-white"
              >
                Dinner - ₦7,000
              </label>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="shadow-input w-full max-w-md rounded-none md:rounded-2xl bg-black mt-14">
          <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 bg-black mt-14">
            <h2 className="text-xl font-bold text-neutral-200">
              Pay your Tesa dues
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-300">
              Choose the session and level
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstname" className="text-white">
                    First name
                  </Label>
                  <Input id="firstname" placeholder="Victor" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" className="text-white">
                    Last name
                  </Label>
                  <Input id="lastname" placeholder="Abuka" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="dept" className="text-white">
                  Department
                </Label>
                <Select>
                  <SelectTrigger className="w-full text-white">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrical">
                      Electrical/Electronics Engineering
                    </SelectItem>
                    <SelectItem value="mechanical">
                      Mechanical Engineering
                    </SelectItem>
                    <SelectItem value="agric">
                      Agricultural Engineering
                    </SelectItem>
                    <SelectItem value="wood">
                      Wood Products Engineering
                    </SelectItem>
                    <SelectItem value="industrial">
                      Industrial Engineering
                    </SelectItem>
                    <SelectItem value="civil">Civil Engineering</SelectItem>
                    <SelectItem value="petroleum">
                      Petroleum Engineering
                    </SelectItem>
                    <SelectItem value="automotive">
                      Automotive Engineering
                    </SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="mybestemail@maybe.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="level" className="text-white">
                  Your level
                </Label>
                <Select>
                  <SelectTrigger className="w-full text-white">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 Level</SelectItem>
                    <SelectItem value="200">200 Level</SelectItem>
                    <SelectItem value="300">300 Level</SelectItem>
                    <SelectItem value="400">400 Level</SelectItem>
                    <SelectItem value="500">500 Level</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="session" className="text-white">
                  Session
                </Label>
                <Select>
                  <SelectTrigger className="w-full text-white">
                    <SelectValue placeholder="Select Session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024/2025">2024/2025</SelectItem>
                    <SelectItem value="2023/2024">2023/2024</SelectItem>
                    <SelectItem value="2022/2023">2022/2023</SelectItem>
                    <SelectItem value="2021/2022">2021/2022</SelectItem>
                    <SelectItem value="2020/2021">2020/2021</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>

              {/* <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                Pay Dues &rarr;
                </button> */}
              <BottomGradient />

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

              <div className="flex flex-col space-y-4"></div>
            </form>
          </div>
        </div>
        {/* Right Wing */}
        <div className="w-64 shadow-input rounded-2xl p-6 bg-black transform transition-transform duration-500 hover:scale-105 translate-x-4 hover:translate-x-0 max-w-md md:rounded-2xl md:p-8 mt-14">
          <h3 className="text-lg font-semibold text-white mb-4">
            Total Amount
          </h3>
          <div
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            ₦{calculateTotal().toLocaleString()}
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            onClick={() => console.log('Processing payment...')}
          >
            Pay Dues &rarr;
            <BottomGradient />
          </button>
        </div>
        <BackgroundBeams className="-z-50" />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
