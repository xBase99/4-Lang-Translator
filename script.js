// --- [보안 모듈: 우클릭 & 단축키 차단] ---
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
        (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))
    ) {
        e.preventDefault();
        return false;
    }
});

// --- [4개국어 UI 다국어 사전] ---
const i18n = {
    ko: {
        title: "🗣️ 4개국어 번역기",
        subTitle: "영어 / 한국어 / 중국어 / 독일어 음성 및 사진 번역기",
        labelInput: "연습할 문장 입력 (큰 글씨 지원):",
        btnClear: "🗑️ 지우기",
        btnSTTEn: "🎤 English",
        btnSTTKo: "🎤 한국어",
        btnSTTZh: "🎤 中文",
        btnSTTDe: "🎤 Deutsch",
        btnSTTListening: "🎙️ 듣는 중...",
        btnSTTTranslating: "🔄 번역 중...",
        btnPlay: "▶ 전체 읽기",
        btnPlayActive: "▶ 읽는 중...",
        btnPause: "⏸️ 일시정지",
        btnResume: "▶ 다시 시작",
        btnStop: "⏹️ 정지",
        labelSpeed: "읽기 속도:",
        labelShowTrans: "번역문 화면 표시:",
        labelTransLang1: "번역 언어 1:",
        labelTransLang2: "번역 언어 2:",
        btnRecStart: "🎙️ 내 발음 녹음 시작",
        btnRecRecording: "🎙️ 녹음 중...",
        btnRecStop: "⏹️ 녹음 정지",
        btnDownload: "💾 녹음 저장",
        labelList: "분석 및 번역 문장 목록:",
        tagKo: "한국어",
        tagEn: "English",
        tagZh: "中文",
        tagDe: "Deutsch",
        placeholder: "여기에 문장을 직접 입력하거나 음성/사진 버튼을 이용하세요...",
        errMic: "마이크 접근 권한이 필요합니다.",
        errNoSTT: "이 브라우저는 음성 인식을 지원하지 않습니다.",
        tripTitle: "✈️ Trip.com 특별 제휴 혜택",
        tripDesc: "전 세계 호텔, 항공권을 최저가로 예약하세요!",
        tripBtn: "Trip.com 바로가기 ➔",
        demoText: "Practice makes perfect! 오늘부터 4개국어 연습을 시작해봅시다. 欢迎! Guten Tag!"
    },
    en: {
        title: "🗣️ 4-Lang Translator",
        subTitle: "English / Korean / Chinese / German Voice & Photo Translator",
        labelInput: "Enter text to practice (Large Text):",
        btnClear: "🗑️ Clear",
        btnSTTEn: "🎤 English",
        btnSTTKo: "🎤 Korean",
        btnSTTZh: "🎤 Chinese",
        btnSTTDe: "🎤 German",
        btnSTTListening: "🎙️ Listening...",
        btnSTTTranslating: "🔄 Translating...",
        btnPlay: "▶ Read All",
        btnPlayActive: "▶ Reading...",
        btnPause: "⏸️ Pause",
        btnResume: "▶ Resume",
        btnStop: "⏹️ Stop",
        labelSpeed: "Speed:",
        labelShowTrans: "Show Translations:",
        labelTransLang1: "Translate 1:",
        labelTransLang2: "Translate 2:",
        btnRecStart: "🎙️ Start Recording",
        btnRecRecording: "🎙️ Recording...",
        btnRecStop: "⏹️ Stop Rec",
        btnDownload: "💾 Save Audio",
        labelList: "Parsed Sentences & Translations:",
        tagKo: "Korean",
        tagEn: "English",
        tagZh: "Chinese",
        tagDe: "German",
        placeholder: "Type text here or use voice/photo buttons...",
        errMic: "Microphone access required.",
        errNoSTT: "Speech recognition not supported.",
        tripTitle: "✈️ Trip.com Partner Deals",
        tripDesc: "Book global hotels and flights at the best prices!",
        tripBtn: "Go to Trip.com ➔",
        demoText: "Practice makes perfect! 오늘부터 4개국어 연습을 시작해봅시다. 欢迎! Guten Tag!"
    },
    zh: {
        title: "🗣️ 四语翻译器",
        subTitle: "英语 / 韩语 / 中文 / 德语 语音及图片翻译器",
        labelInput: "输入练习句子（大字显示）：",
        btnClear: "🗑️ 清空",
        btnSTTEn: "🎤 英语",
        btnSTTKo: "🎤 韩语",
        btnSTTZh: "🎤 中文",
        btnSTTDe: "🎤 德语",
        btnSTTListening: "🎙️ 正在聆听...",
        btnSTTTranslating: "🔄 翻译中...",
        btnPlay: "▶ 朗读全部",
        btnPlayActive: "▶ 朗读中...",
        btnPause: "⏸️ 暂停",
        btnResume: "▶ 继续",
        btnStop: "⏹️ 停止",
        labelSpeed: "语速:",
        labelShowTrans: "显示翻译:",
        labelTransLang1: "翻译 1:",
        labelTransLang2: "翻译 2:",
        btnRecStart: "🎙️ 开始录音",
        btnRecRecording: "🎙️ 录音中...",
        btnRecStop: "⏹️ 停止录音",
        btnDownload: "💾 保存录音",
        labelList: "解析句子及翻译列表:",
        tagKo: "韩语",
        tagEn: "English",
        tagZh: "中文",
        tagDe: "德语",
        placeholder: "在此输入文本...",
        errMic: "需要麦克风权限。",
        errNoSTT: "不支持语音识别。",
        tripTitle: "✈️ Trip.com 独家特惠",
        tripDesc: "预订全球酒店机票！",
        tripBtn: "前往 Trip.com ➔",
        demoText: "Practice makes perfect! 오늘부터 4개국어 연습을 시작해봅시다. 欢迎! Guten Tag!"
    },
    de: {
        title: "🗣️ 4-Sprachen Übersetzer",
        subTitle: "Sprach- & Foto-Übersetzer",
        labelInput: "Text eingeben (Große Schrift):",
        btnClear: "🗑️ Löschen",
        btnSTTEn: "🎤 Englisch",
        btnSTTKo: "🎤 Koreanisch",
        btnSTTZh: "🎤 Chinesisch",
        btnSTTDe: "🎤 Deutsch",
        btnSTTListening: "🎙️ Hören...",
        btnSTTTranslating: "🔄 Übersetzen...",
        btnPlay: "▶ Alle lesen",
        btnPlayActive: "▶ Liest...",
        btnPause: "⏸️ Pause",
        btnResume: "▶ Weiter",
        btnStop: "⏹️ Stopp",
        labelSpeed: "Tempo:",
        labelShowTrans: "Übersetzung:",
        labelTransLang1: "Übersetzung 1:",
        labelTransLang2: "Übersetzung 2:",
        btnRecStart: "🎙️ Aufnahme",
        btnRecRecording: "🎙️ Aufnehmen...",
        btnRecStop: "⏹️ Stopp",
        btnDownload: "💾 Speichern",
        labelList: "Sätze:",
        tagKo: "Koreanisch",
        tagEn: "Englisch",
        tagZh: "Chinesisch",
        tagDe: "Deutsch",
        placeholder: "Text eingeben...",
        errMic: "Mikrofonzugriff erforderlich.",
        errNoSTT: "Spracherkennung nicht unterstützt.",
        tripTitle: "✈️ Trip.com Partnerangebote",
        tripDesc: "Buchen Sie Hotels und Flüge!",
        tripBtn: "Zu Trip.com ➔",
        demoText: "Practice makes perfect! 오늘부터 4개국어 연습을 시작해봅시다. 欢迎! Guten Tag!"
    }
};

