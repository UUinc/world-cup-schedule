export const getFromApi = async function (link) {
    try {
        let response = await fetch(link);
        let responseJson = await response.json();
        return responseJson.standings;
    } catch (error) {
        console.error(error);
    }
};
