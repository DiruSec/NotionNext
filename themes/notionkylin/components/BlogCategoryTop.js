import { useGlobal } from '@/lib/global'

export const BlogCategoryTop = props => {
  const { tag, category } = props
  const { locale } = useGlobal()
  if (tag || category) {
    return (<div className="article-header article-meta archive-header bg-sky-50 pb-4 -mx-48 pl-48">
    <h1 className="article-title">
      {category
        ? `${locale.COMMON.CATEGORY}: ${category}`
        : tag
        ? `${locale.COMMON.TAGS}: ${tag}`
        : locale.NAV.ARCHIVE}
    </h1>
  </div>)
  } else {
    return <></>
  }
}
