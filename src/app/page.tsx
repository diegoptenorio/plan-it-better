import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <fieldset name="complexidade" className="space-y-1 sm:w-60 dark:text-gray-100">
          <label>Complexidade</label>
          <input type="range" className="w-full dark:accent-violet-400" min="1" max="5" />
          <div aria-hidden="true" className="flex justify-between px-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </fieldset>
        <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 dark:divide-gray-700">
          <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
            <span className="text-2xl">Success</span>
            <span className="text-xs dark:text-gray-400">Vitae nulla eligendi dignissimos culpa doloribus.</span>
          </div>
          <button className="px-4 flex items-center text-xs uppercase tracki dark:text-gray-400 dark:border-gray-700">Dismiss</button>
        </div>
      </div>
    </main>
  )
}
