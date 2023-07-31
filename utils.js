import Posts from "./posts";

export function getDenormalizedPosts() {
  return Posts.map((post) => {
    return {
      ...post,
    };
  });
}

