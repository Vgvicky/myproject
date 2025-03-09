// Example JavaScript for form validation or interactive features
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // You can add form validation here if needed
    alert("Thank you for your message! I'll get back to you soon.");
});
let button = document.getElementById('card1');

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Redirect to another website
        window.location.href = 'https://www.deepseek.com';
    });
let button1 = document.getElementById('card2');
    button1.addEventListener('click', function(){
          window.location.href= 'https://www.chatgpt.com';
});
// butterfly.js

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('butterflyCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Butterfly shape creation (for simplicity, using a sphere for butterfly's body and wings made from planes)
function createButterfly() {
    // Butterfly body (simple sphere)
    const bodyGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);
    scene.add(body);

    // Butterfly wings (planes)
    const wingGeometry = new THREE.PlaneGeometry(3, 2);
    const wingMaterial = new THREE.MeshBasicMaterial({ color: 0xFF69B4, side: THREE.DoubleSide });
    
    // Left wing
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.rotation.z = Math.PI / 2; // Rotate the wing for proper orientation
    leftWing.position.set(-1.5, 0, 0);
    scene.add(leftWing);
    
    // Right wing (mirrored)
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.rotation.z = -Math.PI / 2; // Rotate the wing for proper orientation
    rightWing.position.set(1.5, 0, 0);
    scene.add(rightWing);

    return { body, leftWing, rightWing };
}

const butterfly = createButterfly();

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Butterfly rotation and movement
    butterfly.body.rotation.y += 0.01;
    butterfly.leftWing.rotation.x = Math.sin(Date.now() * 0.005) * 0.3; // Wing flapping
    butterfly.rightWing.rotation.x = Math.sin(Date.now() * 0.005) * -0.3; // Wing flapping in opposite direction

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();

// let button2 = document.getElementById('slide1');
// let per = 0;
//     button2.addEventListener('click', function(){
//         per+=100;
//         box.style.transform = 'translateX(${per}%)';
//     });


// const body = document.body;

// // Function to change the background color based on scroll position
// function changeBackgroundOnScroll() {
//     const scrollPosition = window.scrollY;
    
//     // Calculate a color value based on scroll position (this is just one example)
//     const red = Math.min(255, Math.floor(scrollPosition / 5));
//     const green = Math.min(255, Math.floor(scrollPosition / 10));
//     const blue = Math.min(255, Math.floor(scrollPosition / 15));
    
//     // Set the new background color
//     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

// // Add the scroll event listener to change the background color
// window.addEventListener('scroll', changeBackgroundOnScroll);



// Get the body element
const body = document.body;

// Define an array of background images
// const images = [
//     'url("img.jpg")', // Replace with your own image URLs
//     'url("img2.jpg")',
//     'url("img3.jpg")',
//     'url("img4.jpg")',
//     'url("img5.jpg")'
// ];

// // Function to change the background image based on scroll position
// function changeBackgroundOnScroll() {
//     const scrollPosition = window.scrollY;
//     const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

//     // Calculate which background image to show based on scroll position
//     const index = Math.min(
//         images.length - 1,
//         Math.floor((scrollPosition / totalHeight) * (images.length - 1))
//     );

//     // Set the new background image
//     body.style.backgroundImage = images[index];
// }

// // Add the scroll event listener to change the background image
// window.addEventListener('scroll', changeBackgroundOnScroll);

// // Initialize the background image when the page loads
// changeBackgroundOnScroll();
