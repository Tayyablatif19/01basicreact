import React, {useState } from 'react'

export default function About() {

const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
})

const [btnText, setBtnText] = useState("Enable Dark Mode")

const toggleSwitch = () => {
    if (myStyle.color === 'white') {
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
    } else {
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode")
    }
} 

  return (
        
    <div className="container" style = {myStyle}>

        <h1 className='my-3'>About Us</h1>


        <div className="accordion" id="accordionExample">
            {/* Accordion Item 1 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style = {myStyle}
                >
                    Accordion Item #1
                </button>
                </h2>
                <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the first item’s accordion body.</strong> It is shown by default...
                </div>
                </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style = {myStyle}
                >
                    Accordion Item #2
                </button>
                </h2>
                <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default...
                </div>
                </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style = {myStyle}
                >
                    Accordion Item #3
                </button>
                </h2>
                <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
                >
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default...
                </div>
                </div>
            </div>
            </div>

<button onClick={toggleSwitch} type="button" className="btn btn-primary my-3">Enable Dark Mode</button>

</div>

  );
}