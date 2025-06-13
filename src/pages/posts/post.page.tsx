import { useEffect, useState } from 'react';
import { axiosInstance } from '../../utils/axios';
import type { Post } from '../../models/post.model';
import Container from '../../components/ui.container';
import { Link } from 'react-router';

function PostIndexPage() {
	const [postState, setPostState] = useState<Post[]>([]);

	useEffect(() => {
		// post endpoint üzerinden veri çek.
		axiosInstance
			.get('/posts')
			.then((response) => {
				console.log('data', response);
				setPostState(response.data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, []);

	return (
		<>
			<Container direction="column">
				{postState.length > 0 && (
					<div>
						{postState.map((item) => {
							return (
								<div key={item.id}>
									<Link to={`/posts/comments/${item.id}`}>{item.title}</Link>
								</div>
							);
						})}
					</div>
				)}
			</Container>
		</>
	);
}

export default PostIndexPage;
