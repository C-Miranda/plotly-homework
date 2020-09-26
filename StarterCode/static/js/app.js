var mydata = {};

d3.json("samples.json").then((data) => {
    console.log(data);

    mydata = data


    // Build select dropdown based on contents for data.names
    let sel = d3.select("#selDataset")
    data.names.forEach((name) => {
        sel.append("option").attr("value", name).text(name);

        // Filter the demographic info
    })


    function optionChanged(value) {
        // Run chart for selected data with d3;
        metadata = mydata.metadata.filter(/* Find element with mathing id of value */)

        plotObject = mydata.samples.filter(/* Find sample with id === value */)
        sortableData = plotObject.otu_ids.map((obj, index) => {
            return {
                otu_id: obj,
                sample_value: plotObject.sample_values[index]
            }

        })
    }
})