let currentLang = localStorage.getItem('app_ui_lang') || 'ko';
let langRes = i18n[currentLang];

const uiLangSelect = document.getElementById('uiLangSelect');
const toggleTrans = document.getElementById('toggleTrans');
const toggleSingleMode = document.getElementById('toggleSingleMode'); // 단독 재생 옵션
const transLangSelect1 = document.getElementById('transLangSelect1');
const transLangSelect2 = document.getElementById('transLangSelect2');
const inputText = document.getElementById('inputText');
const sentenceList = document.getElementById('sentenceList');
const rateInput = document.getElementById('rate');
const rateValue = document.getElementById('rateValue');
const audioPlayback = document.getElementById('audioPlayback');

// 모달 요소
const settingsModal = document.getElementById('settingsModal');
const btnOpenSettings = document.getElementById('btnOpenSettings');
const closeSettingsModal = document.getElementById('closeSettingsModal');
const btnSaveSettings = document.getElementById('btnSaveSettings');

const logModal = document.getElementById('logModal');
const btnManageLogs = document.getElementById('btnManageLogs');
const closeLogModal = document.getElementById('closeLogModal');

const toggleLogMode = document.getElementById('toggleLogMode');
const logModeStatus = document.getElementById('logModeStatus');

const btnExportLogs = document.getElementById('btnExportLogs');
const btnImportLogs = document.getElementById('btnImportLogs');
const logFileInput = document.getElementById('logFileInput');
const btnClearAllLogs = document.getElementById('btnClearAllLogs');

