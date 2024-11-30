import bc from './images/bc.jpg'
import sr from './images/sr.jpg'
import ap from './images/ap.jpg'
import cl from './images/cl.jpeg'
import om from './images/om.jpg'
import lc from './images/lc.jpg'

const FoodData = 
  [
    {
      id: 1,
      name: 'Butter Chicken',
      category: 'Appetizers',
      ingredients: 'Chicken, Yogurt, Tomatoes, Butter, Cream',
      price: '₹120',
      image: bc,
    },
    {
      id: 2,
      name: 'Spring Rolls',
      category: 'Appetizers',
      ingredients: 'Cabbage, Carrot, Noodles, Wrapper',
      price: '₹70',
      image: sr,
    },
    {
      id: 3,
      name: 'Alfredo Pasta',
      category: 'Main Courses',
      ingredients: 'Pasta, Cream, Parmesan Cheese, Garlic',
      price: '₹220',
      image: ap,
    },
    {
      id: 4,
      name: 'Chocolava Cake',
      category: 'Desserts',
      ingredients: 'Chocolate, Flour, Eggs, Butter',
      price: '₹350',
      image: cl,
    },
    {
      id: 5,
      name: 'Oreo Milkshake',
      category: 'Drinks',
      ingredients: 'Oreo Biscuits, Milk, Ice Cream, Sugar',
      price: '₹90',
      image: om,
    },

    {
      id: 6,
      name: 'Lemon Cake',
      category: 'Drinks',
      ingredients: 'Lemon, Flour, Eggs, Butter',
      price: '₹299',
      image: lc, 
    }
  ];
  

export default FoodData;
