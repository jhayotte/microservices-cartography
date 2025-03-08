import * as d3 from 'd3';

// Define the data structure for the tree
const treeData = {
    name: "Root Service",
    children: [
        {
            name: "Service A",
            children: [
                { name: "Service A1" },
                { name: "Service A2" }
            ]
        },
        {
            name: "Service B",
            children: [
                { name: "Service B1" },
                { name: "Service B2" }
            ]
        }
    ]
};

// Set the dimensions and margins of the diagram
const margin = { top: 20, right: 90, bottom: 30, left: 90 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("#tree-container").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create the tree layout
const treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
let nodes = d3.hierarchy(treeData, d => d.children);

// Maps the node data to the tree layout
nodes = treemap(nodes);

// Add links between nodes
const link = svg.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d => {
        return "M" + d.y + "," + d.x
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x
            + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
    });

// Add nodes
const node = svg.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
    .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

node.append("circle")
    .attr("r", 10);

node.append("text")
    .attr("dy", 3)
    .attr("x", d => d.children ? -13 : 13)
    .style("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);
