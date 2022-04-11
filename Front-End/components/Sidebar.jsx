import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "../styles/components/Sidebar.module.scss";
import {IoIdCardOutline, IoStorefrontOutline, IoHomeOutline} from 'react-icons/io5';
import {MdOutlineQuiz} from 'react-icons/md';
import {RiCoinsLine} from 'react-icons/ri';



export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Link href='/' passHref>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <IoHomeOutline className={styles.icon}/>
              <span>
                Home
              </span>
            </li>
          </Link>
          <Link href='/freshers' passHref>
            <li className={router.pathname == "/freshers" ? styles.active: ""}>
              <IoIdCardOutline className={styles.icon}/>
              <span>
                freshers
              </span>
            </li>
          </Link>
          <Link href='/marketplace' passHref>
            <li className={router.pathname == "/marketplace" ? styles.active: ""}>
              <IoStorefrontOutline className={styles.icon}/>
              <span>
                Marketplace
              </span>
            </li>
          </Link>
          <Link href='/play' passHref>
            <li className={router.pathname == "/play" ? styles.active: ""}>
              <MdOutlineQuiz className={styles.icon}/>
              <span>
                Take a Test
              </span>
            </li>
          </Link>
          <Link href='/token' passHref>
            <li className={router.pathname == "/token" ? styles.active: ""}>
              <RiCoinsLine className={styles.icon}/>
              <span>
                Token
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  )
}