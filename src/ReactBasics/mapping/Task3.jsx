import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Task3(abc) {
    const CarouselArray = [
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaKEzslPROiajGOLpRNocWF71Y_F8X1JgsA&s" ,name:"Image1"},
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMznGGK__irAnGytp54Sfv5Susw-vfklaYQ&s" ,name:"Image2"},
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlw8OKMAwmnHmrlMvfB-HvHoNzHyBmkaV-zQ&s" ,name:"Image3"}
    ]

    return (
        <div>
            <Carousel style={{width:"50%",height:"350px"}}>
                {CarouselArray.map((item) => {
                    return (
                    <Carousel.Item >
                        <img src={item.image} style={{width:"100%",height:"350px"}}/>
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{abc.name}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )})}
            </Carousel>
              
            
   
        </div>

    )
}

export default Task3


