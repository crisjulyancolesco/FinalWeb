// Get the modal
var modal = document.getElementById("shareModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModalBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Share functions (same as before)
function shareToFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
}

function shareToTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');
}

function shareToMessenger() {
  window.open('fb-messenger://share/?link=' + encodeURIComponent(window.location.href), '_blank');
}

function shareToInstagram() {
  window.open('https://www.instagram.com/share?url=' + encodeURIComponent(window.location.href), '_blank');
}

function copyToClipboard() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Link copied to clipboard!");
}

function shareToEmail() {
  window.location.href = 'mailto:?subject=Check%20this%20out!&body=' + encodeURIComponent('Hey, I thought you might like this: ' + window.location.href);
}
