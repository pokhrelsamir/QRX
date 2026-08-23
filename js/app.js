/**
 * QRX
 * Application Controller
 *
 * Handles:
 * - UI initialization
 * - QR code generation
 * - Character counter
 * - Input validation
 * - Clear functionality
 * - QR code download
 */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const qrInput =
    document.getElementById("qrInput");

const characterCount =
    document.getElementById("characterCount");

const clearButton =
    document.getElementById("clearButton");

const generateButton =
    document.getElementById("generateButton");

const downloadButton =
    document.getElementById("downloadButton");

const qrContainer =
    document.getElementById("qrContainer");

const qrPlaceholder =
    document.getElementById("qrPlaceholder");

const errorMessage =
    document.getElementById("errorMessage");


/* =========================================================
   CONSTANTS
========================================================= */

const MAX_LENGTH = 2000;

let qrGenerated = false;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeCharacterCounter();

    initializeEvents();

    updateDownloadState();

});


/* =========================================================
   EVENT LISTENERS
========================================================= */

function initializeEvents() {

    qrInput.addEventListener(
        "input",
        handleInput
    );

    generateButton.addEventListener(
        "click",
        generateQRCode
    );

    clearButton.addEventListener(
        "click",
        clearGenerator
    );

    downloadButton.addEventListener(
        "click",
        downloadQRCode
    );

}


/* =========================================================
   INPUT HANDLER
========================================================= */

function handleInput() {

    updateCharacterCounter();

    clearError();

}


/* =========================================================
   CHARACTER COUNTER
========================================================= */

function initializeCharacterCounter() {

    updateCharacterCounter();

}


function updateCharacterCounter() {

    const length = qrInput.value.length;

    characterCount.textContent =
        `${length} / ${MAX_LENGTH}`;

}


/* =========================================================
   QR GENERATION
========================================================= */

function generateQRCode() {

    const text = qrInput.value.trim();


    /* -----------------------------------------------------
       Validate input
    ----------------------------------------------------- */

    if (!text) {

        showError(
            "Please enter some text or a URL."
        );

        qrInput.focus();

        return;
    }


    if (text.length > MAX_LENGTH) {

        showError(
            `Content cannot exceed ${MAX_LENGTH} characters.`
        );

        return;
    }


    /* -----------------------------------------------------
       Check QR library
    ----------------------------------------------------- */

    if (
        typeof QRCodeEngine === "undefined" ||
        !QRCodeEngine.isAvailable()
    ) {

        showError(
            "QR code library is not available."
        );

        return;
    }


    /* -----------------------------------------------------
       Generate QR code
    ----------------------------------------------------- */

    QRCodeEngine.generate(
        qrContainer,
        text
    );


    /* -----------------------------------------------------
       Update UI
    ----------------------------------------------------- */

    hidePlaceholder();

    qrGenerated = true;

    updateDownloadState();

    clearError();

}


/* =========================================================
   PLACEHOLDER
========================================================= */

function hidePlaceholder() {

    if (qrPlaceholder) {
        qrPlaceholder.style.display = "none";
    }

}


/* =========================================================
   CLEAR GENERATOR
========================================================= */

function clearGenerator() {

    qrInput.value = "";

    updateCharacterCounter();

    clearError();


    /* -----------------------------------------------------
       Restore placeholder
    ----------------------------------------------------- */

    qrContainer.innerHTML = "";

    qrContainer.appendChild(
        createPlaceholder()
    );


    qrGenerated = false;

    updateDownloadState();

    qrInput.focus();

}


/* =========================================================
   CREATE PLACEHOLDER
========================================================= */

function createPlaceholder() {

    const placeholder =
        document.createElement("div");

    placeholder.className =
        "qr-placeholder";

    placeholder.innerHTML = `
        <div class="placeholder-icon">
            ▦
        </div>

        <h3>No QR Code Yet</h3>

        <p>
            Enter some content and click
            <strong>Generate QR Code</strong>.
        </p>
    `;

    return placeholder;

}


/* =========================================================
   DOWNLOAD QR CODE
========================================================= */

function downloadQRCode() {

    if (!qrGenerated) {

        showError(
            "Generate a QR code before downloading."
        );

        return;
    }


    const canvas =
        qrContainer.querySelector("canvas");

    const image =
        qrContainer.querySelector("img");


    /* -----------------------------------------------------
       Canvas download
    ----------------------------------------------------- */

    if (canvas) {

        downloadCanvas(
            canvas,
            "qrx-code.png"
        );

        return;
    }


    /* -----------------------------------------------------
       Image download fallback
    ----------------------------------------------------- */

    if (image) {

        downloadImage(
            image,
            "qrx-code.png"
        );

        return;
    }


    showError(
        "Unable to download the QR code."
    );

}


/* =========================================================
   CANVAS DOWNLOAD
========================================================= */

function downloadCanvas(
    canvas,
    filename
) {

    const link =
        document.createElement("a");

    link.download = filename;

    link.href =
        canvas.toDataURL("image/png");

    document.body.appendChild(link);

    link.click();

    link.remove();

}


/* =========================================================
   IMAGE DOWNLOAD
========================================================= */

function downloadImage(
    image,
    filename
) {

    const link =
        document.createElement("a");

    link.download = filename;

    link.href = image.src;

    document.body.appendChild(link);

    link.click();

    link.remove();

}


/* =========================================================
   DOWNLOAD STATE
========================================================= */

function updateDownloadState() {

    downloadButton.disabled =
        !qrGenerated;

}


/* =========================================================
   ERROR HANDLING
========================================================= */

function showError(message) {

    errorMessage.textContent =
        message;

}


function clearError() {

    errorMessage.textContent =
        "";

}