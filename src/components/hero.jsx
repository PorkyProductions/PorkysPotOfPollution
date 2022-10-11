import fire from 'bootstrap-icons/icons/fire.svg'
export default () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white dark:bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block dark:hidden"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" className='dark:hidden' />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-primary font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">WE ARE THE REASON BEHIND</span>{' '}
                <span className="block text-theme-fire xl:inline">CLIMATE CHANGE</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                You thought burning fossil fuels was bad? You certainly haven't read of TASTEFUL opinions on almost ANYTHING.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/PorkysPotOfPollution/blog"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-theme-darkRed px-8 py-3 text-base font-medium text-white hover:text-white hover:bg-theme-salmon md:py-4 md:px-10 md:text-lg"
                  >
                    Read the blog.
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/PorkysPotOfPollution/about"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-theme-salmon px-8 py-3 text-base font-medium text-white hover:text-white hover:bg-theme-coral md:py-4 md:px-10 md:text-lg"
                  >
                    About us.
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={fire}
          alt=""
        />
      </div>
    </div>
  )
}
