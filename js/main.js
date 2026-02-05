/**
 * Blueberry Math + SESI - JavaScript Principal
 * Trilha de Formação - Certificações Bronze, Prata e Ouro
 * 
 * Funcionalidades:
 * - Controle de progressão (bloquear acesso a níveis superiores)
 * - Navegação responsiva
 * - Animações suaves
 * - Acessibilidade
 */

(function() {
  'use strict';

  // ============================================
  // 1. CONSTANTES E CONFIGURAÇÃO
  // ============================================

  const CONFIG = {
    mobileBreakpoint: 768,
    animationDuration: 300,
    scrollOffset: 80
  };

  // Níveis de certificação disponíveis
  const CERTIFICATION_LEVELS = {
    BRONZE: 'bronze',
    PRATA: 'prata',
    OURO: 'ouro'
  };

  // ============================================
  // 2. CONTROLE DE PROGRESSÃO
  // ============================================

  /**
   * Verifica se o usuário completou determinado nível
   * @param {string} level - Nível a verificar
   * @returns {boolean}
   */
  function hasCompletedLevel(level) {
    const completed = localStorage.getItem('blueberry_completed_levels');
    if (!completed) return false;
    
    try {
      const levels = JSON.parse(completed);
      return levels.includes(level);
    } catch (e) {
      console.error('Erro ao ler níveis completados:', e);
      return false;
    }
  }

  /**
   * Marca um nível como completado
   * @param {string} level - Nível completado
   */
  function markLevelAsCompleted(level) {
    let completed = [];
    
    try {
      const stored = localStorage.getItem('blueberry_completed_levels');
      if (stored) {
        completed = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Erro ao ler níveis completados:', e);
    }

    if (!completed.includes(level)) {
      completed.push(level);
      localStorage.setItem('blueberry_completed_levels', JSON.stringify(completed));
    }
  }

  /**
   * Verifica se o usuário pode acessar determinado nível
   * @param {string} level - Nível a verificar
   * @returns {boolean}
   */
  function canAccessLevel(level) {
    // Bronze sempre pode ser acessado
    if (level === CERTIFICATION_LEVELS.BRONZE) {
      return true;
    }

    // Prata requer Bronze completado
    if (level === CERTIFICATION_LEVELS.PRATA) {
      return hasCompletedLevel(CERTIFICATION_LEVELS.BRONZE);
    }

    // Ouro requer Prata completado
    if (level === CERTIFICATION_LEVELS.OURO) {
      return hasCompletedLevel(CERTIFICATION_LEVELS.PRATA);
    }

    return false;
  }

  /**
   * Bloqueia links para níveis não acessíveis
   */
  function setupProgressionControl() {
    const disabledLinks = document.querySelectorAll('.main-nav-link.disabled, .btn-disabled');

    disabledLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const level = this.dataset.level;
        let requiredLevel = '';
        let message = '';

        if (level === CERTIFICATION_LEVELS.PRATA) {
          requiredLevel = 'Bronze';
          message = 'Você precisa completar a Certificação Bronze antes de acessar a Certificação Prata.';
        } else if (level === CERTIFICATION_LEVELS.OURO) {
          requiredLevel = 'Prata';
          message = 'Você precisa completar a Certificação Prata antes de acessar a Certificação Ouro.';
        }

        showAlert(message, 'warning');
      });
    });
  }

  /**
   * Gerencia botão de conclusão e download de certificado na página Bronze
   */
  function setupBronzeCertificate() {
    const btnCompleteBronze = document.getElementById('btn-complete-bronze');
    const btnDownloadCertificate = document.getElementById('btn-download-certificate');

    if (!btnCompleteBronze) return;

    // Se Bronze já foi completado, atualizar UI
    if (hasCompletedLevel(CERTIFICATION_LEVELS.BRONZE)) {
      btnCompleteBronze.textContent = 'Bronze Concluída';
      btnCompleteBronze.innerHTML = '<i class="fas fa-check-circle"></i> Bronze Concluída';
      btnCompleteBronze.classList.remove('btn-cta');
      btnCompleteBronze.classList.add('btn-disabled');
      btnCompleteBronze.disabled = true;

      // Mostrar botão de download do certificado
      if (btnDownloadCertificate) {
        btnDownloadCertificate.style.display = 'block';
      }
    }

    // Evento de marcar como concluída
    btnCompleteBronze.addEventListener('click', function() {
      if (!hasCompletedLevel(CERTIFICATION_LEVELS.BRONZE)) {
        markLevelAsCompleted(CERTIFICATION_LEVELS.BRONZE);
        
        // Atualizar botão
        this.textContent = 'Bronze Concluída';
        this.innerHTML = '<i class="fas fa-check-circle"></i> Bronze Concluída';
        this.classList.remove('btn-cta');
        this.classList.add('btn-disabled');
        this.disabled = true;

        // Mostrar botão de download do certificado com animação
        if (btnDownloadCertificate) {
          setTimeout(() => {
            btnDownloadCertificate.style.display = 'block';
            btnDownloadCertificate.style.animation = 'fadeIn 0.5s ease';
          }, 500);
        }

        // Mostrar alerta
        showAlert(
          'Parabéns! Você completou a Certificação Bronze. O nível Prata foi desbloqueado e você já pode baixar seu certificado!',
          'success',
          8000
        );

        // Rolar suavemente até o botão de download
        setTimeout(() => {
          if (btnDownloadCertificate) {
            btnDownloadCertificate.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 1000);

        // Atualizar navegação
        updateNavigationState();
      }
    });
  }

  /**
   * Atualiza estado dos links de navegação baseado em progressão
   */
  function updateNavigationState() {
    // Atualizar links de Prata
    const prataLinks = document.querySelectorAll('[data-level="prata"]');
    prataLinks.forEach(link => {
      if (canAccessLevel(CERTIFICATION_LEVELS.PRATA)) {
        link.classList.remove('disabled', 'btn-disabled');
        link.removeAttribute('aria-disabled');
      } else {
        link.classList.add('disabled');
        if (link.classList.contains('btn')) {
          link.classList.add('btn-disabled');
        }
        link.setAttribute('aria-disabled', 'true');
      }
    });

    // Atualizar links de Ouro
    const ouroLinks = document.querySelectorAll('[data-level="ouro"]');
    ouroLinks.forEach(link => {
      if (canAccessLevel(CERTIFICATION_LEVELS.OURO)) {
        link.classList.remove('disabled', 'btn-disabled');
        link.removeAttribute('aria-disabled');
      } else {
        link.classList.add('disabled');
        if (link.classList.contains('btn')) {
          link.classList.add('btn-disabled');
        }
        link.setAttribute('aria-disabled', 'true');
      }
    });
  }

  // ============================================
  // 3. NAVEGAÇÃO E UI
  // ============================================

  /**
   * Marca link ativo na navegação
   */
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav-link');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      if (linkPath === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Scroll suave para âncoras
   */
  function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorar links vazios (#)
        if (href === '#') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - CONFIG.scrollOffset;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // Atualizar focus para acessibilidade
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  /**
   * Toggle menu mobile (se implementado)
   */
  function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-open');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      }
    });
  }

  // ============================================
  // 4. ALERTAS E FEEDBACK
  // ============================================

  /**
   * Exibe alerta temporário
   * @param {string} message - Mensagem a exibir
   * @param {string} type - Tipo: 'success', 'warning', 'error', 'info'
   * @param {number} duration - Duração em ms (0 = permanente)
   */
  function showAlert(message, type = 'info', duration = 5000) {
    // Criar elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <div class="alert-content">
        <p>${message}</p>
        <button class="alert-close" aria-label="Fechar alerta">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;

    // Adicionar estilos inline (caso não estejam no CSS)
    alert.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      max-width: 400px;
      padding: 1rem 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      z-index: 1000;
      animation: slideInRight 0.3s ease;
    `;

    // Aplicar cor baseada no tipo
    const colors = {
      success: '#00875A',
      warning: '#FF991F',
      error: '#DE350B',
      info: '#0065FF'
    };
    alert.style.borderLeft = `4px solid ${colors[type] || colors.info}`;

    // Adicionar ao body
    document.body.appendChild(alert);

    // Botão de fechar
    const closeBtn = alert.querySelector('.alert-close');
    closeBtn.addEventListener('click', () => {
      alert.remove();
    });

    // Auto remover após duração
    if (duration > 0) {
      setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alert.remove(), 300);
      }, duration);
    }
  }

  // ============================================
  // 5. ANIMAÇÕES
  // ============================================

  /**
   * Observador de interseção para animações de fade-in
   */
  function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .tip-box, .callout');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => observer.observe(el));
    } else {
      // Fallback: adicionar classe imediatamente
      animatedElements.forEach(el => el.classList.add('fade-in'));
    }
  }

  // ============================================
  // 6. UTILITÁRIOS
  // ============================================

  /**
   * Debounce para otimizar eventos frequentes
   * @param {Function} func - Função a executar
   * @param {number} wait - Tempo de espera em ms
   * @returns {Function}
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Detecta modo preferido (claro/escuro)
   */
  function detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark-mode');
    }

    // Observar mudanças
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    });
  }

  // ============================================
  // 7. API - FUNÇÕES PÚBLICAS
  // ============================================

  // Expor funções úteis globalmente
  window.BlueberryApp = {
    hasCompletedLevel,
    markLevelAsCompleted,
    canAccessLevel,
    showAlert,
    updateNavigationState
  };

  // ============================================
  // 8. INICIALIZAÇÃO
  // ============================================

  /**
   * Inicializa aplicação quando DOM estiver pronto
   */
  function init() {
    console.log('Blueberry Math - Sistema de Formação inicializado');

    // Setup inicial
    setActiveNavLink();
    updateNavigationState();
    setupProgressionControl();
    setupBronzeCertificate();
    setupSmoothScroll();
    setupMobileMenu();
    setupScrollAnimations();
    
    // Funcionalidades opcionais
    // detectColorScheme(); // Descomentar para suporte a dark mode

    // Logs de debug (remover em produção)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Níveis completados:', localStorage.getItem('blueberry_completed_levels'));
      console.log('Pode acessar Prata:', canAccessLevel(CERTIFICATION_LEVELS.PRATA));
      console.log('Pode acessar Ouro:', canAccessLevel(CERTIFICATION_LEVELS.OURO));
    }
  }

  // Executar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ============================================
  // 9. EVENT LISTENERS GLOBAIS
  // ============================================

  // Resize responsivo (com debounce)
  window.addEventListener('resize', debounce(() => {
    // Ações em resize, se necessário
  }, 250));

  // Adicionar CSS para animações de alerta (se não existir)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    .alert {
      font-family: var(--font-body, sans-serif);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .alert-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }

    .alert-content p {
      margin: 0;
      flex: 1;
    }

    .alert-close {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      line-height: 1;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.6;
      transition: opacity 0.2s;
    }

    .alert-close:hover {
      opacity: 1;
    }

    @media (max-width: 767px) {
      .alert {
        left: 10px;
        right: 10px;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(style);

})();
