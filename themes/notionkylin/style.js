/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

    /* body {
      background: #ccc;
    } */
    
    // 底色
    .dark body{
        background-color: black;
    }

    article{
    padding: 30px 0;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #fff;
  }
  
.article-date{
    color: #555;
    float: right;
    font-size: .9em;
    line-height: 2;
    position: relative;
    text-align: right;
    width: auto
}
  
.article-title{
    margin: 0;
    display: block;
    color: #333 ;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 300;
    transition: color .3s ease;
    word-wrap: break-word;
}
  
  .article-title:hover{
    color: #6599ed;
  }
  
  .article-content{
    line-height: 1.5;
    position: relative;
  }

  .article-meta{
    margin-bottom: .5rem;
  }

  .article-info{
    font-size: .9rem;
  }

  .article-footer p{
    margin: 1rem 0;
  }

  .article-footer{
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #fff;
  }

  .nextpost{
    display: block;
    float: right
  }

  .prevpost{
    display: block;
    float: left
  }

  .clear{
    clear: both;
  }

  .relative-post{
    line-height: 2;
    border-top: 1px solid #fff;
    border-bottom: 1px #dddddd solid;
    padding: .7rem 0;
    margin-bottom: .5rem;
  }

  #toc {
    float: right;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    margin: 0 0 15px 20px;
    max-width: 260px;
    min-width: 120px;
    padding: 6px;
    background-color: #fff;
  }
  
  #toc p {
    margin: 1px;
  }
  
  #toc ul {
    margin: 0 .5em 0 1.5em;
  }
  
  #toc strong {
    border-bottom: 1px solid #e2e2e2;
    display: block;
  }
  
  a.anchor {
    display: block;
    position: relative;
    visibility: hidden;
  }
  
  article img {
    height: auto;
    max-width: 910px;
  }
  
  article {
    border-top: 1px solid #fff;
    position: relative;
    word-wrap: break-word;
  }
  
  article .meta .date,
  article .meta .comment,
  article .meta .tags {
    position: relative
  }
  
  article button,
  article input.runcode {
    -webkit-appearance: button;
    background: #12b0e6;
    border: none;
    box-shadow: inset 0 -5px 20px rgba(0, 0, 0, .1);
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    margin-top: 10px;
    padding: 0.625em .5em
  }
  
  article strong {
    font-weight: 700
  }
  
  article em {
    font-style: italic
  }
  
  article blockquote {
    background-color: #f8f8f8;
    border-left: 5px solid #2479CC;
    margin-top: 10px;
    margin-left: 0;
    padding: 15px 20px
  }
  
  article code {
    background-color: #f2f2f2;
    border-radius: 5px;
    font-family: "Consolas", "Courier New", Courier, mono, serif;
    font-size: 80%;
    margin: 0 2px;
    padding: 4px 5px;
    vertical-align: middle
  }
  
  article pre {
    color: #5d6a6a;
    font-family: "Consolas", "Liberation Mono", Courier, monospace;
    font-size: 14px;
    line-height: 1.6;
    overflow: hidden;
    padding: 0.6em;
    position: relative;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word
  }
  
  article img {
    border: 1px solid #ccc;
    display: block;
    margin: 10px 0 5px;
    max-width: 100%;
    padding: 0
  }
  
  article table {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0
  }
  
  article blockquote p {
    margin-bottom: 0
  }
  
  article pre code {
    background-color: transparent;
    border-radius: 0 0 0 0;
    border: 0;
    display: block;
    font-size: 100%;
    margin: 0;
    padding: 0;
    position: relative
  }
  
  article table th,
  article table td {
    border: 0
  }
  
  article table th {
    border-bottom: 2px solid #848484;
    padding: 6px 20px;
    text-align: left
  }
  
  article table td {
    border-bottom: 1px solid #d0d0d0;
    padding: 6px 20px
  }
  
  article .expire-tips {
    background-color: #ffffc0;
    border: 1px solid #e2e2e2;
    border-left: 5px solid #fff000;
    color: #333;
    font-size: 15px;
    padding: 5px 10px
  }
  
  article .aliyun-tips {
    background-color: #f0f8f4;
    border: 1px solid #e2e2e2;
    border-left: 5px solid #7cc4a0;
    font-size: 15px;
    padding: 5px 10px
  }
  
  article .post-info {
    font-size: 14px
  }
  
  article .article-content {
    font-size: 16px;
    line-height: 1.8;
    word-wrap: break-word;
    border-top: 1px solid #fff;
  }
  
  article .article-content p,
  article .article-content blockquote,
  article .article-content ul,
  article .article-content ol,
  article .article-content dl,
  article .article-content table,
  article .article-content iframe,
  article .article-content h1,
  article .article-content h2,
  article .article-content h3,
  article .article-content h4,
  article .article-content h5,
  article .article-content h6,
  article .article-content p,
  article .article-content pre {
    margin-top: 15px
  }
  
  article pre b.name {
    color: #eee;
    font-size: 60px;
    line-height: 1;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 10px
  }
  
  article .article-content .date {
    color: #999;
    font-size: 14px;
    font-style: italic
  }
  
  article input.runcode:hover,
  article input.runcode:focus,
  article input.runcode:active {
    background: #f6ad08
  }
  
  article .article-content ul ul,
  article .article-content ul ol,
  article .article-content ul dl,
  article .article-content ol ul,
  article .article-content ol ol,
  article .article-content ol dl,
  article .article-content dl ul,
  article .article-content dl ol,
  article .article-content dl dl,
  article .article-content blockquote > p:first-of-type {
    margin-top: 0
  }
  
  article .article-content ul,
  article .article-content ol,
  article .article-content dl {
    margin-left: 25px
  }
  
  article.tags section a {
    border: 1px solid rgba(36, 121, 204, .8);
    border-radius: 4px;
    color: rgba(36, 121, 204, .8);
    display: inline-block;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    margin: 0 15px 10px 0;
    padding: 0 15px;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.4, .01, .165, .99), border .2s cubic-bezier(.4, .01, .165, .99);
    transition: color .2s cubic-bezier(.4, .01, .165, .99), border .2s cubic-bezier(.4, .01, .165, .99)
  }
  
  article.tags section a:hover {
    border-color: #2479CC;
    color: #2479CC
  }
  
  .post-info{
    font-size: 12px;
    border-top: 1px solid #fff;
    border-bottom: 1px #dddddd solid;
    margin-bottom: .5rem;
    padding-bottom: .5rem;
  }
  
  .info-tags{
    border: 1px #eee solid;
    border-radius: 5px;
    display: inline-block;
    background: #eee;
    margin-right: .5rem;
    padding: .3rem .5rem;
  }
  
  .info-tags .material-icons{
    font-size: 14px;
    position: relative;
    top: 2px;
  }
  
  
  .cate-tag-splitter{
    position: relative;
    bottom: -.25rem;
    display: inline-block;
    border-color: #333333;
    border-style: solid;
    border-width: 0 1px 0 0 ;
    height: 1rem;
    margin: 0 1rem 0 .5rem;
  }
  
  .btn{
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    display: inline-block;
    padding: 3px 6px;
    border-radius: 5px;
    margin-bottom: 0;
    color: #333;
    font-weight: 100;
    font-size: 14px;
    margin-right: .5rem;
    transition: background .2s ease;
  }
  
  .category{
    border: 1px limegreen solid;
    background: #FFF;
  }
  
  .tag{
    border: 1px #4B91D5 solid;
    margin-right: .5rem;
    background: #FFF;
    color: #4B91D5;
  }
  
  .tag:hover{
    color: #216EBA;
  }

  .archive-header{
    padding-top: 30px;
}

