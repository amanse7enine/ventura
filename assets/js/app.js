/**
 * VENTURA - IIIT Vadodara Annual Sports Event
 * Client Interactivity & Dynamic Components
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initQRGeneratorModal();
  initPrintHandlers();

  initMobileNav();
  initPhotoLightbox();
});

/**
 * Mobile Navigation Drawer & Hamburger Menu
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    toggleBtn.classList.add('active');
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('nav-open');
  }

  function closeDrawer() {
    toggleBtn.classList.remove('active');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close when tapping any drawer link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}


/**
 * Handle Tab navigation on individual sports pages
 */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.style.display = 'none');

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.style.display = 'block';
      }
    });
  });
}

/**
 * Quick QR Modal logic
 */
function initQRGeneratorModal() {
  const qrModal = document.getElementById('qrModal');
  const closeBtn = document.getElementById('closeQrModal');

  if (closeBtn && qrModal) {
    closeBtn.addEventListener('click', () => {
      qrModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.style.display = 'none';
      }
    });
  }
}

function openSportQRModal(sportId) {
  const modal = document.getElementById('qrModal');
  const modalSportName = document.getElementById('modalSportName');
  const modalQrImage = document.getElementById('modalQrImage');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalSportLink = document.getElementById('modalSportLink');

  if (!modal) return;

  const sport = SPORTS_DATA[sportId];
  if (!sport) return;

  modalSportName.innerText = sport.name + ' - Poster QR Code';
  const qrSrc = `assets/images/qr/${sportId}-qr.png`;
  modalQrImage.src = qrSrc;
  modalDownloadBtn.href = qrSrc;
  modalDownloadBtn.setAttribute('download', `${sportId}-ventura-qr.png`);
  
  if (modalSportLink) {
    const isLocal = window.location.protocol === 'file:' || window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1');
    const directUrl = isLocal ? 'https://ventura2k26-five.vercel.app/' + sport.slug : window.location.origin + '/' + sport.slug;
    modalSportLink.value = directUrl;
  }

  modal.style.display = 'flex';
}

/**
 * Print handlers for posters
 */
function initPrintHandlers() {
  const printBtns = document.querySelectorAll('.btn-print-poster');
  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });
}

/**
 * Dynamic domain updater on the QR Hub page
 */
function initDynamicDomainUpdater() {
  // Domain is permanently locked to https://ventura2k26-five.vercel.app
}

/**
 * Copy to clipboard helper
 */
function copyLinkToClipboard(text, triggerBtn) {
  navigator.clipboard.writeText(text).then(() => {
    const origText = triggerBtn.innerText;
    triggerBtn.innerText = 'Copied!';
    setTimeout(() => {
      triggerBtn.innerText = origText;
    }, 2000);
  }).catch(() => {
    prompt('Copy this link:', text);
  });
}


/**
 * Uncropped Photo Lightbox Viewer (Full Visibility on Phone, Laptop, TV)
 */
function initPhotoLightbox() {
  const lightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  function openPhoto(src, caption) {
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePhoto() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach to all sport-card images and gallery images
  document.querySelectorAll('.sport-card-img, .clickable-photo, .gallery-card img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const caption = img.getAttribute('data-caption') || img.alt || '';
      openPhoto(img.src, caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closePhoto);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg.parentElement) {
      closePhoto();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closePhoto();
    }
  });
}
