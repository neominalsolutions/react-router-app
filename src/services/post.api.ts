import { axiosInstance } from '../utils/axios';

// Controller içerisine action açıyor gibi servis katmanımız yazıyoruz

// then catch bloklarından kurtulamk isterse bu durumda try catch mantığı ile çalışan async await söz dizimini kullanabiliriz.
export const getPosts = async () => {
	try {
		const response = await axiosInstance.get('/posts');
		return response.data;
	} catch (error) {
		console.log('err', error);
	}
};

// posta ait yorumları verir
export const getPostComments = async (postId: number) => {
	try {
		const response = await axiosInstance.get(`/comments?postId=${postId}`);
		return response.data;
	} catch (error) {
		console.log('err', error);
	}
};
