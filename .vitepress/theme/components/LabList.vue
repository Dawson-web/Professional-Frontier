<template>
  <div class="lab-list">
    <div class="lab-list-title">
      <span style="font-size: 2rem; font-weight: 600"> CUIT 技术社团 </span>
      <span style="font-size: 1rem; color: #666; margin-top: 10px">
        如需加入，请自行提交pr/联系Epoch开发实验室~
        <span
          style="
            font-size: 1rem;
            color: #2563eb;
            margin-top: 10px;
            cursor: pointer;
          "
          @click="
            copyToClipboard({
              name: '',
              shortName: '',
              technologyStack: [],
              college: '',
              location: '',
              QQ: '',
              description: '',
              link: '',
            })
          "
        >
          (点击获取格式)
        </span>
      </span>
    </div>
    <div class="labs">
      <div v-for="(lab, index) in labs" :key="index" class="lab-item">
        <div
          class="card"
          :class="{ 'is-flipped': flippedCards[index] }"
          @mouseenter="toggleCard(index)"
          @mouseleave="toggleCard(index)"
        >
          <!-- 卡片正面 -->
          <div class="card-face">
            <div
              class="card-decorator"
              :style="{
                backgroundImage: `url(${getAvatar(lab.QQ)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
                filter: 'blur(5px)',
              }"
            ></div>
            <div class="face-content">
              <div class="avatar-container">
                <img class="avatar" :src="getAvatar(lab.QQ)" alt="" />
                <div class="avatar-ring"></div>
              </div>

              <div class="lab-info">
                <h3 class="lab-name">{{ lab.name }}</h3>
                <p class="lab-desc">{{ lab.description }}</p>
              </div>

              <div class="tech-stack">
                <span
                  v-for="(tech, i) in lab.technologyStack.slice(0, 4)"
                  :key="i"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- 卡片反面 -->
          <div class="card-back">
            <div class="back-content">
              <div class="back-header">
                <div
                  class="lab-initials"
                  :style="{
                    background: getGradient(lab.name),
                    backgroundImage: `url(${getAvatar(lab.QQ)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
                ></div>
                <h3 class="lab-title">{{ lab.name }}</h3>
              </div>

              <div class="info-container">
                <div class="info-item">
                  <div class="info-icon college-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                      />
                    </svg>
                  </div>
                  <div class="info-text">
                    <div class="info-label">学院</div>
                    <div class="info-value">{{ lab.college }}</div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon location-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      />
                    </svg>
                  </div>
                  <div class="info-text">
                    <div class="info-label">位置</div>
                    <div class="info-value">{{ lab.location }}</div>
                  </div>
                </div>

                <div class="info-item qq-item">
                  <div class="info-icon qq-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.003 2c-5.518 0-9.998 4.48-9.998 9.997 0 5.518 4.48 9.998 9.998 9.998 5.517 0 9.997-4.48 9.997-9.998 0-5.517-4.48-9.997-9.997-9.997zm2.53 13.172a.57.57 0 01-.285-.113 7.92 7.92 0 01-.571-.454c-.269.342-.56.674-.866.996a6.64 6.64 0 01-.865.71 2.34 2.34 0 01-.543.287.396.396 0 01-.258-.059.428.428 0 01-.143-.198 1.88 1.88 0 01-.042-.739c.022-.134.056-.265.099-.393.039-.111.094-.243.163-.395a.42.42 0 00.057-.216.326.326 0 00-.072-.175.295.295 0 00-.131-.101 1.103 1.103 0 00-.275-.039l-.566-.029c-.263-.018-.504-.068-.728-.15a1.678 1.678 0 01-.557-.312 1.213 1.213 0 01-.358-.503 1.964 1.964 0 01-.128-.729c0-.312.083-.604.247-.877a2.87 2.87 0 01.612-.732c.25-.21.524-.381.827-.514.178-.078.35-.139.517-.183.166-.042.33-.065.491-.065l.353.007c.122.011.242.030.358.057a2.93 2.93 0 01.572.202c.262.122.495.275.698.459.169.154.295.32.378.498.082.179.124.373.124.582a.86.86 0 01-.081.386.694.694 0 01-.209.262.945.945 0 01-.282.15 2.966 2.966 0 01-.315.097c.162.064.308.141.437.232.128.091.229.198.303.32.072.122.108.265.108.429 0 .132-.023.253-.068.364a.986.986 0 01-.152.265z"
                      />
                    </svg>
                  </div>

                  <div class="info-text">
                    <div class="info-label">QQ群</div>
                    <div
                      class="info-value copy-value"
                      @click="copyToClipboard(lab.QQ)"
                    >
                      {{ lab.QQ }}
                      <div class="copy-indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="lab.link" class="info-item link-item">
                  <div class="info-icon link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                      />
                      <path
                        d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7z"
                      />
                    </svg>
                  </div>
                  <div class="info-text">
                    <div class="info-label">官方网站</div>
                    <a :href="lab.link" target="_blank" class="info-value"
                      >Click Me</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="decorative-elements">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
              <div class="circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义Toast提示 -->
    <Transition name="toast">
      <div v-if="showToast" class="toast">
        <div class="toast-content">
          <svg
            class="toast-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <span>{{ toastMessage }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup async>
import { onMounted, ref } from "vue";

// 控制卡片翻转状态
const flippedCards = ref({});

function toggleCard(index) {
  flippedCards.value[index] = !flippedCards.value[index];
}

// Toast提示状态
const showToast = ref(false);
const toastMessage = ref("");

// 显示Toast提示
function showToastMessage(message, duration = 2000) {
  toastMessage.value = message;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, duration);
}

// 复制到剪贴板功能
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(JSON.stringify(text))
    .then(() => {
      showToastMessage("已复制到剪贴板");
    })
    .catch((err) => {
      console.error("复制失败", err);
      showToastMessage("复制失败，请重试", 3000);
    });
}

