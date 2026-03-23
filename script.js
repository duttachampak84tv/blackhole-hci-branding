// script.js

// Function to save to-do items to Local Storage
function saveToLocalStorage(items) {
    localStorage.setItem('todoItems', JSON.stringify(items));
}

// Function to get to-do items from Local Storage
function getFromLocalStorage() {
    const items = localStorage.getItem('todoItems');
    return items ? JSON.parse(items) : [];
}

// Function to add a new to-do item
function addTodoItem(item) {
    const items = getFromLocalStorage();
    items.push(item);
    saveToLocalStorage(items);
}

// Function to remove a to-do item
function removeTodoItem(item) {
    let items = getFromLocalStorage();
    items = items.filter(todo => todo !== item);
    saveToLocalStorage(items);
}

// Function to clear all to-do items
function clearTodoItems() {
    localStorage.removeItem('todoItems');
}