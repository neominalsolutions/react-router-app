import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Container from '../../components/ui.container';
import type { Post } from '../../models/post.model';
import { getPosts } from '../../services/post.api';

function PostIndexPage() {
	const [postState, setPostState] = useState<Post[]>([]);

	const loadData = async () => {
		// verileri servisten çek
		const data = await getPosts();
		setPostState(data);
	};

	useEffect(() => {
		// post endpoint üzerinden veri çek.
		// axiosInstance
		// 	.get('/posts')
		// 	.then((response) => {
		// 		console.log('data', response);
		// 		setPostState(response.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 	});
		loadData();
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
