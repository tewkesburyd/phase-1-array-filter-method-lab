// Code your solution here
const findMatching = (names, string) => {
    const name = names.filter((e) => {
        return e.toLowerCase() === string.toLowerCase()
        })
    return name;
}

const fuzzyMatch = (names, string) => {
    const name = names.filter((e) => {
        return e.startsWith(string)
        })
    return name;
}

const matchName = (arrayOfObjs, string) => {
    const name = arrayOfObjs.filter((e) => {
        if (e['name'] === string){
            return e;
        }
    })
    return name;
}