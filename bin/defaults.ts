import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 780,
  width: 1200,
  fullscreen: false,
  resizable: true,
  hideTitleBar: false,
  alwaysOnTop: false,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: true,
  multiArch: false,
  targets: 'deb',
  useLocalFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: ["./src-tauri/style/uni-im.css"],
  safeDomain: ["im.dcloud.net.cn"],
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://im.dcloud.net.cn',
  name: 'uniim',
  safeDomain: ['im.dcloud.net.cn'],
  hideTitleBar: true,
  showSystemTray: true,
  inject: ["./src-tauri/style/uni-im.css"],
  systemTrayIcon: './src-tauri/png/uniim_32.ico'
  // systemTrayIcon: '../src-tauri/png/weread_32.ico'
};
