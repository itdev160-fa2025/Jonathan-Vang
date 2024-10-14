const packageData = [
    {
        name: 'ESLint',
        description: 'Helps identify and fix problems in your JavaScript code.',
        author: 'Nicholas C. Zakas',
        downloads: 12000000,
        stars: 4500,
        selector: 'package-1'
    },
    {
        name: 'Bracket Pair Colorizer',
        description: 'Colorize matching brackets for easier code structure visualization.',
        author: 'CoenraadS',
        downloads: 8500000,
        stars: 3600,
        selector: 'package-2'
    }
];

// Function to populate data
function displayPackageData(package) {
    document.getElementById(`${package.selector}-name`).textContent = package.name;
    document.getElementById(`${package.selector}-author`).textContent = package.author;
    document.getElementById(`${package.selector}-downloads`).textContent = package.downloads.toLocaleString();
    document.getElementById(`${package.selector}-stars`).textContent = package.stars.toLocaleString();
}

// Initialize
packageData.forEach(displayPackageData);
