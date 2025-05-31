const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const PROFILES_FILE = path.join(__dirname, 'profiles.json');

// Helper to read profiles
function getProfiles() {
  try {
    const data = fs.readFileSync(PROFILES_FILE);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Submit new profile
app.post('/submit', (req, res) => {
  const profiles = getProfiles();
  const newProfile = req.body;

  // Ensure username is unique
  if (profiles.some(p => p.username === newProfile.username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  profiles.push(newProfile);

  fs.writeFileSync(PROFILES_FILE, JSON.stringify(profiles, null, 2));

  res.json({ success: true });
});

// Serve dynamic profile pages
app.get('/:username', (req, res) => {
  const profiles = getProfiles();
  const username = req.params.username.toLowerCase();

  const profile = profiles.find(p => p.username.toLowerCase() === username);

  if (!profile) {
    return res.status(404).send('<h1>Profile not found</h1>');
  }

  // Read the profile template
  let html = fs.readFileSync(path.join(__dirname, 'profile-template.html'), 'utf-8');

  // Replace placeholders with profile data
  html = html.replace('{{name}}', profile.name || '');
  html = html.replace('{{profilePic}}', profile.profilePic || 'default.jpg');
  html = html.replace('{{description}}', profile.description || '');
  html = html.replace('{{website}}', profile.website || '');
  html = html.replace('{{twitter}}', profile.twitter || '');
  html = html.replace('{{instagram}}', profile.instagram || '');
  html = html.replace('{{linkedin}}', profile.linkedin || '');
  html = html.replace('{{github}}', profile.github || '');

  res.send(html);
});

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
