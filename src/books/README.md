---
article: false
title: 书单
icon: read
breadcrumb: false
comment: false
contributors: false
editLink: false
lastUpdated: false
pageInfo: false
sidebar: false
---

<style>
  /* 书名居中，封面并排 */
  div.books {
    text-align: center;
    padding: 20px 0px 0px 0px;
    display: inline-block;
  }
  /* 限制封面尺寸 */
  div.book {
    vertical-align: top;
    margin: 0px 5px 0px 5px;
    display: inline-block;
  }
  /* 设置 book 中的 img 样式 */
  div.book img {
    border: 1px solid black;
    width: 135px;
    height: 189px;
  }
  /* 设置书名样式 */
  div.name {
    width: 137px; /* 1 + 135 + 1 */
    height: 42px;
  }
</style>

<!-- markdownlint-disable -->

<div class="books">
  <div class="book" v-for="book in books">
    <a :href="'/books/' + book.year + '#' + book.name">
      <img :src="'/books/' + book.year + '/' + book.name + '.jpg'" title="跳转到读书感悟">
    </a>
    <a target="_blank" :href="book.url" title="跳转到豆瓣读书">
      <div class="name"><b>{{ book.name }}</b></div>
    </a>
  </div>
</div>

<script>
  function sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }

  export default {
    data() {
      return {
        books: '',
        count: 0
      };
    },
    mounted: function() {
      /* 调大整个页面的宽度 */
      document.documentElement.style.setProperty('--content-width', '1480px');
      /* 隐藏默认 title */
      document.getElementsByClassName('page-title')[0].style.display = 'none';
      /* page 页面居中不受 sidebar 影响 */
      document.getElementsByClassName('page')[0].style.padding = '60px 0px 32px 0px';

      fetch('/books/books.json')
      .then(response => response.json())
      .then(data => {
        this.books = data;
        this.count = data.length;
        this.books.sort(sort).forEach(function(book) {
          book.year = book.date.substring(0, 4);
        });
      });
    },
    unmounted: function() {
      document.documentElement.style.setProperty('--content-width', '740px');
    },
  }
</script>

<!-- markdownlint-restore -->
