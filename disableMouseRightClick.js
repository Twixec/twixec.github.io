document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  if(options.enableAlert) {
    alert(options.alertText);
  }
});

var options = {
  enableAlert: true, // Set this false to deactivate alert
  alertText: "MOS U BO HAJN ME VJEDH O TI MIK" // Customize this to change alert text
}