// 스크롤 제어
const btnScrollPrev = document.getElementById('btnScrollPrev');
const btnScrollNext = document.getElementById('btnScrollNext');
const btnAutoScrollToggle = document.getElementById('btnAutoScrollToggle');

// OCR 이미지 인식
const imageInput = document.getElementById('imageInput');
const ocrStatus = document.getElementById('ocrStatus');

const btnClear = document.getElementById('btnClear');
const btnSTTEn = document.getElementById('btnSTTEn');
const btnSTTKo = document.getElementById('btnSTTKo');
const btnSTTZh = document.getElementById('btnSTTZh');
const btnSTTDe = document.getElementById('btnSTTDe');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const btnRecStart = document.getElementById('btnRecStart');
const btnRecStop = document.getElementById('btnRecStop');
const btnDownload = document.getElementById('btnDownload');

let isLogModeOn = false;
let isAutoScroll = false;
let autoScrollInterval = null;

// 모달 제어
btnOpenSettings.addEventListener('click', () => settingsModal.style.display = 'flex');
closeSettingsModal.addEventListener('click', () => settingsModal.style.display = 'none');
btnSaveSettings.addEventListener('click', () => {
    saveCurrentState();
    settingsModal.style.display = 'none';
    renderSentences();
});

btnManageLogs.addEventListener('click', () => {
    renderLogHistory();
    logModal.style.display = 'flex';
});
closeLogModal.addEventListener('click', () => logModal.style.display = 'none');

// 사진 OCR
imageInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    ocrStatus.textContent = "📷 사진 글자 분석 중... 잠시만 기다려주세요.";

    try {
        const worker = await Tesseract.createWorker('eng+kor+chi_sim+deu');
        const ret = await worker.recognize(file);
        await worker.terminate();

        const recognizedText = ret.data.text.trim();
        if (recognizedText) {
            inputText.value = inputText.value ? `${inputText.value}\n\n${recognizedText}` : recognizedText;
            ocrStatus.textContent = "✅ 사진 글자 추출 및 번역 완료!";
            appendToCurrentLog(recognizedText, "PHOTO_OCR");
            saveCurrentState();
            renderSentences();
        } else {
            ocrStatus.textContent = "❌ 사진에서 글자를 찾지 못했습니다.";
        }
    } catch (err) {
        ocrStatus.textContent = "❌ 사진 분석 중 오류가 발생했습니다.";
    }
});

// 스크롤 컨트롤
btnScrollPrev.addEventListener('click', () => sentenceList.scrollBy({ top: -60, behavior: 'smooth' }));
btnScrollNext.addEventListener('click', () => sentenceList.scrollBy({ top: 60, behavior: 'smooth' }));

btnAutoScrollToggle.addEventListener('click', () => {
    isAutoScroll = !isAutoScroll;
    if (isAutoScroll) {
        btnAutoScrollToggle.textContent = "⏸️ 넘김 정지";
        btnAutoScrollToggle.style.background = "#dc2626";
        autoScrollInterval = setInterval(() => {
            sentenceList.scrollBy({ top: 40, behavior: 'smooth' });
        }, 2000);
    } else {
        btnAutoScrollToggle.textContent = "🔄 연속 넘김";
        btnAutoScrollToggle.style.background = "#2563eb";
        clearInterval(autoScrollInterval);
    }
});

