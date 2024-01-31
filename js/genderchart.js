
// Load your JSON data for males and females
const malesData = [.../Resources_json/Coverage_Gender_Men_json.json]; // Load your JSON data here
const femalesData = [.../Resources_json/Coverage_Gender_Women_json.json]; // Load your JSON data here
// Extract state names
const states = [
    ...malesData.slice(3).map(entry => entry["Title: Health Insurance Coverage of Men 19-64 | KFF"]),
    ...femalesData.slice(3).map(entry => entry["Title: Health Insurance Coverage of Men 19-64 | KFF"])
];
// Map category names to corresponding property names
const categoryMapping = {
    "Employer": "Unnamed: 1",
    "Non-Group": "Unnamed: 2",
    "Medicaid": "Unnamed: 3",
    "Medicare": "Unnamed: 4",
    "Military": "Unnamed: 5",
    "Uninsured": "Unnamed: 6"
};

// Create the SVG container
const svg = d3.select("#healthcaregenderchartChart")
    .append("svg")
    .attr("width", 800) // Adjust the width as needed
    .attr("height", 400); // Adjust the height as needed

// Create the diverging stacked bar chart
const stackedBar = d3.stack().keys(Object.values(categoryMapping));

svg.selectAll("g")
    .data(stackedBar([malesData.slice(3), femalesData.slice(3)]))
    .enter().append("g")
    .attr("fill", d => colorScale(d.key))
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", (d, i) => i * 40) 
    .attr("y", d => d[1]) 
    .attr("height", d => d[0] - d[1]) 
    .attr("width", 40); 

// Add legend
const legend = svg.selectAll(".legend")
    .data(colorScale.domain().slice().reverse())
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => "translate(0," + i * 20 + ")");

legend.append("rect")
    .attr("x", 800 - 18)
    .attr("width", 18)
    .attr("height", 18)
    .attr("fill", colorScale);

legend.append("text")
    .attr("x", 800 - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(d => d);