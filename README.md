# 📱 QRX

> A lightweight, fast, and privacy-friendly QR code generator built with HTML, CSS, and JavaScript.

QRX is a simple browser-based QR code generator that allows users to transform **text and URLs into QR codes instantly**.

No backend.
No database.
No account required.

Just enter your content, generate the QR code, and download it as a PNG image.

---

## ✨ Features

* 🔗 **URL & Text Support** — Generate QR codes from URLs, text, and other supported content.
* ⚡ **Instant Generation** — Create QR codes directly in your browser.
* 👀 **Live Preview** — View the generated QR code before downloading.
* 📥 **PNG Download** — Save generated QR codes as PNG images.
* 🔢 **Character Counter** — Track the amount of content entered.
* 🧹 **Clear & Reset** — Quickly remove the current content and QR code.
* ⚠️ **Input Validation** — Prevent empty or invalid submissions.
* 📱 **Responsive Design** — Works across desktop, tablet, and mobile screens.
* 🔒 **Browser-Based** — User-entered content is processed on the client side.
* 🪶 **Lightweight** — Built without a backend or database.

---

## 🖥️ Preview

### QRX Interface

> Add your project screenshot here after completing the UI.

```text
screenshots/qrx-preview.png
```

You can later replace this section with:

```markdown
![QRX Preview](screenshots/qrx-preview.png)
```

---

# 🌐 Live Demo

Try the fully deployed QRX application:

<div align="center">

<a href="https://pokhrelsamir.github.io/QRX/">
  <img src="https://img.shields.io/badge/%F0%9F%9A%80%20Open%20QRX-Live%20Demo-6366f1?style=for-the-badge" alt="Open QRX Live Demo">
</a>
</div>

---

## 🛠️ Tech Stack

| Technology | Purpose                            |
| ---------- | ---------------------------------- |
| HTML5      | Application structure              |
| CSS3       | Styling and responsive layout      |
| JavaScript | Application logic and interactions |
| QRCode.js  | QR code generation                 |

QRX uses **QRCode.js**, a JavaScript QR-code library that supports QR generation in the browser and provides options such as size, colors, and error-correction level. QRCode.js is distributed under the MIT License.

---

## 📂 Project Structure

```text
QRX/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── qrcode.js
    └── qrcode.min.js
```

### File Description

| File / Directory   | Description                                  |
| ------------------ | -------------------------------------------- |
| `index.html`       | Main application interface                   |
| `css/style.css`    | UI styling and responsive design             |
| `js/app.js`        | Application controller and user interactions |
| `js/qrcode.js`     | QRX QR-code engine wrapper                   |
| `js/qrcode.min.js` | QRCode.js library                            |
| `README.md`        | Project documentation                        |
| `LICENSE`          | Project license                              |

---

## ⚙️ How It Works

QRX follows a simple client-side workflow:

```text
User Input
    │
    ▼
Validate Content
    │
    ▼
Generate QR Code
    │
    ▼
Display Preview
    │
    ▼
Download PNG
```

### 1. Enter Content

Enter a URL, text, or other supported information into the input field.

### 2. Generate

Click **Generate QR Code**.

QRX passes the entered content to the QR generation engine.

### 3. Preview

The generated QR code appears immediately in the preview panel.

### 4. Download

Click **Download PNG** to save the generated QR code.

---

## 🔒 Privacy

QRX is designed as a client-side browser application.

There is no QRX backend, database, or user account system involved in the application.

Your entered content is used by the browser to generate the QR code.

> **Note:** If QRX is configured to load QRCode.js from an external CDN, the browser will make a request to that CDN to retrieve the library. For a fully self-contained deployment, include the library locally in the project.

---

## 💻 Getting Started

### Prerequisites

No special software or package manager is required.

You only need a modern web browser.

---

### 1. Clone the Repository

```bash
git clone https://github.com/pokhrelsamir/QRX.git
```

### 2. Open the Project

```bash
cd QRX
```

### 3. Run QRX

You can open:

```text
index.html
```

directly in your browser.

For development, you can also use a local development server such as VS Code Live Server.

---

## 🧪 Testing

Try QRX with different types of content.

### URL

```text
https://github.com/
```

### Plain Text

```text
Hello from QRX!
```

### Longer Text

```text
QRX is a lightweight browser-based QR code generator built using HTML, CSS, and JavaScript.
```

### Test Checklist

* [ ] Generate QR code from a URL
* [ ] Generate QR code from plain text
* [ ] Generate QR code from longer content
* [ ] Test empty input
* [ ] Test character counter
* [ ] Test Clear button
* [ ] Test Download PNG
* [ ] Test responsive layout
* [ ] Test on mobile screen
* [ ] Test QR code scanning with a phone

---

## 🌐 Deployment

QRX is a static web application, so it can be deployed using static hosting platforms.

### GitHub Pages

1. Push the project to GitHub.
2. Open the repository.
3. Go to **Settings → Pages**.
4. Select the deployment source.
5. Deploy the project.
6. Open the generated GitHub Pages URL.

Example:

```text
https://pokhrelsamir.github.io/QRX/
```

---

## 🎯 Project Goals

QRX was designed with a few simple goals:

* Keep the application lightweight.
* Avoid unnecessary backend infrastructure.
* Provide a clean and intuitive interface.
* Make QR generation quick and accessible.
* Keep the project easy to understand and maintain.
* Demonstrate practical frontend JavaScript development.

---

## 🔮 Future Improvements

Possible future versions may include:

* 🎨 QR color customization
* 📐 QR size controls
* 🖼️ Logo/image inside QR codes
* 📊 QR generation history
* 📋 Copy generated QR image
* 🖨️ Print QR codes
* 📦 Batch QR generation
* 📄 Export options
* 🌙 Dark mode
* 📱 PWA support
* 🔗 Dedicated QR types such as:

  * Wi-Fi
  * Email
  * Phone
  * SMS
  * vCard
  * Location

---

## 🤝 Contributing

Contributions are welcome.

If you would like to improve QRX:

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Test the application.
5. Commit your changes.

```bash
git commit -m "Add your feature"
```

6. Push the branch.

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

---

## 📜 License

QRX is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.

The QRCode.js dependency used by this project is also distributed under the MIT License. Its original project documentation identifies it as a dependency-free JavaScript QR-code library.

---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

**B.Sc. CSIT Student | Web Developer | Networking Enthusiast**

Built using **HTML, CSS, and JavaScript**

<br>

<a href="https://github.com/pokhrelsamir">
  <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/samirpokhrel/">
  <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>

---

## ⭐ Support

If you find QRX useful:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Report bugs
* 💡 Suggest improvements
* 🤝 Contribute to the project

---

<div align="center">

### 📱 QRX

**Generate. Scan. Share.**

Built with using HTML, CSS & JavaScript.

</div>
