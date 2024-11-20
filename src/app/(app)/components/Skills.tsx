import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className={['bg-pale my-24 md:my-0 py-16 md:py-16'].join(' ')}>
      <div className="px-6 mx-auto md:px-10 2xl:max-w-7xl">
        <div className="py-16">
          <div className="flex flex-col flex-nowrap">
            <h3 className="alm-h3--projects">Skills</h3>
            <div className="flex flex-row justify-between w-full nowrap">
              <h2 className="alm-h2--projects">Here are my qualifications</h2>
            </div>

            <p
              className="text-base font-medium font-poppins md:w-3/5"
              style={{
                color: 'rgba(17,23,33,0.7)',
                lineHeight: '1.575rem',
              }}
            >
              These are some of the skills I&apos;ve acquired throughout the years.
            </p>
          </div>
        </div>
        <div className="py-4">
          <h3 className="alm-h3">Core Skills</h3>
          <div className="py-8">
            <h4 className="alm-h4">Web Development</h4>
            <div className="flex flex-col flex-nowrap">
              <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                <li>JavaScript & TypeScript</li>
                <li>Node.js</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS & SCSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="alm-h3">Tech Skills</h3>
          <div className="flex flex-col py-4 md:flex-row md:flex-wrap md:gap-16">
            <div className="py-4">
              <h4 className="alm-h4">Frontend Development</h4>
              <div className="flex flex-col flex-nowrap">
                <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                  <li>
                    <span>JavaScript & TypeScript</span>
                    <ul className="mx-3 leading-5">
                      <li>▹React & Next.js</li>
                      <li>▹Angular</li>
                      <li>▹JQuery</li>
                    </ul>
                  </li>
                  <li>HTML5 </li>
                  <li>
                    <span>CSS</span>
                    <ul className="mx-3 leading-5">
                      <li>▹SCSS</li>
                    </ul>
                  </li>
                  <li>
                    <span>Design System</span>
                    <ul className="mx-3 leading-5">
                      <li>▹Bootstrap</li>
                      <li>▹Tailwind</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div>
                <h4 className="alm-h4">Backend Development</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>
                      <span>Node.js</span>
                      <ul className="mx-3 leading-5">
                        <li>▹Express</li>
                      </ul>
                    </li>
                    <li>ASP .Net Core</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="alm-h4">Database</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>PostgreSql</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div>
                <h4 className="alm-h4">Cloud Services</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>Azure</li>
                    <li>AWS</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="alm-h4">Tools</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>Git</li>
                    <li>Adobe XD</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="alm-h3">Certifications</h3>
          <div className="flex flex-col py-4 md:flex-row md:flex-wrap md:gap-16">
            <div className="py-4">
              <h4 className="alm-h4">Microsoft</h4>
              <div className="flex flex-col flex-nowrap">
                <ul className="flex flex-col my-2 text-sm font-normal leading-7 flex-nowrap font-poppins text-black-var">
                  <li>Microsoft Certified Azure DevOps Engineer Expert</li>
                  <li>Microsoft Certified Azure Solutions Architect Expert</li>
                  <li>Microsoft Certified Azure Developer Associate</li>
                  <li>Microsoft Certified Azure Administrator Associate</li>
                  <li>Microsoft Certified Azure Fundamentals</li>
                  <li>Microsoft Certified Azure Data Fundamentals</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div>
                <h4 className="alm-h4">AWS</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>Amazon Web Services Solutions Architect Associate</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="alm-h4">GCP</h4>
                <div className="flex flex-col flex-nowrap">
                  <ul className="flex flex-col my-2 text-sm font-normal leading-5 flex-nowrap font-poppins text-black-var">
                    <li>Google Cloud Certified Professional Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
