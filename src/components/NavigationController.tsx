"use client";

import React, { useEffect } from 'react';

export default function NavigationController() {
  useEffect(() => {
    // 1. Mobile Menu & Sidebar click handlers
    const openBtns = document.querySelectorAll('.tmp_button_active, .humberger_menu_active');
    const closeBtns = document.querySelectorAll('.close_side_menu_active, .close-button, .overlay_close_side_menu');
    const sideMenu = document.querySelector('.tmp-sidebar-area');
    const mobileMenu = document.querySelector('.tmp-popup-mobile-menu');
    const overlay = document.querySelector('.overlay_close_side_menu');

    const openMenu = (e: Event) => {
      e.preventDefault();
      if (mobileMenu) mobileMenu.classList.add('active');
      if (sideMenu) sideMenu.classList.add('active');
      if (overlay) overlay.classList.add('active');
    };

    const closeMenu = (e: Event) => {
      e.preventDefault();
      if (mobileMenu) mobileMenu.classList.remove('active');
      if (sideMenu) sideMenu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    };

    openBtns.forEach((btn) => btn.addEventListener('click', openMenu));
    closeBtns.forEach((btn) => btn.addEventListener('click', closeMenu));

    // 2. Smooth scrolling for internal anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          // Close mobile menu if open
          if (mobileMenu) mobileMenu.classList.remove('active');
          if (sideMenu) sideMenu.classList.remove('active');
          if (overlay) overlay.classList.remove('active');

          const headerOffset = 90;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      openBtns.forEach((btn) => btn.removeEventListener('click', openMenu));
      closeBtns.forEach((btn) => btn.removeEventListener('click', closeMenu));
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
