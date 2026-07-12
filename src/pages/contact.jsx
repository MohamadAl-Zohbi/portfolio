export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <div className="text-center mb-16">

          <h1 className="
            text-5xl md:text-6xl
            font-extrabold
          ">
            Contact <span className="text-blue-500">
              Me
            </span>
          </h1>


          <p className="
            mt-5
            text-gray-400
            text-lg
          ">
            Have a project, opportunity, or just want to talk about technology?
            Feel free to reach out.
          </p>

        </div>




        <div className="
          grid
          md:grid-cols-2
          gap-10
        ">



          {/* Contact Information */}

          <div className="
            bg-gradient-to-br
            from-blue-600/20
            to-transparent

            border
            border-blue-500/30

            rounded-3xl
            p-8
          ">


            <h2 className="
              text-3xl
              font-bold
              mb-8
            ">
              Get In Touch
            </h2>



            <div className="space-y-6">


              <div>

                <h3 className="text-blue-400 font-semibold">
                  📧 Email
                </h3>

                <p className="text-gray-300">
                  mohamadalzohbi01@gmail.com
                </p>

              </div>



              <div>

                <h3 className="text-blue-400 font-semibold">
                  📱 Phone
                </h3>

                <p className="text-gray-300">
                  +961 71 081 432
                </p>

              </div>



              <div>

                <h3 className="text-blue-400 font-semibold">
                  🌍 Location
                </h3>

                <p className="text-gray-300">
                  Lebanon
                </p>

              </div>



              <div>

                <h3 className="text-blue-400 font-semibold">
                  💻 Social
                </h3>

                <div className="flex gap-4 mt-3">


                  <a
                    href="#"
                    className="
                    px-4 py-2
                    border border-blue-500
                    rounded-lg
                    hover:bg-blue-500
                    transition
                    "
                  >
                    GitHub
                  </a>



                  <a
                    href="#"
                    className="
                    px-4 py-2
                    border border-blue-500
                    rounded-lg
                    hover:bg-blue-500
                    transition
                    "
                  >
                    LinkedIn
                  </a>


                </div>

              </div>



            </div>


          </div>





          {/* Message Form */}

          <div className="
            bg-white
            text-black
            rounded-3xl
            p-8
          ">


            <h2 className="
              text-3xl
              font-bold
              mb-8
            ">
              Send Message
            </h2>



            <form className="space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-xl
                bg-gray-100
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              />



              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-xl
                bg-gray-100
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              />



              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                w-full
                p-4
                rounded-xl
                bg-gray-100
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              />


              <button
                className="
                w-full
                py-4
                bg-blue-600
                text-white
                rounded-xl
                font-bold
                hover:bg-blue-700
                transition
                "
              >
                Send Message
              </button>


            </form>


          </div>


        </div>




        {/* Footer Message */}

        <div className="
          mt-20
          text-center
          border-t
          border-gray-800
          pt-10
        ">

          <p className="
            text-xl
            text-gray-400
          ">
            I'm always open to new opportunities,
            collaborations, and interesting projects.
          </p>

        </div>


      </div>

    </section>
  );
}