const images = import.meta.glob('@/assets/Anomaly/**/*.{jpg,webp}', { eager: true });

// ベースパスを削除したマッピングを生成
const BASE_PATH = '/src/assets/Anomaly';
const formattedImages: Record<string, string> = {};

for (const path in images) {
  const key = path.replace(BASE_PATH, ''); // 共通部分を削除
  formattedImages[key] = (images[path] as any).default;
}

export default formattedImages;
