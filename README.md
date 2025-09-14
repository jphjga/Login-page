# Simple Login Page

This repository contains a simple, responsive login and signup page with light/dark theme support. The project is built using plain HTML, CSS, and JavaScript, and is suitable for use as a starting point for authentication UI in web applications.

## Features

- **Login and Signup Forms:** Includes sections for user login and new user registration.
- **Light/Dark Theme Toggle:** Users can switch between light and dark modes using a button.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Google Sign-In Button (UI only):** Placeholder button for Google authentication.
- **Custom Styling:** Clean and modern look with separate CSS files for each theme.

## File Structure

```
webLogin page.html
CSS/
    styleLogin-dark.css
    styleLogin.css
JS/
    scriptLogin.js
res/
    drawables/
        dark-mode.png
        ic_google_icon.jpg
        light-mode.png
```

- **webLogin page.html:** Main HTML file containing the login and signup forms.
- **CSS/styleLogin.css:** Styles for the light theme.
- **CSS/styleLogin-dark.css:** Styles for the dark theme.
- **JS/scriptLogin.js:** JavaScript for theme switching and toggling between login/signup forms.
- **res/drawables/:** Image assets for theme icons and Google sign-in button.

## Usage

1. Clone the repository.
2. Open `webLogin page.html` in your browser.
3. Use the theme switch button in the top-right corner to toggle between light and dark modes.
4. Switch between login and signup forms using the provided links.

## Customization

- Replace image assets in `res/drawables/` as needed.
- Integrate backend authentication by connecting the forms to your server.

## License

This project is open source and available under the [MIT License](LICENSE).
