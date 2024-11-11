import React from 'react'

function Basics_1() {
  const array = [
    { name: "Sarang", position: "React developer", salary: 30000 },
    { name: "Muhsina", position: "React developer", salary: 30000 },
    { name: "Jasil", position: "React developer", salary: 30000 },
    { name: "Maria", position: "React developer", salary: 30000 }
  ]

  const fruitArray = [
    { name: "Apple", Price: 50 },
    { name: "Mango", Price: 40 },
    { name: "Grapes", Price: 60 },
    { name: "Orange", Price: 35 }
  ]

  // mapping is to get each objects of an array by passing a parameter value eg. "test" here
  // the second parameter passed i.e "index" here gives the index of each object in the array
  // mapping syntax is arrayname.map as given below
  return (

    <div>
      <div className='row' style={{ justifyContent: "center" }}  >

        {array.map((test, index) => {
          console.log(index);

          return (
            <div className=' col-lg-3 col-md-4 col-sm-6 col-12'>
              <div
                style={{ border: "2px solid black", 
                         padding: "10px",
                         backgroundColor: "aqua", 
                         marginRight: "10px", 
                         borderRadius: "10px", 
                         margin: "20px", 
                         color: "black" 
                      }} >

                <h1>{index + 1}</h1>
                <h1>{test.name}</h1>
                <h1>{test.position}</h1>
                <h1>{test.salary}</h1>
              </div>
            </div>


          )

        })}
      </div>

      <div>
        {
          fruitArray.map((fruit, index1) => {
            return (
              <div>
                <hr />
                <h1>Index : {index1 + 1}</h1>
                <h1>Fruit Name : {fruit.name}</h1>
                <h2>Fruit Price : {fruit.Price}</h2>
              </div>
            )
          }
          )
        }
      </div>
    </div>

  )
}

export default Basics_1


