import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { SvgIcon } from './SvgIcon'
import { MenuItemDrop } from './MenuItemDrop'
import Collapse from '@/components/Collapse'
import { MenuItemCollapse } from './MenuItemCollapse'
import LazyImage from '@/components/LazyImage'
import RandomPostButton from './RandomPostButton'
import SearchButton from './SearchButton'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'

const Nav = props => {
  const { navBarTitle, fullWidth, siteInfo } = props
  const URL_PREFIX = siteConfig('SUB_PATH') || '/'
  return <>
  <nav className="sidebar">
    <div className="wrapper">
        <div className="z-10">
        <div className="profile">
            <Link className="profile-image" href={URL_PREFIX}>
                <div className="profile-image-container"></div>
            </Link>
            <Link className="profile-image" href={URL_PREFIX}>
              <span className="profile-title">{navBarTitle || siteConfig('TITLE')}</span>
            </Link>
        </div>
        <NavItems {...props} />
        <NavThirdBar {...props} />
        </div>
        <LazyImage id='header-cover' src={siteInfo?.pageCover}
                className={`absolute object-cover object-left h-full  ${siteConfig('NOTIONKYLIN_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`} />
    </div>
  </nav>
  </>
}


const NavItems = props => {
  const { customMenu } = props
  const URL_PREFIX = siteConfig('SUB_PATH') || '/'
  const router = useRouter()

  const { locale } = useGlobal()
  let links = [
    // { id: 2, name: locale.NAV.HOME, to: URL_PREFIX, show: siteConfig('ENABLE_RSS') && siteConfig('NOBELIUM_MENU_HOME', null, CONFIG) },
    // { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: siteConfig('NOBELIUM_MENU_SEARCH', null, CONFIG) },
    { icon: 'fas fa-tag', name: locale.NAV.ARCHIVE, to: URL_PREFIX + 'archive', show: siteConfig('NOBELIUM_MENU_TAG', null, CONFIG) },
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: URL_PREFIX + 'archive', show: siteConfig('NOBELIUM_MENU_ARCHIVE', null, CONFIG) },
    { icon: 'fas fa-about', name: locale.NAV.ABOUT, to: URL_PREFIX + 'category', show: siteConfig('NOBELIUM_MENU_ABOUT', null, CONFIG) },
    // { icon: 'fas fa-external-link', name: locale.COMMON.TAGS, to: URL_PREFIX + 'tag', show: siteConfig('NOBELIUM_MENU_TAG', null, CONFIG) }
  ]
  // if (customNav) {
  //   links = links.concat(customNav)
  // }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu.filter(menu => menu.name !== 'MoreLink')
  }

  if (!links || links.length === 0) {
    return null
  }
  
  return <>
    <ul className="navbar">
    {links?.map((link, index) => (
        <li key={index} className="nav-warpper">
              <Link  className="navbar-link" target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'} href={{ pathname: link?.to, query: router.query.s ? { s: router.query.s } : {} }}>
              {/* <a key={index} href={link.to} target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'}> */}
                <i className={link?.icon}></i>
                <span>{link?.name}</span>
              {/* </a> */}
              </Link>
        </li>
        ))}
    </ul>
  </>
}

const NavThirdBar = props => {
  const { customMenu } = props
  const { locale } = useGlobal()
  const URL_PREFIX = siteConfig('SUB_PATH') || '/'
  const router = useRouter()

  const moreLinkMenu = customMenu?.find(menu => menu.name === 'MoreLink')
  let thirdLinks = moreLinkMenu ? moreLinkMenu?.subMenus : []

  return <>
        <ul className="thirdbar">
            <li>
                { thirdLinks?.map((link, index) => (
                  <Link key={index}  className="third-icon" target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'} href={{ pathname: link?.to, query: router.query.s ? { s: router.query.s } : {} }}>
                    <i className={link?.icon}></i>
                  </Link>
                  // <a key={index}  href={link?.to} target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'} className="third-icon"><i className={link?.icon}></i></a>
                  // <a className="third-icon" href="https://www.google.com/webhp#newwindow=1&q=site:https://dirusec.com/blog"><i className="fa fa-search"></i></a>
                ))}
            </li>
        </ul>
  </>
}

export default Nav
