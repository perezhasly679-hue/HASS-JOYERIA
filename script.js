
    const products = [
      {
        title: 'Anillo Eternidad',
        price: '$2,500 ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYlyOiIvWP-lYDjUhzJ7u8na6WU7MragTs0CzpzGy0Q&s=10',
        desc: 'Anillo de compromiso con diamante central talla brillante y banda de oro rosa 18k. Certificado GIA.'
      },
      {
        title: 'Collar Aurora',
        price: '$4,200 ',
        img: 'https://www.luxtor.pe/recursos/tienda/img/productos/Pulsera-Aurora-Joyer%C3%ADa-Yanbal.webp',
        desc: 'Collar con diamantes pavé en oro blanco 18k. Cadena ajustable y cierre de seguridad.'
      },
      {
        title: 'Pendientes Luna',
        price: '$1,800 ',
        img: 'https://http2.mlstatic.com/D_NQ_NP_868554-MPE111486628270_052026-O-pendientes-de-luna-y-estrella-aretes-plata-con-zafiro.webp',
        desc: 'Pendientes colgantes con diamantes talla pera en oro amarillo 18k. Cierre de presión.'
      },
      {
        title: 'Pulsera Destello',
        price: '$3,200 ',
        img: 'https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/buras/diamond/diamond-Brillant_AAA/alloycolour/red.jpg',
        desc: 'Pulsera tennis con diamantes graduales en platino. Cierre mariposa de seguridad.'
      },
      {
        title: 'Tiara Reina',
        price: '$6,500 ',
        img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop',
        desc: 'Tiara de diamantes con diseño floral en oro blanco. Ideal para bodas y galas.'
      },
      {
        title: 'Diamante Bruto',
        price: '$1,000 ',
        img: 'https://i.etsystatic.com/5711157/r/il/36cd2e/1529980022/il_570xN.1529980022_nil0.jpg',
        desc: 'Diamante certificado GIA para inversión o engaste personalizado. Incluye certificado digital.'
      }
    ];

    const grid = document.getElementById('productGrid');

    products.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img class="product-card-img" src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="product-card-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">${p.price}</span>
            <span class="product-link">Ver détalles →</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(i));
      grid.appendChild(card);
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalClose = document.getElementById('modalClose');

    function openModal(i) {
      const p = products[i];
      modalImg.src = p.img;
      modalImg.alt = p.title;
      modalTitle.textContent = p.title;
      modalPrice.textContent = p.price;
      modalDesc.textContent = p.desc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterMsg = document.getElementById('newsletterMsg');

    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!newsletterEmail.value.trim()) return;
      newsletterMsg.textContent = '¡Gracias por suscribirte, bienvenida a HASS!';
      newsletterEmail.value = '';
      showToast('¡Suscripción exitosa!');
    });

    const toast = document.getElementById('toast');

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.product-card, .testimonial-card, .featured-grid, .gallery-grid').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
