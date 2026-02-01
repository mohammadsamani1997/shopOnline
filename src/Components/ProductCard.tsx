import React from 'react';
import styles from '../styles/ProductCard.module.css';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ title, price, image, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.productImage} />
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.rating}>
          <span className={styles.stars}>{"★".repeat(Math.round(rating.rate))}</span>
          <span className={styles.count}>({rating.count})</span>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.currency}>$</span>
          <span className={styles.price}>{price.toFixed(2)}</span>
        </div>

        <button className={styles.addButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;