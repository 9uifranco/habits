import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

/*
interface HabitDayProps {
    completed: number
}
*/

function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 rounded-lg border-zinc-800">
        
        <Popover.Portal>
          <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
            <span className='font-semibold text-zinc-400'>Terça-feira</span>
            <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

            <ProgressBar progress={20}/>

            <Popover.Arrow className='fill-zinc-900 h-5 w-10'/>
          </Popover.Content>  
        </Popover.Portal>
      </Popover.Trigger>
    </Popover.Root>
  )
}

export default HabitDay