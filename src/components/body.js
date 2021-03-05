import React from "react";
import BodyProduct from "./body_product.js";

export default function Body() {


    var products = [
        { id: 1, name: "Shakes", type: "Beverages", description: "This milk shake is made with MILK, not ice cream! It's refreshing and healthy!", imagePath: "images/beverage/shake.jpg" },
        { id: 2, name: "Hot Chocolate", type: "Beverages", description: "Hot chocolate, also known as drinking chocolate, cocoa, and as chocolate tea in Nigeria, is a heated drink consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and usually a sweetener. Hot chocolate may be topped with whipped cream or marshmallows.", imagePath: "images/beverage/hot_chocolate.jpg" },
        { id: 3, name: "Smoothie", type: "Beverages", description: "Spinach, kale, mango, pineapple, banana & fresh ginger (naturally sweetened)", imagePath: "images/beverage/smoothie.jpg" },
        { id: 4, name: "Bourgeois", type: "Appetizers", description: "Idaho Russet homestyle fries flash fried in duck fat, garnished with Italian black truffle salt.", imagePath: "images/appetizer/bourgeois.jpg" },
        { id: 5, name: "Roasted Brussels Sprouts", type: "Appetizers", description: "Fresh sprouts, fried, lightly salted and served with a side of house-made maple bacon jam.", imagePath: "images/appetizer/brussels.jpg" },
        { id: 6, name: "Fries", type: "Appetizers", description: "All fries are cooked in Non GMO Sunflower oil. Depending on the day, your fries will be cut regular, homestyle, curly, po-ball, or shoestring. Our fries are served au natural and therefore do not keep their heat, or crispness as long as the typical fry. For best quality, please arrive as close as possible to your pick up time. ", imagePath: "images/appetizer/fries.jpg" },
        { id: 7, name: "BFC Original", type: "Burgers", description: "Spring mix, house-made garlic aioli, red onion gastrique, tomato.", imagePath: "images/burger/bfc_original.jpg" },
        { id: 8, name: "Classic", type: "Burgers", description: "Crisp lettuce, tomato, red onion, house-made pickles and smoked special sauce.", imagePath: "images/burger/classic.jpg" },
        { id: 9, name: "The BBQ", type: "Burgers", description: "Blue cheese coleslaw, house made chips, barbecue sauce.", imagePath: "images/burger/the_bbq.jpg" }
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <br />
                        <h1>About Us</h1><a className="top" href="#top">Back to top of page</a><br /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <p>Rogers Best Burgers believes in farm to table products. We believe in giving people the experience of how things use to be. It is an experience like no others. Where you get highly styled photos of products from our competitors, we believe
                    in giving you raw ingredients the honest truth. No filters. No BS. Just an experience that your great great great grandfather had to deal with as a pioneer. </p>
                    </div>
                    <div className="col-sm-12 col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1><a name="beverage" href="#beverage">Beverages</a></h1>
                        <a className="top" href="#top">Back to top of page</a><br /><br />
                    </div>
                </div>
                {
                    products.filter((product) => product.type === "Beverages").map((product) => (

                        < BodyProduct key={product.id} name={product.name} image={product.imagePath} description={product.description} />
                    ))
                }
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1><a name="appetizer" href="#appetizer">Appetizers</a></h1>
                        <a className="top" href="#top">Back to top of page</a><br /><br />
                    </div>
                </div>
                {
                    products.filter(product => product.type === "Appetizers").map((product) => (
                        <BodyProduct name={product.name} image={product.imagePath} description={product.description} />
                    ))
                }
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1><a name="burger" href="#burger">Burgers</a></h1>
                        <a className="top" href="#top">Back to top of page</a><br /><br />
                    </div>
                </div>
                {
                    products.filter(product => product.type === "Burgers").map((product) => (
                        <BodyProduct name={product.name} image={product.imagePath} description={product.description} />
                    ))
                }
            </div>
            <br /><br />
        </>
    );
}


