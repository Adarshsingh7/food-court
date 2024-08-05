/** @format */
import Header from '../components/Header.tsx';
import ProductList from '../components/ProductList.tsx';
import ProductCard from '../components/ProductCard.tsx';

function Hero() {
	return (
		<>
			<Header />
			<div className='md:px-20 py-10'>
				<ProductList />
				<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</>
	);
}

export default Hero;
