const stickMan = document.getElementById('stickMan');

        // Function to make the stick man jump
        function jump() {
            let jumpHeight = 1000;
            const jumpDuration = 500; // in milliseconds

            stickMan.style.transition = `transform ${jumpDuration / 2}ms ease-in-out`;
            stickMan.style.transform = `translateY(-${jumpHeight}px)`;

            setTimeout(() => {
                stickMan.style.transition = `transform ${jumpDuration / 2}ms ease-in-out`;
                stickMan.style.transform = `translateY(0)`;
            }, jumpDuration / 2);
        }

        // Trigger the jump every second
        setInterval(jump, 500);
        
