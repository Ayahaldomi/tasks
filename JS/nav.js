    // Sample logged-in user data
    const loggedInUser = {
        name: "Mohammed  fffffffff"
      };
  
      // Function to update UI based on login status
      function updateUI(user) {
        if (user) {
          // User is logged in
          document.getElementById("loginLink").style.display = "none";
          document.getElementById("registerLink").style.display = "none";
          document.getElementById("userDropdown").style.display = "block";
          document.getElementById("userName").textContent = user.name;
          const serviceLink = document.getElementById('service');
          serviceLink.classList.add('white');
          serviceLink.removeAttribute('tabindex');
          serviceLink.removeAttribute('aria-disabled');
          serviceLink.setAttribute('href', 'https://www.example.com');
          serviceLink.style.color = 'white !important';
          console.log('hi'); // Ensure the color is white after enabling
        } else {
          // User is not logged in
          document.getElementById("loginLink").style.display = "block";
          document.getElementById("registerLink").style.display = "block";
          document.getElementById("userDropdown").style.display = "none";
          document.getElementById("service").style.display = "none";
        }
      }
  
      // Check if user is logged in (replace this with your actual login check logic)
      const userLoggedIn = true; // For demonstration, set to true
  
      // Update UI based on login status
      updateUI(userLoggedIn ? loggedInUser : null);
