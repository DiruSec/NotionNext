
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogPost from './BlogPost'

export const BlogListTags = props => {
  const { page = 1, posts, postCount, category, tag, archivePosts } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const totalPage = Math.ceil(postCount / parseInt(siteConfig('POSTS_PER_PAGE')))
  const currentPage = +page

  const showPrev = currentPage > 1
  const showNext = currentPage < totalPage && posts?.length > 0
  const pagePrefix = router.asPath.split('?')[0].replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '')

  return (
    <div>
      {currentPage === 3 ? (
        <div>
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <div className="article-header article-meta archive-header bg-slate-100">
            <h1 className="article-title">
              {category
                ? `${locale.COMMON.CATEGORY}: ${category}`
                : tag
                ? `${locale.COMMON.TAGS}: ${tag}`
                : locale.NAV.ARCHIVE}
            </h1>
          </div>
          <div className="archive-content">
            {Object.keys(archivePosts).map((archiveTitle, i) => {
              return (
                <div key={archiveTitle}>
                  {(
                    <h3 className="archive-title-date">
                      {/* <Link legacyBehavior href={`/${archiveTitle}`}> */}
                        {archiveTitle} ({archivePosts[archiveTitle].length})
                      {/* </Link> */}
                    </h3>
                  )}
                  <div className="archives">
                  <ul className="archive-list">
                    {archivePosts[archiveTitle].map(post => (
                      <li key={post?.id} className="archive-article">
                      <Link legacyBehavior href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}>
                        <a className="archive-link">{post.title}</a>
                      </Link>
                      <span className="archive-date">
                        {post.date?.start_date}
                      </span>
                    </li>
                    ))}
                  </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
