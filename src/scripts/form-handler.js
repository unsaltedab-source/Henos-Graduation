document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const attendanceInput = document.getElementById('attendance-input');
    const guestsGroup = document.getElementById('guests-group');
    const submitBtn = document.querySelector('.submit-btn');
    const successMessage = document.getElementById('success-message');
    const feedbackText = document.getElementById('feedback-text');

    // Attendance Toggle Logic
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const val = btn.getAttribute('data-value');
            attendanceInput.value = val;

            // Show/Hide guests based on attendance
            if (val === 'yes') {
                guestsGroup.classList.remove('hidden');
            } else {
                guestsGroup.classList.add('hidden');
            }

            validateForm();
        });
    });

    // Basic Validation
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const attendance = attendanceInput.value;

        const isValid = name !== '' && email !== '' && attendance !== '';
        submitBtn.disabled = !isValid;
    };

    form.addEventListener('input', validateForm);

    // Form Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulate API call
        try {
            // In a real scenario, we would POST to our worker
            // await axios.post('/api/rsvp', data);

            setTimeout(() => {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');

                if (data.attendance === 'yes') {
                    feedbackText.innerText = `We are delighted you will be joining us, ${data.name.split(' ')[0]}. A confirmation has been sent to ${data.email}.`;
                    triggerConfetti();
                } else {
                    feedbackText.innerText = `We are sorry you cannot make it, ${data.name.split(' ')[0]}. You will be in our thoughts on this special day.`;
                }

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);

        } catch (error) {
            console.error('Submission error:', error);
            submitBtn.innerText = 'Error. Try Again.';
            submitBtn.disabled = false;
        }
    });

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#c9a84c', '#0d1b3e', '#ffffff']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#c9a84c', '#0d1b3e', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };
});
