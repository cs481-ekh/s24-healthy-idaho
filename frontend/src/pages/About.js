import React from 'react';
import { Stack, Card, Typography } from '@mui/material';
import diagram from "./../components/architecture-diagram.png";
import "../styles.css";
import Footer from "../Footer";

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
                        Interactive Visualization Portal for Healthy Idaho Project<span style={{fontSize:"large"}}>(1.0)</span>
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
                        This portal interactively visualizes annual social, biological and physical variables that are
                        relevant for the health of Idahoans (details in table below). The data was developed by
                        Mr. Seyd Teymoor Seydi (research scholar at Boise State), and was supported by the Boise State Grand Challenges Initiative.
                        The mapper portal was developed through a Boise State Computer Science senior design project (Team 🔥🌲🔥),
                        under supervision of Dr. Eric Henderson.
                        <br></br>
                        <br></br>
                        <b>Team Fire Tree Fire Members:</b> Joshua Corrales; Anthony Diep; Clara Arnold (CS 481 - Spring 2024)
                        <br></br>
                        <br></br>
                        <b>Healthy Idaho project investigators:</b> Dr. Mojtaba Sadegh (mojtabasadegh@boisestate.edu; Boise State University);
                        Dr. Jennifer Pierce (Boise State,  iCLEER); Dr. Kimberly Rauscher (Boise State); Dr. Anna Radin (St. Luke’s);
                        Dr. Ethan Sims (St. Luke’s & ICCH); Ms. Hilary Flint (St. Luke’s); Ms. Stephanie Wicks (St. Luke’s)
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
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Variable Description</b></Typography>
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif', textAlign: 'left'}}>
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Area:</span> Surface area of each census tract at the year of selection in km2
                        <br></br>
                        <span style={{textDecoration: "underline"}}>COUNTY:</span> County name
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Minority Status and Language:</span> Social vulnerability of the census tract population in terms of “Minority Status and Language” –
                        0 indicates lowest vulnerability and 1 signifies highest vulnerability
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Overall Vulnerability:</span> Social vulnerability of the census tract population in terms of “Overall Vulnerability” –
                        0 indicates lowest vulnerability and 1 signifies highest vulnerability
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Housing Type and Transportation:</span> Social vulnerability of the census tract population in terms of “Minority Status and Language” –
                        0 indicates lowest vulnerability and 1 signifies highest vulnerability
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Household Composition and Disability:</span> Social vulnerability of the census tract population in terms of
                        “Household Composition and Disability” – 0 indicates lowest vulnerability and 1 signifies highest vulnerability
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Socioeconomic Status:</span> Social vulnerability of the census tract population in terms of “Socioeconomic Status” –
                        0 indicates lowest vulnerability and 1 signifies highest vulnerability
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Greenness:</span> Percentage of the census tract that is green (mean summer NDVI >= 0.3; irrigated green)
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Heat Island:</span> Urban heat island intensity – higher values indicate higher heat island intensities
                        <br></br>
                        <span style={{textDecoration: "underline"}}>LST-Max:</span> Maximum summer land surface temperature (deg C) in the census tract
                        <br></br>
                        <span style={{textDecoration: "underline"}}>LST-Mean:</span> Average summer land surface temperature (deg C) in the census tract
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Smoke:</span> Total annual smoke load in ug/m3 (sum of all daily smoke levels) for each census tract
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Population:</span> Population of each census tract
                        <br></br>
                        <span style={{textDecoration: "underline"}}>PM-2-5:</span> Total annual PM2.5 load in ug/m3 (sum of all daily PM2.5 levels) for each census tract
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Heatwave:</span> Annual heatwave exposures in person-days. Heatwave is defined as max daily temperature exceeding
                        90 degF for at least 3 consecutive days. Number of heatwave days is multiplied by the population exposed and
                        summed over the year to calculate exposure.
                        <br></br>
                        <span style={{textDecoration: "underline"}}>Density Population:</span> Density of population in each census tract in persons/km2 (population divided by area of census tract)
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
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>More Information</b>
                        <br></br>
                        <span style={{ fontStyle: "italic" }}>Every American is vulnerable to the health impacts associated with Climate Change.</span> The Earth’s warming
                        climate lengthens and exacerbates warm seasons, heatwaves, and droughts, which results in increased
                        wildfire activity and associated smoke in the Western US. The combination of climate extremes, growing
                        populations in the western US, and an aging population contributes to elevated exposure to grave climate-related
                        health impacts. In fact, thousands to tens of thousands heat-related deaths are projected in the US in a
                        warming climate. Climate health impacts depend on four factors: (1) the nature, intensity, and duration of
                        the climate extreme, (2) the extent of exposure to extremes, (3) the sensitivity and resilience of the exposed
                        population, and (4) the capacity of the community to respond to and manage health risks.
                        <br></br>
                        <br></br>
                        Idahoans are vulnerable to a variety of climatic extremes, including wildfire smoke and heatwaves. In 2022,
                        for example, summer temperatures in Boise, ID topped 100  for a record-breaking 25 days. Heatwaves not only
                        can cause heat cramps, heat exhaustion, heatstrokes, and hyperthermia, but also can worsen chronic conditions
                        such as cardiovascular, respiratory, and cerebrovascular diseases and diabetes-related conditions. Furthermore,
                        in 2020 alone, the Gem state observed more than 15 million person-days of exposure to poor air quality – air
                        quality index (AQI) for PM2.5 above 100 – due to wildfire smoke. Wildfire smoke induces a variety of respiratory
                        and cardiovascular effects such as coughing, wheezing, bronchitis, reduced lung function, asthma exacerbation
                        and lung diseases aggravation, heart failure, heart attack, and stroke. It is estimated that from 2008-2013 in
                        the Contiguous US, between 5200 and 8500 respiratory hospital admissions per year occurred due to exposure to
                        wildfire smoke. Idaho is in the bullseye of wildfire smoke impacts in the western US; severe smoky days impact
                        central Idaho for more than 20 days per year, and 10-20 days for the rest of Idaho.
                    </Typography>
                </Card>

                {/*Fifth card*/}
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
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Significance</b>
                        <br></br>
                        Idaho-specific, accessible information on heat and wildfire smoke that can inform public policy
                        and outreach are rare. This portal provides a variety of Idaho-specific climate-related information
                        in an accessible format. The information that this portal will disseminate include: exposure to
                        heatwaves and wildfire smoke in different regions across Idaho, as well as land surface temperature,
                        access to adaptation measures (such as green areas), and background social information that drive
                        climate extreme health outcomes. Accessibility of this information will help planning for more
                        climate-friendly neighborhoods to minimize the impacts of climate extremes in Idaho. It will also
                        help a more equitable adaptation to climate change in the Gem State.
                    </Typography>
                </Card>

                {/*Sixth card*/}
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
                        This portal enables the user to visualize specific data for each year at a census tract level.
                        Upon clicking on the individual census tract, its attributes will be shown to the user.
                        The user can also choose to “Compare” two variables in the same or different years next to each other.
                        The user can select which categories of attributes to
                        view/download (description of attributes&nbsp;
                        <a href='https://docs.google.com/spreadsheets/d/18z6cARYUUnHoUgv13dE9cl_EyswMCCYE/edit#gid=704089613' target='_blank'>here</a>).
                    </Typography>
                </Card>

                {/*Seventh card*/}
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
                        Source codes used for this mapper are available&nbsp;
                        <a href='https://github.com/cs481-ekh/s24-healthy-idaho' target='_blank'>here.</a>
                    </Typography>
                </Card>
            </Stack>
            <div className="project-header">
                <h2>Team 🔥🌲🔥 Project Plan</h2>
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
                        information in an accessible format.An accessible and user-friendly interface will provide
                        Idahoans with the climate-related resources they need to see what climatic extremes they are
                        vulnerable to in their region and how to stay healthy throughout them.
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
                        This allows the project to be deployed to any infrastructure capable of running Docker with
                        the plan of deploying to Boise State University VM.
                        <br></br>
                        <br></br>
                        The research for this portal has been completed through the Boise State University Civil
                        Engineering department which means the portal will need to be accessible on the
                        lab computers and virtually anyone with internet access.
                    </p>
                    <h3>
                        <b>2.2 Assumptions and Limitations</b>
                    </h3>
                    <p>
                        The proposal assumes that with the given dataset from the sponsor, we will be able to create an
                        interactive map of Idaho where users will be able to filter through the different climate-related
                        health issues. We are assuming that all the chosen libraries and frameworks are free to use and
                        we will be able to learn how to use them through open-source documentation and online resources.
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
                        <ol className="requirements-list">
                            <li>Healthy Idaho Portal must retrieve data from the database</li>
                            <li>Application must have a method to display that data to the user</li>
                            <li>Application must have methods to allow the user to download the filtered data</li>
                            <li>Application must have an administration portal where backend data can be modified</li>
                        </ol>
                        Compatibility requirements:
                        <ol className="requirements-list">
                            <li>Application must be contained in a Docknet to allow interoperability  between frontend and backend</li>
                            <li>The application must target common desktop browser engines</li>
                            <li>Application should have the ability to be properly displayed on a mobile device (stretch goal)</li>
                        </ol>
                        UX requirements:
                        <ol className="requirements-list">
                            <li>Application must display an interactive map, with a side menu that allows user to set filters</li>
                            <li>Application must include a button to to download the chosen filtered data</li>
                        </ol>
                        Security requirements:
                        <ol className="requirements-list">
                            <li>Application must include an admin page that prompts an admin to log in with credentials</li>
                            <li>Application must include some form of account recovery method</li>
                            <li>Application must include some form of encryption in the backend to protect database information</li>
                        </ol>
                        User Management requirements:
                        <ol className="requirements-list">
                            <li>Application must allow access to authorized parties to access and perform CRUD on the backend</li>
                            <li>Application will record statistics involving its usage</li>
                        </ol>
                        Testing requirements:
                        <ol className="requirements-list">
                            <li>The application must include certain Unit and Integration tests to ensure that core systems are working as intended</li>
                        </ol>
                        Deployment requirements:
                        <ol className="requirements-list">
                            <li>The application must be containerized within a docker container with a docknet</li>
                            <li>Application will be deployed on the Boise State VM</li>
                            {/* <li>ඞ</li> */}
                        </ol>
                    </p>
                </div>
                <div className="right-side">
                    <h3>
                        <b>3.2 Constraints</b>
                    </h3>
                    <p>
                        Technical:
                        <ol className="requirements-list">
                            <li>Host machine must be compatible with Docker so that deployment of the app will be easier</li>
                        </ol>
                        Logistical:
                        <ol className="requirements-list">
                            <li>Deploying app to Boise State VM after development could lead to issues with testing/compatibility</li>
                            <li>The time constraint might limit our ability to meet stretch goals</li>
                        </ol>
                        Physical:
                        <ol className="requirements-list">
                            <li>The University will have control over the app once deployed meaning it will not be controllable from our end</li>
                        </ol>
                    </p>
                    {/*Section 4*/}
                    <h2>
                        <b>4 Design and Implementation</b>
                    </h2>
                    <h3>
                        <b>4.1 Proposed Approach</b>
                    </h3>
                    <p>
                        <ol className="requirements-list">
                            <li>Docker: A suite of containerization technologies to isolate the Database, Frontend, and Backend within their own Docker Container</li>
                            <li>MySQL: A Relational Database Management System (RDBMS) used to store the .csv and shapefile files given by the sponsor</li>
                            <li>Django Web Server: A web framework written in Python that will handle client requests for data by communicating between the database and frontend</li>
                            <li>ReactJS: A popular Frontend framework used to create user interfaces</li>
                            <li>Leaflet: A JavaScript library used to generating user-friendly interactive maps</li>
                            <li>ReCharts: A JavaScript Library built using React components that can be used to interpret map vectors and shapefiles</li>
                        </ol>
                    </p>
                    <h3>
                        <b>4.2 Architectural Design</b>
                    </h3>
                    <p>
                        <img alt="[DIAGRAM]" className="diagram" src={diagram} />
                    </p>

                    {/*Section 5*/}
                    <h2>
                        <b>5 Project Milestones and Evaluation Criteria</b>
                    </h2>
                    <h3>
                        <b>Milestone 1: PSP</b>
                    </h3>
                    <p>
                        <ol className="requirements-list">
                            <li>Runnable on most, if not all current web browsers/engines</li>
                            <li>Must have implemented basic UI and related functions</li>
                            <li className="tab">Workable interactive map with color-coded vectors</li>
                            <li className="tab">Side-bar with working functions that interact with backend application</li>
                        </ol>
                    </p>
                    <h3>
                        <b>Milestone 2: MVP</b>
                    </h3>
                    <p>
                        <ol className="requirements-list">
                            <li>Overall UI must be finalized or close to finalized</li>
                            <li className="tab">Current plan is to adhere to current Boise State Branding Standards</li>
                            <li>Core Functionality:</li>
                            <li className="tab">Administration page must be included and working</li>
                            <li className="tab">Functionality to download data from application must be working</li>
                            <li className="tab">Map visualization tools must be finalized to work for key variables</li>
                        </ol>
                    </p>

                    {/*Section 6*/}
                    <h2>
                        <b>6 Testing and Validation</b>
                    </h2>
                    <p>
                        Testing will be performed using the Cypress testing framework. Cypress will automatically
                        trigger each time a commit or pull request has been made affecting the main branch in Github.
                        Cypress will perform regression testing through testing individual React components, verifying
                        the correctness of returned data from the Database, form validation of the filtering functionality
                        that Healthy Idaho provides.
                    </p>
                </div>
            </div>
            <div>
                <text style={{}}>ඞ</text>
            </div>
        </div>
    );
}

export default About;
