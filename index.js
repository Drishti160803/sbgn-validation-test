const validator = require('schematron-runner');

// In files ka sahi path dena yahan
const xmlFile = 'adh.sbgnml'; 
const schematronFile = 'sbgn-schematron.sch';

async function runValidation() {
    try {
        console.log("Starting SBGN validation process...");
        const results = await validator.validate(xmlFile, schematronFile);
        
        if (results.length === 0) {
            console.log("Validation Successful: No errors found in the SBGNML file.");
        } else {
            console.log("Validation completed with the following results:");
            console.log(results);
        }
    } catch (error) {
        console.error("An error occurred during validation:", error);
    }
}

runValidation();
