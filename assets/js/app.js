/**
 * VENTURA - IIIT Vadodara Annual Sports Event
 * Client Interactivity & Dynamic Components
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initQRGeneratorModal();
  initPrintHandlers();
  initDynamicDomainUpdater();
});

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
