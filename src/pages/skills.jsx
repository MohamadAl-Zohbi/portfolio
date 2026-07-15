export default function Skills() {

    const skillGroups = [
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: "React.js", level: 75 },
                { name: "Vue.js", level: 85 },
                { name: "JavaScript", level: 90 },
                { name: "Tailwind CSS", level: 65 },
                { name: "HTML / CSS", level: 95 },
            ]
        },

        {
            title: "Backend Development",
            icon: "⚙️",
            skills: [
                { name: "PHP", level: 90 },
                { name: "Laravel", level: 60 },
                { name: "Node.js", level: 75 },
                { name: "Express.js", level: 70 },
                { name: "REST APIs", level: 85 },
            ]
        },

        {
            title: "Databases",
            icon: "🗄️",
            skills: [
                { name: "MySQL", level: 90 },
                { name: "SQLite", level: 85 },
                { name: "PostgreSQL", level: 75 },
                { name: "Database Design", level: 85 },
            ]
        },
        {
            title: "Tools & Technologies",
            icon: "🚀",
            skills: [
                { name: "Git / GitHub", level: 85 },
                { name: "Linux", level: 70 },
                { name: "Postman", level: 80 },
                { name: "Web3 / Solidity", level: 65 },
                { name: "Cybersecurity", level: 70 },
            ]
        },
        {
            title: "Programming Languages",
            icon: "💻",
            skills: [
                { name: "JavaScript", level: 90 },
                { name: "PHP", level: 80 },
                { name: "Python", level: 70 },
                { name: "Java", level: 65 },
                { name: "Rust", level: 60 },
            ]
        },
        {
            title: "Other Technologies",
            icon: "🚀",
            skills: [
                { name: "Web3", level: 70 },
                { name: "Solidity", level: 70 },
                { name: "Substrate", level: 50 },
                { name: "Cybersecurity Basics", level: 70 },
                { name: "Networking", level: 99 },
                { name: "Cloud Computing", level: 60 },
            ]
        }
    ];


    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">

            <div className="max-w-6xl mx-auto">


                {/* Header */}

                <div className="text-center mb-16">

                    <h1 className="
            text-5xl md:text-6xl 
            font-extrabold
          ">
                        My <span className="text-blue-500">
                            Skills
                        </span>
                    </h1>


                    <p className="
            mt-5
            text-gray-400
            text-lg
          ">
                        My technical knowledge and tools that help me build
                        modern and scalable applications.
                    </p>

                </div>



                {/* Skill Cards */}

                <div className="
          grid
          md:grid-cols-2
          gap-8
        ">


                    {skillGroups.map((group, index) => (

                        <div
                            key={index}
                            className="
                bg-gradient-to-br
                from-blue-600/20
                to-transparent

                border
                border-blue-500/30

                rounded-3xl
                p-8

                shadow-xl

                hover:-translate-y-2
                transition
              "
                        >


                            <div className="
                flex items-center gap-4 mb-8
              ">

                                <span className="text-4xl">
                                    {group.icon}
                                </span>


                                <h2 className="
                  text-2xl
                  font-bold
                ">
                                    {group.title}
                                </h2>

                            </div>




                            <div className="space-y-6">


                                {group.skills.map((skill, i) => (

                                    <div key={i}>


                                        <div className="
                      flex justify-between
                      mb-2
                    ">

                                            <span className="font-semibold">
                                                {skill.name}
                                            </span>


                                            <span className="
                        text-blue-400
                        text-sm
                      ">
                                                {skill.level}%
                                            </span>

                                        </div>



                                        <div className="
                      w-full
                      h-3
                      bg-gray-800
                      rounded-full
                      overflow-hidden
                    ">


                                            <div
                                                className="
                          h-full
                          bg-blue-500
                          rounded-full
                          transition-all
                          duration-1000
                        "
                                                style={{
                                                    width: `${skill.level}%`
                                                }}
                                            />


                                        </div>


                                    </div>

                                ))}


                            </div>


                        </div>

                    ))}


                </div>




                {/* Learning Section */}

                <div className="
          mt-24
          text-center

          border-t
          border-gray-800

          pt-10
        ">


                    <h2 className="
            text-3xl
            font-bold
          ">
                        Constantly Improving 🚀
                    </h2>


                    <p className="
            mt-4
            max-w-3xl
            mx-auto
            text-gray-400
            leading-7
          ">
                        I believe that a great developer never stops learning.
                        I continue exploring new technologies, improving my
                        engineering practices, and building real-world projects.
                    </p>


                </div>



            </div>

        </section>
    );
}