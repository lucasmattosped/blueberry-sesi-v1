// ============================================================
// BLUEBERRY MATH + SESI - BACKEND INTEGRATION (CORRIGIDO)
// ============================================================
// Versão: 1.1 (Corrigido para usar coleção 'uid' em vez de 'users')
// Data: 04 de Fevereiro de 2026
// ============================================================

// ============================================================
// 1. CONFIGURAÇÃO FIREBASE
// ============================================================

// Inicializar Firebase (CDN version - para HTML estático)
const firebaseConfig = {
  apiKey: "AIzaSyAjJXpPaqIZkZlPF-NQ8h4f3kVjCAzzWeA",
  authDomain: "blueberry-trainer.firebaseapp.com",
  projectId: "blueberry-trainer",
  storageBucket: "blueberry-trainer.firebasestorage.app",
  messagingSenderId: "563772919034",
  appId: "1:563772919034:web:253cdcb737c5b1a307cd43",
  measurementId: "G-C4J2WWYPFV"
};

// Inicializar Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
} else {
  console.warn('Firebase SDK não carregado. Certifique-se de incluir os scripts CDN no HTML.');
}

// ============================================================
// 2. CONFIGURAÇÃO DE AUTENTICAÇÃO (CORRIGIDA PARA SESSION)
// ============================================================

/**
 * Configurar Firebase para usar SESSION (evita bloqueio de rastreamento)
 */
function configureFirebaseAuth() {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        console.log('✅ Firebase configurado para SESSION (não usa localStorage)');
      })
      .catch(error => {
        console.error('❌ Erro ao configurar Firebase Auth:', error);
      });
  }
  return Promise.resolve();
}

// Configurar ao carregar a página
document.addEventListener('DOMContentLoaded', configureFirebaseAuth);

// ============================================================
// 3. FUNÇÕES DE AUTENTICAÇÃO
// ============================================================

/**
 * Faz login do usuário (professor ou admin)
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<Object>} Dados do usuário logado
 */
async function login(email, password) {
  try {
    // Configurar persistência antes do login
    await configureFirebaseAuth();
    
    // Fazer login com Firebase Authentication
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // Buscar dados adicionais do usuário no Firestore (coleção 'uid')
    const userDoc = await firebase.firestore().collection('uid').doc(user.uid).get();
    
    if (!userDoc.exists) {
      throw new Error('Usuário não encontrado no banco de dados. Contate o administrador.');
    }
    
    const userData = userDoc.data();
    
    // Salvar dados do usuário no sessionStorage (não localStorage)
    const currentUser = {
      uid: user.uid,
      email: user.email,
      name: userData.name,
      role: userData.role, // 'teacher', 'admin', 'school_coordinator'
      schoolId: userData.schoolId,
      schoolName: userData.schoolName,
      completedLevels: userData.completedLevels || { bronze: false, prata: false, ouro: false },
      progress: userData.progress || {},
      createdAt: userData.createdAt?.toDate().toISOString() || new Date().toISOString()
    };
    
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    console.log('✅ Login realizado com sucesso:', currentUser.name);
    return currentUser;
    
  } catch (error) {
    console.error('❌ Erro no login:', error);
    
    let errorMessage = 'Erro ao fazer login. Verifique suas credenciais.';
    
    if (error.code === 'auth/invalid-email') {
      errorMessage = 'Email inválido.';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Senha incorreta.';
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = 'Usuário não encontrado.';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = 'Muitas tentativas. Tente novamente mais tarde.';
    }
    
    throw new Error(errorMessage);
  }
}

/**
 * Faz logout do usuário
 */
function logout() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      sessionStorage.removeItem('currentUser');
      console.log('✅ Logout realizado com sucesso');
      resolve();
    }).catch((error) => {
      console.error('❌ Erro ao fazer logout:', error);
      reject(error);
    });
  });
}

/**
 * Verifica se usuário está logado
 * @returns {Object|null} Dados do usuário ou null
 */
