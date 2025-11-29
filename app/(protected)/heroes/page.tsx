import { Container } from '@/components/layout/container';
import axios from 'axios';

export default async function Heroes() {
	// const heroes = await axios.get('/api/heroes');
	// console.log(heroes);

	return (
		<section>
			<Container>
				<div>Heroes</div>
			</Container>
		</section>
	);
}
