**Read in other languages: [Русский](README.md), [Українська](README.ua.md),
[English](README.en.md).**

# Image finder.

Write an application for searching images by a keyword. See the
[preview of the working application](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Create the components `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` and `<Modal>`. You can use the ready-made styles for the
components in the file [styles.css](./styles.css) and adjust them if necessary.

![preview](./mockup/preview.jpg)

## Pixabay API instructions.

For HTTP requests, use the public image search service
[Pixabay](https://pixabay.com/api/docs/). Register and get a private access key.

HTTP request URL string.

```js
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

The Pixabay API supports pagination, with the default parameter `page` set to
`1`. Let the response come with 12 objects, set in the parameter `per_page`.
Don't forget that when searching for a new keyword, you need to reset the value
of `page` to `1`.

The API response includes an array of objects, where you are interested in only
the following properties.

- `id` - a unique identifier
- `webformatURL` - link to the small image for the list of cards
- `largeImageURL` - link to the large image for the modal window

## Description of the `<Searchbar>` Component.

The component accepts one prop `onSubmit` - a function to pass the input value
on form submit. Creates a DOM element of the following structure.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Description of the `<ImageGallery>` Component.

A list of image cards. Creates a DOM element of the following structure.

```html
<ul class="gallery">
  <!-- Set <li> with images -->
</ul>
```

## Description of the `<ImageGalleryItem>` Component.

Component of a list item with an image. Creates a DOM element of the following
structure.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Description of the `<Button>` Component.

When the `Load more` button is pressed, the next batch of images should be
loaded and rendered together with the previous ones. The button should only be
rendered when there are some loaded images. If the array of images is empty, the
button is not rendered.

## Description of the `<Loader>` Component.

The spinner component is displayed while the images are loading. Use any
ready-made component, such as
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) or any
other.

## Description of the `<Modal>` Component.

Clicking on a gallery item should open a modal window with a dark overlay and
display a larger version of the image. The modal window should close when the
`ESC` key is pressed or when the overlay is clicked.

The appearance is similar to the functionality of this
[VanillaJS plugin](https://basiclightbox.electerious.com/), but instead of a
white modal window, an image is rendered (click `Run` in the example). No
animation is required!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
