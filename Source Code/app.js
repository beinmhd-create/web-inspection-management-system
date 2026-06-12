const STORAGE_KEY = "inspeksi-safety-hub-reports-v2";

const categories = [
  {
    id: "first-aid-kit",
    chip: "HSE / Medical",
    title: "Inspeksi Kotak Obat",
    code: "HSE/FORM-06",
    description:
      "Checklist keselamatan untuk perlengkapan P3K lengkap dengan quantity standar berdasarkan tipe kotak obat.",
    summary: "22 item inspeksi, cocok untuk proyek, workshop, dan site office.",
    variants: [
      { id: "A", label: "A (25)" },
      { id: "B", label: "B (50)" },
      { id: "C", label: "C (100)" },
    ],
    items: [
      { name: "Wrapped sterile gauze / Kasa steril terbungkus", quantities: { A: 20, B: 40, C: 40 } },
      { name: "Roll type gauze 5 cm / Kasa gulung 5 cm", quantities: { A: 2, B: 4, C: 6 } },
      { name: "Roll type gauze 10 cm / Kasa gulung 10 cm", quantities: { A: 2, B: 4, C: 6 } },
      { name: "Roll type plaster 1.25 cm", quantities: { A: 2, B: 4, C: 6 } },
      { name: "Hansaplast", quantities: { A: 10, B: 15, C: 20 } },
      { name: "Cotton 25 grams / Kapas 25 gram", quantities: { A: 1, B: 2, C: 3 } },
      { name: "Triangular bandages / Kain segi tiga", quantities: { A: 2, B: 4, C: 6 } },
      { name: "Scissor / Gunting", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Pin / Peniti", quantities: { A: 12, B: 12, C: 12 } },
      { name: "Sterile rubber gloves / Sarung tangan sekali pakai", quantities: { A: 2, B: 3, C: 4 } },
      { name: "Non re-breathing mask / Masker oksigen", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Tweezers / Pinset", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Torch light / Lampu senter", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Eyewash / Pencuci mata", quantities: { A: 1, B: 2, C: 3 } },
      { name: "Sterile plastic bag / Kantong plastik bersih", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Povidon iodine 60 ml", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Alcohol 70%", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Neck collar / Penyanggah leher", quantities: { A: 2, B: 2, C: 2 } },
      { name: "Splint / Penyanggah tulang patah", quantities: { A: 2, B: 2, C: 2 } },
      { name: "Stretcher / Tandu", quantities: { A: 1, B: 1, C: 1 } },
      { name: "First Aid Manual Book / Buku panduan P3K", quantities: { A: 1, B: 1, C: 1 } },
      { name: "Log Book / Buku catatan", quantities: { A: 1, B: 1, C: 1 } },
    ],
  },
  {
    id: "apar",
    chip: "Fire Safety",
    title: "Inspeksi APAR",
    code: "HSE/FORM-02",
    description:
      "Pemeriksaan APAR untuk memastikan alat pemadam kebakaran selalu siap digunakan di area kerja.",
    summary: "10 poin pengecekan untuk tabung, pin, label, hingga tekanan.",
    variants: [
      { id: "standard", label: "Standar" },
      { id: "warehouse", label: "Gudang" },
    ],
    items: [
      { name: "Tabung APAR berada di lokasi yang ditentukan", quantities: { standard: 1, warehouse: 1 } },
      { name: "Akses ke APAR tidak terhalang barang", quantities: { standard: 1, warehouse: 1 } },
      { name: "Pressure gauge berada pada zona hijau", quantities: { standard: 1, warehouse: 1 } },
      { name: "Pin pengaman dan segel masih utuh", quantities: { standard: 1, warehouse: 1 } },
      { name: "Selang dan nozzle dalam kondisi baik", quantities: { standard: 1, warehouse: 1 } },
      { name: "Label instruksi terbaca jelas", quantities: { standard: 1, warehouse: 1 } },
      { name: "Tanggal inspeksi terakhir masih berlaku", quantities: { standard: 1, warehouse: 1 } },
      { name: "Berat tabung sesuai standar", quantities: { standard: 1, warehouse: 1 } },
      { name: "Bracket atau dudukan kokoh", quantities: { standard: 1, warehouse: 1 } },
      { name: "Tidak ada korosi atau kebocoran", quantities: { standard: 1, warehouse: 1 } },
    ],
  },
  {
    id: "safety-box",
    chip: "Emergency Gear",
    title: "Inspeksi Spill Kit",
    code: "HSE/FORM-08",
    description:
      "Checklist untuk memastikan spill kit lengkap dan siap digunakan ketika terjadi tumpahan bahan.",
    summary: "9 item perlengkapan serap, APD, dan wadah limbah.",
    variants: [
      { id: "light", label: "Light Duty" },
      { id: "heavy", label: "Heavy Duty" },
    ],
    items: [
      { name: "Absorbent pads tersedia", quantities: { light: 20, heavy: 40 } },
      { name: "Absorbent socks tersedia", quantities: { light: 4, heavy: 8 } },
      { name: "Sarung tangan kimia tersedia", quantities: { light: 2, heavy: 4 } },
      { name: "Kacamata pelindung tersedia", quantities: { light: 2, heavy: 2 } },
      { name: "Masker atau respirator tersedia", quantities: { light: 2, heavy: 4 } },
      { name: "Kantong limbah tersedia", quantities: { light: 2, heavy: 6 } },
      { name: "Sekop kecil tersedia", quantities: { light: 1, heavy: 1 } },
      { name: "Instruksi penggunaan masih terbaca", quantities: { light: 1, heavy: 1 } },
      { name: "Kontainer spill kit dalam kondisi baik", quantities: { light: 1, heavy: 1 } },
    ],
  },
  {
    id: "ppe",
    chip: "PPE",
    title: "Inspeksi Safety Helmet",
    code: "HSE/FORM-04",
    description:
      "Form inspeksi APD untuk helm keselamatan, kebersihan, tali dagu, dan identitas penggunaan.",
    summary: "8 item inspeksi untuk kesiapan helmet pekerja lapangan.",
    variants: [
      { id: "staff", label: "Staff" },
      { id: "field", label: "Field" },
    ],
    items: [
      { name: "Cangkang helm bebas retak", quantities: { staff: 1, field: 1 } },
      { name: "Suspension di dalam helm masih kuat", quantities: { staff: 1, field: 1 } },
      { name: "Chin strap berfungsi baik", quantities: { staff: 1, field: 1 } },
      { name: "Warna dan identitas sesuai area kerja", quantities: { staff: 1, field: 1 } },
      { name: "Helm bersih dari oli dan bahan kimia", quantities: { staff: 1, field: 1 } },
      { name: "Tidak ada modifikasi tidak resmi", quantities: { staff: 1, field: 1 } },
      { name: "Tanggal produksi masih dalam masa pakai", quantities: { staff: 1, field: 1 } },
      { name: "Penyimpanan helm sesuai prosedur", quantities: { staff: 1, field: 1 } },
    ],
  },
  {
    id: "emergency-sign",
    chip: "Site Readiness",
    title: "Inspeksi Safety Sign",
    code: "HSE/FORM-09",
    description:
      "Pemeriksaan rambu keselamatan dan jalur evakuasi untuk menjaga area tetap mudah dipahami.",
    summary: "7 titik kontrol untuk penempatan dan kondisi rambu.",
    variants: [
      { id: "indoor", label: "Indoor" },
      { id: "outdoor", label: "Outdoor" },
    ],
    items: [
      { name: "Rambu evakuasi terpasang di posisi benar", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Teks dan simbol mudah dibaca", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Pencahayaan rambu cukup jelas", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Tidak ada rambu rusak atau pecah", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Arah panah sesuai jalur evakuasi", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Rambu tidak tertutup material proyek", quantities: { indoor: 1, outdoor: 1 } },
      { name: "Nomor kontak darurat masih valid", quantities: { indoor: 1, outdoor: 1 } },
    ],
  },
];

const state = {
  selectedCategoryId: "first-aid-kit",
  selectedVariantId: "A",
  reportData: {},
  savedReports: [],
  activeReportId: null,
  historyQuery: "",
  isDirty: false,
};

const elements = {
  categoryGrid: document.querySelector("#categoryGrid"),
  categoryCount: document.querySelector("#categoryCount"),
  filledCount: document.querySelector("#filledCount"),
  exportStatus: document.querySelector("#exportStatus"),
  formTitle: document.querySelector("#formTitle"),
  formCode: document.querySelector("#formCode"),
  categoryDescription: document.querySelector("#categoryDescription"),
  itemTotal: document.querySelector("#itemTotal"),
  progressLabel: document.querySelector("#progressLabel"),
  variantButtons: document.querySelector("#variantButtons"),
  checklistBody: document.querySelector("#checklistBody"),
  goodCount: document.querySelector("#goodCount"),
  rejectedCount: document.querySelector("#rejectedCount"),
  naCount: document.querySelector("#naCount"),
  pendingCount: document.querySelector("#pendingCount"),
  resetButton: document.querySelector("#resetButton"),
  csvButton: document.querySelector("#csvButton"),
  docButton: document.querySelector("#docButton"),
  inspectionDate: document.querySelector("#inspectionDate"),
  owner: document.querySelector("#owner"),
  project: document.querySelector("#project"),
  location: document.querySelector("#location"),
  inspector: document.querySelector("#inspector"),
  supervisor: document.querySelector("#supervisor"),
  recommendation: document.querySelector("#recommendation"),
  reportName: document.querySelector("#reportName"),
  newDraftButton: document.querySelector("#newDraftButton"),
  saveButton: document.querySelector("#saveButton"),
  activeReportLabel: document.querySelector("#activeReportLabel"),
  saveFeedback: document.querySelector("#saveFeedback"),
  historyCount: document.querySelector("#historyCount"),
  historySearch: document.querySelector("#historySearch"),
  historyList: document.querySelector("#historyList"),
};

const categoryCardTemplate = document.querySelector("#categoryCardTemplate");
const checklistRowTemplate = document.querySelector("#checklistRowTemplate");

function getSelectedCategory() {
  return categories.find((category) => category.id === state.selectedCategoryId) ?? categories[0];
}

function getCategoryById(categoryId) {
  return categories.find((category) => category.id === categoryId) ?? null;
}

function getVariantById(category, variantId) {
  return category?.variants.find((variant) => variant.id === variantId) ?? null;
}

function getSelectedVariant() {
  return getVariantById(getSelectedCategory(), state.selectedVariantId);
}

function getReportKey(categoryId = state.selectedCategoryId, variantId = state.selectedVariantId) {
  return `${categoryId}::${variantId}`;
}

function cloneRecord(record = {}) {
  return Object.fromEntries(Object.entries(record));
}

function ensureReportState(categoryId = state.selectedCategoryId, variantId = state.selectedVariantId) {
  const key = getReportKey(categoryId, variantId);
  if (!state.reportData[key]) {
    state.reportData[key] = {
      statuses: {},
      remarks: {},
    };
  }
  return state.reportData[key];
}

function getCurrentReportState() {
  return ensureReportState();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "inspection-report";
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `report-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getTodayLocal() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  try {
    return new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return String(value);
  }
}

function getEmptyMetadata() {
  return {
    inspectionDate: getTodayLocal(),
    owner: "",
    project: "",
    location: "",
    inspector: "",
    supervisor: "",
    recommendation: "",
  };
}

function setMetadata(metadata = {}) {
  const nextMetadata = {
    ...getEmptyMetadata(),
    ...metadata,
  };

  elements.inspectionDate.value = nextMetadata.inspectionDate;
  elements.owner.value = nextMetadata.owner;
  elements.project.value = nextMetadata.project;
  elements.location.value = nextMetadata.location;
  elements.inspector.value = nextMetadata.inspector;
  elements.supervisor.value = nextMetadata.supervisor;
  elements.recommendation.value = nextMetadata.recommendation;
}

function getMetadata() {
  return {
    inspectionDate: elements.inspectionDate.value,
    owner: elements.owner.value.trim(),
    project: elements.project.value.trim(),
    location: elements.location.value.trim(),
    inspector: elements.inspector.value.trim(),
    supervisor: elements.supervisor.value.trim(),
    recommendation: elements.recommendation.value.trim(),
  };
}

function buildDefaultReportName(category = getSelectedCategory(), metadata = getMetadata()) {
  const owner = metadata.owner || "Customer";
  return `${owner} - ${category.title}`;
}

function getVariantLabel(category, variantId) {
  return getVariantById(category, variantId)?.label ?? variantId;
}

function getCompletionStats(category, statuses = {}) {
  const counts = { Good: 0, Rejected: 0, NA: 0, pending: 0 };

  category.items.forEach((_, index) => {
    const status = statuses[index];
    if (!status || counts[status] === undefined) {
      counts.pending += 1;
      return;
    }
    counts[status] += 1;
  });

  return {
    ...counts,
    completed: category.items.length - counts.pending,
    total: category.items.length,
  };
}

function setSaveFeedback(message) {
  elements.saveFeedback.textContent = message;
}

function updateCurrentReportMeta() {
  const activeReport = state.savedReports.find((report) => report.id === state.activeReportId) ?? null;
  const draftName = elements.reportName.value.trim();

  if (activeReport) {
    const label = draftName || activeReport.reportName || buildDefaultReportName(getSelectedCategory());
    elements.activeReportLabel.textContent = state.isDirty
      ? `${label} (perubahan belum disimpan)`
      : label;
    return;
  }

  elements.activeReportLabel.textContent = draftName ? `${draftName} (draft)` : "Draft baru belum disimpan";
}

function hasCurrentDraftContent() {
  const metadata = getMetadata();
  const reportState = getCurrentReportState();

  return Boolean(
    elements.reportName.value.trim() ||
      metadata.owner ||
      metadata.project ||
      metadata.location ||
      metadata.inspector ||
      metadata.supervisor ||
      metadata.recommendation ||
      Object.keys(reportState.statuses).length ||
      Object.values(reportState.remarks).some((value) => String(value).trim())
  );
}

function markDirty(message) {
  state.isDirty = true;
  if (message) {
    setSaveFeedback(message);
  }
  updateCurrentReportMeta();
}

function clearDirty(message) {
  state.isDirty = false;
  if (message) {
    setSaveFeedback(message);
  }
  updateCurrentReportMeta();
}

function getReportDisplayName(report) {
  const category = getCategoryById(report.categoryId) ?? getSelectedCategory();
  return report.reportName || buildDefaultReportName(category, report.metadata ?? getMetadata());
}

function normalizeReport(report) {
  const category = getCategoryById(report?.categoryId) ?? categories[0];
  const variant = getVariantById(category, report?.variantId) ?? category.variants[0];
  const now = new Date().toISOString();

  return {
    id: String(report?.id ?? createId()),
    reportName: String(report?.reportName ?? ""),
    categoryId: category.id,
    variantId: variant.id,
    metadata: {
      ...getEmptyMetadata(),
      ...report?.metadata,
    },
    statuses: cloneRecord(report?.statuses ?? {}),
    remarks: cloneRecord(report?.remarks ?? {}),
    createdAt: report?.createdAt ?? report?.updatedAt ?? now,
    updatedAt: report?.updatedAt ?? report?.createdAt ?? now,
  };
}

function loadSavedReports() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      state.savedReports = [];
      return;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      state.savedReports = [];
      return;
    }

    state.savedReports = parsed.map(normalizeReport);
  } catch {
    state.savedReports = [];
    setSaveFeedback("Riwayat inspeksi tidak bisa dibaca dari browser ini.");
  }
}

function persistSavedReports() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedReports));
    return true;
  } catch {
    setSaveFeedback("Browser ini tidak mengizinkan penyimpanan lokal.");
    return false;
  }
}

function renderCategories() {
  elements.categoryGrid.innerHTML = "";
  elements.categoryCount.textContent = String(categories.length);

  categories.forEach((category) => {
    const fragment = categoryCardTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".category-card");
    button.dataset.categoryId = category.id;
    button.querySelector(".category-chip").textContent = category.chip;
    button.querySelector("h3").textContent = category.title;
    button.querySelector(".category-summary").textContent = category.summary;
    button.querySelector(".item-count").textContent = `${category.items.length} item`;

    if (category.id === state.selectedCategoryId) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      const shouldMarkDirty = state.activeReportId !== null || hasCurrentDraftContent();
      state.selectedCategoryId = category.id;
      state.selectedVariantId = category.variants[0].id;
      state.activeReportId = null;
      if (shouldMarkDirty) {
        markDirty("Kategori inspeksi diganti. Simpan kembali jika ingin menjadikannya laporan baru.");
      } else {
        state.isDirty = false;
        updateCurrentReportMeta();
      }
      render();
    });

    elements.categoryGrid.appendChild(fragment);
  });
}

function renderVariants(category) {
  elements.variantButtons.innerHTML = "";

  category.variants.forEach((variant) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "variant-button";
    button.textContent = variant.label;

    if (variant.id === state.selectedVariantId) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      const shouldMarkDirty = state.activeReportId !== null || hasCurrentDraftContent();
      state.selectedVariantId = variant.id;
      state.activeReportId = null;
      if (shouldMarkDirty) {
        markDirty("Tipe perlengkapan diganti. Simpan kembali jika ingin menjadikannya laporan baru.");
      } else {
        state.isDirty = false;
        updateCurrentReportMeta();
      }
      render();
    });

    elements.variantButtons.appendChild(button);
  });
}

function renderChecklist() {
  const category = getSelectedCategory();
  const reportState = getCurrentReportState();
  elements.checklistBody.innerHTML = "";

  category.items.forEach((item, index) => {
    const fragment = checklistRowTemplate.content.cloneNode(true);
    fragment.querySelector(".number-cell").textContent = String(index + 1).padStart(2, "0");
    fragment.querySelector(".item-cell").textContent = item.name;
    fragment.querySelector(".quantity-cell").textContent = String(item.quantities[state.selectedVariantId] ?? "-");

    const buttons = fragment.querySelectorAll(".status-group button");
    buttons.forEach((button) => {
      const status = button.dataset.status;
      if (reportState.statuses[index] === status) {
        button.classList.add("is-active");
      }

      button.addEventListener("click", () => {
        reportState.statuses[index] = status;
        markDirty();
        renderChecklist();
        updateSummary();
      });
    });

    const remarksInput = fragment.querySelector(".remarks-input");
    remarksInput.value = reportState.remarks[index] ?? "";
    remarksInput.addEventListener("input", (event) => {
      reportState.remarks[index] = event.target.value;
      markDirty();
    });

    elements.checklistBody.appendChild(fragment);
  });
}

function updateSummary() {
  const category = getSelectedCategory();
  const reportState = getCurrentReportState();
  const stats = getCompletionStats(category, reportState.statuses);

  elements.goodCount.textContent = String(stats.Good);
  elements.rejectedCount.textContent = String(stats.Rejected);
  elements.naCount.textContent = String(stats.NA);
  elements.pendingCount.textContent = String(stats.pending);
  elements.itemTotal.textContent = `${stats.total} item`;
  elements.progressLabel.textContent = `${stats.completed}/${stats.total} item terisi`;
  elements.filledCount.textContent = `${stats.completed}/${stats.total}`;
  elements.exportStatus.textContent = stats.pending === 0 ? "Siap diunduh" : "Belum lengkap";
}

function renderFormMeta(category) {
  const variant = getSelectedVariant();
  elements.formTitle.textContent = category.title;
  elements.formCode.textContent = category.code;
  elements.categoryDescription.textContent = category.description;
  elements.reportName.placeholder = `Contoh: Customer - ${category.title}${variant ? ` ${variant.label}` : ""}`;
}

function matchesHistoryQuery(report, query) {
  if (!query) {
    return true;
  }

  const category = getCategoryById(report.categoryId);
  const haystack = [
    getReportDisplayName(report),
    category?.title,
    report.metadata.owner,
    report.metadata.project,
    report.metadata.location,
    report.metadata.inspector,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function renderHistoryList() {
  const filteredReports = [...state.savedReports]
    .sort((left, right) => new Date(right.updatedAt) - new Date(left.updatedAt))
    .filter((report) => matchesHistoryQuery(report, state.historyQuery));

  elements.historyCount.textContent = `${state.savedReports.length} tersimpan`;
  elements.historyList.innerHTML = "";

  if (filteredReports.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = state.historyQuery
      ? `
        <strong>Tidak ada laporan yang cocok</strong>
        <p>Coba kata kunci lain, atau simpan inspeksi baru supaya masuk ke riwayat.</p>
      `
      : `
        <strong>Belum ada laporan tersimpan</strong>
        <p>Isi checklist lalu tekan tombol simpan supaya customer bisa membuka kembali datanya dari browser ini.</p>
      `;
    elements.historyList.appendChild(emptyState);
    return;
  }

  filteredReports.forEach((report) => {
    const category = getCategoryById(report.categoryId) ?? getSelectedCategory();
    const stats = getCompletionStats(category, report.statuses);
    const card = document.createElement("article");
    card.className = "history-card";

    if (report.id === state.activeReportId) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <div class="history-card-head">
        <div>
          <strong>${escapeHtml(getReportDisplayName(report))}</strong>
          <p>${escapeHtml(category.title)} • ${escapeHtml(getVariantLabel(category, report.variantId))}</p>
        </div>
        <span class="history-progress">${stats.completed}/${stats.total}</span>
      </div>

      <div class="history-meta">
        <span>${escapeHtml(report.metadata.owner || "Tanpa owner")} • ${escapeHtml(report.metadata.project || "Tanpa project")}</span>
        <span>${escapeHtml(formatDateTime(report.updatedAt))}</span>
      </div>

      <div class="history-actions">
        <button type="button" class="secondary-button" data-action="open">Muat</button>
        <button type="button" class="ghost-button" data-action="delete">Hapus</button>
      </div>
    `;

    card.querySelector('[data-action="open"]').addEventListener("click", () => {
      loadReport(report.id);
    });

    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      deleteReport(report.id);
    });

    elements.historyList.appendChild(card);
  });
}

