import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Product listing page for Appscrip task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


      </Head>
      


      <Header />
      <main className={styles.main}>
        <ProductList />
      </main>
    </div>
  );
}

