import profile from '../assets/profile.png';
import cv from '../assets/cv.pdf';
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white 
                 flex flex-col justify-center px-6 md:px-20 pt-24 pb-10"
    >

      {/* Hero */}
      <div className="max-w-7xl mx-auto 
                      grid md:grid-cols-2 gap-10 items-center">


        {/* Left Side */}
        <div>

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold">
            Mohamad Zohbi
          </h1>


          <h2 className="text-2xl md:text-3xl 
                         text-gray-300 mt-4">
            Full Stack Web Developer
          </h2>


          <p className="text-gray-400 mt-6 
                        leading-8 max-w-xl">

            I build modern and scalable web applications
            using React, PHP, Laravel, Node.js and MySQL.
            Passionate about solving problems and creating
            clean user experiences.

          </p>



          <div className="flex gap-5 mt-8">

            <button
              className="
              px-7 py-3 rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:scale-105 transition
              font-semibold"
            >
              View Projects
            </button>


            <a
              href={cv}
              className="
              px-7 py-3 rounded-full
              border border-cyan-400
              text-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition"
              download="Mohamad Zohbi.pdf"
            >
              Download CV
            </a>

          </div>

        </div>




        {/* Right Side Image */}
        <div className="flex justify-center">


          <div
            className="
            w-72 h-72 md:w-96 md:h-96
            rounded-full
            p-2
            bg-gradient-to-r from-cyan-400 to-blue-600
            "
          >

            <img
              src={profile}
              alt="Mohamad Zohbi"
              className="
              w-full h-full
              rounded-full
              object-cover
              border-8 border-slate-950
              "
            />

          </div>


        </div>


      </div>






      {/* Services */}
      <div
        className="
        max-w-7xl mx-auto
        grid md:grid-cols-3
        gap-6
        mt-20
        "
      >


        <Service
          title="Web Development"
          description="Modern responsive websites and web applications."
        />


        <Service
          title="Backend Development"
          description="Powerful APIs and database solutions."
        />


        <Service
          title="Software Solutions"
          description="Custom systems for businesses."
        />


      </div>


    </section>
  );
}




function Service({ title, description }) {

  return (

    <div
      className="
      bg-slate-900
      border border-white/10
      rounded-2xl
      p-6
      hover:-translate-y-2
      transition
      "
    >

      <h3 className="text-xl font-bold text-cyan-400">
        {title}
      </h3>


      <p className="text-gray-400 mt-3">
        {description}
      </p>

    </div>

  );
}



export default Home;