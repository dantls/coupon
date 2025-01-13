# Nearby

**Nearby** is a mobile application designed to enhance the local shopping experience by offering users easy access to discounts and promotions from businesses nearby. Using interactive maps and QR codes, users can discover special offers, view available deals, and make more informed purchasing decisions. The app aims to promote local businesses and encourage conscious consumption.

## Features

- **Map Visualization**: The app utilizes maps to display businesses offering discounts and promotions. The user's current location is detected to show offers in proximity.
- **QR Codes**: Users can scan QR codes placed in stores or establishments to instantly access exclusive offers and discounts.
- **Discount Filters**: The app allows users to filter promotions by type, such as percentage-based discounts, fixed amount off, or limited-time flash sales.
- **Offer History**: A history feature lets users keep track of the offers they’ve accessed previously, making it easy to revisit or check expired deals.

## Technologies Used

- **Google Maps API**: For integrating map features and providing geolocation services.
- **QR Code Scanning**: A dedicated library for scanning and processing QR codes for instant access to promotions.
- **React Native**: Used to build the cross-platform mobile application for both iOS and Android.
- 

## How to Use

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/dantls
   /nearby.git
Install Dependencies: After cloning the repository, navigate to the project folder and install the required dependencies:

bash
Copiar código
cd nearby
npm install
Set Up Firebase: Set up Firebase for user authentication and offer data storage. You will need to create a Firebase project on Firebase Console, and then set up Firebase SDK in the app. Follow the instructions in the Firebase documentation to obtain the configuration keys and integrate them into the app.

Run the App: To run the app locally on your development environment, use the following command:

For iOS:

bash
Copiar código
npx react-native run-ios
For Android:

bash
Copiar código
npx react-native run-android
Configure Google Maps API: You'll need to set up a Google Maps API key to enable map functionality. You can obtain your API key from the Google Cloud Platform Console. Once you have the API key, configure it in the app as per the instructions provided in the Google Maps API documentation.

Scanning QR Codes: To enable QR code scanning, you’ll need to install a QR code scanning library, such as react-native-qrcode-scanner, and configure it according to the documentation. This allows users to scan QR codes in-store and unlock promotions.

Testing the App: After completing the setup and running the app, you can begin testing the features such as geolocation, discount display on maps, and QR code scanning.

Contributing
We welcome contributions to the Nearby app. If you'd like to contribute, please fork the repository and submit a pull request with your changes. Ensure that your changes are well-documented and include relevant test cases.

License
This project is licensed under the MIT License - see the LICENSE file for details.




