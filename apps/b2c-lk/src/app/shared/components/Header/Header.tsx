/* eslint-disable no-restricted-globals */
import React, {useEffect} from 'react'
import styles from './Header.module.scss';
import routes from '../../../routes'
import {Button} from 'antd';
import {Logo} from "../../Icons/NavSvg/NavSvg";

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContent}>
                <div className={styles.Flex}>
                    <Logo/>

                    <div className={styles.NavRow}>
                        <div className={styles.Link}>
                            Портал
                        </div>
                        <div className={styles.ActiveLink}>
                            Кабинет организации
                        </div>
                        <div className={styles.Link}>
                            Личный кабинет
                        </div>
                    </div>
                </div>
                <div>
                    Войти
                </div>
            </div>
        </div>
    )
}

export default Header
