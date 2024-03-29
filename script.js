// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Here you can add code to handle form submission, e.g., sending data to a server
});

// Function to switch between tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Default to showing the Skills tab
document.getElementById("skills").classList.add("active");
document.querySelector(".tab button").classList.add("active");

