const app = Vue.createApp({
  data : () => ({
    comments: [
      { id: 1, comment: 'Bu bir test comment..',   like: 0, dislike: 0},
      { id: 2, comment: 'Bu bir test comment 2..', like: 0, dislike: 0},
      { id: 3, comment: 'Bu bir test comment 3..', like: 0, dislike: 0},
      { id: 4, comment: 'Bu bir test comment 4..', like: 0, dislike: 0},
      { id: 5, comment: 'Bu bir test comment 5..', like: 0, dislike: 0},
      { id: 6, comment: 'Bu bir test comment 6..', like: 0, dislike: 0},
      { id: 7, comment: 'Bu bir test comment 7..', like: 0, dislike: 0},
      { id: 8, comment: 'Bu bir test comment 8..', like: 0, dislike: 0},
      { id: 9, comment: 'Bu bir test comment 9..', like: 0, dislike: 0},
      { id: 10, comment: 'Bu bir test comment 10..', like: 0, dislike: 0},
    ]
  })
});

app.mount("#app");