// 기록 관련
function getLocalLogs() { return JSON.parse(localStorage.getItem('app_dialogue_logs') || '[]'); }
function saveLocalLogs(logs) { localStorage.setItem('app_dialogue_logs', JSON.stringify(logs)); }

function appendToCurrentLog(text, sourceLang) {
    if (!isLogModeOn || !text.trim()) return;
    let logs = getLocalLogs();
    const today = new Date().toISOString().split('T')[0];
    let todayLog = logs.find(item => item.date === today);

    if (!todayLog) {
        todayLog = { id: Date.now(), date: today, entries: [] };
        logs.push(todayLog);
    }

    todayLog.entries.push({ time: new Date().toLocaleTimeString(), sourceLang, text });
    saveLocalLogs(logs);
}

toggleLogMode.addEventListener('change', (e) => {
    isLogModeOn = e.target.checked;
    logModeStatus.textContent = isLogModeOn ? "ON" : "OFF";
    logModeStatus.className = isLogModeOn ? "status-tag on" : "status-tag off";
});

function renderLogHistory() {
    const logs = getLocalLogs();
    const logHistoryList = document.getElementById('logHistoryList');
    logHistoryList.innerHTML = '';

    if (logs.length === 0) {
        logHistoryList.innerHTML = '<p style="text-align:center; color:#64748b; padding:1rem;">저장된 기록이 없습니다.</p>';
        return;
    }

    logs.forEach((logItem, index) => {
        const itemCard = document.createElement('div');
        itemCard.style.cssText = "background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:0.8rem; margin-bottom:0.75rem;";
        let entriesHtml = logItem.entries.map(e => `<div>• <b>[${e.time}] (${e.sourceLang}):</b> ${e.text}</div>`).join('');

        itemCard.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.85rem; color:#475569;">
                <span><b>📅 ${logItem.date}</b> (${logItem.entries.length}개)</span>
                <div>
                    <button onclick="loadLogToInput(${index})" style="padding:0.2rem 0.5rem;">불러오기</button>
                    <button onclick="deleteSingleLog(${index})" style="padding:0.2rem 0.5rem; background:#dc2626; color:white; border:none; border-radius:4px;">삭제</button>
                </div>
            </div>
            <div style="font-size:0.9rem; max-height:100px; overflow-y:auto; background:white; padding:0.5rem; border-radius:4px;">
                ${entriesHtml}
            </div>
        `;
        logHistoryList.appendChild(itemCard);
    });
}

window.loadLogToInput = function(index) {
    const logs = getLocalLogs();
    if (logs[index]) {
        inputText.value = logs[index].entries.map(e => e.text).join('\n');
        renderSentences();
        logModal.style.display = 'none';
    }
};

window.deleteSingleLog = function(index) {
    if (confirm("이 기록을 삭제하시겠습니까?")) {
        let logs = getLocalLogs();
        logs.splice(index, 1);
        saveLocalLogs(logs);
        renderLogHistory();
    }
};

btnClearAllLogs.addEventListener('click', () => {
    if (confirm("모든 기록을 전체 삭제하시겠습니까?")) {
        localStorage.removeItem('app_dialogue_logs');
        renderLogHistory();
    }
});

btnExportLogs.addEventListener('click', () => {
    const logs = getLocalLogs();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `dialogue_logs_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
});

btnImportLogs.addEventListener('click', () => logFileInput.click());
logFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const imported = JSON.parse(evt.target.result);
            if (Array.isArray(imported)) {
                saveLocalLogs(imported);
                renderLogHistory();
                alert("기록 불러오기 완료!");
            }
        } catch (err) { alert("유효하지 않은 파일입니다."); }
    };
    reader.readAsText(file);
});

// --- [번역 및 TTS 설정] ---
function applyMenuTranslationRules(menuLang) {
    if (menuLang === 'ko') { transLangSelect1.value = 'ko'; transLangSelect2.value = 'en'; }
    else if (menuLang === 'zh') { transLangSelect1.value = 'zh'; transLangSelect2.value = 'en'; }
    else if (menuLang === 'en') { transLangSelect1.value = 'en'; transLangSelect2.value = 'ko'; }
    else if (menuLang === 'de') { transLangSelect1.value = 'de'; transLangSelect2.value = 'en'; }
}

