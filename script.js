// script.js - Combined all functionality into one DOMContentLoaded

console.log('Script starting...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded!');
    
    // ===== SET YEAR IN FOOTERS =====
    const year = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#year, #year-about, #year-works');
    yearElements.forEach(function(el) {
        if (el) el.textContent = year;
    });

    // ===== MODEL VIEWER CONTROLS (HOME PAGE) =====
    const model = document.querySelector('model-viewer#main-model');
    const toggleRotateBtn = document.getElementById('toggle-rotate');
    const exposure = document.getElementById('exposure');

    if (model && toggleRotateBtn && exposure) {
        let rotating = true;
        
        toggleRotateBtn.addEventListener('click', function() {
            rotating = !rotating;
            model.autoRotate = rotating;
            toggleRotateBtn.textContent = rotating ? 'Pause Rotation' : 'Auto-Rotate';
        });

        exposure.addEventListener('input', function(e) {
            model.exposure = parseFloat(e.target.value);
        });
        
        console.log('Model viewer controls initialized');
    }

    // ===== GIF BUTTON GALLERY (WORKS PAGE) =====
    const buttons = document.querySelectorAll('.gif-button');
    const infoPanels = document.querySelectorAll('.info-panel');
    
    if (buttons.length > 0 && infoPanels.length > 0) {
        console.log('Found ' + buttons.length + ' buttons');
        console.log('Found ' + infoPanels.length + ' panels');
        
        // Add click event listener to each button
        buttons.forEach(function(button, index) {
            button.addEventListener('click', function() {
                console.log('Button clicked: ' + index);
                
                // Get the project name from data attribute
                const projectName = button.getAttribute('data-project');
                console.log('Project: ' + projectName);
                
                // Remove active class from all buttons
                buttons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Hide all info panels
                infoPanels.forEach(function(panel) {
                    panel.classList.remove('active');
                });
                
                // Show the corresponding info panel
                const targetPanel = document.getElementById(projectName);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    console.log('Panel activated: ' + projectName);
                } else {
                    console.error('Panel not found: ' + projectName);
                }
            });
        });
        
        console.log('GIF button gallery initialized');
    }

    console.log('All setup complete!');
});

// ===== UNIVERSAL VIDEO GALLERY SCRIPT =====
document.querySelectorAll('.video-thumbnails .thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const videoUrl = thumb.getAttribute('data-video');
        const wrapper = thumb.closest('.video-wrapper');
        const iframe = wrapper.querySelector('iframe');
        iframe.src = videoUrl;
    });
});