function render() {
  const category = getSelectedCategory();
  renderCategories();
  renderFormMeta(category);
  renderVariants(category);
  renderChecklist();
  updateSummary();
  updateCurrentReportMeta();
  renderHistoryList();
}

function buildRowsForExport() {
  const category = getSelectedCategory();
  const reportState = getCurrentReportState();

  return category.items.map((item, index) => ({
    no: index + 1,
    item: item.name,
    quantity: item.quantities[state.selectedVariantId] ?? "-",
    status: reportState.statuses[index] ?? "",
    remarks: reportState.remarks[index] ?? "",
  }));
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function getExportBaseName() {
  const reportName = elements.reportName.value.trim() || buildDefaultReportName(getSelectedCategory());
  return slugify(reportName);
}

function exportCsv() {
  const category = getSelectedCategory();
  const variant = getSelectedVariant();
  const metadata = getMetadata();
  const rows = buildRowsForExport();
  const csvLines = [
    ["Report Name", elements.reportName.value.trim() || buildDefaultReportName(category)],
    ["Category", category.title],
    ["Form Code", category.code],
    ["Variant", variant?.label ?? state.selectedVariantId],
    ["Inspection Date", metadata.inspectionDate],
    ["Owner", metadata.owner],
    ["Project", metadata.project],
    ["Location", metadata.location],
    ["Inspector", metadata.inspector],
    ["Supervisor", metadata.supervisor],
    ["Recommendation", metadata.recommendation],
    [],
    ["No", "Item", "Qty Standar", "Status", "Remarks"],
    ...rows.map((row) => [row.no, row.item, row.quantity, row.status, row.remarks]),
  ];

  const csv = csvLines
    .map((line) =>
      line
        .map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`)
        .join(",")
    )
    .join("\n");

  downloadFile(`${getExportBaseName()}.csv`, csv, "text/csv;charset=utf-8;");
}

function exportDoc() {
  const category = getSelectedCategory();
  const variant = getSelectedVariant();
  const metadata = getMetadata();
  const rows = buildRowsForExport();
  const title = elements.reportName.value.trim() || buildDefaultReportName(category);
  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.no)}</td>
          <td>${escapeHtml(row.item)}</td>
          <td>${escapeHtml(row.quantity)}</td>
          <td>${escapeHtml(row.status || "-")}</td>
          <td>${escapeHtml(row.remarks || "-")}</td>
        </tr>
      `
    )
    .join("");

  const documentContent = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #222; }
          h1 { margin-bottom: 8px; }
          table { width: 100%; border-collapse: collapse; margin-top: 18px; }
          th, td { border: 1px solid #999; padding: 8px; vertical-align: top; }
          th { background: #f3ede7; text-align: left; }
          .meta { margin: 0 0 18px; }
          .meta p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(title)}</h1>
        <div class="meta">
          <p><strong>Kategori:</strong> ${escapeHtml(category.title)}</p>
          <p><strong>Form Code:</strong> ${escapeHtml(category.code)}</p>
          <p><strong>Variant:</strong> ${escapeHtml(variant?.label ?? state.selectedVariantId)}</p>
          <p><strong>Tanggal Inspeksi:</strong> ${escapeHtml(metadata.inspectionDate || "-")}</p>
          <p><strong>Owner:</strong> ${escapeHtml(metadata.owner || "-")}</p>
          <p><strong>Project:</strong> ${escapeHtml(metadata.project || "-")}</p>
          <p><strong>Lokasi:</strong> ${escapeHtml(metadata.location || "-")}</p>
          <p><strong>Inspector:</strong> ${escapeHtml(metadata.inspector || "-")}</p>
          <p><strong>Supervisor:</strong> ${escapeHtml(metadata.supervisor || "-")}</p>
          <p><strong>Recommendation:</strong> ${escapeHtml(metadata.recommendation || "-")}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Qty Standar</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </body>
    </html>
  `;

  downloadFile(`${getExportBaseName()}.doc`, documentContent, "application/msword");
}

function buildCurrentReportRecord() {
  const category = getSelectedCategory();
  const existingReport = state.savedReports.find((report) => report.id === state.activeReportId) ?? null;
  const reportState = getCurrentReportState();
  const now = new Date().toISOString();
  const reportName = elements.reportName.value.trim() || buildDefaultReportName(category);

  elements.reportName.value = reportName;

  return normalizeReport({
    id: existingReport?.id ?? createId(),
    reportName,
    categoryId: category.id,
    variantId: state.selectedVariantId,
    metadata: getMetadata(),
    statuses: cloneRecord(reportState.statuses),
    remarks: cloneRecord(reportState.remarks),
    createdAt: existingReport?.createdAt ?? now,
    updatedAt: now,
  });
}

function saveCurrentReport() {
  const report = buildCurrentReportRecord();
  const reportIndex = state.savedReports.findIndex((item) => item.id === report.id);

  if (reportIndex === -1) {
    state.savedReports.unshift(report);
  } else {
    state.savedReports[reportIndex] = report;
  }

  if (!persistSavedReports()) {
    return;
  }

  state.activeReportId = report.id;
  clearDirty(`Laporan "${getReportDisplayName(report)}" berhasil disimpan.`);
  renderHistoryList();
}

function loadReport(reportId) {
  const report = state.savedReports.find((item) => item.id === reportId);
  if (!report) {
    return;
  }

  state.selectedCategoryId = report.categoryId;
  state.selectedVariantId = report.variantId;
  state.activeReportId = report.id;

  const reportState = ensureReportState(report.categoryId, report.variantId);
  reportState.statuses = cloneRecord(report.statuses);
  reportState.remarks = cloneRecord(report.remarks);

  elements.reportName.value = getReportDisplayName(report);
  setMetadata(report.metadata);

  clearDirty(`Laporan "${getReportDisplayName(report)}" berhasil dimuat.`);
  render();
}

function deleteReport(reportId) {
  const report = state.savedReports.find((item) => item.id === reportId);
  if (!report) {
    return;
  }

  const confirmed = window.confirm(`Hapus laporan "${getReportDisplayName(report)}" dari riwayat inspeksi?`);
  if (!confirmed) {
    return;
  }

  state.savedReports = state.savedReports.filter((item) => item.id !== reportId);

  if (!persistSavedReports()) {
    return;
  }

  if (state.activeReportId === reportId) {
    state.activeReportId = null;
    markDirty("Laporan dihapus dari riwayat. Data yang sedang terbuka tetap ada sebagai draft baru.");
  } else {
    setSaveFeedback(`Laporan "${getReportDisplayName(report)}" berhasil dihapus.`);
  }

  renderHistoryList();
}

function startNewDraft() {
  state.activeReportId = null;
  elements.reportName.value = "";
  setMetadata(getEmptyMetadata());

  const reportState = getCurrentReportState();
  reportState.statuses = {};
  reportState.remarks = {};

  clearDirty("Draft baru siap diisi.");
  render();
}

function resetChecklist() {
  state.activeReportId = null;

  const reportState = getCurrentReportState();
  reportState.statuses = {};
  reportState.remarks = {};
  elements.recommendation.value = "";

  markDirty("Checklist berhasil direset. Simpan lagi jika ingin menyimpan perubahan ini.");
  renderChecklist();
  updateSummary();
  renderHistoryList();
}

function handleMetadataChange() {
  markDirty();
}

elements.csvButton.addEventListener("click", exportCsv);
elements.docButton.addEventListener("click", exportDoc);
elements.resetButton.addEventListener("click", resetChecklist);
elements.newDraftButton.addEventListener("click", startNewDraft);
elements.saveButton.addEventListener("click", saveCurrentReport);
elements.historySearch.addEventListener("input", (event) => {
  state.historyQuery = event.target.value.trim().toLowerCase();
  renderHistoryList();
});

[
  elements.reportName,
  elements.inspectionDate,
  elements.owner,
  elements.project,
  elements.location,
  elements.inspector,
  elements.supervisor,
  elements.recommendation,
].forEach((element) => {
  element.addEventListener("input", handleMetadataChange);
  element.addEventListener("change", handleMetadataChange);
});

setMetadata(getEmptyMetadata());
loadSavedReports();
render();
