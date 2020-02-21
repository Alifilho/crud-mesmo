function optionTest(optionString) {
    if(!options.includes(optionString)) {
        setOptions([...options, optionString]);
    }
}

export default optionTest;