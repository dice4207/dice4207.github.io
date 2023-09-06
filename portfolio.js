const stickMan = document.getElementById('stickMan');

        // Function to make the stick man jump
        function jump() {
            let jumpHeight = 100;
            const jumpDuration = 500; // in milliseconds

            stickMan.style.transition = `transform ${jumpDuration / 2}ms ease-in-out`;
            stickMan.style.transform = `translateY(-${jumpHeight}px)`;

            setTimeout(() => {
                stickMan.style.transition = `transform ${jumpDuration / 2}ms ease-in-out`;
                stickMan.style.transform = `translateY(0)`;
            }, jumpDuration / 2);
        }

        // Trigger the jump every second
        setInterval(jump, 1000);

         // Function to scroll down the page when the button is clicked
         function scrollDown() {
            // You can adjust the scroll distance as needed (in pixels)
            const scrollDistance = 500;
            
            // Calculate the new scroll position
            const currentPosition = window.scrollY;
            const newPosition = currentPosition + scrollDistance;

            // Scroll smoothly to the new position
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth'
            });
        }