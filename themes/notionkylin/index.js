import CONFIG from './config'
import { createContext, useEffect, useState, useContext, useRef } from 'react'
import SideNav from './components/SideNav'
import { TopBar } from './components/TopBar'  
import { Footer } from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import Live2D from '@/components/Live2D'
import { useGlobal } from '@/lib/global'
import Announcement from './components/Announcement'
import { BlogCategoryTop } from './components/BlogCategoryTop'
import { BlogListPage } from './components/BlogListPage'
import { BlogListScroll } from './components/BlogListScroll'
import { deepClone, isBrowser } from '@/lib/utils'
import SearchNavBar from './components/SearchNavBar'
import BlogArchiveItem from './components/BlogArchiveItem'
import { BlogListTags } from './components/BlogListTags'
import { ArticleLock } from './components/ArticleLock'
import NotionPage from '@/components/NotionPage'
// import ArticleDetail from './components/ArticleDetail'
import { ArticleInfo } from './components/ArticleInfo'
import Comment from '@/components/Comment'
import { ArticleFooter } from './components/ArticleFooter'
// import ShareBar from '@/components/ShareBar'
import Link from 'next/link'
import BlogListBar from './components/BlogListBar'
import { Transition } from '@headlessui/react'
import { Style, SidebarStyle, HeaderbarStyle } from './style'
import replaceSearchResult from '@/components/Mark'
import CommonHead from '@/components/CommonHead'
import AlgoliaSearchModal from '@/components/AlgoliaSearchModal'
import { siteConfig } from '@/lib/config'
import 'disqusjs/react/styles/disqusjs.css';
import { DisqusJS } from 'disqusjs/react/es2015';

// 主题全局状态
const ThemeGlobalNotionkylin = createContext()
export const useNobeliumGlobal = () => useContext(ThemeGlobalNotionkylin)

/**
 * 基础布局 采用左右两侧布局，移动端使用顶部导航栏

 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, post, topSlot, meta } = props

  const fullWidth = post?.fullWidth ?? false
  const { onLoading } = useGlobal()
  const searchModal = useRef(null)

  return (
        <ThemeGlobalNotionkylin.Provider value={{ searchModal }}>
            <div id='theme-notionkylin' className=''>
                {/* SEO相关 */}
                <CommonHead meta={meta} />
                {/* SEO相关 */}
                <Style />
                <SidebarStyle />
                <HeaderbarStyle />

                {/* 侧边导航栏 */}
                <TopBar {...props} />
                <SideNav {...props} />
                {/* <Nav {...props} /> */}

                {/* 主区 */}
                {/* <main id='out-wrapper' className={`relative m-auto flex-grow w-full transition-all ${!fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'}`}> */}
                <main id='out-wrapper' className="wrap">

                    <Transition
                        show={!onLoading}
                        appear={true}
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 translate-y-16"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-16"
                        unmount={false}
                    >
                        {/* 顶部插槽 */}
                        {topSlot}
                        {children}
                    </Transition>

                </main>

                {/* 页脚 */}
                <Footer {...props} />

                {/* 右下悬浮 */}
                <div className='fixed right-4 bottom-4'>
                    <JumpToTopButton />
                </div>

                {/* 左下悬浮 */}
                <div className="bottom-4 -left-14 fixed justify-end z-40">
                    <Live2D />
                </div>

                {/* 搜索框 */}
                <AlgoliaSearchModal cRef={searchModal} {...props}/>

            </div>
        </ThemeGlobalNotionkylin.Provider>
  )
}

