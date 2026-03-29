const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// RSVP Endpoint
app.post('/api/rsvp', async (req, res) => {
    const { name, email, attendance, guests, message } = req.body;
    console.log(`Received RSVP from ${name} (${email}): ${attendance}`);

    try {
        // Here we would typically send data to a database or a webhook
        const webhookUrl = process.env.FORM_WEBHOOK_URL;
        if (webhookUrl) {
            await axios.post(webhookUrl, {
                content: `New RSVP: ${name} (${email}) - ${attendance === 'yes' ? 'Attending' : 'Not Attending'} - Guests: ${guests}`
            });
        }

        // Generate a personalized thank you message using AI (MCP Mock)
        const personalizedMessage = await generatePersonalizedThankYou(name, message);

        res.status(200).json({
            success: true,
            message: 'RSVP received successfully.',
            ai_message: personalizedMessage
        });
    } catch (error) {
        console.error('Error processing RSVP:', error);
        res.status(500).json({ success: false, error: 'Failed to process RSVP.' });
    }
});

// Mock function for AI-powered features
async function generatePersonalizedThankYou(name, guestMessage) {
    // In a real implementation, this would call the Anthropic SDK via MCP
    console.log('Generating AI personalized message...');
    return `Dear ${name.split(' ')[0]}, thank you so much for your RSVP and for your kind words: "${guestMessage || 'Congratulations!'}". We can't wait to see you!`;
}

// MCP Integration Mock Endpoints
app.get('/api/mcp/design-system', (req, res) => {
    res.json({
        theme: 'elegant-graduation',
        colors: ['#0d1b3e', '#c9a84c', '#faf6ee'],
        status: 'Generated via Figma MCP'
    });
});

app.get('/api/mcp/graphics', (req, res) => {
    res.json({
        assets: [
            { type: 'graduation-cap', url: '/assets/images/cap.svg' },
            { type: 'confetti-pattern', url: '/assets/images/pattern.svg' }
        ],
        status: 'Created via Canva MCP'
    });
});

app.listen(port, () => {
    console.log(`Form processor worker listening at http://localhost:${port}`);
});
