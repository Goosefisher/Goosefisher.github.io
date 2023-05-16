
// Waits for content to load
document.addEventListener('DOMContentLoaded', function() {

    // Adds event listener that opens sidebar
    document.querySelector('#openSidebar').addEventListener('click', function() {
        // Expands sidebar
        document.getElementById('sidebar').style.width = "50%";

        // Allows content to be shown
        document.getElementById('sidebar').style.display = "block";
    })

    // Adds event listener that closes sidebar
    document.querySelector('#close').addEventListener('click', function() {
        // Closes sidebar
        document.getElementById('sidebar').style.width = "0%";

        // Hides content
        document.getElementById('sidebar').style.display = "none";
    })

    // When bottom footer button is clicked at index.html, lays flashing animation in header/footer and then redirects to alternate_home.html
    if (document.querySelector('#bad')) {
        document.querySelector('#bad').addEventListener('click', function() {

            // Header and footer nodes to switch colors easier
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');

            // Change top left logo to trasnparent background & flabbergasted image
            document.getElementById('logo').src = "media/logos/flabbergasted.png";

            // Change top middle words to WAIT
            document.getElementById('head-title').innerHTML = 'WAIT';

            // Animation to make footer and header flash red and blue
            let id = null;
            let n = 0;
            clearInterval(id);

            // Flashing every half-second
            id = setInterval(frame, 500);
            function frame() {
                // Animation is 5 seconds in total (10 flashes with .5 sec intervals)
                if (n == 10) {
                    // At the end of the animation, switch to alternate_home.html
                    clearInterval(id);
                    window.location.replace("/alternate_home.html");
                }
                else if (n % 2 == 0) {
                    // Turns header and footer red
                    header.style.backgroundColor = "red";
                    footer.style.backgroundColor = "red";
                }
                else {
                    // Turns header and footer blue
                    header.style.backgroundColor = "#211b66";
                    footer.style.backgroundColor = "#211b66";
                }
                n++;
            }
        })
    }

    // For portfolio.html, switches pictures when mouse is over a picture
    if (document.querySelector('.pic')) {
        // Make list of pictures
        const pics = document.querySelectorAll('.pic div img');
        for (let i=0; i < pics.length; i++) {

            // Changes picture to alternative version when hovering
            pics[i].addEventListener('mouseover', function() {
                pics[i].src = `media/origami/alt/${pics[i].id}-alt.jpg`;
            })

            // Changes picture back to default when no longer hovering
            pics[i].addEventListener('mouseout', function() {
                pics[i].src = `media/origami/og/${pics[i].id}.jpg`;
            })
        }
    }

    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    // Causes corresponding audio to play when soundboard.html buttons are pressed
    if (document.querySelector('audio')) {
        // Creates array of buttons
        const butt = document.querySelectorAll('button');

        for (let i=0; i < butt.length; i++) {
            // Causes corresponding audio to play when pressed
            butt[i].addEventListener('click', function() {
                document.querySelector(`.aud-${butt[i].id}`).play();
            })
        }
    }

    // From future.html to index.html, causes footer and header to graudually turn purple and then switch to index.html
    if (document.querySelector('#good')) {
        document.querySelector('#good').addEventListener('click', function () {
            // Switches top Homepage message to Goodbye message
            document.getElementById('head').src = "media/drawn/Goodbye.png";

            // Footer and header fade from blue to purple
            document.querySelector('header').classList.add('colorchange');
            document.querySelector('footer').classList.add('colorchange');

            // Window switches to index.html after 3 seconds
            setTimeout(() => { window.location.replace("/index.html"); }, 3000);

        })
    }
})