function getCurrentUser() {
  const userStr = sessionStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

/**
 * Verifica se usuário é admin
 * @returns {boolean}
 */
function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === 'admin';
}

/**
 * Verifica se usuário é coordenador de escola
 * @returns {boolean}
 */
function isSchoolCoordinator() {
  const user = getCurrentUser();
  return user && (user.role === 'school_coordinator' || user.role === 'admin');
}

/**
 * Protege rotas - redireciona se não estiver logado
 * @param {string} redirectUrl - URL para redirecionar se não logado
 */
function requireAuth(redirectUrl = 'login.html') {
  const user = getCurrentUser();
  if (!user) {
    console.log('⚠️ Usuário não logado. Redirecionando para login...');
    window.location.href = redirectUrl;
  }
}

/**
 * Protege rotas por nível - redireciona se não concluiu nível anterior
 * @param {string} level - 'bronze', 'prata', 'ouro'
 * @param {string} redirectUrl - URL para redirecionar se não autorizado
 */
function requireLevel(level, redirectUrl = 'dashboard.html') {
  const user = getCurrentUser();
  
  if (!user) {
    console.log('⚠️ Usuário não logado. Redirecionando para login...');
    window.location.href = 'login.html';
    return;
  }
  
  // Bronze: sempre acessível para usuários logados
  if (level === 'bronze') {
    return;
  }
  
  // Prata: requer Bronze concluído
  if (level === 'prata' && !user.completedLevels?.bronze) {
    alert('Você precisa concluir a Certificação Bronze primeiro.');
    window.location.href = redirectUrl;
    return;
  }
  
  // Ouro: requer Prata concluída
  if (level === 'ouro' && !user.completedLevels?.prata) {
    alert('Você precisa concluir a Certificação Prata primeiro.');
    window.location.href = redirectUrl;
    return;
  }
}

// ============================================================
// 4. FUNÇÕES DE GERENCIAMENTO DE USUÁRIOS (ADMIN ONLY)
// ============================================================

/**
 * Cria novo usuário (admin only)
 * @param {Object} userData - Dados do usuário
 * @param {string} userData.email - Email do usuário
 * @param {string} userData.password - Senha do usuário
 * @param {string} userData.name - Nome completo
 * @param {string} userData.role - 'teacher', 'admin', 'school_coordinator'
 * @param {string} userData.schoolId - ID da escola
 * @param {string} userData.schoolName - Nome da escola
 * @returns {Promise<string>} UID do usuário criado
 */
async function createUser(userData) {
  try {
    // Verificar se é admin
    if (!isAdmin()) {
      throw new Error('Apenas administradores podem criar usuários.');
    }
    
    // Criar usuário no Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );
    
    const uid = userCredential.user.uid;
    
    // Salvar dados adicionais no Firestore (coleção 'uid')
    const userDoc = {
      uid: uid,
      email: userData.email,
      name: userData.name,
      role: userData.role || 'teacher',
      schoolId: userData.schoolId,
      schoolName: userData.schoolName,
      completedLevels: {
        bronze: false,
        prata: false,
        ouro: false
      },
      progress: {},
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: getCurrentUser().uid
    };
    
    await firebase.firestore().collection('uid').doc(uid).set(userDoc);
    
    console.log('✅ Usuário criado com sucesso:', uid);
    return uid;
    
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error);
    
    let errorMessage = 'Erro ao criar usuário.';
    
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'Email já está em uso.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Email inválido.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Senha fraca. Use pelo menos 6 caracteres.';
    }
    
    throw new Error(errorMessage);
  }
}

/**
 * Lista todos os usuários (admin only)
 * @returns {Promise<Array>} Lista de usuários
 */
async function listAllUsers() {
  try {
    const snapshot = await firebase.firestore().collection('uid').orderBy('createdAt', 'desc').get();
    
    const users = [];
    snapshot.forEach(doc => {
      users.push({
        uid: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toISOString() || null
      });
    });
    
    return users;
  } catch (error) {
    console.error('❌ Erro ao listar usuários:', error);
    throw error;
  }
}

