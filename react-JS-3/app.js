import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

const heading= React.createElement( "h1",{
    id:"heading"
},"React");
console.log(heading);

// JSX - is not HTML in JS  

// JSX (transpiled before it reaches the JS ) - PARCEL -Babel


const jsxHeading = <h1 id ="heading" className="head"> Namaste React using JSX</h1>;



//  or 
const ReactHeading2=()=> <h1> nameste react</h1>;

//  react component

const elem = 100;

const ReactHeading =()=>(
   <div>
       
        {elem}
        <h1>hello priyanshu</h1>
    </div>
    
);
// both are same

console.log(jsxHeading);
const root= ReactDOM .createRoot(document.getElementById("root"));
  
// root.render(jsxHeading);

// for rendering react component the syntax is 
root.render(<ReactHeading/>);
 




