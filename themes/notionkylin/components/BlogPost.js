import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    (
      <article className="article">
        <Link key={post.id} href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}>
        <div className="article-meta">
          <span className="article-date">
              <time dateTime={post?.publishDate} itemProp="datePublished">{formatDateFmt(post?.publishDate, 'yyyy-MM-dd hh:mm')}</time>
          </span>
          <div className="article-header">
              <h1 className="article-title" itemProp="name">
                  {post?.title}
              </h1>
          </div>
        </div>
        </Link>
        <div className="article-content">
          <p>
          {post.summary}
          </p>
          <Link className="article-more-link" href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}>Read More »</Link>
        </div>

      </article>
    )
  )
}

export default BlogPost
