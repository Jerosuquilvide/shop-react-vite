import React from 'react'

function NotFound() {
  
  return (
    <>
    <main class="grid h-screen place-items-center bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600 text-4xl">404 but ... </p>
            <br></br>
            <img decoding='async' lazy='loading' id='gif' src="../../public/img/this-is-fine-404.gif"></img>  
          <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
