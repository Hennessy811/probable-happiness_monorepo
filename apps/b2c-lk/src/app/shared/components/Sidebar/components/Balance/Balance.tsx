import React, {useState} from 'react'
import styles from './Balance.module.scss'
import Button from "../../../Button";
import ButtonPlus from "../../../../Icons/ButtonPlus";

const Balance = () => {
    const [activeBalance, setActiveBalance] = useState(0);

    return (
        <div className={styles.Balance}>
            <p className={styles.BalanceTitle}>
                Баланс
            </p>
            <p className={styles.BalanceAmount}>
                {activeBalance}
                <b className={styles.RubleSign}>
                    ₽
                </b>
            </p>
            <Button type="primary" className={styles.Button}
                    onClick={(): void => setActiveBalance(activeBalance + 100)}>
                <ButtonPlus size={16} fill="white" opacity={1} className={styles.ButtonIcon}/>
                <span>
                        Пополнить
                    </span>
            </Button>
        </div>
    )
};

export default Balance