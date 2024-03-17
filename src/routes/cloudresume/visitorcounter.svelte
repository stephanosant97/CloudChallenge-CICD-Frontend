<script>
    // Check if running in a browser environment before accessing the DOM
    if (typeof document !== 'undefined') {
        fetch('https://prpldr0kt8.execute-api.us-east-1.amazonaws.com/VisitorCounter')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the entire data object to the console
                document.getElementById('result').innerText = data.result || 'Count not available';
            })
            .catch(error => {
                console.error('Error fetching visitor count:', error);
                document.getElementById('result').innerText = 'Error';
            });
    } else {
        console.error('This code is running in a non-browser environment.');
    }
</script>

<span id="result"></span>
