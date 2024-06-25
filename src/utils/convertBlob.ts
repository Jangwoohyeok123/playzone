import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

type Action = {
  file: File;
  to: string;
  fileName: string;
  fileType: string;
};

function getFileExtension(fileName: string) {
  const regex = /(?:\.([^.]+))?$/;
  const match = regex.exec(fileName);

  if (match && match[1]) return match[1];
  return '';
}

function removeFileExtension(fileName: string) {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex !== -1) {
    return fileName.slice(0, lastDotIndex);
  }
  return fileName;
}

async function convertBlob(ffmpeg: FFmpeg, action: Action) {
  const { file, to, fileName, fileType } = action;
  const input = getFileExtension(fileName);
  const output = removeFileExtension(fileName) + '.' + to;
  ffmpeg.writeFile(input, await fetchFile(file));

  const ffmpegCommand = ['-i', input, output];

  // 실행
  await ffmpeg.exec(ffmpegCommand);

  const data = await ffmpeg.readFile(output);
  const blob = new Blob([data], { type: fileType.split('/')[0] });
  const url = URL.createObjectURL(blob);
  
  return { url, output };
}
