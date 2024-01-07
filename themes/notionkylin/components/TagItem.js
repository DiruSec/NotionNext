import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const TagItem = ({ tag }) => (
  (<Link href={`${siteConfig('SUB_PATH') || ''}/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600">
      {tag}
    </p>
  </Link>)
)

export default TagItem