function loadSavedState() {
    const hasVisited = localStorage.getItem('app_has_visited');
    const savedText = localStorage.getItem('app_input_text');

    if (!hasVisited) {
        inputText.value = langRes.demoText;
        localStorage.setItem('app_has_visited', 'true');
        localStorage.setItem('app_input_text', inputText.value);
        applyMenuTranslationRules(currentLang);
    } else {
        if (savedText !== null) inputText.value = savedText;
        const savedLang1 = localStorage.getItem('app_trans_lang1');
        const savedLang2 = localStorage.getItem('app_trans_lang2');

        if (savedLang1) transLangSelect1.value = savedLang1;
        else applyMenuTranslationRules(currentLang);

        if (savedLang2) transLangSelect2.value = savedLang2;
    }

    const savedShowTrans = localStorage.getItem('app_show_trans');
    if (savedShowTrans !== null) toggleTrans.checked = (savedShowTrans === 'true');

    const savedSingleMode = localStorage.getItem('app_single_mode');
    if (savedSingleMode !== null && toggleSingleMode) toggleSingleMode.checked = (savedSingleMode === 'true');
}

function saveCurrentState() {
    localStorage.setItem('app_input_text', inputText.value);
    localStorage.setItem('app_ui_lang', currentLang);
    localStorage.setItem('app_show_trans', toggleTrans.checked);
    if (toggleSingleMode) localStorage.setItem('app_single_mode', toggleSingleMode.checked);
    localStorage.setItem('app_trans_lang1', transLangSelect1.value);
    localStorage.setItem('app_trans_lang2', transLangSelect2.value);
}

function updateLanguage(lang, autoUpdateDefaults = false) {
    currentLang = lang;
    langRes = i18n[lang];
    if (autoUpdateDefaults) applyMenuTranslationRules(lang);

    document.getElementById('docTitle').textContent = langRes.title;
    document.getElementById('uiTitle').textContent = langRes.title;
    document.getElementById('uiSubTitle').textContent = langRes.subTitle;
    document.getElementById('uiLabelInput').textContent = langRes.labelInput;
    document.getElementById('uiLabelSpeed').textContent = langRes.labelSpeed;
    document.getElementById('uiLabelShowTrans').textContent = langRes.labelShowTrans;
    document.getElementById('uiLabelTransLang1').textContent = langRes.labelTransLang1;
    document.getElementById('uiLabelTransLang2').textContent = langRes.labelTransLang2;
    document.getElementById('uiLabelList').textContent = langRes.labelList;
    document.getElementById('uiTripTitle').textContent = langRes.tripTitle;
    document.getElementById('uiTripDesc').textContent = langRes.tripDesc;
    document.getElementById('uiTripBtn').textContent = langRes.tripBtn;

    btnClear.textContent = langRes.btnClear;
    btnSTTEn.textContent = langRes.btnSTTEn;
    btnSTTKo.textContent = langRes.btnSTTKo;
    btnSTTZh.textContent = langRes.btnSTTZh;
    btnSTTDe.textContent = langRes.btnSTTDe;
    btnPlay.textContent = isPlaying ? langRes.btnPlayActive : langRes.btnPlay;
    btnPause.textContent = langRes.btnPause;
    btnStop.textContent = langRes.btnStop;
    btnRecStart.textContent = langRes.btnRecStart;
    btnRecStop.textContent = langRes.btnRecStop;
    btnDownload.textContent = langRes.btnDownload;

    inputText.placeholder = langRes.placeholder;
    saveCurrentState();
    renderSentences();
}

uiLangSelect.value = currentLang;
uiLangSelect.addEventListener('change', (e) => updateLanguage(e.target.value, true));

btnClear.addEventListener('click', () => {
    inputText.value = "";
    stopPlayback();
    saveCurrentState();
    renderSentences();
});

let sentences = [];
let currentIndex = 0;
let isPlaying = false;
let synth = window.speechSynthesis;
let voices = [];
let mediaRecorder = null;
let audioChunks = [];

const regEnglish = /[a-zA-Z]/;
const regKorean = /[\u3131-\u318E\uAC00-\uD7A3]/;
const regChinese = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;
const regGerman = /[äöüÄÖÜß]/;