/**
 * Lista usuários por escola
 * @param {string} schoolId - ID da escola
 * @returns {Promise<Array>} Lista de usuários da escola
 */
async function listUsersBySchool(schoolId) {
  try {
    const snapshot = await firebase.firestore()
      .collection('uid')
      .where('schoolId', '==', schoolId)
      .orderBy('name', 'asc')
      .get();
    
    const users = [];
    snapshot.forEach(doc => {
      users.push({
        uid: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toISOString() || null
      });
    });
    
    return users;
  } catch (error) {
    console.error('❌ Erro ao listar usuários por escola:', error);
    throw error;
  }
}

/**
 * Atualiza dados de usuário
 * @param {string} uid - UID do usuário
 * @param {Object} updates - Campos a atualizar
 */
async function updateUser(uid, updates) {
  try {
    await firebase.firestore().collection('uid').doc(uid).update({
      ...updates,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    console.log('✅ Usuário atualizado:', uid);
  } catch (error) {
    console.error('❌ Erro ao atualizar usuário:', error);
    throw error;
  }
}

/**
 * Deleta usuário (admin only)
 * @param {string} uid - UID do usuário
 */
async function deleteUser(uid) {
  try {
    // Deletar do Firestore primeiro
    await firebase.firestore().collection('uid').doc(uid).delete();
    
    console.log('✅ Usuário deletado do Firestore:', uid);
    alert('Usuário removido do banco de dados.');
    
  } catch (error) {
    console.error('❌ Erro ao deletar usuário:', error);
    throw error;
  }
}

// ============================================================
// 5. FUNÇÕES DE PROGRESSO E CERTIFICAÇÃO
// ============================================================

/**
 * Marca módulo como assistido
 * @param {string} moduleId - ID do módulo (ex: 'bronze-modulo-1')
 * @param {string} level - Nível ('bronze', 'prata', 'ouro')
 */
async function markModuleAsWatched(moduleId, level) {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('Usuário não logado.');
    }
    
    // Atualizar no Firestore (coleção 'uid')
    const modulePath = `progress.${moduleId}`;
    await firebase.firestore().collection('uid').doc(user.uid).update({
      [modulePath]: {
        watched: true,
        watchedAt: firebase.firestore.FieldValue.serverTimestamp(),
        level: level
      },
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Atualizar sessionStorage
    user.progress = user.progress || {};
    user.progress[moduleId] = {
      watched: true,
      watchedAt: new Date().toISOString(),
      level: level
    };
    
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    console.log('✅ Módulo marcado como assistido:', moduleId);
    
    // Verificar se concluiu o nível
    await checkLevelCompletion(level);
    
  } catch (error) {
    console.error('❌ Erro ao marcar módulo:', error);
    throw error;
  }
}

/**
 * Verifica se usuário concluiu todos os módulos de um nível
 * @param {string} level - Nível ('bronze', 'prata', 'ouro')
 * @returns {Promise<boolean>}
 */
async function checkLevelCompletion(level) {
  try {
    const user = getCurrentUser();
    if (!user) {
      return false;
    }
    
    // Definir módulos por nível
    const modulesByLevel = {
      bronze: ['bronze-modulo-1', 'bronze-modulo-2', 'bronze-modulo-3', 'bronze-modulo-4'],
      prata: ['prata-modulo-1', 'prata-modulo-2', 'prata-modulo-3'],
      ouro: ['ouro-modulo-1', 'ouro-modulo-2', 'ouro-modulo-3', 'ouro-modulo-4']
    };
    
    const modules = modulesByLevel[level] || [];
    
    // Verificar se todos os módulos foram assistidos
    const allWatched = modules.every(moduleId => {
      return user.progress?.[moduleId]?.watched === true;
    });
    
    if (allWatched) {
      // Marcar nível como concluído
      await completeLevel(level);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('❌ Erro ao verificar conclusão de nível:', error);
    return false;
  }
}

/**
 * Marca nível como concluído
 * @param {string} level - Nível ('bronze', 'prata', 'ouro')
 */
async function completeLevel(level) {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('Usuário não logado.');
    }
    
    // Atualizar no Firestore (coleção 'uid')
    const levelPath = `completedLevels.${level}`;
    await firebase.firestore().collection('uid').doc(user.uid).update({
      [levelPath]: true,
      [`completedAt_${level}`]: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Atualizar sessionStorage
    user.completedLevels = user.completedLevels || { bronze: false, prata: false, ouro: false };
    user.completedLevels[level] = true;
    
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    console.log('🎉 Nível concluído:', level);
    
    // Mostrar mensagem de sucesso
    showAlert(`🎉 Parabéns! Você concluiu a Certificação ${capitalize(level)}!`, 'success');
    
    // Desbloquear próximo nível automaticamente
    unlockNextLevel(level);
    
  } catch (error) {
    console.error('❌ Erro ao completar nível:', error);
    throw error;
  }
}

/**
 * Desbloqueia próximo nível
 * @param {string} currentLevel - Nível atual concluído
 */
function unlockNextLevel(currentLevel) {
  let nextLevel = null;
  
  if (currentLevel === 'bronze') {
    nextLevel = 'prata';
  } else if (currentLevel === 'prata') {
    nextLevel = 'ouro';
  }
  
  if (nextLevel) {
    console.log(`🔓 Nível ${nextLevel} desbloqueado!`);
  }
}

/**
 * Obtém progresso do usuário
 * @returns {Object} Progresso do usuário
 */
function getUserProgress() {
  const user = getCurrentUser();
  return user?.progress || {};
}

/**
 * Obtém níveis concluídos do usuário
 * @returns {Object} Níveis concluídos
 */
function getCompletedLevels() {
  const user = getCurrentUser();
  return user?.completedLevels || { bronze: false, prata: false, ouro: false };
}

// ============================================================
// 6. FUNÇÕES DE ESCOLAS
// ============================================================

/**
 * Cria nova escola (admin only)
 * @param {Object} schoolData - Dados da escola
 * @param {string} schoolData.name - Nome da escola
 * @param {string} schoolData.code - Código da escola (ex: SP001)
 * @returns {Promise<string>} ID da escola criada
 */
async function createSchool(schoolData) {
  try {
    if (!isAdmin()) {
      throw new Error('Apenas administradores podem criar escolas.');
    }
    
    const schoolDoc = {
      name: schoolData.name,
      code: schoolData.code,
      teachersCount: 0,
      completedBronze: 0,
      completedPrata: 0,
      completedOuro: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: getCurrentUser().uid
    };
    
    const docRef = await firebase.firestore().collection('schools').add(schoolDoc);
    
    console.log('✅ Escola criada com sucesso:', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('❌ Erro ao criar escola:', error);
    throw error;
  }
}

/**
 * Lista todas as escolas
 * @returns {Promise<Array>} Lista de escolas
 */
async function listSchools() {
  try {
    const snapshot = await firebase.firestore()
      .collection('schools')
      .orderBy('name', 'asc')
      .get();
    
    const schools = [];
    snapshot.forEach(doc => {
      schools.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return schools;
  } catch (error) {
    console.error('❌ Erro ao listar escolas:', error);
    throw error;
  }
}

/**
 * Obtém estatísticas de uma escola
 * @param {string} schoolId - ID da escola
 * @returns {Promise<Object>} Estatísticas da escola
 */
async function getSchoolStats(schoolId) {
  try {
    // Buscar dados da escola
    const schoolDoc = await firebase.firestore().collection('schools').doc(schoolId).get();
    
    if (!schoolDoc.exists) {
      throw new Error('Escola não encontrada.');
    }
    
    const schoolData = schoolDoc.data();
    
    // Buscar professores da escola
    const teachers = await listUsersBySchool(schoolId);
    
    // Calcular estatísticas
    const completedBronze = teachers.filter(t => t.completedLevels?.bronze).length;
    const completedPrata = teachers.filter(t => t.completedLevels?.prata).length;
    const completedOuro = teachers.filter(t => t.completedLevels?.ouro).length;
    
    return {
      schoolName: schoolData.name,
      totalTeachers: teachers.length,
      completedBronze: completedBronze,
      completedPrata: completedPrata,
      completedOuro: completedOuro,
      teachers: teachers
    };
    
  } catch (error) {
    console.error('❌ Erro ao obter estatísticas da escola:', error);
    throw error;
  }
}

// ============================================================
// 7. FUNÇÕES DE SUPORTE E UTILIDADES
// ============================================================

/**
 * Mostra alerta na tela
 * @param {string} message - Mensagem
 * @param {string} type - 'success', 'error', 'warning', 'info'
 * @param {number} duration - Duração em ms (default: 5000)
 */
function showAlert(message, type = 'info', duration = 5000) {
  // Remover alertas anteriores
  const existingAlerts = document.querySelectorAll('.blueberry-alert');
  existingAlerts.forEach(alert => alert.remove());
  
  // Criar elemento de alerta
  const alertDiv = document.createElement('div');
  alertDiv.className = `blueberry-alert alert-${type}`;
  alertDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    max-width: 500px;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    background: ${getAlertColor(type)};
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Adicionar animação
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
    .blueberry-alert.fade-out {
      animation: slideOut 0.3s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
  
  const icon = getAlertIcon(type);
  alertDiv.innerHTML = `
    <span style="font-size: 24px;">${icon}</span>
    <span style="flex: 1;">${message}</span>
    <button type="button" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0 10px;" onclick="this.parentElement.remove()">
      ×
    </button>
  `;
  
  document.body.appendChild(alertDiv);
  
  // Remover após duration
  setTimeout(() => {
    alertDiv.classList.add('fade-out');
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.parentNode.removeChild(alertDiv);
      }
    }, 300);
  }, duration);
}

function getAlertColor(type) {
  const colors = {
    success: '#00875A',
    error: '#DE350B',
    warning: '#FF991F',
    info: '#0065FF'
  };
  return colors[type] || colors.info;
}

function getAlertIcon(type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || icons.info;
}

/**
 * Capitaliza primeira letra
 * @param {string} str - String
 * @returns {string}
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formata data
 * @param {string|Date} date - Data
 * @returns {string}
 */
function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ============================================================
// 8. INICIALIZAÇÃO
// ============================================================

// Inicializar Firebase quando o script for carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔵 Blueberry Backend inicializado');
  
  // Verificar se usuário está logado ao carregar página
  const currentUser = getCurrentUser();
  if (currentUser) {
    console.log('👤 Usuário logado:', currentUser.name, '(' + currentUser.email + ')');
    console.log('✅ Usando sessionStorage (não localStorage)');
  } else {
    console.log('⚠️ Nenhum usuário logado');
  }
});

// Exportar funções globais (para uso no HTML inline)
window.blueberry = {
  // Autenticação
  login,
  logout,
  getCurrentUser,
  isAdmin,
  isSchoolCoordinator,
  requireAuth,
  requireLevel,
  
  // Usuários
  createUser,
  listAllUsers,
  listUsersBySchool,
  updateUser,
  deleteUser,
  
  // Progresso
  markModuleAsWatched,
  checkLevelCompletion,
  completeLevel,
  getUserProgress,
  getCompletedLevels,
  
  // Escolas
  createSchool,
  listSchools,
  getSchoolStats,
  
  // Utilidades
  showAlert,
  capitalize,
  formatDate
};

console.log('✅✅✅ Blueberry Backend CARREGADO com sucesso!');
console.log('📚 Use window.blueberry para acessar as funções.');
console.log('🔒 Sistema configurado para SESSION (evita bloqueio de rastreamento)');
