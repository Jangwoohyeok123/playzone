import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

/**
 * @description Blob이란 파일형식이 사라진 이진코드집합을 말한다.
 * @description FFmpeg 객체를 로드합니다.
 * @returns ffmpeg객체
 */
async function loadFFmpeg() {
  const ffmpeg = new FFmpeg();
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
  });

  return ffmpeg;
}

export default loadFFmpeg;
