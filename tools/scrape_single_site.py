import requests
from bs4 import BeautifulSoup

def scrape_surveying_services(url):
    # Headers to mimic a browser request
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Target common patterns: <h3> tags often hold service titles
        # or list items within a 'services' class
        services = []
        
        # Pattern 1: Heading tags (Common for Cadmap and STORM)
        for heading in soup.find_all(['h2', 'h3']):
            title = heading.get_text(strip=True)
            if title and len(title) < 60:  # Filter out long paragraphs
                services.append(title)

        # Remove duplicates while preserving order
        unique_services = list(dict.fromkeys(services))

        print(f"--- Services found at {url} ---")
        for idx, service in enumerate(unique_services, 1):
            print(f"{idx}. {service}")

    except Exception as e:
        print(f"Error scraping {url}: {e}")

if __name__ == "__main__":
    # Example URL (Cadmap)
    target_url = "https://www.cadmap.co.uk/surveying/land-topographical-surveys"
    target_url = "https://www.estop.org/en/services/topographical-maps/"
    scrape_surveying_services(target_url)