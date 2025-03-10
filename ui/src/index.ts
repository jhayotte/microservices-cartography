import * as d3 from 'd3';

// Fetch data from the API
async function fetchData() {
    const response = await fetch('http://localhost:8080/data');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Set the dimensions and radius of the tree
const width = 960;
const height = 960;
const radius = Math.min(width, height) / 2;

// Create the SVG container
const svg = d3.select("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

// Create the radial tree layout
const tree = d3.tree()
    .size([2 * Math.PI, radius - 100])
    .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

// Fetch data and update the chart
fetchData().then(data => {
    // Compute the layout
    const root = d3.hierarchy(data);
    const links = tree(root).links();
    const node = root.descendants();

    // Draw the links and nodes based on the selected level
    function updateChart(level) {
        // Filter nodes and links based on the selected level
        const filteredNodes = node.filter(d => d.depth <= level);
        const filteredLinks = links.filter(d => d.target.depth <= level);

        // Draw the links
        svg.selectAll(".link")
            .data(filteredLinks, d => `${d.source.id}-${d.target.id}`)
            .join("path")
            .attr("class", "link")
            .attr("d", d3.linkRadial()
                .angle(d => d.x)
                .radius(d => d.y));

        // Draw the nodes
        const nodeGroup = svg.selectAll(".node")
            .data(filteredNodes, d => d.id)
            .join("g")
            .attr("class", "node")
            .attr("transform", d => `
                rotate(${d.x * 180 / Math.PI - 90})
                translate(${d.y},0)
            `);

        nodeGroup.append("text")
            .attr("dy", "0.31em")
            .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
            .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
            .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
            .text(d => d.data.name)
            .clone(true).lower()
            .attr("stroke", "white");
    }

    // Initial update with level 1
    updateChart(1);

    // Add event listener to the dropdown
    d3.select("#level-select").on("change", function(event) {
        const selectedLevel = +event.target.value;
        updateChart(selectedLevel);
    });
}).catch(error => {
    console.error('Error fetching data:', error);
});
