import pic1 from "../assets/Categ1.jpg"
import pic2 from "../assets/Categ2.jpg"
import pic3 from "../assets/Categ3.jpg"
import pic4 from "../assets/Categ4.jpg"
import pic5 from "../assets/Categ5.jpg"
import pic6 from "../assets/Categ6.jpg"
import pic7 from "../assets/Categ7.jpg"
import pic8 from "../assets/Categ8.jpg"
import pic9 from "../assets/Categ9.jpg"
import pic10 from "../assets/Categ10.jpg"
import pic11 from "../assets/Categ11.png"
import pic12 from "../assets/Categ12.jpg"
import pic13 from "../assets/Categ13.jpg"
import pic14 from "../assets/Categ14.png"
import pic15 from "../assets/Categ15.jpg"
import pic16 from "../assets/Categ16.jpeg"
import pic17 from "../assets/Categ17.jpg"
import pic18 from "../assets/Categ18.jpg"
import pic19 from "../assets/Categ19.jpg"
import pic20 from "../assets/Categ20.jpg"
import pic21 from "../assets/Categ21.jpg"
import pic22 from "../assets/Categ22.jpg"
import pic23 from "../assets/Categ23.jpg"
import pic24 from "../assets/Categ24.jpg"
import { createContext, useState } from "react"

export const CategoryList = createContext({
    categories: []
})
const Defualt_categories =
    [
        {
            title: "beauty",
            name: "Beauty",
            img: pic1
        },
        {
            title: "fragrances",
            name: "Fragrances",
            img: pic2
        },
        {
            title: "furniture",
            name: "Furniture",
            img: pic3
        },
        {
            title: "groceries",
            name: "Groceries",
            img: pic4
        },
        {
            title: "home-decoration",
            name: "Home Decoration",
            img: pic5
        },
        {
            title: "kitchen-accessories",
            name: "Kitchen Accessories",
            img: pic6
        },
        {
            title: "laptops",
            name: "Laptops",
            img: pic7
        },
        {
            title: "mens-shirts",
            name: "Men's Shirts",
            img: pic8
        },
        {
            title: "mens-shoes",
            name: "Men's Shoes",
            img: pic9
        },
        {
            title: "mens-watches",
            name: "Men's Watches",
            img: pic10
        },
        {
            title: "mobile-accessories",
            name: "Mobile Accessories",
            img: pic11
        },
        {
            title: "motorcycle",
            name: "Motorcycle",
            img: pic12
        },
        {
            title: "skin-care",
            name: "Skin Care",
            img: pic13
        },
        {
            title: "smartphones",
            name: "Smartphones",
            img: pic14
        },
        {
            title: "sports-accessories",
            name: "Sports Accessories",
            img: pic15
        },
        {
            title: "sunglasses",
            name: "Sunglasses",
            img: pic16
        },
        {
            title: "tablets",
            name: "Tablets",
            img: pic17
        },
        {
            title: "tops",
            name: "Tops",
            img: pic18
        },
        {
            title: "vehicle",
            name: "Vehicle",
            img: pic19
        },
        {
            title: "womens-bags",
            name: "Womens Bags",
            img: pic20
        },
        {
            title: "womens-dresses",
            name: "Womens Dresses",
            img: pic21
        },
        {
            title: "womens-jewellery",
            name: "Womens Jewellery",
            img: pic22
        },
        {
            title: "womens-shoes",
            name: "Womens Shoes",
            img: pic23
        },
        {
            title: "womens-watches",
            name: "Womens Watches",
            img: pic24
        }
    ]

const CategoryListProvider = ({ children }) => {
    const [categories] = useState(Defualt_categories);
    return (
        <CategoryList.Provider value={{ categories }}>
            {children}
        </CategoryList.Provider>
    );
};
export default CategoryListProvider;

