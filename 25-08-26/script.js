function Book() {

    const image = React.createElement(
        "img",
        {
            src: "https://via.placeholder.com/100",
            width: "100px",
            height: "100px"
        }
    );

    const title = React.createElement(
        "h2",
        { style: { color: "red" } },
        "Title: ReactJs"
    );

    const price = React.createElement(
        "h2",
        { style: { color: "green" } },
        "Price: 465/-"
    );

    const btn = React.createElement(
        "button",
        { style: { color: "blue" } },
        "AddToCart"
    );

    const div = React.createElement(
        "div",
        { className: "book" },
        [image, title, price, btn]
    );

    return div;
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(React.createElement(Book));