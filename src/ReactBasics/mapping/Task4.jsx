import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function Task4() {
    const nameArray = [
        { name: "Maria", age: 23 ,edu: "BTech" },
        { name: "Muhsina",age: 24,edu: "BSc" },
        { name: "Jasil",age: 25,edu: "Bcom" }

    ]
   
    return (
        <div className='d-inline-flex'>
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {nameArray.map((data) => {
                            return (
                                <Dropdown.Item href="#/action-1">{data.name}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>

                </Dropdown>
            </div>


            
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Age
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {nameArray.map((data) => {
                                return (
                                    <Dropdown.Item href="#/action-1">{data.age}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>

                    </Dropdown>
                </div>

                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Education Qualification
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {nameArray.map((data) => {
                                return (
                                    <Dropdown.Item href="#/action-1">{data.edu}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>

                    </Dropdown>
                </div>


        </div>
    )
}

export default Task4