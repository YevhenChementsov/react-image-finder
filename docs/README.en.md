**Read in other languages: [Russian](../README.md),
[Ukrainian](./README.ua.md).**

## Component life cycle. HTTP requests.

_In this section of the course, I will learn how to work with external APIs to
search for images, as well as practicing with state management, notifications.
and modal windows in React. As part of the challenge, I will create an image
search application image search application with pagination, where users will be
able to find images by keywords, download more images at the click of a button,
and open images at full size. images at full size._

---

<details>
<summary>Preview of the image search app</summary>

![Preview of the image search app](./mockup/preview.jpg)

</details>

---

#### The application will include the following features and components:

1. **Basic application structure and API requests**: I will create a root
   component `<App>`, which will manage the state and make requests to the API
   to image retrieval. The application will work with the API
   [Pixabay](https://pixabay.com/api/docs/) and send a request on each new
   search, retrieving images based on the keyword entered by the by the user. I
   will create an initial state with an `images` field to store a list of
   images, `query` for the search query, and `page` to keep track of the the
   current pagination page.

```ts
// Initial state in <App>
state = {
  images: [],
  query: '',
  page: 1,
};
```

<details>
<summary><b><em>Pixabay API Instructions</b></em></summary><br>

```ts
// HTTP request URL string.
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API supports pagination, by default the `page` parameter is `1`. In
response should come 12 objects at a time. This is set in the parameter
`per_page`. When searching for a new keyword, you should reset `page` to `1`.

The response from the api comes an array of objects in which only the following
properties are of interest:

- `id` - unique identifier
- `webformatURL` - link to a small image for the list of cards
- `largeImageURL` - link to large image for modal window

</details>
<br>

2. **Components to search and display the gallery**: I will create several
   components to separate the logic:

   - `<SearchBar>` - a component with a form for entering a search query. It
     accepts one props `onSubmit` - a function to pass the value of the input
     when you submit the form. When the form is submitted, it will update the
     `query` state in the root component.
   - `<ImageGallery>` is a component to display a gallery of images. It will
     receive data through props and display a list of cards for each image.
   - `<ImageGalleryItem>` is a component for each image in the gallery, which
     will render a preview of the image with the ability to open it in full
     size.

     <br>

3. **Implementation of the "Load More" Button**: To support pagination, I will
   add a `<LoadMoreButton>` component that will appear at the bottom of the
   gallery and load the next page of images. When the button is clicked, the
   `page` value in the state will increment, and the application will make an
   additional API request to fetch new images. The button should only render
   when there are already some loaded images. If the image array is empty, the
   button will not render.

   <br>

4. **Notifications and Error Handling**: To inform the user about errors and the
   absence of search results, I will integrate `react-toastify`. If the search
   returns no results or an error occurs during the request, a notification will
   appear.

   <br>

5. **Opening an Image in a Modal Window**: To display an image in full size, I
   will add a `<Modal>` component that will open when an image in the gallery is
   clicked. The modal window will close when clicking outside the image or by
   pressing the `Escape` key. The component will be implemented using
   `createPortal` from `react-dom`. A querySelector will be used to find the
   element by its ID, and the `index.html` file will include a DOM element with
   the following structure:

```tsx
// Modal.tsx
const modalRoot = document.querySelector('#modal-root') as HTMLElement;
```

<br>

```html
<!-- index.html -->
<body>
  ...
  <div id="modal-root"></div>
</body>
```

6. **Optimization of Loading and State Management**: I will add a `<Loader>`
   component to display a spinner while images are being loaded, enhancing the
   user experience. Additionally, I will configure handlers to reset the
   `images` and `page` states for a new search query and keep the state
   management logic in the root component.
   <!-- ignore-prettier -->
   <br>

While creating the application, I will study working with asynchronous requests,
state management, error handling, and notifications. This will help me better
understand the interaction between components and the organization of requests
in React applications, as well as expand my skills in working with APIs and
components such as modals and pagination.