function detectLanguage(text) {
    if ((text.match(new RegExp(regGerman, 'g')) || []).length > 0) return 'de';
    const enCount = (text.match(new RegExp(regEnglish, 'g')) || []).length;
    const koCount = (text.match(new RegExp(regKorean, 'g')) || []).length;
    const zhCount = (text.match(new RegExp(regChinese, 'g')) || []).length;

    if (enCount > 0 && enCount >= koCount && enCount >= zhCount) return 'en';
    if (zhCount > 0 && zhCount >= koCount) return 'zh';
    if (koCount > 0) return 'ko';
    return 'en';
}

function loadVoices() { voices = synth.getVoices(); }
loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoices;

function getBestVoice(langCode) {
    if (!voices || voices.length === 0) voices = synth.getVoices();
    const langMap = { 'en': 'en-US', 'ko': 'ko-KR', 'zh': 'zh-CN', 'de': 'de-DE' };
    const target = langMap[langCode] || 'en-US';
    let matched = voices.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(target.toLowerCase()));
    if (langCode === 'zh' && matched.length === 0) matched = voices.filter(v => v.lang.toLowerCase().startsWith('zh'));
    const best = matched.find(v => v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Google'));
    return best || matched[0] || null;
}

async function translateText(text, targetLang) {
    if (!targetLang || targetLang === 'none') return "";
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        return data[0].map(item => item[0]).join('');
    } catch (e) { return ""; }
}

