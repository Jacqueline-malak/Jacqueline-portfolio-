import React from 'react'
import { Container, Card, Row, Text, Grid,Button } from "@nextui-org/react";


const banner = () => {
    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Advocato",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
  return (
    <div >
        <div style={{alignContent:"center",justifyContent:"center",marginLeft:"35%"}}>
            <Button.Group color='error' size='xl'>
                <Button>Drawings</Button>
                <Button>Handmade</Button>
                <Button>ART</Button>
            </Button.Group>
        </div>
        
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card hoverable clickable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    objectFit="cover"
                    src={'https://nextui.org' + item.img}
                    width="100%"
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer justify="flex-start">
                  <Row wrap="wrap" justify="space-between">
                    <Text b>{item.title}</Text>
                    <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                      {item.price}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
    </div>
  )
}

export default banner