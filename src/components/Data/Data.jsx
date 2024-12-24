
import iPhone13 from "../../images/Rectangle 3.png";
import iPhone12 from "../../images/Rectangle 3 (1).png";
import tShirt from "../../images/Rectangle 3 (2).png";
import './Data.css';

const data = [
  {
    id: 1,
    productName: "IPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "$1225.00",
    inStock: 8,
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone13} alt="Iphone icon"/>),
  },


  {
    id: 2,
    productName: "IPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 12,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 3,
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 4,
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 5,
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 6,
    productName: "IPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 12,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 7,
    productName: "IPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 12,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 8,
    productName: "IPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "$1225.00",
    inStock: 8,
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone13} alt="Iphone icon"/>),
  },

  {
    id: 9,
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 10,
    productName: "IPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 12,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },
  {
    id: 11,
    productName: "IPhone 16 Pro",
    category: "Gadgets",
    unitPrice: "$1225.00",
    inStock: 20,
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone13} alt="Iphone icon"/>),
  },


  {
    id: 12,
    productName: "IPhone 15 Pro",
    category: "Gadgets",
    unitPrice: "$1004.00",
    inStock: 15,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 13,
    productName: "Reebok T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 14,
    productName: "Denim T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 15,
    productName: "White T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 16,
    productName: "IPhone 11 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 15,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 17,
    productName: "IPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 15,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },

  {
    id: 18,
    productName: "IPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "$1225.00",
    inStock: 8,
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone13} alt="Iphone icon"/>),
  },

  {
    id: 19,
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "$400.00",
    inStock: "Out of Stock",
    discount: "$0.00",
    totalValue: "$888",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: "Unpublish",
    image: (<img src={tShirt} alt="Iphone icon"/>),
  },

  {
    id: 20,
    productName: "IPhone 15",
    category: "Gadgets",
    unitPrice: "$1000.00",
    inStock: 12,
    discount: "$0.00",
    totalValue: "$777",
    action: (
      <select className="select-publish">
        <option>Publish</option>
        <option>Upublish</option>
      </select>
    ),
    status: 'Publish',
    image: (<img src={iPhone12} alt="Iphone icon"/>),
  },


];

export default data; 
