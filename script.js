const speakers = [
  {
    id: 1,
    name: 'Serigne Sam Mbaye',
    role: 'Guide spirituel et enseignant',
    location: 'Dakar, Sénégal',
    specialty: 'Tafsir • Éthique • Dhikr',
    category: 'Tafsir',
    status: 'Très demandé',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4IpC2Ojb_FI2XmLP3MZaeVle0QoiReR_0nGhMASqgzA&s=10',
    bio: 'Serigne Sam Mbaye est reconnu pour son enseignement de la foi, la patience et la purification du cœur. Il inspire des milliers de fidèles par ses réflexions profondes et ses messages de sagesse.',
    profile: {
      age: '68 ans',
      quote: 'La pureté du cœur ouvre la voie vers la vérité.',
      focus: 'Aider les croyants à renforcer leur relation avec Dieu et à vivre avec humilité.',
      desc: 'Il partage des sermons inspirants centrés sur le Coran, la doctrine et la vie quotidienne, en mettant l’accent sur la discipline spirituelle et la sobriété.'
    },
    sermons: [
      { title: 'Le Temps n°4', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Letemps-4.mp3' },
      { title: 'Mouridesadikh n°6', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-6.mp3' },
      { title: 'Mouridesadikh n°5', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-5.mp3' },
      { title: 'Mouridesadikh n°4', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-4.mp3' },
      { title: 'Mouridesadikh n°3', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-3.mp3' },
      { title: 'Mouridesadikh n°2', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-2.mp3' },
      { title: 'Mouridesadikh n°1', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Mouridesadikh-1.mp3' },
      { title: 'Le Temps n°3', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Letemps-3.mp3' },
      { title: 'Le Temps n°2', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Letemps-2.mp3' },
      { title: 'Le Temps n°1', audio: 'https://www.mourides.com/IMG/mp3/SSAM-Letemps-1.mp3' },
      { title: 'Moudjadid n°3', audio: 'https://www.mourides.com/IMG/mp3/08_-_moudjadid3_1_.mp3' },
      { title: 'Moudjadid n°2', audio: 'https://www.mourides.com/IMG/mp3/07_-_moudjadid2_1_.mp3' },
      { title: 'Moudjadid n°1', audio: 'https://www.mourides.com/IMG/mp3/06_-_moudjadid1_1_.mp3' }
    ]
  },
  {
    id: 2,
    name: 'Professeure Madiama Fall',
    role: 'Enseignante du Coran',
    location: 'Saint-Louis, Sénégal',
    specialty: 'Quran • Études • Éducation',
    category: 'Tafsir',
    status: 'Populaire',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4YwzCtrNY9EXu4lgvXRRXBoF739MzvhOh0dLwywo3Q&s=10',
    bio: 'Professeure Madiama Fall accompagne les jeunes et les familles dans l’apprentissage du Coran, la morale et la manière de vivre selon les valeurs islamiques.',
    profile: {
      age: '52 ans',
      quote: 'L’éducation spirituelle transforme la personne et la société.',
      focus: 'Former les enfants et les adultes à la lecture du Coran avec douceur et pédagogie.',
      desc: 'Son approche vise à faire grandir la foi, la connaissance et la maîtrise de soi, dans un cadre empreint de bienveillance et d’engagement social.'
    },
    sermons: [
      { title: 'Extrait audio • Madiama Fall', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
      { title: 'La famille dans la foi', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
      { title: 'L’enseignante de lumière', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' }
    ]
  },
  {
    id: 3,
    name: 'Oustaz Ahmed Ba',
    role: 'Imam et conférencier',
    location: 'Thiès, Sénégal',
    specialty: 'Jurisprudence • Savoir • Humilité',
    category: 'Vie spirituelle',
    status: 'À l’écoute',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NAcyt0XWkaY4P1OXHQ9hffPnYJRXtS_sgcT3Z4xr9Q&s=10',
    bio: 'Oustaz Ahmed Ba est connu pour ses sermons clairs, ses conseils pratiques et sa manière de transmettre la jurisprudence de manière accessible à tous.',
    profile: {
      age: '46 ans',
      quote: 'La vérité se transmet avec patience et clarté.',
      focus: 'Expliquer les fondements islamiques dans la vie quotidienne et dans les relations sociales.',
      desc: 'Ses discours invitent à la réflexion, au respect mutuel et à l’élévation du cœur à travers la pratique du bien et la recherche de la vérité.'
    },
    sermons: [
      { title: 'La simplicité dans la foi', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
      { title: 'Le devoir du croyant', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
      { title: 'L’âme dans la lumière', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' }
    ]
  },
  {
    id: 7,
    name: 'Cheikh Mouhidine Samba Diallo',
    role: 'Guide spirituel et prédicateur',
    location: 'Dakar, Sénégal',
    specialty: 'Foi • Guidance • Sagesse',
    category: 'Vie spirituelle',
    status: 'Très suivi',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80&fm=jpg',
    bio: 'Cheikh Mouhidine Samba Diallo est reconnu pour son enseignement de la foi, la discipline du cœur et l’élévation du moral par la pratique de la religion avec calme et clarté.',
    profile: {
      age: '61 ans',
      quote: 'La sagesse s’éprouve dans la lumière du cœur et la paix du comportement.',
      focus: 'Aider les fidèles à renforcer leur relation avec Dieu et à cultiver la patience, la foi et la clarté morale.',
      desc: 'Ses interventions inspirent la sérénité, la réflexion spirituelle et une démarche de purification intérieure à travers les enseignements du Coran et de la tradition.'
    },
    sermons: [
      { title: 'La voie de la paix intérieure', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3' },
      { title: 'Le cœur et la discipline', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3' },
      { title: 'La lumière de l’âme', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3' },
      { title: 'La patience dans les épreuves', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3' }
    ]
  }
];

const CACHE_DB_NAME = 'mourides-audio-cache';
const CACHE_STORE = 'audio';
const FALLBACK_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
const speakerGrid = document.getElementById('speakerGrid');
const detailProfile = document.getElementById('detailProfile');
const trackList = document.getElementById('trackList');
const audioPlayer = document.getElementById('audioPlayer');
const currentTrackEl = document.getElementById('currentTrack');
const currentSpeakerEl = document.getElementById('currentSpeaker');
const albumArt = document.getElementById('albumArt');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const offlineBadge = document.getElementById('offlineBadge');
const downloadBtn = document.getElementById('downloadBtn');
const downloadStatusEl = document.getElementById('downloadStatus');

const FEATURED_SPEAKER_ID = 1;

let activeFilter = 'Tous';
let selectedId = FEATURED_SPEAKER_ID;
let activeSpeaker = speakers[0];
let activeIndex = 0;

const SETTINGS_KEY = 'mourides-settings';
const DEFAULT_SETTINGS = {
  theme: 'dark',
  notifications: true,
  privacy: true,
  provider: 'Google'
};

const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const settingsTrigger = document.querySelector('.settings-trigger');
const themeOptions = document.querySelectorAll('.theme-option');
const notificationsToggle = document.getElementById('notificationsToggle');
const privacyToggle = document.getElementById('privacyToggle');
const signupButtons = document.querySelectorAll('.signup-btn');
const accountStatus = document.getElementById('accountStatus');
const createAccountBtn = document.getElementById('createAccountBtn');
const accountName = document.getElementById('accountName');
const accountPhone = document.getElementById('accountPhone');
const accountEmail = document.getElementById('accountEmail');
const toast = document.getElementById('toast');
const launchScreen = document.getElementById('launchScreen');
const loadingBar = document.getElementById('loadingBar');

const beginLaunchSequence = () => {
  if (!launchScreen || !loadingBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += 8 + Math.random() * 14;
    if (progress >= 100) {
      progress = 100;
      loadingBar.style.width = '100%';
      clearInterval(interval);
      setTimeout(() => {
        launchScreen.classList.add('hidden');
        document.body.classList.remove('launching');
        document.body.classList.add('ready');
      }, 500);
      return;
    }

    loadingBar.style.width = `${progress}%`;
  }, 120);
};

const loadSettings = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null');
    return { ...DEFAULT_SETTINGS, ...(saved || {}) };
  } catch (error) {
    return { ...DEFAULT_SETTINGS };
  }
};

const saveSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn('Impossible de sauvegarder les réglages.', error);
  }
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  document.querySelectorAll('.theme-option').forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
};

const updateProviderStatus = (provider = loadSettings().provider) => {
  const settings = loadSettings();
  settings.provider = provider;
  saveSettings(settings);

  signupButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.provider === provider);
  });

  accountStatus.textContent = `Compte prêt à être créé avec ${provider}.`;
};

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
};

const syncSettingsUI = () => {
  const settings = loadSettings();
  applyTheme(settings.theme);
  notificationsToggle.checked = settings.notifications;
  privacyToggle.checked = settings.privacy;
  updateProviderStatus(settings.provider);
};

const openSettings = () => {
  settingsModal.classList.remove('hidden');
  settingsModal.setAttribute('aria-hidden', 'false');
};

const closeSettings = () => {
  settingsModal.classList.add('hidden');
  settingsModal.setAttribute('aria-hidden', 'true');
};

settingsTrigger?.addEventListener('click', openSettings);
closeSettingsBtn?.addEventListener('click', closeSettings);
settingsModal?.addEventListener('click', (event) => {
  if (event.target.dataset.close === 'settings') {
    closeSettings();
  }
});

document.querySelector('.avatar.settings-trigger')?.addEventListener('click', openSettings);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !settingsModal.classList.contains('hidden')) {
    closeSettings();
  }
});

themeOptions.forEach((button) => {
  button.addEventListener('click', () => {
    const settings = loadSettings();
    settings.theme = button.dataset.theme;
    saveSettings(settings);
    applyTheme(settings.theme);
  });
});

notificationsToggle.addEventListener('change', () => {
  const settings = loadSettings();
  settings.notifications = notificationsToggle.checked;
  saveSettings(settings);
});

privacyToggle.addEventListener('change', () => {
  const settings = loadSettings();
  settings.privacy = privacyToggle.checked;
  saveSettings(settings);
});

signupButtons.forEach((button) => {
  button.addEventListener('click', () => updateProviderStatus(button.dataset.provider));
});

createAccountBtn?.addEventListener('click', () => {
  const provider = loadSettings().provider;
  const name = accountName.value.trim();
  const phone = accountPhone.value.trim();
  const email = accountEmail.value.trim();

  if (!name && !phone && !email) {
    accountStatus.textContent = 'Veuillez remplir au moins un moyen de contact pour continuer.';
    accountStatus.style.color = 'var(--primary-strong)';
    return;
  }

  const accountData = {
    provider,
    name,
    phone,
    email,
    createdAt: new Date().toISOString()
  };

  try {
    localStorage.setItem('mourides-account', JSON.stringify(accountData));
  } catch (error) {
    console.warn('Compte non enregistré localement.', error);
  }

  accountStatus.textContent = `Compte créé avec ${provider} pour ${name || phone || email}.`;
  accountStatus.style.color = 'var(--success)';
  showToast('Compte créé avec succès');
  closeSettings();
});

syncSettingsUI();

const openAudioDatabase = () => {
  if (!('indexedDB' in window)) return Promise.resolve(null);

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(CACHE_DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(CACHE_STORE)) {
        db.createObjectStore(CACHE_STORE, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const dbPromise = openAudioDatabase();

const formatTime = (value) => {
  if (!Number.isFinite(value) || value < 0) return '00:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const setDownloadStatus = (message) => {
  downloadStatusEl.textContent = message;
};

const setOfflineBadge = (message, isOffline = false) => {
  offlineBadge.textContent = message;
  offlineBadge.classList.toggle('offline', isOffline);
};

const getCachedTrack = async (url) => {
  try {
    const db = await dbPromise;
    if (!db) return null;

    return new Promise((resolve) => {
      const transaction = db.transaction(CACHE_STORE, 'readonly');
      const store = transaction.objectStore(CACHE_STORE);
      const request = store.get(url);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch (error) {
    return null;
  }
};

const toBlobUrl = (arrayBuffer) => {
  const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
  return URL.createObjectURL(blob);
};

const getAudioSource = async (url) => {
  const cached = await getCachedTrack(url);
  if (cached && cached.data) {
    return { url: toBlobUrl(cached.data), offline: true };
  }
  return { url, offline: false };
};

const cacheAudioTrack = async (url, title) => {
  try {
    const db = await dbPromise;
    if (!db) return false;

    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('La piste n’a pas pu être téléchargée.');

    const arrayBuffer = await response.arrayBuffer();
    const transaction = db.transaction(CACHE_STORE, 'readwrite');
    const store = transaction.objectStore(CACHE_STORE);
    store.put({ id: url, data: arrayBuffer, title, downloadedAt: Date.now() });

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve(true);
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.warn(error);
    return false;
  }
};

const sanitizeFileName = (value) => {
  return (value || 'conference')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'conference';
};

const downloadTrack = async (speaker, index) => {
  const sermon = speaker.sermons[index];
  if (!sermon) return;

  try {
    const cached = await getCachedTrack(sermon.audio);
    if (!cached) {
      const downloaded = await cacheAudioTrack(sermon.audio, sermon.title);
      if (!downloaded) {
        setDownloadStatus('Téléchargement impossible pour cette piste.');
        return;
      }
    }

    const blobUrl = await getAudioSource(sermon.audio).then((source) => source.url);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${sanitizeFileName(sermon.title)}.mp3`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    setOfflineBadge('Hors ligne', true);
    setDownloadStatus(`${sermon.title} est prêt à être écouté hors ligne.`);
  } catch (error) {
    console.error(error);
    setDownloadStatus('Téléchargement impossible pour cette piste.');
  }
};

const playTrack = async (speaker, index) => {
  const sermon = speaker.sermons[index];
  if (!sermon) return;

  activeSpeaker = speaker;
  activeIndex = index;
  currentTrackEl.textContent = sermon.title;
  currentSpeakerEl.textContent = speaker.name;

  if (albumArt) {
    albumArt.style.backgroundImage = `url('${speaker.image}')`;
    albumArt.style.backgroundSize = 'cover';
    albumArt.style.backgroundPosition = 'center';
    albumArt.textContent = '';
  }

  const buttons = document.querySelectorAll('.track-item');
  buttons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.index) === index);
  });

  const candidates = [sermon.audio, FALLBACK_AUDIO_URL];
  let lastError = null;

  for (const candidate of candidates) {
    try {
      const source = await getAudioSource(candidate);
      audioPlayer.src = source.url;
      audioPlayer.load();
      setOfflineBadge(source.offline ? 'Hors ligne' : 'En ligne', source.offline);
      await audioPlayer.play();
      playPauseBtn.textContent = '⏸';
      return;
    } catch (error) {
      lastError = error;
      console.warn('Lecture audio impossible, tentative avec la source de secours.', error);
    }
  }

  console.warn('Aucune source audio compatible n’a pu être chargée.', lastError);
  setDownloadStatus('Cette piste est actuellement indisponible. Réessayez plus tard.');
  showToast('Lecture indisponible pour ce discours');
  playPauseBtn.textContent = '▶';
};

const getFilteredSpeakers = () => {
  const searched = searchInput.value.trim().toLowerCase();

  return speakers.filter((speaker) => {
    const matchesFilter = activeFilter === 'Tous' || speaker.category === activeFilter;
    const matchesSearch =
      !searched ||
      speaker.name.toLowerCase().includes(searched) ||
      speaker.role.toLowerCase().includes(searched) ||
      speaker.specialty.toLowerCase().includes(searched) ||
      speaker.location.toLowerCase().includes(searched);

    return matchesFilter && matchesSearch;
  });
};

const renderSpeakers = () => {
  const filtered = getFilteredSpeakers();

  if (!filtered.length) {
    speakerGrid.innerHTML = `
      <div class="empty-state">
        <p>Aucun résultat pour cette recherche.</p>
      </div>
    `;
    return;
  }

  const currentSelection = filtered.some((speaker) => speaker.id === selectedId)
    ? selectedId
    : filtered[0].id;

  selectedId = currentSelection;

  speakerGrid.innerHTML = filtered
    .map(
      (speaker) => `
        <article class="speaker-card ${speaker.id === selectedId ? 'selected' : ''}" data-id="${speaker.id}">
          <div class="card-body">
            <div class="speaker-card-header">
              <img class="speaker-avatar" src="${speaker.image}" alt="${speaker.name}" />
              <div class="card-topline">
                <span class="card-badge">${speaker.status}</span>
                <span>⭐ 4.9</span>
              </div>
            </div>
            <h4>${speaker.name}</h4>
            <p class="role">${speaker.role}</p>
            <p class="location">📍 ${speaker.location}</p>
            <div class="card-meta">
              <span>${speaker.specialty}</span>
              <strong>${speaker.sermons.length} sermons</strong>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  speakerGrid.querySelectorAll('.speaker-card').forEach((card) => {
    card.addEventListener('click', () => {
      const chosenId = Number(card.dataset.id);
      selectedId = chosenId;
      const selectedSpeaker = speakers.find((speaker) => speaker.id === chosenId);
      activeSpeaker = selectedSpeaker;
      renderSpeakerDetails(selectedSpeaker);
      renderSpeakers();
    });
  });
};

const renderSpeakerDetails = (speaker) => {
  const firstSermon = speaker.sermons[0];

  detailProfile.innerHTML = `
    <div class="profile-showcase">
      <div class="profile-cover" style="background-image: url('${speaker.image}')"></div>
      <div class="profile-summary">
        <span class="eyebrow">Profil</span>
        <div class="profile-name-wrap">
          <h3>${speaker.name}</h3>
          <p>${speaker.role}</p>
        </div>
        <div class="profile-tags">
          <span>${speaker.specialty}</span>
          <span>${speaker.location}</span>
        </div>
      </div>
    </div>

    <div class="profile-intro">
      <p>${speaker.bio}</p>
    </div>

    <div class="profile-grid">
      <div class="info-block">
        <span>Message</span>
        <p>${speaker.profile.quote}</p>
      </div>
      <div class="info-block">
        <span>Âge</span>
        <p>${speaker.profile.age}</p>
      </div>
      <div class="info-block full-width">
        <span>Détail</span>
        <p>${speaker.profile.desc}</p>
      </div>
      <div class="info-block full-width">
        <span>Focus</span>
        <p>${speaker.profile.focus}</p>
      </div>
    </div>
  `;

  trackList.innerHTML = `
    <div class="track-list-header">
      <h4>Tous les discours</h4>
      <span>${speaker.sermons.length} titres</span>
    </div>
    <div class="track-list-items">
      ${speaker.sermons
        .map(
          (sermon, index) => `
            <div class="track-row ${index === 0 ? 'active' : ''}" data-index="${index}">
              <button class="track-item ${index === 0 ? 'active' : ''}" data-index="${index}" type="button">
                ${sermon.title}
              </button>
              <button class="track-download" type="button" data-index="${index}" aria-label="Télécharger ${sermon.title}">↓</button>
            </div>
          `
        )
        .join('')}
    </div>
  `;

  trackList.querySelectorAll('.track-item').forEach((button) => {
    button.addEventListener('click', () => {
      playTrack(speaker, Number(button.dataset.index));
    });
  });

  trackList.querySelectorAll('.track-download').forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      await downloadTrack(speaker, Number(button.dataset.index));
    });
  });

  playTrack(speaker, 0);
  currentTrackEl.textContent = firstSermon.title;
};

const updateProgress = () => {
  const duration = audioPlayer.duration || 0;
  const current = audioPlayer.currentTime || 0;

  if (duration > 0) {
    const percentage = (current / duration) * 100;
    seekBar.value = percentage;
    currentTimeEl.textContent = formatTime(current);
    durationTimeEl.textContent = formatTime(duration);
  }
};

const togglePlayback = async () => {
  if (audioPlayer.paused) {
    try {
      await audioPlayer.play();
      playPauseBtn.textContent = '⏸';
    } catch (error) {
      console.warn('Lecture impossible.', error);
    }
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
  }
};

const jumpToTrack = (direction) => {
  if (!activeSpeaker) return;
  const nextIndex = Math.min(Math.max(activeIndex + direction, 0), activeSpeaker.sermons.length - 1);
  playTrack(activeSpeaker, nextIndex);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderSpeakers();

    const nextSpeaker = getFilteredSpeakers()[0];
    if (nextSpeaker) {
      selectedId = nextSpeaker.id;
      renderSpeakerDetails(nextSpeaker);
    }
  });
});

searchInput.addEventListener('input', () => {
  renderSpeakers();

  const nextSpeaker = getFilteredSpeakers()[0];
  if (nextSpeaker) {
    selectedId = nextSpeaker.id;
    renderSpeakerDetails(nextSpeaker);
  }
});

prevBtn.addEventListener('click', () => jumpToTrack(-1));
nextBtn.addEventListener('click', () => jumpToTrack(1));
playPauseBtn.addEventListener('click', togglePlayback);
downloadBtn.addEventListener('click', async () => {
  if (!activeSpeaker) return;
  await downloadTrack(activeSpeaker, activeIndex);
});

seekBar.addEventListener('input', (event) => {
  const duration = audioPlayer.duration || 0;
  const value = Number(event.target.value);
  audioPlayer.currentTime = (value / 100) * duration;
  updateProgress();
});

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('loadedmetadata', updateProgress);
audioPlayer.addEventListener('error', () => {
  setDownloadStatus('Le fichier audio n’a pas pu être chargé.');
  showToast('Lecture audio interrompue');
  playPauseBtn.textContent = '▶';
});
audioPlayer.addEventListener('ended', () => {
  playPauseBtn.textContent = '▶';
  jumpToTrack(1);
});

const init = () => {
  document.body.classList.add('launching');
  beginLaunchSequence();
  selectedId = FEATURED_SPEAKER_ID;
  activeSpeaker = speakers[0];
  renderSpeakers();
  renderSpeakerDetails(speakers[0]);
};

init();
