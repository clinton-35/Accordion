
# Accordion Component

This project is a React-based Accordion component that supports both single and multiple item selection. It demonstrates how to use React's state management to create an interactive accordion with customizable selection modes.

## Features

- **Single Selection Mode:** Only one accordion item can be expanded at a time.
- **Multi Selection Mode:** Multiple accordion items can be expanded simultaneously.
- Toggle between single and multi-selection modes with a button click.

## Installation

Clone the repository:

git clone <repository-url>

### `Navigate to the project directory`

cd accordion-project

### Install dependecies:

npm install

### `Usage`

To start the development server and view the component in action, run:

npm start

## `Implementation Details`

### `Single Selection Mode`
In single selection mode, only one accordion item can be expanded at a time. This is controlled by the selected state. When an item is clicked, the handleSingleSelection function checks if the clicked item is already selected. If it is, the item is collapsed by setting selected to null. Otherwise, the clicked item is expanded by updating the selected state with the item's ID.

const [selected, setSelected] = useState(null);

function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
}

### `Multi Selection Mode`
In multi-selection mode, multiple accordion items can be expanded simultaneously. This is managed by the mutiple state, which is an array storing the IDs of the currently expanded items. The handleMultiSelection function adds or removes the clicked item's ID from the mutiple array, allowing multiple items to be expanded at once.

const [mutiple, setMultiple] = useState([]);

function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...mutiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
}

### `Toggle Between Modes`

A button is provided to toggle between single and multi-selection modes. The enableMultiSelection state determines which mode is active. Depending on this state, either handleSingleSelection or handleMultiSelection is triggered when an item is clicked.

const [enableMultiSelection, setEnableMulttiSelection] = useState(false);

<button onClick={() => setEnableMulttiSelection(!enableMultiSelection)}>
    Enable multi-selection
</button>



### Rendering the Accordion

The accordion items are rendered based on the data imported from data.js. Each item is displayed with a title, and its content is conditionally rendered based on the selection mode and the current selection state.

return (
    <div className="wrapper">
        <div className="accordion">
            {data && data.length > 0 ? data.map(dataItem => (
                <div className="item" key={dataItem.id}>
                    <div onClick={enableMultiSelection 
                        ? () => handleMultiSelection(dataItem.id) 
                        : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {selected === dataItem.id || mutiple.indexOf(dataItem.id) !== -1 ? (
                        <div className="content">{dataItem.answer}</div>
                    ) : null}
                </div>
            )) : <div>No data found!</div>}
        </div>
    </div>
);


## Customization

*  The component can be easily customized by modifying the CSS in index.css.
*  The data can be altered by updating the data.js file.

## License

This project is licensed under the MIT License. Feel free to use and modify it as you see fit.