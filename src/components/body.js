import React from "react";
import "./body.css";

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
            <div>
                {
                    products.map((product) => (
                        <div key={product.id}>
                            <div>
                                <h3>
                                    {product.name}
                                </h3>
                                <img src={product.imagePath} alt={product.name} />
                            </div>
                            <div>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}


