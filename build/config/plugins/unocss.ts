import Unocss from "unocss/vite";

import { presetUno, presetAttributify, presetIcons } from "unocss";

export function configUnocss() {
  return Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
}
