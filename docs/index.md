# Healthy Idaho
## Members:
- Clara Arnold
- Anothony Diep
- Joshua Corrales

## Project Abstract:
The impact of climate change in the Western US, particularly in Idaho, calls for the need of a portal where residents 
can easily get information on climate-related health issues near them. Understanding climate health effects involves a 
portal where residents can see the nature and duration of climate extremes, exposure levels, population sensitivity, 
green areas, and community resilience. Idaho lacks this accessible information on climate-related health issues which 
hinders the availability of information that public policy makers need and outreach efforts for residents facing these 
issues.

To address this problem we propose a web-based application called Healthy Idaho which will contain climate-related 
health data specific to Idaho’s census tracts. The portal will provide information on heat waves and wildfire smoke 
exposure across different regions, land surface temperature, access to adaptation measures, and relevant social 
background information. The portal will have a map segmented based on Idaho’s census tracts which makes it easy for 
users to see the climate-related health information near them. By providing Idahoans with region-specific climate 
resources, the portal facilitates informed decision making to understand and act on health risks.

## Project Description:
There are many features we implemented during development of this portal. First, we will explore the main page where
users can select attributes they want to be shown on the map. The user has to select a year, variable, and color. Another
feature shown on this page is the ability to click on a tract on the map to see the data for that area in Idaho. Finally,
there is a small legend on the side of the map which shows exactly what the datapoints mean. The user can also scroll
to the footer or navigate to the About page in order to see exactly what each variable means.

![Data](images/Data.png?raw=true)



We also implemented an opacity slide bar where the user can select for the coloring on the map to be more or less transparent.
This is for users to be able to see underneath the tracts in case they want to explore particular areas of Idaho.

![Opacity](images/Opacity.png?raw=true)



The last feature that we'd like to show on the main page is the ability to download the dataset that the user has selected
using the drop-down menus. As you can see here, the user selected 2004 and Greenness and has a downloaded csv file waiting
to be opened!

![Dataset](images/Dataset.png?raw=true)



Now to explore some of the other pages, the Compare page allows a user to look at two different maps at once. The user
can select completely different variables or similar variables depending on what they want to find out.

![Compare](images/Compare.png?raw=true)



Finally, the Admin page is only for authorized users who will be able to track the popularity of the portal and in the
future may be able to upload new or modify existing data.

![Admin](images/Admin.png?raw=true)
