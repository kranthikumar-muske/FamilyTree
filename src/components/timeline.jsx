import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Work Experience</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Senior Software Engineer at Cerner Corporation <span>Nov 2017-present</span></h2>
                        <p>Current project focuses on improving the scalability of the Cerner Millennium System.
                        The Goal of the project is to reduce the Oracle usage and the cost by moving clinical documents(BLOB Data) from Oracle Clinical tables to AWS Simple Storage Service(S3).
                        Working on developing JAVA, CCL(Cerner Command Language), Rest Service API's for consumers being Cerner Millennium Teams.
                        These api's help Cerner Millennium teams to read, write, update and delete clinical documents data from AWS S3 with no need of AWS S3 implementation or knowledge.
                        Technologies used to develop api's include Java8, AWS S3 SDK, JDBC, SQL, Google Guice, CCL.
                        Also gained experience working on setting up global AWS S3 configurations for Cerner clients.
                       </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java Developer at Naztec International Group <span>Aug 2015-Oct 2017</span></h2>
                        <p>Full time with Naztec Group and Client being Cerner Corporation with Bedrock team.
                         The Goal of the project is to provide a solution named "Bedrock" to Cerner Clients.
                         Bedrock is an innovative system of wizards that allows you to design, build, and maintain Cerner Millennium applications at health care organizations.
                         Bedrock wizards use natural language and a streamlined interface, so users who may not be familiar with clinical processes or the technical aspects of a clinical database are able to navigate through each wizard and effectively build and maintain their Cerner Millennium systems.
                         Technologies used to develop the solution are Eclipse RCP, CCL, JFace, SWT.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate at University Of Central Missouri <span>Aug 2014 - Dec 2015</span></h2>
                        <p>Master's in Computer Science with intrest inclined towards Data Structures and Algorithms.
                         Worked as graduate Teaching Assistant and Research student under Dr. Mahmoud Yousef.
                         Also worked as an Intern at Naztec Group as part of the curriculum.
                         Developed a Web Application to track the client billing details of the Naztec Consultants using Java Spring Framework.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Programmer Analyst at Cognizant Technology Solutions <span>May 2014 - Sep 2014</span></h2>
                        <p>Short term project to automate the e-commerce Java Web Application.
                        Developed a robust Automation Framework using Java Selenium WebDriver SDK to reduce the manual effort and cost.
                        It also supports parallel execution and runs on multi Operating Systems</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Syntel <span>Dec 2011 - May 2014</span></h2>
                        <p>Full Time Engineer with Syntel and Allstate being Client. The Goal of this project is to deliver a solution for Allstate Clients with an easy auto insurance transactions workflows including quotes and payments.
                           Developed a Java Web Application with customized framework for Allstate Insurance (Auto) under the supervision of Software Architect.
                           </p>
                      </div>
                    </div>
                  </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Undergraduate from Jawaharlal Nehru Techonological University <span>Jun 2007 - Jul 2011</span></h2>
                          <p>Undergraduate in Information Technology. Worked on interesting final project based on Co-Reference Resolution. The main goal of our project is to get the relevant information by resolving conflicts between noun and pronoun while retrieving data from the database.
                           </p>
                        </div>
                        </div>
                        </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
