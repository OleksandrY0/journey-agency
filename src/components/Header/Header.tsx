"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

import { useState } from "react";

export const Header = () => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <h1 className={styles.header__logo__text}>
            JOURNEY <br />
            AGENCY
          </h1>
        </Link>
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>
            <Link href="#about">Про мене</Link>
          </li>
          <li
            className={styles.header__nav__list__item}
            onMouseEnter={() => setIsOpenServices(true)}
            onMouseLeave={() => setIsOpenServices(false)}
          >
            <span className={styles.header__nav__list__item__link}>
              Послуги
            </span>
            <Image
              width={14}
              height={14}
              src="/Dropdown.svg"
              alt=""
              className={`${styles.header__dropdown} ${isOpenServices ? styles.active : ""}`}
            />

            {isOpenServices && (
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link href="#">Консьєрж сервіс</Link>
                </li>
                <li>
                  <Link href="#">Візовий супровід</Link>
                </li>
                <li>
                  <Link href="#">Консультації</Link>
                </li>
                <li>
                  <Link href="#">B2B</Link>
                </li>
                <li>
                  <Link href="#">Гайди</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className={styles.header__nav__right}>
          <Link
            href="#contacts"
            className={styles.header__nav__right__contacts}
          >
            Контакти
          </Link>

          <div
            className={styles.header__nav__right__language}
            onMouseEnter={() => setIsOpenLanguages(true)}
            onMouseLeave={() => setIsOpenLanguages(false)}
          >
            <div className="header__nav__right__language__wrapper">
              <button className={styles.header__nav__right__language__btn}>
                UA
              </button>
              <Image
                width={14}
                height={14}
                src="/Dropdown.svg"
                alt=""
                className={styles.header__dropdown}
              />
            </div>
            {isOpenLanguages && (
              <ul className={styles.dropdown_languages}>
                <li>
                  <button>UA</button>
                </li>
                <li>
                  <button>EN</button>
                </li>
                <li>
                  <button>RU</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <div className={styles.header__burger}>
        <Image
          width={24}
          height={24}
          src="/Menu.svg"
          alt="menu-button"
          className={styles.header__burger__img}
        />
      </div>
    </header>
  );
};
