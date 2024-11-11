import React from 'react'
import Task1props from './Task1props'

function Task1propschild() {
    const cartoonArray = [
        { image: "https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg", name: "Mickey", text: "Characters" },
        { image: "https://www.loudegg.com/wp-content/uploads/2020/10/Winnie-The-Pooh.jpg", name: "Winnie", text: "Characters" },
        { image: "https://www.loudegg.com/wp-content/uploads/2020/10/Donald-Duck.jpg", name: "Donald", text: "Characters" }


    ]
    return (
        <div>
            <Task1props objarray={cartoonArray} />
        </div>
    )
}

export default Task1propschild