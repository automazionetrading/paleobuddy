import Link from 'next/link';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

interface IThemeSwitcherProps {
  themes: string[];
}

export const ThemeSwitcherProps: IThemeSwitcherProps = {
  themes: [
    'light',
    'dark',
    'corporate',
    'retro',
    'valentine',
    'lofi',
    'pastel',
    'fantasy',
    'black',
    'luxury',
    'dracula',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter'
  ]
};
export default function ThemeSwitcher(): JSX.Element {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themes = ThemeSwitcherProps.themes;
  return (
    <>
      <select
        className="select select-secondary w-full max-w-xs"
        data-choose-theme
      >
        {themes.map((theme: string, key: number) => {
          return (
            <option key={key} value={theme}>
              {theme}
            </option>
          );
        })}
      </select>
    </>
  );
}