.archive-content{
    margin: 2rem 0 0 0;
    padding-bottom: 1rem;
    border-bottom: 1px #dddddd solid;
  }
.archive-content ul, .archive-content ol{
    list-style: disc;
    margin: 1rem 0 1rem 25px;
}

.archive-title-date{
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
}
  .archive-article{
    position: relative;
    /*left: 2rem;*/
    line-height: 1.5;
  }
  .archive-link{
    font-size: 1.1rem
  }
  .archive-date{
    margin-left: .5rem;
    font-size: .8rem;
    font-style: italic;
  }
  .article-content h1 {
  font-size: 2em;
}
.article-content h2 {
  font-size: 1.5em;
}
.article-content h3 {
  font-size: 1.3em;
}
.article-content h4 {
  font-size: 1.2em;
}
.article-content h5 {
  font-size: 1em;
}
.article-content h6 {
  font-size: 1em;
  color: #999;
}
.article-content hr {
  border: 1px dashed #ddd;
}
.article-content strong {
  font-weight: bold;
}
.article-content em,
.article-content cite {
  font-style: italic;
}
.article-content sup,
.article-content sub {
  font-size: 0.75em;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.article-content sup {
  top: -0.5em;
}
.article-content sub {
  bottom: -0.2em;
}
.article-content small {
  font-size: 0.85em;
}
.article-content acronym,
.article-content abbr {
  border-bottom: 1px dotted;
}
.article-content ul,
.article-content ol,
.article-content dl {
  margin: 0 20px;
  line-height: 1.6em;
}
.article-content ul ul,
.article-content ol ul,
.article-content ul ol,
.article-content ol ol {
  margin-top: 0;
  margin-bottom: 0;
}
.article-content ul {
  list-style: disc;
}
.article-content ol {
  list-style: decimal;
}
.article-content dt {
  font-weight: bold;
}
.article-content blockquote p {
  margin: 0;
}
.article-content p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

  .article-footer code {
    border-radius: 5px;
    font-family: "Consolas", "Courier New", Courier, mono, serif;
    font-size: 80%;
    margin: 0 2px;
    padding: 4px 5px;
    vertical-align: middle
  }
  .article-footer code.code-category {
    background-color: #f2f2f2;
  }
  `}</style>
}

const SidebarStyle = () => {
  return <style jsx global>{`
  body{
  transition: transform .2s cubic-bezier(.4,.01,.165,.99);
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

a, a:hover {
  color: #2479CC;
  text-decoration: none
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

ul, ol {
  padding: 0
}

h1,h2,h3,h4,h5,h6{
  font-weight: 400;
  margin: 0;
  padding: 0;
}


.wrap{
  background-color: #ffffff;
  max-width: 1390px;
  padding: 0 40px 0 290px;
  box-sizing: border-box;
  transition: opacity .5s ease;
  opacity: 1;
}

.side{
  position: fixed;
  transform: translate3D(249px,0,0);
}
  
.sidebar{
  background-color: #202020;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  width: 250px;
  z-index: 2;
  box-shadow: 0 0 5px #333333;
}


/* Responive Area */
@media screen and (max-width: 1024px) and (min-width: 769px) {
    .sidebar {
      width: 75px;
    }
  
    .wrap{
      padding-left: 115px;
    }
  }
  
  @media screen and (max-width: 769px){
    .sidebar {
      left: -250px;
    }
  
    .wrap{
      min-height: 100%;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
  }

  .wrapper{
    height: 100%;
    
  }

  .wrapper img {
    transition: object-position 2s ease-in-out;
  }
  .wrapper:hover img{
      object-position: right;
  }
.profile{
    padding-top: 40px;
    padding-bottom: 10px;
}
.profile-image{
    display: block;
    margin: 0 auto;
}
.profile-image-container{
    background-image: url(images/wow.png);
    display: block;
    margin: 0 auto;
    border-radius: 70px;
    height: 140px;
    width: 140px;
    overflow: hidden;
}
.profile-title{
    display: block;
    font-size: 18px;
    padding: 10px 0;
    text-align: center;
    color: #FFF;
}
.nav-warpper:hover {
  background: #33333388;
  border-radius: 0.96rem;
}
.navbar-link ul, .navbar-link li{
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
}
.navbar-link li{
    display: block;
    font-size: 16px;
    height: 45px;
    width: 100%;
    line-height: 45px;
}
.navbar{
    margin-bottom: 20px;
}
.navbar-link, .wrapper i, .wrapper span{
    color: #fff;
    line-height: 45px;
}
.navbar-link{
    display: flex;
    padding-left: 25px;
    text-decoration: none;
    box-sizing: border-box;
    line-height: 45px;
}
.navbar-link i{
    font-size: 20px;
    margin-right: 20px;
    width: 25px;
}
.navbar-link span{
    position: relative;
    font-size: 16px;
    display: inline-block;
}

.thirdbar{
    padding-left: 25px;
}

.third-icon{
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
    .profile-image-container{
        width: 25px;
        height: 25px;
    }

    .profile-title{
        display: none;
    }

    .wrapper span{
        display: none;
    }

    #sidebar-mask{
        display: block;
    }
}
  
  `}</style>
}

const HeaderbarStyle = () => {
  return <style jsx global>{`
  #header{
    display: none;
    box-shadow: 0 0 5px #333;
    height: 50px;
    left: 0;
    line-height: 50px;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10
  }
  #header header {
    position: relative;
    background-color: #202020;
    background-size: cover;
    background-position: center;
  }
  
  .expand-btn{
    position: absolute;
    width: 50px;
    height: 50px;
  }
  
  .expand-btn span{
    position: absolute;
    top:5px;
    left: 5px;
    font-size: 40px;
    color: #FFF;
    display: block;
  }
  #sidebar-mask{
    display: none;
    height: 100vh;
    width: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  
  header h1{
    font-size: 16px;
    text-align: center;
  }
  
  header a{
    color: #FFF;
    /* font-family: FontAwesome; */
    padding-left: .7rem;
  }
  
  @media screen and (max-width: 769px){
    #header{
      display: block;
    }
  
  }
  `}</style>
}
export { Style, SidebarStyle, HeaderbarStyle }
