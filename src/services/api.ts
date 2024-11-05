const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

const fetchImages = async (query, page) => {
  const res = await fetch(
    `${VITE_BASE_URL}/?key=${VITE_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
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

const api = {
  fetchImages,
};

export default api;
