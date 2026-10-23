Books to Scrape - Python Web Scraper

A lightweight Python script that scrapes book titles and prices from Books to Scrape, a website designed specifically for testing web scraping code.

Description

This project demonstrates basic web scraping techniques using Python. It uses the requests library to fetch the HTML content of the target website and BeautifulSoup4 to parse the HTML tree and extract specific data points (book titles and prices).

Features

HTTP Status Code verification to check website connectivity.

HTML parsing using BeautifulSoup.

Extraction of product details (title and price).

Clean output formatting in the console.

Prerequisites

Make sure you have Python 3.x installed on your system. You will also need to install the required third-party libraries.

Required Libraries

requests

beautifulsoup4

You can install them via pip:

pip install requests beautifulsoup4


Usage

Clone or download this repository to your local machine.

Open a terminal or command prompt in the directory containing the script.

Run the script:

python scraper.py


How It Works

HTTP Request: Sends a GET request to https://books.toscrape.com.

HTML Parsing: Parses the response text using BeautifulSoup(response.text, "html.parser").

Data Extraction:

Finds all <article> tags with the class product_pod.

Loops through each article block to extract:

Title: From the title attribute of the <a> tag inside <h3>.

Price: From the text content of the <p> tag with class price_color.

Display: Prints each book's title followed by its price on a new line.

Example Output

200
A Light in the Attic
£51.77
Tipping the Velvet
£53.74
Soumission
£50.10
...
