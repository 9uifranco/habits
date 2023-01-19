interface HabitProps {
    completed: number
}

function Habit(props: HabitProps) {
  return (
    <p className="bg-zinc-900 rounded w-10 h-10 text-white m-2 flex items-center justify-center ">{props.completed}</p>
  )
}

export default Habit