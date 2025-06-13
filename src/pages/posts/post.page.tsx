import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import type { Post } from '../../models/post.model';
import { getPosts } from '../../services/post.api';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
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
			<Box>
				{postState.length > 0 && (
					<List
						sx={{
							width: '100%',
						}}
					>
						{postState.map((item) => {
							return (
								<ListItem alignItems="flex-start">
									<ListItemText>
										<AccessibleForwardIcon />
										<Link to={`/posts/comments/${item.id}`}>{item.title}</Link>
									</ListItemText>
								</ListItem>
							);
						})}
					</List>
				)}
			</Box>
		</>
	);
}

export default PostIndexPage;
