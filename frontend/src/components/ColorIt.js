
/*
 * Returns x's value from 0 to 1 relative to low=0 and high=1. 
 * Purpose is if all colors in a given spectrum was to be used
 * Input - 
 *  x     number to test
 *  low   min number in set that x was taken from
 *  high  max   "     "  "    "  "  "    "     "
 *
 * Output - a decimal number between 0 and 1 corresponding 
 *          to x's value relative to low and high
 * 
 * Note: If for example 0 was assigned to be white and 1 to blue,
 *       atleast 1 data point will be colored completely white
 *       or completely blue. This may not look aesthetically pleasing
 *       so assign according to diagram below to reduce extremes:
 * 
 * white                              blue
 *            0               1
 *   |--------+---------------+--------|
 * 
 *   |--dx---->
 * 
 * instead of:
 * 
 * white                              blue
 *   0                                 1
 *   |---------------------------------|
 */
function colorIt(x, low, high) {
  if( low >= high )
    throw new Error("low >= high")
  if( x < low ) 
    throw new Error("x < low")
  return (x - low) / (high - low);
}


/* For i'th section in [0, 1, 2, ..., div), return the i'th section that
 * x belongs to. Div is number of divisions that range of numbers is desired 
 * to be split up to. Purpose is if 'n' number of colors should be used to color
 * map
 * 
 * Input - 
 *  x     number to test
 *  low   min number in set that x was taken from
 *  high  max   "     "  "    "  "  "    "     "
 *  div   number of divisions to split range into
 * 
 * Output - A number from [0, 1, ..., div-1] which corresponds to the
 *          region that x belongs to
 *   
 */
function colorItNDiv(x, low, high, div, color) {
  if( low > high ) 
    throw new Error("low >= high")

  let divVal = (high - low) / div;
  if( x == high ) return color[8];
  if( x == null ) return "#000000";

  return color[Math.floor((x - low) / divVal)];
}

export default {colorIt, colorItNDiv};


//example
//split [5,6,...20] into 4 regions, say what i'th number belongs to
//let mn=5,mx=20,div=4
//for(let i = mn; i <= mx; i++) 
//  console.log("i="+i+"=>"+colorItNDiv(i, mn, mx, div))

