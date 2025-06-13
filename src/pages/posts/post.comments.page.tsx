// sayfaya yüklenecek olan veriler pagelerde çekilir.

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Container from '../../components/ui.container';
import type { Comment } from '../../models/comment.model';
import { getPostComments } from '../../services/post.api';

function PostCommentsPage() {
	const params = useParams(); // route üzerindeki parametreik değerleri yakalamamızı sağlayan bir react router hook'dur.
	const location = useLocation(); // buda tüm path bilgilerini almamızı sağlayan bir react router hook.

	// Not: Hooklar component ilk doma girişince tetiklenen yapılardır. kendi kendlerine tetiklenip component için bir işlem yapmamızı sağlar.
	console.log('params', params.postId);
	console.log('location', location);

	const [commentState, setCommentState] = useState<Comment[]>();

	useEffect(() => {
		// axiosInstance
		// 	.get(`/comments?postId=${params.postId}`)
		// 	.then((response) => {
		// 		console.log('response', response);
		// 		setCommentState(response.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 	});

		const loadData = async () => {
			const data = await getPostComments(Number(params.postId));
			setCommentState(data);
		};

		loadData();
	}, []);

	return (
		<>
			{commentState && (
				<div>
					{commentState.map((item, index) => {
						return (
							<div
								style={{ border: '1px solid gray', borderRadius: 5, margin: 5 }}
								key={index}
							>
								<Container direction="column">
									{item.body} by{' '}
									<span style={{ color: 'blue' }}>{item.name}</span>
								</Container>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
}

export default PostCommentsPage;
