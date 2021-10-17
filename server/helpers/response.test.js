const response = require("./response")
// @ponicode
describe("response.errorMessage", () => {
    test("0", () => {
        let callFunction = () => {
            response.errorMessage("The app does not exist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            response.errorMessage("No error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            response.errorMessage("Empty name specified")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            response.errorMessage("Could not find an existing submission in location.  rubric is original.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            response.errorMessage("Bad Authentication data")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            response.errorMessage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
