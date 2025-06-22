<template>
  <div class="nlp-content">
    <div class="nlp-header">
      <h1>自然语言处理(NLP)学习专区</h1>
      <p class="subtitle">从入门到精通的NLP学习之路</p>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
        }"
      >
        <img
          v-for="qq in qqID"
          :key="qq"
          :alt="`QQ-${qq}`"
          :src="`https://q.qlogo.cn/g?b=qq&nk=${qq}&s=100`"
          :style="{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
          }"
        />
      </div>
    </div>

    <div class="content-grid">
      <!-- 基础理论部分 -->
      <div class="content-section">
        <h2>基础理论</h2>
        <div class="card-container">
          <div class="content-card" v-for="item in basics" :key="item.title">
            <div class="card-icon">
              <component :is="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link" target="_blank" class="learn-more">
              开始学习
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 核心技术部分 -->
      <div class="content-section">
        <h2>核心技术</h2>
        <div class="card-container">
          <div class="content-card" v-for="item in coreTech" :key="item.title">
            <div class="card-icon">
              <component :is="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link" target="_blank" class="learn-more">
              深入了解
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 实践应用部分 -->
      <div class="content-section">
        <h2>实践应用</h2>
        <div class="card-container">
          <div
            class="content-card"
            v-for="item in applications"
            :key="item.title"
          >
            <div class="card-icon">
              <component :is="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link" target="_blank" class="learn-more">
              查看案例
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 前沿研究部分 -->
      <div class="content-section">
        <h2>前沿研究</h2>
        <div class="card-container">
          <div class="content-card" v-for="item in research" :key="item.title">
            <div class="card-icon">
              <component :is="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link" target="_blank" class="learn-more">
              探索前沿
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const qqID = [
  "3265908977",
  "1946480988",
  "3165729094",
  "2456714328",
  "2569384407",
  "1692250431",
  "1505367637",
  "2301295517",
];
const basics = ref([
  {
    title: "什么是自然语言处理",
    description: "了解NLP的基本概念、发展历史和重要性",
    link: "https://www.deeplearning.ai/resources/natural-language-processing/",
    icon: "BookIcon",
  },
  {
    title: "语言学基础",
    description: "掌握语言学理论、语法体系和语义分析",
    link: "https://web.stanford.edu/~jurafsky/slp3/",
    icon: "LanguageIcon",
  },
  {
    title: "数学基础",
    description: "概率统计、线性代数、信息论等数学知识",
    link: "https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/index.html",
    icon: "MathIcon",
  },
]);

const coreTech = ref([
  {
    title: "文本预处理",
    description: "分词、词性标注、命名实体识别等基础任务",
    link: "https://spacy.io/usage/linguistic-features",
    icon: "ProcessIcon",
  },
  {
    title: "词向量与语言模型",
    description: "Word2Vec、BERT、GPT等模型原理与应用",
    link: "https://huggingface.co/learn/nlp-course/chapter1/1",
    icon: "ModelIcon",
  },
  {
    title: "深度学习架构",
    description: "RNN、LSTM、Transformer等网络结构",
    link: "https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-recurrent-neural-networks",
    icon: "NetworkIcon",
  },
]);

const applications = ref([
  {
    title: "机器翻译",
    description: "神经网络机器翻译原理与实践",
    link: "https://github.com/OpenNMT/OpenNMT-py",
    icon: "TranslateIcon",
  },
  {
    title: "智能问答",
    description: "问答系统的设计与实现",
    link: "https://github.com/facebookresearch/DrQA",
    icon: "ChatIcon",
  },
  {
    title: "文本生成",
    description: "自然语言生成技术与应用",
    link: "https://platform.openai.com/docs/guides/text-generation",
    icon: "EditIcon",
  },
]);

const research = ref([
  {
    title: "大规模语言模型",
    description: "探索GPT、PaLM等大模型的前沿进展",
    link: "https://arxiv.org/abs/2303.18223",
    icon: "BrainIcon",
  },
  {
    title: "多模态学习",
    description: "文本与图像、语音等多模态融合",
    link: "https://github.com/pliang279/awesome-multimodal-ml",
    icon: "ImageIcon",
  },
  {
    title: "低资源NLP",
    description: "小样本学习、迁移学习等新方向",
    link: "https://github.com/thunlp/Few-Shot-Papers",
    icon: "ResourceIcon",
  },
]);
</script>

<style scoped>
.nlp-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.nlp-header {
  text-align: center;
  margin-bottom: 60px;
}

.nlp-header h1 {
  font-size: 2.5rem;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.content-section {
  margin-bottom: 60px;
}

.content-section h2 {
  font-size: 1.8rem;
  color: var(--vp-c-text-1);
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--vp-c-divider);
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.content-card {
  background: linear-gradient(
    145deg,
    var(--vp-c-bg-soft) 0%,
    var(--vp-c-bg-mute) 100%
  );
  border-radius: 16px;
  padding: 28px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--vp-c-divider);
  position: relative;
  overflow: hidden;
}

.content-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--vp-c-brand) 0%,
    var(--vp-c-brand-dark) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.content-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-light);
}

.content-card:hover::before {
  opacity: 1;
}

.dark .content-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 20px;
  color: var(--vp-c-brand);
  padding: 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.content-card:hover .card-icon {
  transform: scale(1.1);
}

.content-card h3 {
  font-size: 1.4rem;
  color: var(--vp-c-text-1);
  margin-bottom: 14px;
  font-weight: 600;
}

.content-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
  line-height: 1.7;
  font-size: 0.95rem;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.learn-more:hover {
  color: var(--vp-c-brand-dark);
  border-bottom-color: var(--vp-c-brand-dark);
}

.learn-more svg {
  width: 18px;
  height: 18px;
  margin-left: 8px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.learn-more:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .nlp-header h1 {
    font-size: 2rem;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }

  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
