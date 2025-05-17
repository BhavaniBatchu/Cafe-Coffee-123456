import React from 'react'

const product = ()  => {
  return (
    <div>
       <h1 className='heading'>Our Products</h1> <br />
        <h2 className='head'>Espresso</h2>
        <div className='contaner'> 
        <p className='para'>What is an Espresso Coffee made of?<br/>
         Espresso is a concentered from of coffee,<br />
          served in shots.
         it's made of two ingredients-finaely<br/>
          ground,100%coffe, and hot water.</p>
        <img src="Assets/image1.jpg" alt=""  className='imagee'/>
</div>
     <h3 className="ehead">Cappuccino</h3>
       <div className="contaner1">
       <img src="Assets/image2.jpg" alt="" className="image1"/>
        <p className="para1">A cappuccino is the perfect balance of espresso, <br />
        steamed milk and foam.This coffee is all about the structure and the <br/>
        even splitting of all elements into equal thirds. <br />
        An expertly made cappuccino should be rich,
         but not acidic and have a  <br />
         mildly sweet flavouring from the milk.</p>
    </div>
         <h4 className="chead">latte</h4>
         <div className="contaner2">
          <p className="para2">A latte, also known as a caffè latte,<br /> 
          is a milky coffee originating in Italy,<br/> served with a silky layer of foam.
          They're similar to cappuccinos,
          <br /> but there are some obvious differences - mostly<br />
           in the ratios of milk, 
          water,</p>
          <img src="Assets/image.jpg" alt="" className="image2"/>

  </div>
  <h3 className="dhead">Dalgona</h3>
       <div className="contaner1">
       <img src="Assets/image3.jpg" alt="" className="image3"/>
        <p className="para1">Dalgona Coffee or Whipped Coffee is a 3 ingredient <br />
        coffee made using instant coffee powder, sugar and milk. 
        <br />It can made in 5 minutes and can be served chilled or hot.</p>
    </div>

  </div>

  )
}

export default product