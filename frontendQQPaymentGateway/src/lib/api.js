export async function fetcher(url, options = {}) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`An error occurred while fetching the data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error in fetcher: ${error.message}`);
        throw error;
    }
}
