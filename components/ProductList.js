import useSWR from 'swr';
import styles from '../styles/ProductList.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);

  if (error) return <div>Failed to load products.</div>;
  if (!data) return <div>Loading products...</div>;

  return (
    <div className={styles.productList}>
      {data.map((product) => (
        <div key={product.id} className={styles.product}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
