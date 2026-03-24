# 🎬 CineFinder - Movie Explorer Web Application

## 🎯 1. Objective of the Project
The primary objective of this project is to build an interactive front-end web application that allows users to search for movies, view their details, and manipulate the displayed results using modern JavaScript. It serves as a practical demonstration of integrating third-party public APIs and utilizing JavaScript Higher-Order Functions (HOFs) such as `filter()`, `map()`, and `sort()` to create a dynamic user experience.

## 📝 2. Project Description
**CineFinder** is a sleek web application that acts as a custom movie directory. Users enter a search keyword (e.g., "Batman" or "Avengers") to pull a list of matching movies directly from a live movie database. Once the list is loaded, users can filter the results by year, sort the movies alphabetically or chronologically, and extract specific data—all happening seamlessly on the client side.

## ✨ 3. List of Features
This application is designed specifically to utilize JavaScript Array methods for data manipulation:
*   **Search and Fetch:** Accepts user text input to fetch an array of movies based on a keyword.
*   **Generate UI Cards (`Array.prototype.map`):** Iterates over the fetched movie array to dynamically generate HTML elements (movie posters, titles, and release years) for the screen.
*   **Filter Results (`Array.prototype.filter`):** Includes a feature to filter the currently displayed movies, such as showing only movies released after the year 2010.
*   **Sort Movies (`Array.prototype.sort`):** Provides a dropdown menu to sort the movie results either alphabetically by title (A-Z) or chronologically by release year (Newest to Oldest).

## 🔌 4. API Used
**OMDb API (The Open Movie Database)**
*   **Endpoint Detail:** The project strictly uses the Search endpoint:
    *   `http://www.omdbapi.com/?s=[MovieName]&page=1&apikey=443147e8`
*   **Why this API?** Unlike the single-movie endpoint (`?i=`), the search endpoint (`?s=`) returns an *array* of multiple movie objects. This specifically fulfills the assignment requirement to fetch a dataset that can be sorted, filtered, and mapped using JavaScript HOFs.

## 🛠️ 5. Technologies Used
*   **HTML:** To build the semantic structure of the web page (search bars, dropdowns, and movie card containers).
*   **CSS:** For designing a clean, responsive graphical user interface that works well on both desktop and mobile devices.
*   **Vanilla JavaScript (ES6+):** For the entire logic of the application, including the `fetch()` API for network requests and Array methods (`map`, `filter`, `sort`) for data handling.
*   **Git & GitHub:** For version control and project hosting.

## 🚀 6. Project Setup Instructions
To run this project locally on your machine, follow these simple steps:

1.  **Clone the Repository:**
    Open your terminal and run:
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the Folder:**
    ```bash
    cd <repository-folder-name>
    ```
3.  **Launch the App:**
    There are no external dependencies or Node.js packages required! Keep it simple:
    *   Double-click `index.html` to open it directly in any modern web browser.
    *   *Alternative:* Open the project folder in VS Code and right-click `index.html` to select "Open with Live Server" for the best development experience.

---

## ✅ 8. Milestone 1 Completion Status
*   [x] Choose a clear project idea (Movie Explorer).
*   [x] Select and document a public API (OMDb API Search Endpoint).
*   [x] Define purpose and features (Focusing on Array HOFs).
*   [x] Create GitHub repository and initialize local git workspace.
*   [x] Create a comprehensive `README.md` outlining the foundational plan.
# Movie-Project-WAP-
