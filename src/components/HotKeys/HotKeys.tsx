'use client'
import { useHotkeys } from '@mantine/hooks';

export default function Hotkeys() {
  useHotkeys([
    ['ctrl+B', () => console.log('BACK')],
    // ['ctrl+K', () => console.log('Trigger search')],
    // ['alt+mod+shift+X', () => console.log('Rick roll')],
  ]);

  return null;
}