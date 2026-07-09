function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white">

      <div className="
        max-w-7xl mx-auto
        px-6 md:px-20
        py-12
        grid md:grid-cols-4
        gap-10
      ">


        {/* Brand */}
        <div>

          <h2 className="
            text-3xl font-bold
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent
          ">
            Mohamad Zohbi
          </h2>


          <p className="text-gray-400 mt-4 leading-7">

            Full Stack Web Developer passionate about
            building modern web applications and solving
            real-world problems through technology.

          </p>


        </div>




        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Services
          </h3>


          <ul className="space-y-3 text-gray-400">

            <li>
              Web Development
            </li>

            <li>
              Backend Development
            </li>

            <li>
              Database Solutions
            </li>

            <li>
              Business Systems
            </li>

          </ul>

        </div>





        {/* Technologies */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Technologies
          </h3>


          <ul className="space-y-3 text-gray-400">

            <li>
              React & Tailwind CSS
            </li>

            <li>
              PHP & Laravel
            </li>

            <li>
              Node.js & Express
            </li>

            <li>
              MySQL / SQLite / PostgreSQL
            </li>

          </ul>


        </div>





        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Contact
          </h3>


          <ul className="space-y-3 text-gray-400">

            <li>
              mohamadalzohbi01@gmail.com
            </li>


            <li>
              📍 Lebanon
            </li>


            <li>
              💻 GitHub
            </li>


            <li>
              🔗 LinkedIn
            </li>


          </ul>


        </div>


      </div>





      {/* Bottom */}
      <div className="
        border-t border-white/10
        py-6
        text-center
        text-gray-500
      ">

        © {new Date().getFullYear()} Mohamad Zohbi.
        Built with React & Tailwind CSS.

      </div>


    </footer>
  );
}


export default Footer;