function parseSentences(text) {
    if (!text.trim()) return [];
    const rawSegments = text.split(/(?<=[.!?;\n。！？；])\s+/);
    let parsed = [];

    for (let seg of rawSegments) {
        seg = seg.trim();
        if (!seg) continue;
        const chunks = seg.match(/([a-zA-ZäöüÄÖÜß0-9\s'\",.-]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\s，。！？；“”‘’]+|[\uAC00-\uD7A3\u3131-\u318E\s]+|[^a-zA-Z0-9\uAC00-\uD7A3\u3131-\u318E\u4E00-\u9FFF]+)/g) || [seg];
        let tempGroup = "";
        let lastLang = null;

        for (let chunk of chunks) {
            if (!chunk.trim()) continue;
            let lang = detectLanguage(chunk);
            if (lastLang === null || lastLang === lang) tempGroup += chunk;
            else {
                if (tempGroup.trim()) parsed.push(createSentenceObj(tempGroup.trim(), lastLang));
                tempGroup = chunk;
            }
            lastLang = lang;
        }
        if (tempGroup.trim()) parsed.push(createSentenceObj(tempGroup.trim(), lastLang));
    }
    return parsed;
}

function createSentenceObj(text, langCode) {
    const langMap = { 'en': 'en-US', 'ko': 'ko-KR', 'zh': 'zh-CN', 'de': 'de-DE' };
    return { text, langCode, lang: langMap[langCode], translation1: '', translation2: '' };
}

// --- [핵심: 단독 재생 모드 ON/OFF 처리 렌더링] ---
async function renderSentences() {
    sentences = parseSentences(inputText.value);
    sentenceList.innerHTML = '';

    const showTrans = toggleTrans.checked;
    const isSingleMode = toggleSingleMode ? toggleSingleMode.checked : false;
    const targetLang1 = transLangSelect1.value;
    const targetLang2 = transLangSelect2.value;

    for (let index = 0; index < sentences.length; index++) {
        const item = sentences[index];
        if (showTrans) {
            if (targetLang1 !== item.langCode) item.translation1 = await translateText(item.text, targetLang1);
            if (targetLang2 !== 'none' && targetLang2 !== item.langCode) item.translation2 = await translateText(item.text, targetLang2);
        }

        const card = document.createElement('div');
        card.className = `sentence-card ${index === currentIndex && isPlaying ? 'active' : ''}`;
        card.id = `card-${index}`;

        let tagLabel = langRes.tagEn;
        if (item.langCode === 'ko') tagLabel = langRes.tagKo;
        if (item.langCode === 'zh') tagLabel = langRes.tagZh;
        if (item.langCode === 'de') tagLabel = langRes.tagDe;

        let trans1Tag = langRes[`tag${targetLang1.charAt(0).toUpperCase() + targetLang1.slice(1)}`] || targetLang1;
        let trans2Tag = langRes[`tag${targetLang2.charAt(0).toUpperCase() + targetLang2.slice(1)}`] || targetLang2;

        let playControlsHtml = '';
        if (isSingleMode) {
            // 단독 재생 모드 ON: 각 언어별 전용 버튼 생성
            playControlsHtml = `
                <div class="single-play-group">
                    <button class="btn-lang-play" onclick="playSingleLanguageText('${encodeURIComponent(item.text)}', '${item.langCode}')">🔊 ${tagLabel}</button>
                    ${item.translation1 ? `<button class="btn-lang-play" onclick="playSingleLanguageText('${encodeURIComponent(item.translation1)}', '${targetLang1}')">🔊 ${trans1Tag}</button>` : ''}
                    ${item.translation2 ? `<button class="btn-lang-play" onclick="playSingleLanguageText('${encodeURIComponent(item.translation2)}', '${targetLang2}')">🔊 ${trans2Tag}</button>` : ''}
                </div>
            `;
        } else {
            // 단독 재생 모드 OFF: 기존 원터치 연쇄 재생
            playControlsHtml = `<button class="play-single-btn" onclick="playSingle(${index})">▶</button>`;
        }

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="sentence-text">${item.text}</div>
                <div>
                    <span class="lang-tag ${item.langCode}">${tagLabel}</span>
                    ${!isSingleMode ? playControlsHtml : ''}
                </div>
            </div>
            ${showTrans ? `
                <div class="translation-block">
                    ${item.translation1 ? `<div class="translation-text">💬 <b>${trans1Tag}:</b> ${item.translation1}</div>` : ''}
                    ${item.translation2 ? `<div class="translation-text">💬 <b>${trans2Tag}:</b> ${item.translation2}</div>` : ''}
                </div>
            ` : ''}
            ${isSingleMode ? playControlsHtml : ''}
        `;
        sentenceList.appendChild(card);
    }
}

// 특정 언어 문장 1개만 단독 재생 (다음 문장 넘김 없음)
window.playSingleLanguageText = function(encodedText, langCode) {
    const text = decodeURIComponent(encodedText);
    synth.cancel();

    const langMap = { 'en': 'en-US', 'ko': 'ko-KR', 'zh': 'zh-CN', 'de': 'de-DE' };
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langMap[langCode] || 'en-US';
    utterance.rate = parseFloat(rateInput.value);

    const voice = getBestVoice(langCode);
    if (voice) utterance.voice = voice;

    synth.speak(utterance);
};

function updateActiveCard(index) {
    document.querySelectorAll('.sentence-card').forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else { card.classList.remove('active'); }
    });
}

async function playNative(index) {
    if (index >= sentences.length || !isPlaying) {
        isPlaying = false; updateActiveCard(-1); btnPlay.textContent = langRes.btnPlay; return;
    }

    synth.cancel();
    currentIndex = index;
    const current = sentences[currentIndex];
    updateActiveCard(currentIndex);

    const showTrans = toggleTrans.checked;
    const targetLang1 = transLangSelect1.value;
    const targetLang2 = transLangSelect2.value;
    const langMap = { 'en': 'en-US', 'ko': 'ko-KR', 'zh': 'zh-CN', 'de': 'de-DE' };

    const origUtterance = new SpeechSynthesisUtterance(current.text);
    origUtterance.lang = current.lang;
    origUtterance.rate = parseFloat(rateInput.value);
    const origVoice = getBestVoice(current.langCode);
    if (origVoice) origUtterance.voice = origVoice;

    let queue = [origUtterance];

    if (showTrans) {
        if (current.translation1) {
            const u1 = new SpeechSynthesisUtterance(current.translation1);
            u1.lang = langMap[targetLang1];
            u1.rate = parseFloat(rateInput.value);
            const v1 = getBestVoice(targetLang1);
            if (v1) u1.voice = v1;
            queue.push(u1);
        }
        if (current.translation2) {
            const u2 = new SpeechSynthesisUtterance(current.translation2);
            u2.lang = langMap[targetLang2];
            u2.rate = parseFloat(rateInput.value);
            const v2 = getBestVoice(targetLang2);
            if (v2) u2.voice = v2;
            queue.push(u2);
        }
    }

    const lastUtterance = queue[queue.length - 1];
    lastUtterance.onend = () => { if (isPlaying) { currentIndex++; playNative(currentIndex); } };
    lastUtterance.onerror = () => { if (isPlaying) { currentIndex++; playNative(currentIndex); } };

    queue.forEach(u => synth.speak(u));
}

function startPlayback() {
    if (sentences.length === 0) return;
    if (synth.paused) { synth.resume(); isPlaying = true; btnPlay.textContent = langRes.btnPlayActive; return; }
    if (isPlaying) return;
    isPlaying = true;
    btnPlay.textContent = langRes.btnPlayActive;
    playNative(currentIndex);
}

function pausePlayback() { if (synth.speaking && !synth.paused) { synth.pause(); isPlaying = false; btnPlay.textContent = langRes.btnResume; } }
function stopPlayback() { synth.cancel(); isPlaying = false; currentIndex = 0; btnPlay.textContent = langRes.btnPlay; updateActiveCard(-1); }

window.playSingle = function(index) { stopPlayback(); isPlaying = true; btnPlay.textContent = langRes.btnPlayActive; playNative(index); };

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function startSpeechRecognition(langMode, btnElement, sourceLangName) {
    if (!SpeechRecognition) { alert(langRes.errNoSTT); return; }
    const recognition = new SpeechRecognition();
    recognition.lang = langMode;
    recognition.interimResults = false;

    try { recognition.start(); btnElement.textContent = langRes.btnSTTListening; btnElement.style.opacity = '0.7'; } catch (e) { recognition.stop(); }

    recognition.onresult = async (event) => {
        const spokenText = event.results[0][0].transcript;
        inputText.value = inputText.value ? `${inputText.value}\n\n${spokenText}` : spokenText;

        appendToCurrentLog(spokenText, sourceLangName);
        resetSTTButtons();
        stopPlayback();
        saveCurrentState();
        await renderSentences();
    };

    recognition.onerror = () => { alert(langRes.errMic); resetSTTButtons(); };
    recognition.onend = () => resetSTTButtons();
}

function resetSTTButtons() {
    btnSTTEn.textContent = langRes.btnSTTEn;
    btnSTTKo.textContent = langRes.btnSTTKo;
    btnSTTZh.textContent = langRes.btnSTTZh;
    btnSTTDe.textContent = langRes.btnSTTDe;
    btnSTTEn.style.opacity = '1.0';
    btnSTTKo.style.opacity = '1.0';
    btnSTTZh.style.opacity = '1.0';
    btnSTTDe.style.opacity = '1.0';
}

btnSTTEn.addEventListener('click', () => startSpeechRecognition('en-US', btnSTTEn, 'EN'));
btnSTTKo.addEventListener('click', () => startSpeechRecognition('ko-KR', btnSTTKo, 'KO'));
btnSTTZh.addEventListener('click', () => startSpeechRecognition('zh-CN', btnSTTZh, 'ZH'));
btnSTTDe.addEventListener('click', () => startSpeechRecognition('de-DE', btnSTTDe, 'DE'));

btnRecStart.addEventListener('click', async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { alert(langRes.errMic); return; }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayback.src = audioUrl; audioPlayback.style.display = 'inline-block';
            btnDownload.href = audioUrl;
            btnDownload.download = `voice_${Date.now()}.webm`;
            btnDownload.style.display = 'inline-flex';
        };
        mediaRecorder.start();
        btnRecStart.disabled = true; btnRecStop.disabled = false;
        btnRecStart.textContent = langRes.btnRecRecording;
    } catch (err) { alert(langRes.errMic); }
});

btnRecStop.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop(); mediaRecorder.stream.getTracks().forEach(t => t.stop());
        btnRecStart.disabled = false; btnRecStop.disabled = true;
        btnRecStart.textContent = langRes.btnRecStart;
    }
});

inputText.addEventListener('input', () => { stopPlayback(); saveCurrentState(); renderSentences(); });
rateInput.addEventListener('input', e => { rateValue.textContent = `${parseFloat(e.target.value).toFixed(1)}x`; });

btnPlay.addEventListener('click', startPlayback);
btnPause.addEventListener('click", pausePlayback);
btnStop.addEventListener('click', stopPlayback);

// 초기화
loadSavedState();
updateLanguage(currentLang, false);