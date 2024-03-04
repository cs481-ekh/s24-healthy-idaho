
//Color retrieved from https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=9

/*
    To add more colors, add a new key and value to the ColorProfiles object. 
    The key is the name of the color profile and the value is an array of hex color codes. 

    Profiles must have an array of 9 colors.
*/
    
const ColorProfiles = {
    Blue: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    Green: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    Red: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    Yellow: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
}

export default ColorProfiles;