// 获取名称首字母
function getInitials(name) {
  if (!name) return "";
  const words = name.split(/\s+/);
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// 基于名称生成固定的渐变色
function getGradient(name) {
  if (!name) return "linear-gradient(135deg, #42b883, #35495e)";

  // 从名称生成哈希值，确保同一名称始终得到相同结果
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 生成三个颜色用于渐变
  const color1 = `hsl(${Math.abs(hash) % 360}, 70%, 50%)`;
  const color2 = `hsl(${((Math.abs(hash) % 360) + 40) % 360}, 80%, 60%)`;
  const color3 = `hsl(${((Math.abs(hash) % 360) + 80) % 360}, 75%, 45%)`;

  // 返回渐变色
  return `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
}

function getAvatar(qq) {
  return `https://p.qlogo.cn/gh/${qq}/${qq}/640/`;
}

// 实验室数据
const labs = ref([]);
const loadLabs = async () => {
  try {
    const labModules = import.meta.glob("../../../src/data/labs/*.json");
    const labData = [];
    for (const path in labModules) {
      const module = await labModules[path]();
      labData.push(module.default);
    }
    labs.value = labData.sort((a, b) => {
      const priorityNames = ["Epoch 开发实验室", "Syclover-技术小组"];
      const aIndex = priorityNames.indexOf(a.name);
      const bIndex = priorityNames.indexOf(b.name);
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error("加载资源失败", error);
  }
};
onMounted(loadLabs);
</script>

<style scoped>
.lab-list {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.lab-list-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--vp-c-text-1);
}

.labs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.lab-item {
  width: 100%;
  perspective: 1000px;
}

.card {
  position: relative;
  width: 100%;
  height: 380px;
  cursor: pointer;
  perspective: 1000px;
}

.card-face,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  backface-visibility: hidden;
  background: var(--vp-c-bg);
}

.dark .card-face,
.dark .card-back {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* 卡片正面样式 */
.card-face {
  background: var(--vp-c-bg);
  position: absolute;
  z-index: 2;
}

.card.is-flipped .card-face {
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}

.card-decorator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 130px;
  z-index: 1;
}

.face-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.avatar-container {
  position: relative;
  margin-top: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--vp-c-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background-color: var(--vp-c-bg);
  position: relative;
  z-index: 2;
}

.dark .avatar {
  border-color: var(--vp-c-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.avatar-ring {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: pulse 2s infinite;
}

.dark .avatar-ring {
  border-color: rgba(255, 255, 255, 0.3);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }

  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.lab-info {
  margin-top: 20px;
  text-align: center;
}

.lab-name {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: var(--vp-c-text-1);
}

.lab-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  max-height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.tech-badge {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .tech-badge {
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.tech-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.dark .tech-badge:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* 卡片背面样式 */
.card-back {
  background: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}

.card.is-flipped .card-back {
  opacity: 1;
  visibility: visible;
  z-index: 2;
}

.back-content {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.back-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.lab-initials {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
  margin-right: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.dark .lab-initials {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.lab-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  flex: 1;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.dark .info-item {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.info-item:hover {
  background: var(--vp-c-bg-mute);
  transform: translateX(5px);
}

.info-icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.info-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.college-icon {
  background: linear-gradient(135deg, #4776e6, #8e54e9);
}

.location-icon {
  background: linear-gradient(135deg, #11998e, #38ef7d);
}

.qq-icon {
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
}

/* 链接图标颜色 */
.link-icon {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

/* 链接文字样式 */
.info-value a {
  color: var(--vp-c-brand);
  text-decoration: none;
  word-break: break-all;
}

.info-value a:hover {
  text-decoration: underline;
}

.info-text {
  flex: 1;
}

.info-label {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin-bottom: 2px;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.copy-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.copy-indicator {
  width: 18px;
  height: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.copy-value:hover .copy-indicator {
  opacity: 0.7;
}

.copy-indicator svg {
  width: 100%;
  height: 100%;
  fill: var(--vp-c-text-3);
}

/* 装饰元素 */
.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  background: var(--vp-c-text-1);
}

.dark .circle {
  opacity: 0.1;
}

.circle-1 {
  width: 150px;
  height: 150px;
  top: -75px;
  right: -75px;
}

.circle-2 {
  width: 100px;
  height: 100px;
  bottom: 20px;
  left: -50px;
}

.circle-3 {
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 30px;
}

/* Toast提示样式 */
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 200px;
  max-width: 90%;
  border: 1px solid var(--vp-c-divider);
}

.dark .toast {
  background: var(--vp-c-bg-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.toast-content {
  display: flex;
  align-items: center;
  padding: 12px 16px;
}

.toast-icon {
  width: 20px;
  height: 20px;
  fill: var(--vp-c-brand);
  margin-right: 10px;
  flex-shrink: 0;
}

/* Toast 动画 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

@media (max-width: 768px) {
  .labs {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .info-item {
    padding: 8px 12px;
  }

  .info-icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
}
</style>
