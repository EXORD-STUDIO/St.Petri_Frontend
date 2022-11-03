const getElements = (classname) => {
    return document.getElementsByClassName(classname);
}

const getElement = (id) => {
    return document.getElementById(id);
}

export { getElements, getElement }