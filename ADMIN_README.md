# Songs of Praise - Multi-Language Admin Panel Guide

## 🔐 Security
The Admin Panel is **password protected** for security. The default password is `admin123`.

### Changing the Password
To change the admin password, edit the `ADMIN_PASSWORD` constant in `index.html`:
```javascript
const ADMIN_PASSWORD = 'your-new-password-here';
```

### Authentication Features
- **Session-based**: Login persists during your browser session
- **Logout**: Click "Logout" to end your admin session
- **Protected Access**: All admin functions require authentication

## Overview
The Admin Panel allows you to manage the songs database directly from the frontend. You can add new songs, edit existing ones, and export/import song data.

## Features

## 🎵 Song Management
- **Add New Songs** - Create songs with multiple language versions in one form
- **Edit Existing Songs** - Modify any language version (automatically loads all versions of the same song)
- **Delete Songs** - Remove individual songs or entire song groups
- **Multi-Language Support** - Add lyrics in Odia, English, Hindi, and Desiya simultaneously

### Adding Multi-Language Songs
1. Enter the song title (same for all languages)
2. Add multiple language sections using the "Add Language" button
3. Select different languages for each section
4. Enter lyrics for each language version
5. Add common YouTube URL and source URL (shared across all versions)
6. Save to create multiple song entries

### Editing Multi-Language Songs
When you edit any version of a song, the form automatically loads all language versions of that song for editing.

### 📤 Export Data
- Click "Export Data" to download the current songs database as `songs-data.js`
- This file can replace the existing `songs-data.js` file

### 📥 Import Data
- Click "Import Data" to upload a `songs-data.js` or JSON file
- The imported data will replace the current working database

## Data Persistence
- Changes are saved to browser localStorage
- Data persists between sessions in the same browser
- Export the data to make permanent changes to the main application

## Usage Workflow
1. Click the "Admin" tab in the navigation
2. Enter the admin password (default: `admin123`)
3. Make changes in the admin panel
4. Test your changes in the main app
5. Export the data when satisfied
6. Click "Logout" to secure the admin panel
7. Replace the `songs-data.js` file with the exported version
8. Deploy the updated application

## Security Note
This admin panel is designed for local development and content management. In a production environment, consider implementing proper authentication and backend storage.