import { readable } from 'svelte/store';

const localStoragePostsKey = 'seekFind_posts';

export const posts = readable([], set => {

  let localPosts = JSON.parse(localStorage.getItem(localStoragePostsKey));
  if( Array.isArray(localPosts) ) {
    set(localPosts);
    return;
  }

  const pages = 10;
  const calls = [];
  for( let i = 1; i <= pages; i++ ) {
    calls.push( fetch(`https://node-hnapi.herokuapp.com/news?page=${i}`) );
  }

  Promise.all(calls)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(postsGrouped => {
      const apiPosts = postsGrouped.reduce((acc, group) => [ ...acc, ...group ], []);
      localStorage.setItem(localStoragePostsKey, JSON.stringify(apiPosts));
      set(apiPosts);
    });

  return () => {};
});
