
import Image from 'next/image'
import TagItem from './TagItem'
import NotionIcon from '@/components/NotionIcon'
import md5 from 'js-md5'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/formatDate'

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(siteConfig('CONTACT_EMAIL', '#'))

  return (
    <div className="article-meta">
        { post?.type === 'Post' && (<span className="article-date">
            <time dateTime={post?.publishDate} itemProp="datePublished">{formatDateFmt(post?.publishDate, 'yyyy-MM-dd hh:mm')}</time>
        </span>)}
        <div className="article-header">
            <h1 className="article-title" itemProp="name">
                {post?.title}
            </h1>
        </div>
    </div>
)
}
