/* 
  Install Script. Setup the config files if they don't already exist, and test for required packages
*/
const OS = require("os");

switch(OS.platform()) {
  default:
    console.warn("You are running on an unknown OS. Package is not guaranteed to function correctly");
    break;
  case "aix":
  case "darwin":
  case "freebsd":
  case "linux":
  case "openbsd":
  case "sunos":
    console.log("You are running on a supported version of Linux!");
    break;
  case "win32":
  case "win64":
    console.log("You are running Windows. Expect the normal Windows bugs"); /* just gonna roast Windows here */
    break;
}
