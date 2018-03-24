import React from 'react'
import Link from 'gatsby-link'

const ResumePage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Resume</h1>
    <div>
      <h2>Education</h2>
      <div>
        <h3>Southern Methodist University</h3>
        <span>Bachelor's of Science in Computer Science</span>
        <span style={{ float: 'right' }}>Aug 2015 - May 2019</span>
        <p>Data Intensive Computing Track</p>

        <span>Master's of Science in Computer Science</span>
        <span style={{ float: 'right' }}>Jul 2017 - Dec 2019</span>
        <p>Algorithms Specialization</p>
      </div>
    </div>

    <div>
      <h2>Work Experience</h2>
      <div>
        <span>
          Software Engineering Intern - <i>Microsoft</i>
        </span>
        <span style={{ float: 'right' }}>May 2018 - Aug 2018</span>
        <p />
        <span>
          Data Structures Teaching Assistant - <i>SMU</i>
        </span>
        <span style={{ float: 'right' }}>Jan 2018 - May 2018</span>
        <p />
        <span>
          Application Development Intern - <i>Lehigh Hanson</i>
        </span>
        <span style={{ float: 'right' }}>Jan 2017 - Dec 2017</span>
        <p />
      </div>
    </div>
  </div>
)

export default ResumePage
