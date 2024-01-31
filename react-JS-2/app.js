import React from "react";
import ReactDOM from "react-dom/client";





const parent = React.createElement("div", 
                {
                id: "parent"
                },
                React.createElement("div",
                                        {
                                            id: "child"
                                        }, 
                                        [React.createElement("h1", {}, "hello world from react!"), React.createElement("h2", {}, "hello world from react!")]))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

