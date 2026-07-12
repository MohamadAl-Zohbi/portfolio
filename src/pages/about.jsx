import { Link } from "react-router-dom";
export default function About() {
    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Hero */}
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    {/* Left */}
                    <div>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                            Building ideas into
                            <span className="text-cyan-400"> powerful </span>
                            software.
                        </h1>


                        <p className="mt-6 text-gray-300 text-lg leading-8">
                            I'm <span className="text-blue-400 font-semibold">
                                Mohamad Al-Zohbi</span>,
                            a Computer Science student and Full-Stack Developer from Lebanon.
                            I love creating real-world applications, solving problems,
                            and continuously improving my skills in modern technologies.
                        </p>


                        <div className="mt-8 flex gap-4">



                            <Link
                                to="/contact"
                                className="px-6 py-3  
                                        rounded-xl font-semibold 
                                      hover:text-white transition
                                        bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
                            >
                                View Projects
                            </Link>

                            <Link
                                href="/contact"
                                className="px-6 py-3 border border-blue-500
                                        rounded-xl font-semibold hover:bg-blue-500
                                      hover:text-white transition hover:scale-105 transition"
                            >
                                Contact Me
                            </Link>

                        </div>

                    </div>



                    {/* Right Card */}
                    <div className="
            bg-gradient-to-br from-blue-600/20 to-transparent
            border border-blue-500/30
            rounded-3xl p-8 shadow-2xl
          ">


                        <h2 className="text-2xl font-bold mb-6">
                            Who I Am
                        </h2>


                        <p className="text-gray-300 leading-8">
                            I am passionate about software development and technology.
                            My journey started with curiosity about how applications work,
                            and it evolved into building complete systems that solve
                            practical problems.
                        </p>


                        <p className="mt-5 text-gray-300 leading-8">
                            I focus on web development, backend architecture,
                            databases, and creating efficient solutions for businesses
                            and communities.
                        </p>


                    </div>

                </div>



                {/* Experience Cards */}

                <div className="mt-24 grid md:grid-cols-3 gap-8 ">



                    <Service
                        title="💻 Development"
                        description="Building full-stack applications using React, Vue,
                            Laravel, PHP, Node.js and modern web technologies."
                    />

                    <Service
                        title="🚀 Real Projects"
                        description="Created practical systems including a Point of Sale system
                            and an Internet Service Provider management platform."
                    />

                    <Service
                        title="🎯 Vision"
                        description="My goal is becoming a professional software engineer and
                            working on challenging projects that create real impact."
                    />
                </div>

                {/* Bottom Quote */}

                <div className="
                    mt-24 text-center
                    border-t 
                    border-gray-800
                    pt-10
        ">

                    <p className="text-2xl font-semibold">
                        "Code is not just instructions,
                        it's a way to build the future."
                    </p>

                    <p className="mt-3 text-blue-400">
                        — Mohamad Al-Zohbi
                    </p>

                </div>


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
