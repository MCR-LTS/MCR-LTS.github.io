var posts=["2024/10/27/hello-world/","2024/12/23/mimi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };