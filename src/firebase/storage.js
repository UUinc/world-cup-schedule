import { ref, getDownloadURL } from 'firebase/storage';

export const fetchJsonFile = async (fileName) => {
    try {
        const fileRef = ref(storage, `json/${fileName}`);
        const url = await getDownloadURL(fileRef);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch JSON file');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching JSON file:", error);
        return null;
    }
};