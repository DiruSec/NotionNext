import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import CONFIG from '../config'

export const TopBar = (props) => {
  const { navBarTitle, siteInfo } = props
  const { locale } = useGlobal()
  const URL_PREFIX = siteConfig('SUB_PATH') || '/'

  const expandSide = function(){
    let $body = document.querySelector('body');
    let $sidebar_mask = document.querySelector('#sidebar-mask');
    if ($body.className === 'side'){
      $body.className = '';
      $sidebar_mask.style.display = 'none';
    } else{
      $body.className = 'side';
      $sidebar_mask.style.display = 'block';
    }
  }

  return (
  <div id="header">
    <header style={{backgroundImage: `url(${siteInfo?.pageCover})`}}>
      <a onClick={expandSide} className="expand-btn z-10"><i className="fa fa-lg fa-bars"></i></a>
      <h1 className="z-10">
          <Link className="z-10" href={URL_PREFIX}>
            {navBarTitle || siteConfig('TITLE')}
          </Link>
      </h1>
      {/* <LazyImage id='header-cover' src={siteInfo?.pageCover}
                className={`absolute object-cover z-0 top-0 left-0 object-left h-full w-full  ${siteConfig('NOTIONKYLIN_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`} /> */}
    </header>
    <div onClick={expandSide} id="sidebar-mask"></div>
  </div>
  )
}