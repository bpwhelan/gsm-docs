import React, {type ReactNode, useEffect, useState} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type {Props} from '@theme/DocRoot/Layout';

import styles from './styles.module.css';

function setPageChromeAttribute(name: 'navbar' | 'sidebar' | 'footer', hidden: boolean) {
  document.documentElement.dataset[name] = hidden ? 'false' : 'true';
}

function hasFalseDataAttributeQueryParam(search: string, key: string) {
  const value = new URLSearchParams(search).get(key);
  return value === 'false';
}

export default function DocRootLayout({children}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const location = useLocation();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const hideNavbar = hasFalseDataAttributeQueryParam(
    location.search,
    'docusaurus-data-navbar',
  );
  const hideSidebar = hasFalseDataAttributeQueryParam(
    location.search,
    'docusaurus-data-sidebar',
  );
  const hideFooter = hasFalseDataAttributeQueryParam(
    location.search,
    'docusaurus-data-footer',
  );

  useEffect(() => {
    setPageChromeAttribute('navbar', hideNavbar);
    setPageChromeAttribute('sidebar', hideSidebar);
    setPageChromeAttribute('footer', hideFooter);

    return () => {
      setPageChromeAttribute('navbar', false);
      setPageChromeAttribute('sidebar', false);
      setPageChromeAttribute('footer', false);
    };
  }, [hideFooter, hideNavbar, hideSidebar]);

  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docRoot}>
        {sidebar && !hideSidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer || hideSidebar}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
