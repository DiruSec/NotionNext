import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/formatDate'
import Link from 'next/link'

/**
 * 加密文章校验组件
 * @param {password, validPassword} props
 * @param password 正确的密码
 * @param validPassword(bool) 回调函数，校验正确回调入参为true
 * @returns
 */
export const ArticleFooter = props => {
  const diff = (a, b) => a > b ? a - b : b - a;
  const { post, next, prev } = props
  const router = useRouter()
  const { locale } = useGlobal()
  const tagColor = post?.tagItems ? post?.tagItems.reduce((acc, curr) => ({...acc, [curr.name]: curr.color}), {}) : {}
  const showNext = !!next?.id && next?.publishDate <= post?.publishDate
  const showPrev = !!prev?.id && prev?.publishDate >= post?.publishDate
  // TODO: Migrate to ENV config
  const isEdited = diff(new Date(post?.lastEditedDate), post?.publishDate) >= 1000 * 3600 * 12
  const articlePrefix = `${siteConfig('SUB_PATH') || '/'}`

  return (<>
    <div className="article-footer">
        <p> -- <acronym title="End of File">EOF</acronym> -- </p>
        <div className="article-info">
        <p> 由 {siteConfig('AUTHOR')} 发表于 
        <i>
          <time dateTime={post?.publishDate} itemProp="datePublished">{formatDateFmt(post?.publishDate, 'yyyy-MM-dd hh:mm')}</time>
        </i>
        {isEdited && (<>
            ，最后编辑于<i>
              <time itemProp="lastEditedDay">{formatDateFmt(new Date(post?.lastEditedDate), 'yyyy-MM-dd hh:mm')}</time>
            </i>
        </>)}
        {post?.category && (
            <>
            ，添加在分类「
              <Link href={`${siteConfig('SUB_PATH') || ''}/category/${encodeURIComponent(post?.category)}`} ><code className='code-category'>{post?.category}</code></Link>
            」下
            </>
        )}
        {post?.tags && (<>
            ，并被添加「
                {post?.tags.map(tag => (
                  <Link key={tag} href={`${siteConfig('SUB_PATH') || ''}/tag/${encodeURIComponent(tag)}`} ><code className={`${tagColor[tag] && `notion-${tagColor[tag]}_background`}`}>{tag}</code></Link>
                ))}
            」标签
        </>)}
        。
        </p>
      </div>
    </div>
    <nav className="relative-post">
        <Link className={`prevpost ${showPrev ? '  ' : ' invisible block pointer-events-none '}`} 
        href={{ pathname: `${articlePrefix}${prev?.slug}`, query: router.query.s ? { s: router.query.s } : {} }}>
            &laquo; {prev?.title}</Link>
        <Link className={`nextpost ${showNext ? '  ' : 'invisible pointer-events-none '}`}
        href={{ pathname: `${articlePrefix}${next?.slug}`, query: router.query.s ? { s: router.query.s } : {} }}>
            {next?.title} &raquo;</Link>
        <div className="clear"></div>
    </nav>
    </>
  )

  return <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
  <a>
    <button
      onClick={() => router.push('/')}
      className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
    >
      ← {locale.POST.BACK}
    </button>
  </a>
  <a>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
    >
      ↑ {locale.POST.TOP}
    </button>
  </a>
</div>
}
