document.addEventListener("DOMContentLoaded", () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "First Blog Post",
      summary: "This is a summary of the first blog post.",
      link: "blog/post1.html",
    },
    {
      title: "Second Blog Post",
      summary: "This is a summary of the second blog post.",
      link: "blog/post2.html",
    },
    {
      title: "Third Blog Post",
      summary: "This is a summary of the third blog post.",
      link: "blog/post3.html",
    },
  ];

  // Get the container
  const blogPostsContainer = document.getElementById("blog-posts");

  // Add the last three blog posts
  blogPosts.slice(0, 3).forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");
    postElement.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.summary}</p>
    `;
    blogPostsContainer.appendChild(postElement);
  });
});
