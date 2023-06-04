const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '22969574-6aad5b2f74d6cb304dd2a3ef9';

const fetchImages = async (query, page) => {
  const res = await fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
  );

  if (!res.ok) {
    return Promise.reject(
      new Error(
        'Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте ещё раз.',
      ),
    );
  }

  return await res.json();
};

export default fetchImages;
