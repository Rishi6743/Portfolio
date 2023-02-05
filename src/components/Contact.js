import React from 'react'

const Contact = () => {
  return (
    <div>

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Kindly let me know if you require any further information or if you would like to schedule an interview, as I am readily available for your convenience</h1>
            <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0"> <a href="mailto:example@email.com"> Contact Me</a> </button>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Contact