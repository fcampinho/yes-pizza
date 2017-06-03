export const getGraph = (payload) => {
    return new Promise((resolve) => {
        let request = new XMLHttpRequest();
        request.open("GET", "https://core-graphql.dev.waldo.photos/pizza?query=query" + payload, true);
        request.setRequestHeader("Content-Type", "application/graphql");
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                resolve(JSON.parse(request.responseText).data.pizzaSizes)
            }
        }
    });
}