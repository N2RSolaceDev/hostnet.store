const { WebhookClient } = require('discord.js');
const fs = require('fs');
const path = require('path');
const os = require('os');

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1362428754458181874/TaKeGN5i6l1gnWViBJVrem9jw2yonAxy0_PunlyYcXlwMlhj57tYmogtM7QuXgKj9gPE ' });

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { domainType, subdomainName, customDomain, authCode, recaptchaResponse } = req.body;

    // Validate CAPTCHA (you need to implement this)
    // Example: const isCaptchaValid = await verifyRecaptcha(recaptchaResponse);
    // if (!isCaptchaValid) {
    //     return res.status(400).json({ error: 'Invalid CAPTCHA' });
    // }

    // Process files
    let filesContent = '';
    if (req.files && req.files.length > 0) {
        for (const file of req.files) {
            const filePath = path.join(os.tmpdir(), file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            filesContent += `**File:** ${file.originalname}\n\`\`\`${fs.readFileSync(filePath, 'utf-8')}\`\`\`\n`;
        }
    }

    const message = `
        **Domain Type:** ${domainType}
        **Subdomain Name:** ${subdomainName || 'N/A'}
        **Custom Domain:** ${customDomain || 'N/A'}
        **Auth Code:** ${authCode || 'N/A'}
        **Uploaded Files:**
        ${filesContent}
    `;

    try {
        await webhookClient.send(message);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send webhook' });
    }
}
