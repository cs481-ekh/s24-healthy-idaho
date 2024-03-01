import React from 'react';
import { Stack, Card, Typography } from '@mui/material';
import "../styles.css";

function About() {

    return (
        <div>
            <Stack spacing={2}>
                {/* First Card */}
                <Card sx={{
                    width: '100vw',
                    alignSelf: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    bgcolor: '#D64309',
                    boxShadow: "8px 16px 80px -25px rgba(0, 51, 160, 0.5)",
                }}>
                    <Typography variant='h2' sx={{ fontFamily: 'Arial, sans-serif' }}>
                        <br />
                        Healthy Idaho(v 1.0.0)
                        <br />
                        Interactive Portal for Healthy Idaho Dataset
                        <br />
                    </Typography>
                </Card>

                {/* Second Card */}
                <Card sx={{
                    width: '85vw',
                    alignSelf: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    bgcolor: '#E6E5E3',
                    boxShadow: "0 8px 40px -12px rgba(0, 51, 160, 0.5)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0, 51, 160, 0.5)"
                    }
                }}>
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Background</b>
                        <br></br>
                        Idaho-specific, accessible information on heat and wildfire smoke that can inform
                        public policy and outreach are rare. This portal provides a variety of Idaho-specific climate-
                        related information in an accessible format (web-based). The information that this portal will
                        disseminate include: exposure to heatwaves and wildfire smoke in different regions across Idaho,
                        as well as land surface temperature, access to adaptation measures (such as green areas), and
                        background social information that drive climate extreme health outcomes. Accessibility of this
                        information will help planning for more climate-friendly neighborhoods to minimize the impacts
                        of climate extremes in Idaho. It will also help a more equitable adaptation to climate change in
                        the Gem State. This portal is critical for Idaho public policymakers as the Gem State observes
                        huge growth rates. Attributes and sources used by the team to create this portal can be found&nbsp;
                        <a href='https://drive.google.com/drive/u/0/folders/1HlFS8fAzw7zDaCdOpMma_M2jNgD1ewlq' target='_blank'>here</a>.
                        <br></br>
                        <br></br>
                        <b>Fire Tree Fire Members:</b> Joshua Corrales; Anthony Diep; Braeden Lacombe; Clara Arnold (CS 481 - Spring 2024)
                        <br></br>
                        <br></br>
                        <b>Healthy Idaho project collaborators:</b> Dr. Mojtaba Sadegh (mojtabasadegh@boisestate.edu; Boise State University);
                        Seyd Seydi (seydseydi@boisestate.edu; Boise State University)
                        <br></br>
                        <br></br>
                        <b>Abstract:</b> The impact of climate change in the Western US, particularly in Idaho, calls for the need of a portal
                        where residents can easily get information on climate-related health issues near them. Understanding climate health effects
                        involves a portal where residents can see the nature and duration of climate extremes, exposure levels, population sensitivity,
                        green areas, and community resilience. Idaho lacks this accessible information on climate-related health issues which hinders
                        the availability of information that public policy makers need and outreach efforts for residents facing these issues.
                        <br></br>
                        To address this problem we propose a web-based application called Healthy Idaho which will contain climate-related health
                        data specific to Idaho’s census tracts. The portal will provide information on heat waves and wildfire smoke exposure across
                        different regions, land surface temperature, access to adaptation measures, and relevant social background information. The portal
                        will have a map segmented based on Idaho’s census tracts which makes it easy for users to see the climate-related health information
                        near them. By providing Idahoans with region-specific climate resources, the portal facilitates informed decision making to understand
                        and act on health risks.
                    </Typography>
                </Card>

                {/*Third card*/}
                <Card sx={{width:'85vw',
                    alignSelf: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    bgcolor: '#E6E5E3',
                    boxShadow: "0 8px 40px -12px rgba(0, 51, 160, 0.5)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0, 51, 160, 0.5)"
                    }
                }}>
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Utlities</b>
                        <br></br>
                        The user can select which categories of attributes to
                        view/download (description of attributes&nbsp;
                        <a href='https://docs.google.com/spreadsheets/d/18z6cARYUUnHoUgv13dE9cl_EyswMCCYE/edit#gid=704089613' target='_blank'>here</a>).
                    </Typography>
                </Card>

                {/*Fourth card*/}
                <Card sx={{width:'85vw',
                    alignSelf: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    bgcolor: '#E6E5E3',
                    boxShadow: "0 8px 40px -12px rgba(0, 51, 160, 0.5)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0, 51, 160, 0.5)"
                    }
                }}>
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Healthy Idaho Source Codes</b>
                        <br></br>
                        Source codes developed by the “Fire Tree Fire” can be found&nbsp;
                        <a href='https://github.com/cs481-ekh/s24-healthy-idaho' target='_blank'>here.</a>
                    </Typography>
                </Card>
            </Stack>
            <div className="project-header">
                <h2>Fire Tree Fire Project Plan</h2>
            </div>
            <div className="project-plan">
                <div className="left-side">

                    {/*Section 1*/}
                    <h2>
                        <b>1 Introduction</b>
                    </h2>
                    <h3>
                        <b>1.1 Problem and Project Statement</b>
                    </h3>
                    <p>
                        We propose a web-based portal that will provide a variety of Idaho-specific climate-related
                        information in an accessible format. The information in the portal will include factors such
                        as: exposure to heat waves and wildfire smoke in different regions across Idaho, as well as
                        land surface temperature, access to adaptation measures (such as green areas), and background
                        social information that drive climate extreme health outcomes.
                        <br></br>
                        <br></br>
                        An accessible and user-friendly interface will provide Idahoans with the climate-related
                        resources they need to see what climatic extremes they are vulnerable to in their region and
                        how to stay healthy throughout them. There will be no registration necessary to ensure that any
                        user has access to the information they need.
                        <br></br>
                        <br></br>
                        Accessibility of this information will help planning for more climate-friendly neighborhoods to
                        minimize the impacts of climate extremes in Idaho. It will also help a more equitable adaptation
                        to climate change in the Gem State. This portal is critical for Idaho public policymakers as the
                        Gem State observes huge growth rates.
                    </p>

                    {/*Section 2*/}
                    <h2>
                        <b>2 Analysis</b>
                    </h2>
                    <h3>
                        <b>2.1 Operational Environment</b>
                    </h3>
                    <p>
                        The environment for this project will be Docker containers built within a Docker network.
                        This allows the project to be deployed to any infrastructure capable of running Docker.
                        The end goal is to deploy this container to the Boise State University VM.
                        <br></br>
                        <br></br>
                        The research for this portal has been completed through the Boise State University Civil
                        Engineering department which means the portal will need to be, and will be, accessible on the
                        lab computers and virtually anyone with internet access.
                    </p>
                    <h3>
                        <b>2.2 Assumptions and Limitations</b>
                    </h3>
                    <p>
                        The proposal assumes that with the given dataset from the sponsor, we will be able to create an
                        interactive map of Idaho where users will be able to filter through the different climate-related
                        health issues. Regarding development, we are assuming that all the chosen
                        libraries and frameworks are free to use and we will be able to learn how to use them through
                        open-source documentation and online resources. One last assumption being made is that we will
                        not be required to have in-depth understanding of the climate-related health concerns in the
                        given dataset.
                        <br></br>
                        <br></br>
                        Development for this web-based application will be tested only on a desktop. While a mobile
                        device version of the site is possible with the chosen web frameworks and libraries, it will
                        not be a primary focus.
                        <br></br>
                        <br></br>
                        This project has only a 10 week development period, which limits the ability to cover 100% of
                        unit and system testing, enhancements and style to the portal, and other items that might be
                        smoothed out over the course of a larger scoped project.
                    </p>
                    <h3>
                        <b>2.3 Risks and Contingencies</b>
                    </h3>
                    <p>
                        Most of the architecture we have chosen to utilize is new to most team members, but we are using
                        the provided framework from the legacy project so we believe it will be feasible to learn.
                        Another risk is that we are not the owners of the given dataset for this portal so it might take
                        some development time to understand the dataset.
                        <br></br>
                        <br></br>
                        Finally, as with any time-constrained project, there is a chance that all listed criteria and
                        functional requirements will not be met.
                    </p>
                    <h3>
                        <b>2.4 Deliverables and Deployment</b>
                    </h3>
                    <p>
                        The following components will be delivered upon successful completion of the project:
                        <ol className="deliverable-list">
                            <li>Source code for the entire project, including unit tests</li>
                            <li>Deployment steps to host portal alongside database</li>
                            <li>Documentation</li>
                            <li>MIT License Document</li>
                            <li>Standard README</li>
                            <li>Procedures about the use of the admin page regarding how to update data</li>
                        </ol>
                    </p>

                    {/*Section 3*/}
                    <h2>
                        <b>3 Requirements</b>
                    </h2>
                    <h3>
                        <b>3.1 Functional Requirements</b>
                    </h3>
                    <p>
                        Data Schema & Data Accessibility requirements:
                        <ol className="deliverable-list">
                            <li>Healthy Idaho Portal must retrieve data from the database</li>
                            <li>Application must have a method to display that data to the user</li>
                            <li>Application must have methods to allow the user to download the filtered data</li>
                            <li>Application must have an administration portal where backend data can be modified</li>
                        </ol>
                        Compatibility requirements:
                        <ol className="deliverable-list">
                            <li>Application must be contained in a Docknet to allow interoperability  between frontend and backend</li>
                            <li>The application must target common desktop browser engines</li>
                            <li>Application should have the ability to be properly displayed on a mobile device (stretch goal)</li>
                        </ol>
                        UX requirements:
                        <ol className="deliverable-list">
                            <li>Application must display an interactive map, with a side menu that allows user to set filters</li>
                            <li>Application must include a button to to download the chosen filtered data</li>
                        </ol>
                        Security requirements:
                        <ol className="deliverable-list">
                            <li>Application must include an admin page that prompts an admin to log in with credentials</li>
                            <li>Application must include some form of account recovery method</li>
                            <li>Application must include some form of encryption in the backend to protect database information</li>
                        </ol>
                        User Management requirements:
                        <ol className="deliverable-list">
                            <li>Application must allow access to authorized parties to access and perform CRUD on the backend</li>
                            <li>Application will record statistics involving its usage</li>
                        </ol>
                        Testing requirements:
                        <ol className="deliverable-list">
                            <li>The application must include certain Unit and Integration tests to ensure that core systems are working as intended</li>
                        </ol>
                        Deployment requirements:
                        <ol className="deliverable-list">
                            <li>The application must be containerized within a docker container with a docknet</li>
                            <li>Application will be deployed on the Boise State VM</li>
                        </ol>
                    </p>
                    <h3>
                        <b>3.2 Constraints</b>
                    </h3>
                    <p>

                    </p>
                </div>

                <div className="right-side">
                    {/*Section 4*/}
                    <h2>
                        <b>4 Design and Implementation</b>
                    </h2>
                    <h3>
                        <b>4.1 Proposed Approach</b>
                    </h3>
                    <p>

                    </p>
                    <h3>
                        <b>4.2 Architectural Design</b>
                    </h3>
                    <p>

                    </p>

                    {/*Section 5*/}
                    <h2>
                        <b>5 Project Milestones and Evaluation Criteria</b>
                    </h2>
                    <h3>
                        <b>Milestone 1: PSP</b>
                    </h3>
                    <p>

                    </p>
                    <h3>
                        <b>Milestone 2: MVP</b>
                    </h3>
                    <p>

                    </p>

                    {/*Section 6*/}
                    <h2>
                        <b>6 Testing and Validation</b>
                    </h2>
                    <p>

                    </p>
                </div>

            </div>

        </div>
    );
}

export default About;
