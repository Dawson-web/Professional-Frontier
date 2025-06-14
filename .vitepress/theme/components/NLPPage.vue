<template>
  <div class="nlp-page">
    <!-- 页面标题 -->
    <!-- <div class="page-header">
      <h1>自然语言处理(NLP)学习专区</h1>
      <p class="subtitle">从入门到精通的NLP学习之路</p>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '10px',
        }"
      >
        <img
          v-for="qq in qqID"
          :key="qq"
          :alt="`QQ-${qq}`"
          :src="`https://q.qlogo.cn/g?b=qq&nk=${qq}&s=100`"
          :style="{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
          }"
        />
      </div>
    </div> -->

    <!-- 学习内容展示 -->
    <div class="section">
      <NLPContent />
    </div>
  </div>
</template>

<script setup>
import NLPContent from "./NLPContent.vue";
const qqID = [
  "3265908977",
  "1946480988",
  "3165729094",
  "2456714328",
  "3096567831",
  "1692250431",
  "1505367637",
  "2301295517",
];
</script>

<style scoped>
.nlp-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
  background: linear-gradient(
    135deg,
    var(--vp-c-brand) 0%,
    var(--vp-c-brand-dark) 100%
  );
  border-radius: 16px;
  color: white;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.section {
  margin-bottom: 80px;
}

.section-title {
  font-size: 2rem;
  color: var(--vp-c-text-1);
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--vp-c-divider);
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>
