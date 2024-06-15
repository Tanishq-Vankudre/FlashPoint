# FlashPoint - React News App

FlashPoint is a simple and intuitive React application designed to keep you up-to-date with the latest news articles. Users can explore various news categories, including Technology, Business, Health, Sports, and Entertainment.

## Features 🌟

- **Category Selection**: Choose from Technology, Business, Health, Sports, and Entertainment.
- **Latest News**: View the most recent news articles with accompanying images.
- **Detailed Articles**: Read in-depth details about each news article.

## Technologies Used 🚀

- **React**: For building the user interface.
- **News API**: For fetching the latest news articles.
- **Bootstrap**: For responsive and sleek design.

## How to Use 🤔

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sankettpatil/FlashPoint
   cd FlashPoint
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```
   Start exploring the latest news!

## API Key Setup 🔑

To use this app, you need to obtain a News API key. Update the API key in the `NewsBoard.js` file:

```javascript
// NewsBoard.js
let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=YOUR_NEWS_API_KEY`;
```

## Contributing 🤝

We welcome contributions! Whether it's enhancing the design, adding new features, or fixing bugs, feel free to open a pull request and contribute to the project.

## License 📜

This project is licensed under the MIT License.

## Author ✨

- **Sanket Patil**
- **Tanishq Vankudre**

Enjoy exploring the world of news with FlashPoint!
