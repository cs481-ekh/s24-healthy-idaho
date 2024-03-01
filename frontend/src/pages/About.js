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
                    bgcolor: '#E6E5E3',
                    boxShadow: "8px 16px 80px -25px rgba(0,150,200,.5)",
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
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
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
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
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
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                    }
                }}>
                    <Typography sx={{fontSize: 18, fontFamily: 'Arial, sans-serif'}}><b>Healthy Idaho Source Codes</b>
                        <br></br>
                        Source codes developed by the “Fire Tree Fire” can be found&nbsp;
                        <a href='https://github.com/cs481-ekh/s24-healthy-idaho' target='_blank'>here.</a>
                    </Typography>
                </Card>
            </Stack>
            <h2>Fire Tree Fire Project Plan</h2>
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
                        Information ....
                    </p>

                    {/*Section 2*/}
                    <h2>
                        <b>2 Analysis</b>
                    </h2>
                    <h3>
                        <b>2.1 Operational Environment</b>
                    </h3>
                    <p>

                    </p>
                    <h3>
                        <b>2.2 Assumptions and Limitations</b>
                    </h3>
                    <p>

                    </p>
                    <h3>
                        <b>2.3 Risks and Contingencies</b>
                    </h3>
                    <p>

                    </p>
                    <h3>
                        <b>2.4 Deliverables and Deployment</b>
                    </h3>
                    <p>

                    </p>

                    {/*Section 3*/}
                    <h2>
                        <b>3 Requirements</b>
                    </h2>
                    <h3>
                        <b>3.1 Functional Requirements</b>
                    </h3>
                    <p>

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