/**
 * 首页
 * 首页是个博客列表，加上顶部嵌入一个公告
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  return (
        <LayoutPostList {...props} topSlot={<Announcement {...props} />} />
  )
}

/**
 * 博客列表
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  const { posts, topSlot } = props

  // 在列表中进行实时过滤
  const [filterKey, setFilterKey] = useState('')
  let filteredBlogPosts = []
  if (filterKey && posts) {
    filteredBlogPosts = posts.filter(post => {
      const tagContent = post?.tags ? post?.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(filterKey.toLowerCase())
    })
  } else {
    filteredBlogPosts = deepClone(posts)
  }

  return (
        <LayoutBase {...props} topSlot={<BlogCategoryTop {...props} />}>
            {topSlot}
            {siteConfig('POST_LIST_STYLE') === 'page' ? <BlogListPage {...props} posts={filteredBlogPosts} /> : <BlogListScroll {...props} posts={filteredBlogPosts} />}
        </LayoutBase>
  )
}

/**
 * 搜索
 * 页面是博客列表，上方嵌入一个搜索引导条
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  const { keyword, posts } = props
  useEffect(() => {
    if (isBrowser) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-red-500 border-b border-dashed'
        }
      })
    }
  }, [])

  // 在列表中进行实时过滤
  const [filterKey, setFilterKey] = useState('')
  let filteredBlogPosts = []
  if (filterKey && posts) {
    filteredBlogPosts = posts.filter(post => {
      const tagContent = post?.tags ? post?.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(filterKey.toLowerCase())
    })
  } else {
    filteredBlogPosts = deepClone(posts)
  }

  return <LayoutBase {...props} topSlot={<BlogListBar {...props} setFilterKey={setFilterKey} />}>
    <SearchNavBar {...props} />
    {siteConfig('POST_LIST_STYLE') === 'page' ? <BlogListPage {...props} posts={filteredBlogPosts} /> : <BlogListScroll {...props} posts={filteredBlogPosts} />}
  </LayoutBase>
}

/**
 * 归档
 * @param {*} props
 * @returns
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
        <LayoutBase {...props}>
            <BlogListTags {...props} />
        </LayoutBase>
  )
  return (
        <LayoutBase {...props}>
            <div className="mb-10 pb-20 md:py-12 p-3  min-h-screen w-full">
                {Object.keys(archivePosts).map(archiveTitle => <BlogArchiveItem key={archiveTitle} archiveTitle={archiveTitle} archivePosts={archivePosts} />)}
            </div>
        </LayoutBase>
  )
}

/**
 * 文章详情
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword, meta } = props

  return (
        <LayoutBase {...props}>

            {lock && <ArticleLock validPassword={validPassword} />}

            {!lock && <div id="article-wrapper" className="px-2">
                <>
                <article id={post?.slug} className={`article ${meta?.type ? 'article-type-'+meta?.type.toLowerCase() : ''}`}  itemScope itemProp="blogPost">
                    <ArticleInfo post={post} />
                    <NotionPage post={post} />
                    {/* <ShareBar post={post} /> */}
                    { post?.type === 'Post' && (
                    <ArticleFooter {...props} />)}
                    <DisqusJS
                      shortname={siteConfig('COMMENT_DISQUS_SHORTNAME')}
                      siteName={siteConfig('COMMENT_DISQUS_SITENAME')}
                      identifier={post?.slug}
                      url=""
                      api={siteConfig('COMMENT_DISQUS_API')}
                      apikey={siteConfig('COMMENT_DISQUS_APIKEY')}
                      admin={siteConfig('COMMENT_DISQUS_ADMIN')}
                      adminLabel={siteConfig('COMMENT_DISQUS_ADMINLABEL')}
                    />
                    {/* <Comment frontMatter={post} /> */}
                </article>
                </>
            </div>}

        </LayoutBase>
  )
}

/**
 * 404 页面
 * @param {*} props
 * @returns
 */
const Layout404 = (props) => {
  return <LayoutBase {...props}>
        404 Not found.
    </LayoutBase>
}

/**
 * 文章分类列表
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = (props) => {
  const { categoryOptions } = props
  const { locale } = useGlobal()

  return (
        <LayoutBase {...props}>
            <div className="article-header article-meta archive-header">
              <h1 className="article-title">
                {locale.COMMON.CATEGORY}
              </h1>
            </div>
            <div id='category-list' className='duration-200 py-4 flex flex-wrap'>
                {categoryOptions?.map(category => {
                  return (
                        <Link
                            key={category.name}
                            href={`${siteConfig('SUB_PATH') || ''}/category/${category.name}`}
                            style={{borderWidth: '1px'}}
                            className={`cursor-pointer inline-block rounded border-sky-300 hover:border-sky-400 bg-white hover:text-sky-400 duration-200 text-base h-10 leading-10 mr-4 mb-4 px-2 whitespace-nowrap dark:hover:text-white text-sky-300 dark:border-gray-400 dark:bg-gray-800`}
                            passHref>
                            <div
                                className='font-light dark:text-gray-400'>
                                {category.name}({category.count})
                            </div>
                        </Link>
                  )
                })}
            </div>
        </LayoutBase>
  )
}

/**
 * 文章标签列表
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = (props) => {
  const { tagOptions } = props
  const { locale } = useGlobal()

  return (
        <LayoutBase {...props}>
                <div className="article-header article-meta archive-header">
                  <h1 className="article-title">
                    {locale.COMMON.TAGS}
                  </h1>
                </div>
                <div id='tags-list' className='duration-200 flex flex-wrap -ml-2'>
                    {tagOptions.map(tag => {
                      return (
                            <div key={tag.name} className='p-2'>
                                <Link key={tag} href={`${siteConfig('SUB_PATH') || ''}/tag/${encodeURIComponent(tag.name)}`} passHref
                                    className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 text-base h-10 leading-10 m-0 p-0 px-4 whitespace-nowrap dark:hover:text-white text-sky-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-gray-800`}>
                                    <div className='font-light dark:text-gray-400'>{tag.name + (tag.count ? ` (${tag.count})` : '')} </div>
                                </Link>
                            </div>
                      )
                    })}
                </div>
        </LayoutBase>
  )
}

export {
  CONFIG as THEME_CONFIG,
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug,
  Layout404,
  LayoutPostList,
  LayoutCategoryIndex,
  LayoutTagIndex
}
