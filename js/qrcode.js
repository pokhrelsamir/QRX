/**
 * QRX
 * QR Code Engine
 *
 * Provides a small wrapper around the QRCode library
 * used by the QRX application.
 */


/* =========================================================
   QR CODE ENGINE
========================================================= */

const QRCodeEngine = {

    /**
     * Generate a QR code inside the provided container.
     *
     * @param {HTMLElement} container
     * @param {string} text
     * @returns {QRCode}
     */
    generate(container, text) {

        if (!container || !text) {
            return null;
        }

        // Remove previous QR code
        container.innerHTML = "";

        // Create QR code
        const qrCode = new QRCode(container, {
            text: text,
            width: 220,
            height: 220,

            colorDark: "#172033",
            colorLight: "#ffffff",

            correctLevel: QRCode.CorrectLevel.H
        });

        return qrCode;
    },


    /**
     * Clear the QR code container.
     *
     * @param {HTMLElement} container
     */
    clear(container) {

        if (!container) {
            return;
        }

        container.innerHTML = "";
    },


    /**
     * Check whether the QRCode library
     * is available.
     *
     * @returns {boolean}
     */
    isAvailable() {

        return typeof QRCode !== "undefined";
    }

};