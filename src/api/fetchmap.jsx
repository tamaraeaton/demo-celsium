const fetchMap = () => {

    const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

    fetch('https://api.cesium.com/v1/assets', {
        headers: {
            authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

export default fetchMap